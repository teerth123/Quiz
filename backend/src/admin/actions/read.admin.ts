import { Router, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { userReq } from "../../auth/auth.middleware";
import { verifyJWT } from "../../auth/auth.middleware";
import { number } from "zod";


export const readAdminRouter = Router()
const prisma = new PrismaClient()

readAdminRouter.get("/createdQuizes", verifyJWT, async (req: userReq, res: Response) => {
    const quizes = await ((prisma.quiz.findMany) as any)({
        where: {
            authorId: req.id
        },
        select: {
            id: true,
            StudentQuiz: true,
            title: true,
            createdAt: true,
            // isOpen:true 
            realTime: true,
            uniqueCode: true
        },
    } as any)

    res.json({
        quizes
    })

})

readAdminRouter.get("/resultperQuiz/:quizId", verifyJWT, async (req: userReq, res) => {
    const { quizId } = req.params
    // console.log(typeof (quizId))
    const quizIdNum = Number(quizId)
    // console.log(quizId)
    try {
        if (!req.id) {
            console.error("user not found")
            return
        }

        const quizTitle = await prisma.quiz.findUnique({
            where:{
                id:quizIdNum
            },
            select:{
                title:true
            }
        })

        const result = await (prisma.studentQuiz.findMany as any)({
            where: {
                quizId: quizIdNum,
            },
            select: {
                score: true,
                User: {
                    select: {
                        username: true,
                        id:true,
                        email:true
                    },
                },
                // Quiz:{
                //     select:{
                //         title:true,
                //         Question:{
                //            select:{
                //                 title:true,
                //                 answers:true,
                //                 correctAnswerIndex:true,
                //                 marks:true
                //             }
                //         }
                //     }
                // }
            }
        })

        const questions = await (prisma.quiz.findMany as any)({
            where:{
                id:quizIdNum
            },
            select:{
                Question:{
                    select:{
                        id:true,
                        title:true,
                        type:true,
                        answers:true,
                        correctAnswerIndex:true,
                        correctAnswerText:true,
                        marks:true
                    }
                }
            }
        })

        res.json({
            result: result.map((r: any) => ({
                ...r,
                student: r.User
            })),
            quizTitle,
            questions: questions.map((q: any) => ({
                question: q.Question
            })),
            status:"+"
        })
        console.log(result) //student response
        console.log(quizTitle) //quiz title
        console.log(questions) //questoins
    } catch (e) {
        console.error("error found -" + e)
    }
})


// readAdminRouter.get("/attendedQuizes", verifyJWT, async(req:userReq, res:Response)=>{
//     const quizes = await prisma.quiz.findMany({
//         where:{

//         }
//     })
// })
