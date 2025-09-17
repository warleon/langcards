import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "supported_languages_languages" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "supported_languages_languages" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_intros_fk";
  
  DROP INDEX "intros_updated_at_idx";
  DROP INDEX "intros_created_at_idx";
  DROP INDEX "payload_locked_documents_rels_intros_id_idx";
  ALTER TABLE "intros" ALTER COLUMN "updated_at" DROP DEFAULT;
  ALTER TABLE "intros" ALTER COLUMN "updated_at" DROP NOT NULL;
  ALTER TABLE "intros" ALTER COLUMN "created_at" DROP DEFAULT;
  ALTER TABLE "intros" ALTER COLUMN "created_at" DROP NOT NULL;
  ALTER TABLE "supported_languages" ADD COLUMN "wording" varchar;
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "intros_id";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "supported_languages_languages" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"language" varchar NOT NULL
  );
  
  ALTER TABLE "intros" ALTER COLUMN "updated_at" SET DEFAULT now();
  ALTER TABLE "intros" ALTER COLUMN "updated_at" SET NOT NULL;
  ALTER TABLE "intros" ALTER COLUMN "created_at" SET DEFAULT now();
  ALTER TABLE "intros" ALTER COLUMN "created_at" SET NOT NULL;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "intros_id" integer;
  ALTER TABLE "supported_languages_languages" ADD CONSTRAINT "supported_languages_languages_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."supported_languages"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "supported_languages_languages_order_idx" ON "supported_languages_languages" USING btree ("_order");
  CREATE INDEX "supported_languages_languages_parent_id_idx" ON "supported_languages_languages" USING btree ("_parent_id");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_intros_fk" FOREIGN KEY ("intros_id") REFERENCES "public"."intros"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_intros_id_idx" ON "payload_locked_documents_rels" USING btree ("intros_id");
  CREATE INDEX "intros_updated_at_idx" ON "intros" USING btree ("updated_at");
  CREATE INDEX "intros_created_at_idx" ON "intros" USING btree ("created_at");
  ALTER TABLE "supported_languages" DROP COLUMN "wording";`)
}
