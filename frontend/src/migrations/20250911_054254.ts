import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "supported_languages_languages" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"language" varchar NOT NULL
  );
  
  CREATE TABLE "supported_languages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "supported_languages_languages" ADD CONSTRAINT "supported_languages_languages_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."supported_languages"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "supported_languages_languages_order_idx" ON "supported_languages_languages" USING btree ("_order");
  CREATE INDEX "supported_languages_languages_parent_id_idx" ON "supported_languages_languages" USING btree ("_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "supported_languages_languages" CASCADE;
  DROP TABLE "supported_languages" CASCADE;`)
}
