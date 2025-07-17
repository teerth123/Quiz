import { PrismaClient } from "@prisma/client";
import { Router, Response } from "express";
import { verifyJWT } from "../../auth/auth.middleware";
import { userReq } from "../../auth/auth.middleware";
import { nanoid } from "nanoid"

export const postAdminRouter = Router()
const prisma = new PrismaClient()

interface question {
    title: string,
    answers: string[],
    countDown: number,
    correctAnswerIndex: number,
    marks: number,
}

postAdminRouter.post("/createQuiz", verifyJWT, async (req: userReq, res: Response) => {
    try {

        if (!req.id) {
            console.error("user id not found")
            return
        }
        const { title, realTime } = req.body as { title: string, realTime: boolean }
        let uniqueCode: string = nanoid(6)
        while (1) {
            const isDuplicate = await prisma.quiz.findMany({
                where: {
                    uniqueCode: uniqueCode
                }
            })

            if (isDuplicate.length > 0) {
                uniqueCode = nanoid(6);
            } else {
                break
            }
        }

        const quizCreated = await prisma.quiz.create({
            data: {
                title: title,
                createdAt: new Date(),
                authorId: req.id,
                uniqueCode: uniqueCode,
                realTime: realTime
            }
        })
        const quizId = quizCreated.id
        res.json({
            msg: "quiz created succesfully",
            quizId
        })
    } catch (e) {
        console.error("error found : " + e)
        return
    }
})

postAdminRouter.post("/addQuestions", verifyJWT, async (req, res) => {
    try {
        const { questions, quizId } = req.body as { questions: question[], quizId: number }

        const quiz = await prisma.quiz.findUnique({
            where: { id: quizId }
        })

        if (!quiz) {
            res.json({
                msg: "quiz does not exist with quizid - ",
                quizId
            })
            return
        }

        const addQuestions = await prisma.question.createMany({
            data: questions.map((i) => ({
                title: i.title,
                answers: i.answers,
                countDown: quiz?.realTime ? (i.countDown ?? 30) : null,
                correctAnswerIndex: i.correctAnswerIndex,
                marks: i.marks,
                quizId: quizId
            }))
        })

        if (addQuestions) {
            res.json({
                msg: "added questions succesfully to quiz, quizId is",
                quizId
            })
        }

    } catch (e) {
        console.error("error found  " + e)
        return
    }
})

