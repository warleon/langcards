import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "words_rels" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "words_rels" CASCADE;
  ALTER TABLE "words" DROP CONSTRAINT "words_audio_effect_id_audios_id_fk";
  
  ALTER TABLE "sentences" DROP CONSTRAINT "sentences_audio_effect_id_audios_id_fk";
  
  DROP INDEX "words_audio_effect_idx";
  DROP INDEX "sentences_audio_effect_idx";
  ALTER TABLE "words" DROP COLUMN "audio_effect_id";
  ALTER TABLE "sentences" DROP COLUMN "audio_effect_id";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "words_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"sentences_id" integer
  );
  
  ALTER TABLE "words" ADD COLUMN "audio_effect_id" integer;
  ALTER TABLE "sentences" ADD COLUMN "audio_effect_id" integer;
  ALTER TABLE "words_rels" ADD CONSTRAINT "words_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."words"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "words_rels" ADD CONSTRAINT "words_rels_sentences_fk" FOREIGN KEY ("sentences_id") REFERENCES "public"."sentences"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "words_rels_order_idx" ON "words_rels" USING btree ("order");
  CREATE INDEX "words_rels_parent_idx" ON "words_rels" USING btree ("parent_id");
  CREATE INDEX "words_rels_path_idx" ON "words_rels" USING btree ("path");
  CREATE INDEX "words_rels_sentences_id_idx" ON "words_rels" USING btree ("sentences_id");
  ALTER TABLE "words" ADD CONSTRAINT "words_audio_effect_id_audios_id_fk" FOREIGN KEY ("audio_effect_id") REFERENCES "public"."audios"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "sentences" ADD CONSTRAINT "sentences_audio_effect_id_audios_id_fk" FOREIGN KEY ("audio_effect_id") REFERENCES "public"."audios"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "words_audio_effect_idx" ON "words" USING btree ("audio_effect_id");
  CREATE INDEX "sentences_audio_effect_idx" ON "sentences" USING btree ("audio_effect_id");`)
}
