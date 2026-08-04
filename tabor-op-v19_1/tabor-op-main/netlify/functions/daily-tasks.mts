import type { Config, Context } from "@netlify/functions";
import { asc, eq } from "drizzle-orm";
import { db } from "../../db/index.js";
import { dailyTasks } from "../../db/schema.js";
import { ROLES, identityOf, isAdmin } from "../../lib/hierarchy.js";

/**
 * كتالوج المهام اليومية (خانة «مهامي»)
 *
 * GET    /api/daily-tasks        → قراءة الكتالوج (يُزرع تلقائياً من الافتراضيات عند أول تشغيل)
 * POST   /api/daily-tasks        → إضافة مهمة    (مدير النظام)
 * PUT    /api/daily-tasks/:id    → تعديل مهمة    (مدير النظام)
 * DELETE /api/daily-tasks/:id    → حذف مهمة      (مدير النظام)
 */

const PERIODS = ["anytime", "morning", "evening", "closing"];

type Seed = [role: string, category: string, title: string, icon: string, period?: string];

const SEEDS: Seed[] = [
  // ————— الكاشير —————
  ["cashier", "خدمة العميل", "استقبال العميل والترحيب", "🤝"],
  ["cashier", "خدمة العميل", "رفع الملاحظات والشكاوى للمدير", "📣"],
  ["cashier", "خدمة العميل", "تقييم جوجل ماب", "⭐"],
  ["cashier", "خدمة العميل", "تسجيل عدد طلبات تقييم جوجل", "📝", "closing"],
  ["cashier", "المبيعات", "رفع قيمة الطلب — Upselling", "📈"],
  ["cashier", "المبيعات", "تسجيل الطلبات المرتجعة", "↩️"],
  ["cashier", "التشغيل", "تشيك تطبيقات التوصيل كل ساعتين", "🛵"],
  ["cashier", "التشغيل", "التأكد من كميات الطبخ", "🍳", "morning"],
  ["cashier", "التشغيل", "قياس سرعة تحضير الطلب", "⏱️"],
  ["cashier", "الجودة والسلامة", "التأكد من صلاحيات المنتجات", "📅", "morning"],
  ["cashier", "الجودة والسلامة", "التأكد من التغليف السليم", "📦"],
  ["cashier", "النظافة", "نظافة منطقة العميل والكاونتر", "🧽"],
  ["cashier", "النظافة", "فحص نظافة الحمامات", "🚻"],
  ["cashier", "النظافة", "ترتيب منطقة العرض", "🧺", "morning"],

  // ————— مشرف الفرع —————
  ["branch_manager", "التشغيل", "تشيك تطبيقات التوصيل", "🛵", "morning"],
  ["branch_manager", "التشغيل", "تشيك تطبيقات التواصل", "💬", "morning"],
  ["branch_manager", "التشغيل", "متابعة مهام أسانا", "🗂️"],
  ["branch_manager", "التشغيل", "تشيك قائمة الأصناف", "📋"],
  ["branch_manager", "التشغيل", "التأكد من سير العملية", "⚙️"],
  ["branch_manager", "التشغيل", "متابعة حالة المعدات", "🔧"],
  ["branch_manager", "التشغيل", "فحص كاميرات المراقبة", "📹"],
  ["branch_manager", "التشغيل", "خطة عمالة الشيفت القادم", "👷", "evening"],
  ["branch_manager", "الجودة والسلامة", "فحص صلاحية المنتجات", "📅", "morning"],
  ["branch_manager", "الجودة والسلامة", "فحص درجات حرارة التخزين", "🌡️", "morning"],
  ["branch_manager", "الجودة والسلامة", "السلامة الغذائية", "🥗"],
  ["branch_manager", "الجودة والسلامة", "نموذج HACCP اليومي", "🧪"],
  ["branch_manager", "الجودة والسلامة", "فحص نظافة المطبخ", "🧹"],
  ["branch_manager", "الجودة والسلامة", "فحص مظهر العاملين", "👔", "morning"],
  ["branch_manager", "المبيعات والمالية", "شيت التالف والمبيعات", "📊", "evening"],
  ["branch_manager", "المبيعات والمالية", "تقرير P&L يومي", "💰", "evening"],
  ["branch_manager", "المبيعات والمالية", "تقرير المصاريف النثرية", "🧾", "evening"],
  ["branch_manager", "المبيعات والمالية", "تحديث الأسعار في التطبيقات", "🏷️"],
  ["branch_manager", "المبيعات والمالية", "تسجيل التالف بالصور", "📸"],
  ["branch_manager", "خدمة العميل", "التشيك على جوجل ماب", "⭐"],
  ["branch_manager", "خدمة العميل", "متابعة شكاوى العملاء", "📣"],
  ["branch_manager", "خدمة العميل", "متابعة نسبة قبول التوصيل", "✅"],
  ["branch_manager", "خدمة العميل", "متابعة وقت تسليم التوصيل", "⏱️"],
  ["branch_manager", "الإغلاق", "إرسال إغلاق اليوم", "🌙", "closing"],

  // ————— مدير المنطقة —————
  ["area_manager", "متابعة الفروع", "تشيك مبيعات الفروع", "💰", "morning"],
  ["area_manager", "متابعة الفروع", "مقارنة أداء الفروع", "📊"],
  ["area_manager", "متابعة الفروع", "متابعة إنجاز المشرفين", "✅"],
  ["area_manager", "متابعة الفروع", "متابعة المخزون المركزي", "📦"],
  ["area_manager", "الجودة", "متابعة تقارير الجودة", "🔍"],
  ["area_manager", "الجودة", "التأكد من التزام HACCP", "🧪"],
  ["area_manager", "الجودة", "متابعة نسبة الهدر", "🗑️"],
  ["area_manager", "الجودة", "تجديد الرخص والشهادات", "📜"],
  ["area_manager", "خدمة العميل", "مراجعة شكاوى العملاء", "📣"],
  ["area_manager", "خدمة العميل", "أداء تطبيقات التوصيل", "🛵"],
  ["area_manager", "الفريق", "تقرير أداء الموردين", "🚚"],
  ["area_manager", "الفريق", "تدريب ميداني", "🎓"],

  // ————— مدير التشغيل —————
  ["ops_manager", "الأداء", "مراجعة أداء المناطق", "🗺️", "morning"],
  ["ops_manager", "الأداء", "KPIs الاستراتيجية", "🎯"],
  ["ops_manager", "الأداء", "مؤشرات رضا العملاء", "⭐"],
  ["ops_manager", "المالية", "متابعة التقارير المالية", "💵"],
  ["ops_manager", "المالية", "تحليل ربحية الفروع", "📈"],
  ["ops_manager", "التشغيل", "متابعة الصيانة العاجلة", "🔧"],
  ["ops_manager", "التشغيل", "أداء الموردين", "🚚"],
  ["ops_manager", "التطوير", "متابعة خطط التوسع", "🏗️"],
  ["ops_manager", "التطوير", "تحليل المنافسين", "🔎"],
  ["ops_manager", "التطوير", "مراجعة سياسات HR", "📘"],
];

function seedRows() {
  return SEEDS.map(([role, category, title, icon, period], i) => ({
    role,
    category,
    title,
    icon,
    period: period ?? "anytime",
    notes: "",
    sortOrder: i,
    active: true,
  }));
}

function clampInt(value: unknown, min: number, max: number, fallback: number) {
  const n = Number(value);
  if (!Number.isFinite(n)) return fallback;
  return Math.min(max, Math.max(min, Math.trunc(n)));
}

function parseBody(body: Record<string, unknown>) {
  const title = String(body.title ?? "").trim();
  const role = ROLES.includes(String(body.role)) ? String(body.role) : "";
  const period = PERIODS.includes(String(body.period)) ? String(body.period) : "anytime";

  if (!title) return { error: "عنوان المهمة مطلوب" as const };
  if (title.length > 160) return { error: "عنوان المهمة طويل جداً" as const };
  if (!role) return { error: "المنصب غير صحيح" as const };

  return {
    values: {
      role,
      title,
      icon: String(body.icon ?? "📌").slice(0, 8) || "📌",
      category: String(body.category ?? "عام").trim().slice(0, 60) || "عام",
      period,
      notes: String(body.notes ?? "").slice(0, 500),
      sortOrder: clampInt(body.sortOrder, 0, 9999, 0),
      active: body.active === undefined ? true : Boolean(body.active),
    },
  };
}

export default async (req: Request, context: Context) => {
  const id = Number(context.params.id ?? 0);
  const identity = identityOf(req);

  try {
    if (req.method === "GET") {
      let rows = await db.select().from(dailyTasks).orderBy(asc(dailyTasks.sortOrder), asc(dailyTasks.id));

      if (rows.length === 0) {
        await db.insert(dailyTasks).values(seedRows());
        rows = await db.select().from(dailyTasks).orderBy(asc(dailyTasks.sortOrder), asc(dailyTasks.id));
      }

      return Response.json({ tasks: rows }, { headers: { "cache-control": "no-store" } });
    }

    if (!isAdmin(identity)) {
      return Response.json({ error: "تعديل المهام متاح لمدير النظام فقط" }, { status: 403 });
    }

    if (req.method === "POST") {
      const parsed = parseBody((await req.json()) as Record<string, unknown>);
      if ("error" in parsed) return Response.json({ error: parsed.error }, { status: 400 });

      const [created] = await db.insert(dailyTasks).values(parsed.values).returning();
      return Response.json({ task: created }, { status: 201 });
    }

    if (req.method === "PUT") {
      if (!id) return Response.json({ error: "معرّف المهمة مطلوب" }, { status: 400 });

      const parsed = parseBody((await req.json()) as Record<string, unknown>);
      if ("error" in parsed) return Response.json({ error: parsed.error }, { status: 400 });

      const [updated] = await db
        .update(dailyTasks)
        .set({ ...parsed.values, updatedAt: new Date() })
        .where(eq(dailyTasks.id, id))
        .returning();

      if (!updated) return Response.json({ error: "المهمة غير موجودة" }, { status: 404 });
      return Response.json({ task: updated });
    }

    if (req.method === "DELETE") {
      if (!id) return Response.json({ error: "معرّف المهمة مطلوب" }, { status: 400 });

      const [deleted] = await db.delete(dailyTasks).where(eq(dailyTasks.id, id)).returning();
      if (!deleted) return Response.json({ error: "المهمة غير موجودة" }, { status: 404 });
      return Response.json({ task: deleted });
    }

    return Response.json({ error: "طريقة غير مدعومة" }, { status: 405 });
  } catch (error) {
    console.error("daily-tasks failed", error);
    return Response.json({ error: "تعذّر تنفيذ الطلب" }, { status: 500 });
  }
};

export const config: Config = {
  path: ["/api/daily-tasks", "/api/daily-tasks/:id"],
  method: ["GET", "POST", "PUT", "DELETE"],
};
