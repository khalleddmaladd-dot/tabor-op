import type { Config, Context } from "@netlify/functions";
import { desc, eq } from "drizzle-orm";
import { db } from "../../db/index.js";
import { urgentTasks } from "../../db/schema.js";
import { ROLE_LEVEL, ROLES, canAssign, identityOf, isAdmin, scopeFor } from "../../lib/hierarchy.js";
import type { Identity } from "../../lib/hierarchy.js";

/**
 * المهام المستعجلة — موزَّعة حسب التسلسل الوظيفي
 *
 * GET    /api/urgent-tasks        → المهام الظاهرة لهوية المستخدم (المكلَّف بها + مهام مرؤوسيه)
 * POST   /api/urgent-tasks        → إنشاء مهمة لمنصب أدنى داخل النطاق
 * PUT    /api/urgent-tasks/:id    → تحديث الحالة أو تعديل المهمة
 * DELETE /api/urgent-tasks/:id    → حذف المهمة (المُنشئ أو مدير النظام)
 *
 * الهوية تصل عبر الترويسات: x-tabor-role / x-tabor-region / x-tabor-branch / x-tabor-user
 */

const PRIORITIES = ["عالي", "متوسط", "منخفض"];
const STATUSES = ["جديد", "قيد التنفيذ", "مكتمل"];

type Row = typeof urgentTasks.$inferSelect;

/** هل المهمة تخصّ نطاق المستخدم (منطقته/فرعه)؟ */
function inScope(row: Row, identity: Identity) {
  const regionOk = !row.region || !identity.region || row.region === identity.region;
  const branchOk = !row.branch || !identity.branch || row.branch === identity.branch;
  return regionOk && branchOk;
}

/** المهمة مُسندة لهذا المستخدم شخصياً (منصبه + نطاقه) */
function assignedTo(row: Row, identity: Identity) {
  return row.targetRole === identity.role && inScope(row, identity);
}

/** المهمة مُسندة لأحد مرؤوسيه — يراها للمتابعة ويملك صلاحية إدارتها */
function supervises(row: Row, identity: Identity) {
  if (isAdmin(identity)) return true;
  const mine = ROLE_LEVEL[identity.role];
  const target = ROLE_LEVEL[row.targetRole];
  if (mine === undefined || target === undefined) return false;
  return target > mine && inScope(row, identity);
}

function visible(row: Row, identity: Identity) {
  return assignedTo(row, identity) || supervises(row, identity);
}

export default async (req: Request, context: Context) => {
  const id = Number(context.params.id ?? 0);
  const identity = identityOf(req);

  if (!identity.role) {
    return Response.json({ error: "هوية المستخدم غير معروفة" }, { status: 401 });
  }

  try {
    if (req.method === "GET") {
      const rows = await db.select().from(urgentTasks).orderBy(desc(urgentTasks.id));
      const mine = rows.filter((row) => visible(row, identity));

      return Response.json(
        {
          tasks: mine.map((row) => ({
            ...row,
            assignedToMe: assignedTo(row, identity),
            canManage: supervises(row, identity),
          })),
        },
        { headers: { "cache-control": "no-store" } },
      );
    }

    if (req.method === "POST") {
      const body = (await req.json()) as Record<string, unknown>;
      const title = String(body.title ?? "").trim();
      const targetRole = ROLES.includes(String(body.targetRole)) ? String(body.targetRole) : "";

      if (!title) return Response.json({ error: "عنوان المهمة مطلوب" }, { status: 400 });
      if (title.length > 160) return Response.json({ error: "عنوان المهمة طويل جداً" }, { status: 400 });
      if (!targetRole) return Response.json({ error: "المنصب المُكلَّف غير صحيح" }, { status: 400 });
      if (!canAssign(identity.role, targetRole)) {
        return Response.json(
          { error: "التسلسل الوظيفي يسمح بإسناد المهام للمناصب الأدنى فقط" },
          { status: 403 },
        );
      }

      const scope = scopeFor(identity, String(body.region ?? ""), String(body.branch ?? ""));
      if ("error" in scope) return Response.json({ error: scope.error }, { status: 403 });

      const [created] = await db
        .insert(urgentTasks)
        .values({
          title,
          details: String(body.details ?? "").slice(0, 1000),
          priority: PRIORITIES.includes(String(body.priority)) ? String(body.priority) : "متوسط",
          status: "جديد",
          targetRole,
          region: scope.region ?? "",
          branch: scope.branch ?? "",
          dueDate: String(body.dueDate ?? "").slice(0, 10),
          createdByRole: identity.role,
          createdByName: identity.name,
        })
        .returning();

      return Response.json({ task: created }, { status: 201 });
    }

    if (req.method === "PUT") {
      if (!id) return Response.json({ error: "معرّف المهمة مطلوب" }, { status: 400 });

      const [row] = await db.select().from(urgentTasks).where(eq(urgentTasks.id, id));
      if (!row) return Response.json({ error: "المهمة غير موجودة" }, { status: 404 });

      const body = (await req.json()) as Record<string, unknown>;
      const wantsStatusOnly = body.title === undefined;

      if (wantsStatusOnly) {
        const status = STATUSES.includes(String(body.status)) ? String(body.status) : "";
        if (!status) return Response.json({ error: "الحالة غير صحيحة" }, { status: 400 });
        if (!assignedTo(row, identity) && !supervises(row, identity)) {
          return Response.json({ error: "لا تملك صلاحية تحديث هذه المهمة" }, { status: 403 });
        }

        const [updated] = await db
          .update(urgentTasks)
          .set({
            status,
            updatedByName: identity.name,
            completedAt: status === "مكتمل" ? new Date() : null,
            updatedAt: new Date(),
          })
          .where(eq(urgentTasks.id, id))
          .returning();

        return Response.json({ task: updated });
      }

      if (!supervises(row, identity)) {
        return Response.json({ error: "تعديل المهمة متاح لمن أنشأها أو لمن يعلوه" }, { status: 403 });
      }

      const title = String(body.title ?? "").trim();
      if (!title) return Response.json({ error: "عنوان المهمة مطلوب" }, { status: 400 });

      const targetRole = ROLES.includes(String(body.targetRole)) ? String(body.targetRole) : row.targetRole;
      if (!canAssign(identity.role, targetRole)) {
        return Response.json({ error: "التسلسل الوظيفي لا يسمح بهذا الإسناد" }, { status: 403 });
      }

      const scope = scopeFor(identity, String(body.region ?? row.region), String(body.branch ?? row.branch));
      if ("error" in scope) return Response.json({ error: scope.error }, { status: 403 });

      const [updated] = await db
        .update(urgentTasks)
        .set({
          title,
          details: String(body.details ?? "").slice(0, 1000),
          priority: PRIORITIES.includes(String(body.priority)) ? String(body.priority) : row.priority,
          targetRole,
          region: scope.region ?? "",
          branch: scope.branch ?? "",
          dueDate: String(body.dueDate ?? "").slice(0, 10),
          updatedByName: identity.name,
          updatedAt: new Date(),
        })
        .where(eq(urgentTasks.id, id))
        .returning();

      return Response.json({ task: updated });
    }

    if (req.method === "DELETE") {
      if (!id) return Response.json({ error: "معرّف المهمة مطلوب" }, { status: 400 });

      const [row] = await db.select().from(urgentTasks).where(eq(urgentTasks.id, id));
      if (!row) return Response.json({ error: "المهمة غير موجودة" }, { status: 404 });
      if (!supervises(row, identity)) {
        return Response.json({ error: "حذف المهمة متاح لمن أنشأها أو لمن يعلوه" }, { status: 403 });
      }

      const [deleted] = await db.delete(urgentTasks).where(eq(urgentTasks.id, id)).returning();
      return Response.json({ task: deleted });
    }

    return Response.json({ error: "طريقة غير مدعومة" }, { status: 405 });
  } catch (error) {
    console.error("urgent-tasks failed", error);
    return Response.json({ error: "تعذّر تنفيذ الطلب" }, { status: 500 });
  }
};

export const config: Config = {
  path: ["/api/urgent-tasks", "/api/urgent-tasks/:id"],
  method: ["GET", "POST", "PUT", "DELETE"],
};
