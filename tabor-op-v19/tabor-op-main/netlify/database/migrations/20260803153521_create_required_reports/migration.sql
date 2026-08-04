CREATE TABLE "required_reports" (
	"id" serial PRIMARY KEY,
	"role" text NOT NULL,
	"frequency" text NOT NULL,
	"title" text NOT NULL,
	"icon" text DEFAULT '📄' NOT NULL,
	"due_weekday" integer DEFAULT 6 NOT NULL,
	"due_day" integer DEFAULT 5 NOT NULL,
	"notes" text DEFAULT '' NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL,
	"active" boolean DEFAULT true NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE INDEX "required_reports_role_idx" ON "required_reports" ("role","frequency");