import Jwt from "jsonwebtoken";
import * as dotenv from "dotenv"
import { string, z } from "zod"
import { Request, Response, NextFunction } from "express";

dotenv.config()
const SECRET = process.env.SECRET



const signupSchema = z.object({
    email: string().email(),
    password: string().min(6).max(16),
    username: string().min(4).max(16)
})

const signinSchema = z.object({
    email: string().email(),
    password: string().min(6).max(16)
})

export const signupMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const parse = signupSchema.safeParse(req.body)
    if (!parse.success) {
        res.json({
            msg: "credentials do not match criteria",
            error:parse.error.issues
        })
        return
    } else {
        next();
    }
}


export const signinMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const parse = signinSchema.safeParse(req.body)
    if (!parse.success) {
        res.json({
            msg: "credentials do not match criteria"
        })
        return
    } else {
        next();
    }
}



export interface userReq extends Request {
    email?: string,
    id?: number
}

export const verifyJWT = (req: userReq, res: Response, next: NextFunction) => {
    const auth = req.headers.authorization || req.headers.Authorization
    if (!auth || typeof auth !== "string" || !auth.startsWith("Bearer ")) {
        res.json({
            msg: "token not found"
        })
        return
    }
    else {
        if (!SECRET) {
            console.error("env variable secrete not found")
            return
        } else {
            const token = auth.split(" ")[1]
            if (token) {

                const decoded = Jwt.verify(token, SECRET) as { email: string, id: number, iat: number }

                req.email = decoded.email
                req.id = decoded.id

                next()
            }

            else{
                console.error("token not found")
                return
            }
        }

    }
}
