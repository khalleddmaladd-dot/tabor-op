import { pgTable, serial, text, integer, boolean, timestamp, index } from "drizzle-orm/pg-core";

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
