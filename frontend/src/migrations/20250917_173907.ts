import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "supported_languages_locales" (
  	"native_wording" varchar,
  	"english" varchar,
  	"spanish" varchar,
  	"russian" varchar,
  	"portuguese" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  ALTER TABLE "supported_languages_locales" ADD CONSTRAINT "supported_languages_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."supported_languages"("id") ON DELETE cascade ON UPDATE no action;
  CREATE UNIQUE INDEX "supported_languages_locales_locale_parent_id_unique" ON "supported_languages_locales" USING btree ("_locale","_parent_id");
  ALTER TABLE "supported_languages" DROP COLUMN "wording";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "supported_languages_locales" CASCADE;
  ALTER TABLE "supported_languages" ADD COLUMN "wording" varchar;`)
}
