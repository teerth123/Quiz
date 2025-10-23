import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { verifyJWT } from "../../auth/auth.middleware";
import { Request, Response } from "express";
import { userReq } from "../../auth/auth.middleware";

export const postParticipantRouter = Router()
const prisma = new PrismaClient()

interface response {
    questionId: number,
    answeredIndex?: number,
    answeredText?: string
}

postParticipantRouter.post("/attemptQuiz", verifyJWT, async (req: userReq, res: Response) => {
    try {
        let score = 0;

        if (!req.id) {
            console.error("user not found ")
            return
        }
        const { studentResp, quizId } = req.body as { quizId: number, studentResp: response[] }
        const quiz = await prisma.quiz.findUnique({
            where:{id:quizId}
        })
        if(!quiz){
            res.json({
                msg:"quiz does not exist",
            })
            return
        }
        const isAttended = await prisma.studentQuiz.findFirst({
            where: {
                quizId: quizId,
                studentId: req.id
            }
        })

        if (isAttended) {
            res.json({
                msg: "already attempted",
            })
            return
        }

        if(!quiz.isOpen){
            res.json({
                msg:"not accepting responses"
            })
            return
        }

        else {
            const res = await prisma.response.createMany({
                data: studentResp.map((i) => ({
                    studentId: req.id!,
                    questionId: i.questionId,
                    answeredIndex: i.answeredIndex ?? 0,
                    answeredText: i.answeredText ?? "",
                    createdAt: new Date(),
                }))
            })

            for (let i of studentResp) {
                const que = await prisma.question.findUnique({
                    where: {
                        id: i.questionId
                    },
                    select: {
                        type: true,
                        correctAnswerIndex: true,
                        marks: true
                    }
                }) as any
                
                if (!que) continue;

                // Score MCQ questions
                if (que.type === "MCQ" && que.correctAnswerIndex != null) {
                    if (que.correctAnswerIndex == i.answeredIndex) {
                        score += que.marks
                    }
                }
                // For INPUT questions: award marks only if teacher explicitly verified
                // (For now, teachers must manually grade input responses)
                // Optional: Add automatic text matching if correctAnswerText is set
                else if (que.type === "INPUT") {
                    // Fetch full question to get correctAnswerText if needed
                    const fullQuestion = await prisma.question.findUnique({
                        where: { id: i.questionId }
                    }) as any
                    
                    if (fullQuestion?.correctAnswerText && i.answeredText?.toLowerCase().trim() === fullQuestion.correctAnswerText.toLowerCase().trim()) {
                        score += que.marks
                    }
                }
            }

            const res2 = await prisma.studentQuiz.create({
                data: {
                    studentId: req.id!,
                    quizId: quizId,
                    score: score
                }
            })

        }
        res.json({
            msg: "succesfully submitted",
            marks: score
        })
    } catch (e) {
        console.error("error found - " + e)
        return
    }
})