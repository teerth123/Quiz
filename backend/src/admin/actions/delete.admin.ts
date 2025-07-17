import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { verifyJWT } from "../../auth/auth.middleware";
import { Request, Response } from "express";
import { userReq } from "../../auth/auth.middleware";

const prisma = new PrismaClient()
export const deleteAdminRouter = Router()

deleteAdminRouter.delete("/deleteQue", verifyJWT, async(req:userReq, res:Response)=>{
    try{
        if(!req.id){
            console.error("user not found")
            return
        }
        const {queId} = req.body as {queId:number}

        const deleteQue = await prisma.question.delete({
            where:{id:queId}
        })

        res.json({
            msg:"deleted succesfully, queId - ",
            queId
        })
        
    }catch(e){
        console.error("error found - " + e)
        return
    }
})


deleteAdminRouter.delete("/deleteQuiz", verifyJWT, async(req, res)=>{
    try{
        const {quizId} = req.body as {quizId:number}

        const deleteQue = await prisma.quiz.delete({
            where:{id:quizId}
        })

        res.json({
            msg:"deleted succesfully, queId - ",
            quizId
        })
        
    }catch(e){
        console.error("error found - " + e)
        return
    }
})

