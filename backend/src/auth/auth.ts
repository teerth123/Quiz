import { Router } from "express";
import Jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
import * as dotenv from "dotenv"
import { signupMiddleware, signinMiddleware } from "./auth.middleware";

export const authRouter = Router()
dotenv.config()
const SECRET = process.env.SECRET
const prisma = new PrismaClient()

if (!SECRET) {
    console.error("secret env variable not found")
} else {
    authRouter.post("/signup",signupMiddleware, async (req, res) => {
        const { email, username, password } = req.body as { email: string, username: string, password: string }
        try {
            const existingUser = await prisma.user.findUnique({
                where: {
                    email: email
                }
            })

            if (existingUser && existingUser.password === password) {
                const token = Jwt.sign({ email: email, id: existingUser.id }, SECRET, { expiresIn: "30d" })
                res.json({
                    msg: "user already exists, signing you in",
                    token
                })

                return
            }

            else if (existingUser && existingUser.password != password) {
                res.json({
                    msg: "user already exists, wrong credentials"
                })
                return
            }

            else if (!existingUser) {
                const newUser = await prisma.user.create({
                    data: {
                        username,
                        email,
                        password,
                    }
                })
                const token = Jwt.sign({ email: email, id: newUser.id }, SECRET, { expiresIn: "30d" })
                res.json({
                    msg: "user already exists, signing you in",
                    token
                })
                return
            }

        } catch (e) {
            console.error("error: " + e)
            return;
        }

    })


    authRouter.post("/signin", signinMiddleware, async(req, res)=>{
        const {email, password} = req.body as {email:string, password:string}

        try{
            const existingUser = await prisma.user.findUnique({
                where:{
                    email:email
                }
            })

            if(existingUser && existingUser.password==password){
                const token = Jwt.sign({email:email, id:existingUser.id}, SECRET, {expiresIn:"30d"})
                res.json({
                    msg:"succesful login",
                    token
                })
                return
            }
            else if(existingUser){
                res.json({
                    msg:"invalid credentials",
                })
                return
            }

            else{
                res.json({
                    msg:"user does not exist",
                })
                return;
            }
        }catch(e){
            console.error("error:" +e)
            return;
        }
    })
}





//
