/*
  Warnings:

  - You are about to drop the column `score` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `_student` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `uniqueCode` to the `Quiz` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_student" DROP CONSTRAINT "_student_A_fkey";

-- DropForeignKey
ALTER TABLE "_student" DROP CONSTRAINT "_student_B_fkey";

-- AlterTable
ALTER TABLE "Quiz" ADD COLUMN     "uniqueCode" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "score";

-- DropTable
DROP TABLE "_student";

-- CreateTable
CREATE TABLE "StudentQuiz" (
    "id" SERIAL NOT NULL,
    "studentId" INTEGER NOT NULL,
    "quizId" INTEGER NOT NULL,
    "score" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "StudentQuiz_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "StudentQuiz_studentId_quizId_key" ON "StudentQuiz"("studentId", "quizId");

-- AddForeignKey
ALTER TABLE "StudentQuiz" ADD CONSTRAINT "StudentQuiz_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentQuiz" ADD CONSTRAINT "StudentQuiz_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "Quiz"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
