import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { verifyJWT } from "../../auth/auth.middleware";
import { userReq } from "../../auth/auth.middleware";
import { title } from "process";

export const readParticipantRouter = Router()
const prisma = new PrismaClient()

readParticipantRouter.get("/attemptedQuiz", verifyJWT, async (req: userReq, res) => {
    try {
        if (!req.id) {
            console.error("user not found")
            return
        }
        const result = await prisma.studentQuiz.findMany({
            where: {
                studentId: req.id!,
            },
            select: {
                quizId: true,
                score: true,
                quiz:{
                    select:{
                        title:true
                    }
                }
            }
        })

        res.json({
            result
        })
    } catch (e) {
        console.error("found error - " + e)
        return
    }

})

readParticipantRouter.get("/attemptedQuizDetails", verifyJWT, async (req: userReq, res) => {
    try {
        if (!req.id) {
            console.error("user not found")
            return
        }

        const { quizId } = req.body as { quizId: number }
        
        const isQuiz = await prisma.quiz.findUnique({where:{id:quizId}})
        if(!isQuiz){
            res.json({
                msg:"quiz not found"
            })
            return
        }

        const isAttempted = await prisma.studentQuiz.findFirst({
            where:{
                studentId:req.id!,
                quizId:quizId
            }
        })

        if(!isAttempted){
            res.json({
                msg:"you haven't attended the quiz"
            })
            return
        }

        const studentResp = await prisma.response.findMany({
            where: {
                studentId: req.id!,
                question: {
                    quizId: quizId
                }
            },
            select: {
                questionId: true,
                answeredIndex: true,
                question: {
                    select: {
                        title: true,
                        correctAnswerIndex: true,
                        marks: true,
                        answers:true
                    }
                }
            }
        });

        res.json({
            msg:studentResp
        })


    } catch (e) {
        console.error("error found - " + e)
        return
    }
})