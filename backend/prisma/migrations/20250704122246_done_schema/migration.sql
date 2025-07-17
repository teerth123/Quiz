/*
  Warnings:

  - Added the required column `countDown` to the `Question` table without a default value. This is not possible if the table is not empty.
  - Added the required column `score` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Question" ADD COLUMN     "countDown" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "Quiz" ADD COLUMN     "realTime" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "score" INTEGER NOT NULL;
