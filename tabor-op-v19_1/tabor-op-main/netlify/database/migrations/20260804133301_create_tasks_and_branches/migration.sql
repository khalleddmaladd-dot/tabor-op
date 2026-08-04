CREATE TABLE "branches" (
	"id" serial PRIMARY KEY,
	"branch_id" text NOT NULL,
	"region" text NOT NULL,
	"name" text NOT NULL,
	"supervisor" text DEFAULT '' NOT NULL,
	"lat" double precision NOT NULL,
	"lng" double precision NOT NULL,
	"radius" integer DEFAULT 150 NOT NULL,
	"active" boolean DEFAULT true NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "daily_tasks" (
	"id" serial PRIMARY KEY,
	"role" text NOT NULL,
	"title" text NOT NULL,
	"icon" text DEFAULT '📌' NOT NULL,
	"category" text DEFAULT 'عام' NOT NULL,
	"period" text DEFAULT 'anytime' NOT NULL,
	"notes" text DEFAULT '' NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL,
	"active" boolean DEFAULT true NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "urgent_tasks" (
	"id" serial PRIMARY KEY,
	"title" text NOT NULL,
	"details" text DEFAULT '' NOT NULL,
	"priority" text DEFAULT 'متوسط' NOT NULL,
	"status" text DEFAULT 'جديد' NOT NULL,
	"target_role" text NOT NULL,
	"region" text DEFAULT '' NOT NULL,
	"branch" text DEFAULT '' NOT NULL,
	"due_date" text DEFAULT '' NOT NULL,
	"created_by_role" text NOT NULL,
	"created_by_name" text DEFAULT '' NOT NULL,
	"updated_by_name" text DEFAULT '' NOT NULL,
	"completed_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX "branches_branch_id_idx" ON "branches" ("branch_id");--> statement-breakpoint
CREATE INDEX "daily_tasks_role_idx" ON "daily_tasks" ("role","sort_order");--> statement-breakpoint
CREATE INDEX "urgent_tasks_target_idx" ON "urgent_tasks" ("target_role","status");