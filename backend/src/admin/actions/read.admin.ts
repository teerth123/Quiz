import { Router, Response } from "express";
import { PrismaClient } from "../../generated/prisma";
import { userReq } from "../../auth/auth.middleware";
import { verifyJWT } from "../../auth/auth.middleware";
import { Quiz } from "@prisma/client";


export const readAdminRouter = Router()
const prisma = new PrismaClient()

readAdminRouter.get("/createdQuizes", verifyJWT, async (req:userReq, res:Response)=>{
    const quizes = await prisma.quiz.findMany({
        where:{
            authorId:req.id
        },
        select:{
            studentQuizzes:true,
            title:true,
        }
    })

    res.json({
        quizes
    })
    
})

readAdminRouter.get("/resultperQuiz", verifyJWT, async(req:userReq, res)=>{
    try{
        if(!req.id){
            console.error("user not found")
            return
        }
        const {quizId} = req.body as {quizId : number}
        const result = await prisma.quiz.findUnique({
            where:{
              id:quizId  ,
              authorId:req.id!
            }, 
            include:{
                studentQuizzes:{
                    select:{
                        student:{
                            select:{
                                username:true
                            }
                        },
                        score:true
                    },
                }
            }
        })

        res.json({
            result
        })

    }catch(e){

    }
})


// readAdminRouter.get("/attendedQuizes", verifyJWT, async(req:userReq, res:Response)=>{
//     const quizes = await prisma.quiz.findMany({
//         where:{

//         }
//     })
// })
