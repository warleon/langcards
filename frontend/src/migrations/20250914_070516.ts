import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."_locales" AS ENUM('en', 'es', 'ru', 'pt');
  CREATE TABLE "intros" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "intros_locales" (
  	"title" varchar NOT NULL,
  	"subtitle" varchar NOT NULL,
  	"selector_heading" varchar NOT NULL,
  	"selector_not_found" varchar NOT NULL,
  	"selector_search_placeholder" varchar NOT NULL,
  	"button_label" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "intros_id" integer;
  ALTER TABLE "intros_locales" ADD CONSTRAINT "intros_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."intros"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "intros_updated_at_idx" ON "intros" USING btree ("updated_at");
  CREATE INDEX "intros_created_at_idx" ON "intros" USING btree ("created_at");
  CREATE UNIQUE INDEX "intros_locales_locale_parent_id_unique" ON "intros_locales" USING btree ("_locale","_parent_id");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_intros_fk" FOREIGN KEY ("intros_id") REFERENCES "public"."intros"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_intros_id_idx" ON "payload_locked_documents_rels" USING btree ("intros_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "intros" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "intros_locales" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "intros" CASCADE;
  DROP TABLE "intros_locales" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_intros_fk";
  
  DROP INDEX "payload_locked_documents_rels_intros_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "intros_id";
  DROP TYPE "public"."_locales";`)
}
