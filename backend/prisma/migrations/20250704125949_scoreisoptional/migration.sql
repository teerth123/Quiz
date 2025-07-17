-- AlterTable
ALTER TABLE "Question" ALTER COLUMN "countDown" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "score" SET DEFAULT 0;
