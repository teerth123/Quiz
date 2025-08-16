import { Router, Response } from "express";
import { PrismaClient } from "../../generated/prisma";
import { userReq } from "../../auth/auth.middleware";
import { verifyJWT } from "../../auth/auth.middleware";
import { Quiz } from "@prisma/client";
import { number } from "zod";


export const readAdminRouter = Router()
const prisma = new PrismaClient()

readAdminRouter.get("/createdQuizes", verifyJWT, async (req: userReq, res: Response) => {
    const quizes = await prisma.quiz.findMany({
        where: {
            authorId: req.id
        },
        select: {
            id: true,
            studentQuizzes: true,
            title: true,
            createdAt: true,
            // isOpen:true 
            realTime: true,
            uniqueCode: true
        },
    })

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

        const result = await prisma.studentQuiz.findMany({
            where: {
                quizId: quizIdNum,
            },
            select: {
                score: true,
                student: {
                    select: {
                        username: true,
                        id:true,
                        email:true
                    },
                },
                // quiz:{
                //     select:{
                //         title:true,
                //         question:{
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

        const questions = await prisma.quiz.findMany({
            where:{
                id:quizIdNum
            },
            select:{
                question:{
                    select:{
                        title:true,
                        answers:true,
                        correctAnswerIndex:true,
                        marks:true
                    }
                }
            }
        })

        res.json({
            result,
            quizTitle,
            questions
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
