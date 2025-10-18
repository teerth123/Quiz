import { Router, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { verifyJWT } from "../../auth/auth.middleware";
import { userReq } from "../../auth/auth.middleware";

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
            orderBy: {
                createdAt: "desc"
            },
            select: {
                quizId: true,
                score: true,
                createdAt: true,
                quiz: {
                    select: {
                        title: true,
                        uniqueCode: true
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

readParticipantRouter.get("/quizByCode/:code", verifyJWT, async (req: userReq, res: Response) => {
    try {
        if (!req.id) {
            console.error("user not found")
            return
        }

        const { code } = req.params

        const quiz = await prisma.quiz.findFirst({
            where: { uniqueCode: code },
            select: {
                id: true,
                title: true,
                isOpen: true,
                question: {
                    select: {
                        id: true,
                        title: true,
                        answers: true,
                        marks: true
                    }
                }
            }
        })

        if (!quiz) {
            res.status(404).json({
                msg: "quiz not found"
            })
            return
        }

        if (!quiz.isOpen) {
            res.status(403).json({
                msg: "quiz is not accepting responses"
            })
            return
        }

        const existingAttempt = await prisma.studentQuiz.findFirst({
            where: {
                quizId: quiz.id,
                studentId: req.id
            },
            select: {
                id: true
            }
        })

        if (existingAttempt) {
            res.status(409).json({
                msg: "quiz already attempted"
            })
            return
        }

        res.json({
            quiz: {
                id: quiz.id,
                title: quiz.title
            },
            questions: quiz.question
        })
    } catch (e) {
        console.error("error found - " + e)
        res.status(500).json({
            msg: "unable to fetch quiz"
        })
        return
    }
})

readParticipantRouter.get("/attemptedQuizDetails/:quizId", verifyJWT, async (req: userReq, res) => {
    try {
        if (!req.id) {
            console.error("user not found")
            return
        }

        const { quizId: quizIdParam } = req.params
        const quizId = Number(quizIdParam)

        if (Number.isNaN(quizId)) {
            res.status(400).json({
                msg: "invalid quiz id"
            })
            return
        }

        const quiz = await prisma.quiz.findUnique({
            where: { id: quizId },
            select: {
                id: true,
                title: true
            }
        })

        if (!quiz) {
            res.status(404).json({
                msg: "quiz not found"
            })
            return
        }

        const attempt = await prisma.studentQuiz.findFirst({
            where: {
                quizId: quizId,
                studentId: req.id!
            },
            select: {
                score: true,
                createdAt: true
            }
        })

        if (!attempt) {
            res.status(403).json({
                msg: "quiz has not been attempted"
            })
            return
        }

        const responses = await prisma.response.findMany({
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
                        id: true,
                        title: true,
                        answers: true,
                        correctAnswerIndex: true,
                        marks: true
                    }
                }
            }
        })

        res.json({
            quiz,
            attempt: {
                score: attempt.score,
                attemptedAt: attempt.createdAt
            },
            responses: responses.map((response) => ({
                questionId: response.questionId,
                answeredIndex: response.answeredIndex,
                isCorrect: response.question.correctAnswerIndex === response.answeredIndex,
                question: response.question
            }))
        })
    } catch (e) {
        console.error("error found - " + e)
        res.status(500).json({
            msg: "unable to fetch attempt details"
        })
        return
    }
})