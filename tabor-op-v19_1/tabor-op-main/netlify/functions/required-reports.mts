import type { Config, Context } from "@netlify/functions";
import { asc, eq } from "drizzle-orm";
import { db } from "../../db/index.js";
import { requiredReports } from "../../db/schema.js";

/**
 * كتالوج التقارير المطلوبة
 *
 * GET    /api/required-reports        → قراءة الكتالوج (يُزرع تلقائياً من الافتراضيات عند أول تشغيل)
 * POST   /api/required-reports        → إضافة تقرير جديد   (مدير النظام)
 * PUT    /api/required-reports/:id    → تعديل تقرير قائم    (مدير النظام)
 * DELETE /api/required-reports/:id    → حذف تقرير           (مدير النظام)
 *
 * ملاحظة: تسجيل الدخول في التطبيق يتم على العميل، لذا تُحمى عمليات الكتابة
 * بترويسة الدور `x-tabor-role: ops_manager` بما يتوافق مع نموذج الصلاحيات الحالي.
 */

const ROLES = ["ops_manager", "area_manager", "branch_manager", "cashier"];
const FREQUENCIES = ["weekly", "monthly"];

/** يوم السبت = 6 (الأحد = 0) */
const SATURDAY = 6;
/** يوم استحقاق التقارير الشهرية */
const MONTHLY_DAY = 5;
/** استثناء: جدول الدوام يوم 20 من كل شهر */
const SCHEDULE_DAY = 20;

type SeedRow = {
  role: string;
  frequency: string;
  title: string;
  icon: string;
  dueWeekday: number;
  dueDay: number;
  notes: string;
  sortOrder: number;
};

function seedRows(): SeedRow[] {
  const defaults: Array<[string, string, string, string, number?]> = [
    // [role, frequency, title, icon, dueDayOverride?]
    ["branch_manager", "weekly", "الهدر", "🗑️"],
    ["branch_manager", "weekly", "درجات الحرارة (صورة يومية)", "🌡️"],
    ["branch_manager", "monthly", "المبيعات اليومية", "💰"],
    ["branch_manager", "monthly", "مبيعات الأصناف", "📦"],

    ["area_manager", "weekly", "تقرير التعويضات", "💸"],
    ["area_manager", "weekly", "تقرير الزيارات وتقييم الفروع", "📍"],
    ["area_manager", "weekly", "شيت الطلبات الملغية أو المعدّلة", "❌"],
    ["area_manager", "monthly", "المبيعات لكامل المنطقة مع تحليل", "📊"],
    ["area_manager", "monthly", "الأصناف لكامل المنطقة مع تحليل", "📦"],
    ["area_manager", "monthly", "تقييم المشرف", "👔"],
    ["area_manager", "monthly", "تقييم الكاشير", "💳"],
    ["area_manager", "monthly", "التحديات والمشاكل والاقتراحات", "💡"],
    ["area_manager", "monthly", "إنتاجية العمالة", "👷"],
    ["area_manager", "monthly", "تقرير التعويضات (فروع + منطقة)", "💸"],
    ["area_manager", "monthly", "تقرير الزيارات وتقييم الفروع", "📍"],
    ["area_manager", "monthly", "جدول الدوام", "📅", SCHEDULE_DAY],
    ["area_manager", "monthly", "شيت الطلبات الملغية", "❌"],

    ["ops_manager", "weekly", "تقرير الجوجل ماب", "⭐"],
    ["ops_manager", "weekly", "تقرير المبيعات", "💰"],
    ["ops_manager", "weekly", "تقرير تطبيق طابور", "📱"],
    ["ops_manager", "weekly", "متابعة النظافة والجودة", "🧹"],
    ["ops_manager", "weekly", "تقرير تطبيقات كيتا وهنقر", "🛵"],
    ["ops_manager", "weekly", "تقرير اليوزر", "👥"],
    ["ops_manager", "monthly", "تقرير الجوجل ماب", "⭐"],
    ["ops_manager", "monthly", "تقرير المبيعات الشامل", "💰"],
    ["ops_manager", "monthly", "تقرير الأصناف", "📦"],
    ["ops_manager", "monthly", "تقرير تطبيق طابور", "📱"],
    ["ops_manager", "monthly", "متابعة النظافة والجودة", "🧹"],
    ["ops_manager", "monthly", "تقرير تطبيقات كيتا وهنقر", "🛵"],
    ["ops_manager", "monthly", "تقرير اليوزر", "👥"],
  ];

  return defaults.map(([role, frequency, title, icon, dueDayOverride], i) => ({
    role,
    frequency,
    title,
    icon,
    dueWeekday: SATURDAY,
    dueDay: dueDayOverride ?? MONTHLY_DAY,
    notes: "",
    sortOrder: i,
  }));
}

function clampInt(value: unknown, min: number, max: number, fallback: number) {
  const n = Number(value);
  if (!Number.isFinite(n)) return fallback;
  return Math.min(max, Math.max(min, Math.trunc(n)));
}

function isAdmin(req: Request) {
  return req.headers.get("x-tabor-role") === "ops_manager";
}

function parseBody(body: Record<string, unknown>) {
  const title = String(body.title ?? "").trim();
  const role = ROLES.includes(String(body.role)) ? String(body.role) : "";
  const frequency = FREQUENCIES.includes(String(body.frequency)) ? String(body.frequency) : "";

  if (!title) return { error: "عنوان التقرير مطلوب" as const };
  if (title.length > 160) return { error: "عنوان التقرير طويل جداً" as const };
  if (!role) return { error: "المنصب غير صحيح" as const };
  if (!frequency) return { error: "التكرار غير صحيح" as const };

  return {
    values: {
      role,
      frequency,
      title,
      icon: String(body.icon ?? "📄").slice(0, 8) || "📄",
      dueWeekday: clampInt(body.dueWeekday, 0, 6, SATURDAY),
      dueDay: clampInt(body.dueDay, 1, 31, MONTHLY_DAY),
      notes: String(body.notes ?? "").slice(0, 500),
      sortOrder: clampInt(body.sortOrder, 0, 9999, 0),
      active: body.active === undefined ? true : Boolean(body.active),
    },
  };
}

export default async (req: Request, context: Context) => {
  const id = Number(context.params.id ?? 0);

  try {
    if (req.method === "GET") {
      let rows = await db.select().from(requiredReports).orderBy(asc(requiredReports.sortOrder), asc(requiredReports.id));

      if (rows.length === 0) {
        await db.insert(requiredReports).values(seedRows());
        rows = await db.select().from(requiredReports).orderBy(asc(requiredReports.sortOrder), asc(requiredReports.id));
      }

      return Response.json(
        { reports: rows },
        { headers: { "cache-control": "no-store" } },
      );
    }

    if (!isAdmin(req)) {
      return Response.json({ error: "هذه العملية متاحة لمدير النظام فقط" }, { status: 403 });
    }

    if (req.method === "POST") {
      const parsed = parseBody((await req.json()) as Record<string, unknown>);
      if ("error" in parsed) return Response.json({ error: parsed.error }, { status: 400 });

      const [created] = await db.insert(requiredReports).values(parsed.values).returning();
      return Response.json({ report: created }, { status: 201 });
    }

    if (req.method === "PUT") {
      if (!id) return Response.json({ error: "معرّف التقرير مطلوب" }, { status: 400 });

      const parsed = parseBody((await req.json()) as Record<string, unknown>);
      if ("error" in parsed) return Response.json({ error: parsed.error }, { status: 400 });

      const [updated] = await db
        .update(requiredReports)
        .set({ ...parsed.values, updatedAt: new Date() })
        .where(eq(requiredReports.id, id))
        .returning();

      if (!updated) return Response.json({ error: "التقرير غير موجود" }, { status: 404 });
      return Response.json({ report: updated });
    }

    if (req.method === "DELETE") {
      if (!id) return Response.json({ error: "معرّف التقرير مطلوب" }, { status: 400 });

      const [deleted] = await db.delete(requiredReports).where(eq(requiredReports.id, id)).returning();
      if (!deleted) return Response.json({ error: "التقرير غير موجود" }, { status: 404 });
      return Response.json({ report: deleted });
    }

    return Response.json({ error: "طريقة غير مدعومة" }, { status: 405 });
  } catch (error) {
    console.error("required-reports failed", error);
    return Response.json({ error: "تعذّر تنفيذ الطلب" }, { status: 500 });
  }
};

export const config: Config = {
  path: ["/api/required-reports", "/api/required-reports/:id"],
  method: ["GET", "POST", "PUT", "DELETE"],
};
