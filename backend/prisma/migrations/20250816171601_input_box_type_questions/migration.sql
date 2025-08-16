-- CreateEnum
CREATE TYPE "public"."Type" AS ENUM ('MCQ', 'INPUT');

-- AlterTable
ALTER TABLE "public"."Question" ADD COLUMN     "type" "public"."Type" NOT NULL DEFAULT 'MCQ',
ALTER COLUMN "correctAnswerIndex" DROP NOT NULL;

-- AlterTable
ALTER TABLE "public"."Response" ADD COLUMN     "answeredText" TEXT DEFAULT '',
ALTER COLUMN "answeredIndex" DROP NOT NULL,
ALTER COLUMN "answeredIndex" SET DEFAULT 0;
