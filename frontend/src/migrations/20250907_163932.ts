import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "sentences" ALTER COLUMN "image_id" DROP NOT NULL;
  ALTER TABLE "sentences" ALTER COLUMN "audio_pronunciation_id" DROP NOT NULL;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "sentences" ALTER COLUMN "image_id" SET NOT NULL;
  ALTER TABLE "sentences" ALTER COLUMN "audio_pronunciation_id" SET NOT NULL;`)
}
