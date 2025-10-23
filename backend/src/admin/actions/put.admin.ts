import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { verifyJWT } from "../../auth/auth.middleware";
import { Request, Response } from "express";
import { userReq } from "../../auth/auth.middleware";

export const putAdminRouter = Router()
const prisma = new PrismaClient()

interface question {
    id: number,
    title: string,
    type: "MCQ" | "INPUT",
    answers: string[],
    correctAnswerIndex?: number,
    correctAnswerText?: string,
    marks: number,
    quizId: number,
    countDown: number,
}

putAdminRouter.put("/updateQuiz", verifyJWT, async (req:userReq, res:Response) => {
    try {
        if(!req.id){
            console.error("user not found")
            return
        }
        const { quizId, title, realTime, questions } = req.body as { quizId: number, title: string, realTime: boolean, questions: question[] }

        const quiz = await prisma.quiz.findUnique({
            where: {
                id: quizId
            }
        })

        if (quiz && quiz.id == quizId) {
            //change in quiz
            const changeInQuiz = await prisma.quiz.update({
                data: {
                    title: title,
                    realTime: realTime
                },
                where: {
                    id: quizId
                }
            })

            //change in questions
            for(const q of questions){
                const updateData: any = {
                    title: q.title,
                    type: q.type || "MCQ",
                    answers: q.answers,
                    marks: q.marks,
                    countDown: quiz?.realTime ? (q.countDown ?? 30) : null,
                }
                
                // Handle question type-specific fields
                if (q.type === "INPUT") {
                    updateData.correctAnswerIndex = null
                    updateData.correctAnswerText = q.correctAnswerText || null
                } else {
                    updateData.correctAnswerIndex = q.correctAnswerIndex
                }
                
                await prisma.question.update({
                    where: { id: q.id },
                    data: updateData
                })
            }

            res.json({
                msg:"changes succesful in quiz = ",
                quizId
            })
            return
        }

        else{
            res.json({
                msg:"quiz  does not exist with quiz id - ",
                quizId
            })
            return
        }
    } catch (e) {
        console.error("error found - "+ e);
        return
    }
})

putAdminRouter.put("/toggleAccepting", verifyJWT, async (req: userReq, res) => {
    try {
        if (!req.id) {
            console.error("user not found")
            return
        }

        const { quizId, action } = req.body as { quizId: number , action:boolean}
        const quiz = await prisma.quiz.findUnique({
            where: { id: quizId }
        })
        if (!quiz) {
            res.json({
                msg: "quiz does not exist",
            })
            return
        }
        else {
            const res = await prisma.quiz.update({
                where: {
                    id: quizId
                },
                data: {
                    isOpen: action
                }
            })
        }
        res.json({
            msg:"closed succesfully"
        })
        return
    } catch (e) {
        console.error("error found - " + e)
        return
    }
})