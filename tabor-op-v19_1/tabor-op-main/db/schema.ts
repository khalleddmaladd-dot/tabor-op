import {
  pgTable,
  serial,
  text,
  integer,
  boolean,
  timestamp,
  doublePrecision,
  index,
  uniqueIndex,
} from "drizzle-orm/pg-core";

/**
 * كتالوج التقارير المطلوبة — قابل للتعديل والإضافة من مدير النظام.
 *
 * القواعد الافتراضية للاستحقاق:
 *  - التقارير الأسبوعية: كل يوم سبت (due_weekday = 6)
 *  - التقارير الشهرية: يوم 5 من كل شهر (due_day = 5)
 *  - استثناء: جدول الدوام يوم 20 من كل شهر (due_day = 20)
 */
export const requiredReports = pgTable(
  "required_reports",
  {
    id: serial().primaryKey(),
    // المنصب المسؤول: ops_manager | area_manager | branch_manager | cashier
    role: text().notNull(),
    // التكرار: weekly | monthly
    frequency: text().notNull(),
    title: text().notNull(),
    icon: text().notNull().default("📄"),
    // يوم الأسبوع للتقارير الأسبوعية (0 = الأحد ... 6 = السبت)
    dueWeekday: integer("due_weekday").notNull().default(6),
    // يوم الشهر للتقارير الشهرية (1 - 31)
    dueDay: integer("due_day").notNull().default(5),
    notes: text().notNull().default(""),
    sortOrder: integer("sort_order").notNull().default(0),
    active: boolean().notNull().default(true),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
  },
  (table) => [index("required_reports_role_idx").on(table.role, table.frequency)],
);

/**
 * كتالوج المهام اليومية — قابل للتعديل والإضافة والحذف من مدير النظام فقط.
 *
 * كل مهمة مرتبطة بمنصب واحد (role) وتظهر لكل من يشغل هذا المنصب في خانة «مهامي».
 * الحقل `category` يُستخدم لتجميع المهام في مجموعات داخل الواجهة (تحسين العرض).
 */
export const dailyTasks = pgTable(
  "daily_tasks",
  {
    id: serial().primaryKey(),
    // المنصب المسؤول: ops_manager | area_manager | branch_manager | cashier
    role: text().notNull(),
    title: text().notNull(),
    icon: text().notNull().default("📌"),
    // تصنيف المهمة داخل قائمة المنصب (تشغيل / جودة / مبيعات / نظافة ...)
    category: text().notNull().default("عام"),
    // فترة التنفيذ المقترحة: anytime | morning | evening | closing
    period: text().notNull().default("anytime"),
    notes: text().notNull().default(""),
    sortOrder: integer("sort_order").notNull().default(0),
    active: boolean().notNull().default(true),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
  },
  (table) => [index("daily_tasks_role_idx").on(table.role, table.sortOrder)],
);

/**
 * المهام المستعجلة — تُوزَّع حسب التسلسل الوظيفي.
 *
 * مدير التشغيل → مدير المنطقة → مشرف الفرع → الكاشير
 * لا يستطيع أي مستخدم إسناد مهمة إلا لمنصب أدنى منه، وداخل نطاقه فقط
 * (مدير المنطقة داخل منطقته، ومشرف الفرع داخل فرعه).
 */
export const urgentTasks = pgTable(
  "urgent_tasks",
  {
    id: serial().primaryKey(),
    title: text().notNull(),
    details: text().notNull().default(""),
    // عالي | متوسط | منخفض
    priority: text().notNull().default("متوسط"),
    // جديد | قيد التنفيذ | مكتمل
    status: text().notNull().default("جديد"),
    // المنصب المُكلَّف (أدنى من منصب المُنشئ)
    targetRole: text("target_role").notNull(),
    // نطاق التكليف: فارغ = كل المناطق / كل الفروع
    region: text().notNull().default(""),
    branch: text().notNull().default(""),
    dueDate: text("due_date").notNull().default(""),
    createdByRole: text("created_by_role").notNull(),
    createdByName: text("created_by_name").notNull().default(""),
    updatedByName: text("updated_by_name").notNull().default(""),
    completedAt: timestamp("completed_at"),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
  },
  (table) => [index("urgent_tasks_target_idx").on(table.targetRole, table.status)],
);

/**
 * الفروع — لكل فرع موقع جغرافي إلزامي (lat/lng + نطاق بالمتر).
 *
 * الموقع هو ما يربط الفرع بجداول الدوام: تسجيل الحضور والانصراف يتحقق من
 * وجود الموظف داخل نطاق الفرع (Geofence) قبل اعتماد البصمة.
 */
export const branches = pgTable(
  "branches",
  {
    id: serial().primaryKey(),
    // المعرّف المستخدم في الواجهة وجداول الدوام (y1 / j2 / r3 ...)
    branchId: text("branch_id").notNull(),
    region: text().notNull(),
    name: text().notNull(),
    supervisor: text().notNull().default(""),
    // الموقع الجغرافي — إلزامي
    lat: doublePrecision().notNull(),
    lng: doublePrecision().notNull(),
    // نطاق تسجيل الحضور بالمتر
    radius: integer().notNull().default(150),
    active: boolean().notNull().default(true),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
  },
  (table) => [uniqueIndex("branches_branch_id_idx").on(table.branchId)],
);
