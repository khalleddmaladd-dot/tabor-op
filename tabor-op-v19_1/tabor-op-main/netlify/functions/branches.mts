import type { Config, Context } from "@netlify/functions";
import { asc, eq } from "drizzle-orm";
import { db } from "../../db/index.js";
import { branches } from "../../db/schema.js";
import { identityOf, isAdmin } from "../../lib/hierarchy.js";

/**
 * الفروع ومواقعها الجغرافية
 *
 * GET    /api/branches        → كل الفروع مع الإحداثيات (تُزرع تلقائياً عند أول تشغيل)
 * POST   /api/branches        → إضافة فرع — الموقع الجغرافي إلزامي (مدير النظام)
 * PUT    /api/branches/:id    → تعديل فرع/موقعه (مدير النظام)
 * DELETE /api/branches/:id    → حذف فرع (مدير النظام)
 *
 * الموقع الجغرافي هو ما يربط الفرع بجداول الدوام: تسجيل الحضور يتحقق من وجود
 * الموظف داخل نطاق (radius) الفرع قبل اعتماد البصمة، لذلك لا يُقبل فرع بلا إحداثيات.
 */

const MIN_RADIUS = 50;
const MAX_RADIUS = 5000;
const DEFAULT_RADIUS = 150;

const SEEDS = [
  { branchId: "y1", region: "yanbu", name: "ينبع البلد", supervisor: "HASBOO", lat: 24.0889, lng: 38.0636 },
  { branchId: "y2", region: "yanbu", name: "ينبع الهيئة", supervisor: "IBRAHIM", lat: 24.0753, lng: 38.0517 },
  { branchId: "j1", region: "jeddah", name: "النهضة", supervisor: "NADER", lat: 21.54, lng: 39.19 },
  { branchId: "j2", region: "jeddah", name: "السنابل", supervisor: "AHMAD", lat: 21.4858, lng: 39.1923 },
  { branchId: "j3", region: "jeddah", name: "أبحر", supervisor: "MAHMOUD", lat: 21.6207, lng: 39.1088 },
  { branchId: "j4", region: "jeddah", name: "الروضة", supervisor: "AHMAD", lat: 21.5169, lng: 39.2183 },
  { branchId: "r1", region: "riyadh", name: "العارض", supervisor: "ABD EL WAHED", lat: 24.78, lng: 46.73 },
  { branchId: "r2", region: "riyadh", name: "المصيف", supervisor: "AHMAD", lat: 24.7136, lng: 46.6753 },
  { branchId: "r3", region: "riyadh", name: "اليرموك", supervisor: "EHAB", lat: 24.81, lng: 46.77 },
  { branchId: "r4", region: "riyadh", name: "الفلاح", supervisor: "MOHAMMAD EMAD", lat: 24.75, lng: 46.7 },
];

function seedRows() {
  return SEEDS.map((row) => ({ ...row, radius: 1000, active: true }));
}

function coord(value: unknown, max: number) {
  const n = Number(value);
  if (!Number.isFinite(n) || Math.abs(n) > max || n === 0) return null;
  return Math.round(n * 1e6) / 1e6;
}

function parseBody(body: Record<string, unknown>) {
  const name = String(body.name ?? "").trim();
  const region = String(body.region ?? "").trim();
  const lat = coord(body.lat, 90);
  const lng = coord(body.lng, 180);

  if (!name) return { error: "اسم الفرع مطلوب" as const };
  if (name.length > 120) return { error: "اسم الفرع طويل جداً" as const };
  if (!region) return { error: "المنطقة مطلوبة" as const };
  if (lat === null || lng === null) {
    return { error: "الموقع الجغرافي إلزامي — أدخل خط العرض وخط الطول أو استخدم موقعك الحالي" as const };
  }

  const radiusNum = Number(body.radius);
  const radius = Number.isFinite(radiusNum)
    ? Math.min(MAX_RADIUS, Math.max(MIN_RADIUS, Math.trunc(radiusNum)))
    : DEFAULT_RADIUS;

  const branchId = String(body.branchId ?? "").trim().slice(0, 24);

  return {
    values: {
      branchId,
      region,
      name,
      supervisor: String(body.supervisor ?? "").trim().slice(0, 120),
      lat,
      lng,
      radius,
      active: body.active === undefined ? true : Boolean(body.active),
    },
  };
}

/** معرّف فرع قصير مشتق من المنطقة: j5 / r6 ... */
function nextBranchId(region: string, taken: Set<string>) {
  const prefix = (region.trim()[0] || "b").toLowerCase();
  for (let i = 1; i < 500; i++) {
    const candidate = `${prefix}${i}`;
    if (!taken.has(candidate)) return candidate;
  }
  return `${prefix}${Date.now().toString(36).slice(-4)}`;
}

export default async (req: Request, context: Context) => {
  const id = Number(context.params.id ?? 0);
  const identity = identityOf(req);

  try {
    if (req.method === "GET") {
      let rows = await db.select().from(branches).orderBy(asc(branches.region), asc(branches.id));

      if (rows.length === 0) {
        await db.insert(branches).values(seedRows());
        rows = await db.select().from(branches).orderBy(asc(branches.region), asc(branches.id));
      }

      return Response.json({ branches: rows }, { headers: { "cache-control": "no-store" } });
    }

    if (!isAdmin(identity)) {
      return Response.json({ error: "إدارة الفروع متاحة لمدير النظام فقط" }, { status: 403 });
    }

    if (req.method === "POST") {
      const parsed = parseBody((await req.json()) as Record<string, unknown>);
      if ("error" in parsed) return Response.json({ error: parsed.error }, { status: 400 });

      const existing = await db.select({ branchId: branches.branchId }).from(branches);
      const taken = new Set(existing.map((row) => row.branchId));
      const branchId = parsed.values.branchId && !taken.has(parsed.values.branchId)
        ? parsed.values.branchId
        : nextBranchId(parsed.values.region, taken);

      const [created] = await db
        .insert(branches)
        .values({ ...parsed.values, branchId })
        .returning();

      return Response.json({ branch: created }, { status: 201 });
    }

    if (req.method === "PUT") {
      if (!id) return Response.json({ error: "معرّف الفرع مطلوب" }, { status: 400 });

      const parsed = parseBody((await req.json()) as Record<string, unknown>);
      if ("error" in parsed) return Response.json({ error: parsed.error }, { status: 400 });

      const [current] = await db.select().from(branches).where(eq(branches.id, id));
      if (!current) return Response.json({ error: "الفرع غير موجود" }, { status: 404 });

      const [updated] = await db
        .update(branches)
        .set({
          ...parsed.values,
          // معرّف الفرع ثابت لأن جداول الدوام والحضور مرتبطة به
          branchId: current.branchId,
          updatedAt: new Date(),
        })
        .where(eq(branches.id, id))
        .returning();

      return Response.json({ branch: updated });
    }

    if (req.method === "DELETE") {
      if (!id) return Response.json({ error: "معرّف الفرع مطلوب" }, { status: 400 });

      const [deleted] = await db.delete(branches).where(eq(branches.id, id)).returning();
      if (!deleted) return Response.json({ error: "الفرع غير موجود" }, { status: 404 });
      return Response.json({ branch: deleted });
    }

    return Response.json({ error: "طريقة غير مدعومة" }, { status: 405 });
  } catch (error) {
    console.error("branches failed", error);
    return Response.json({ error: "تعذّر تنفيذ الطلب" }, { status: 500 });
  }
};

export const config: Config = {
  path: ["/api/branches", "/api/branches/:id"],
  method: ["GET", "POST", "PUT", "DELETE"],
};
