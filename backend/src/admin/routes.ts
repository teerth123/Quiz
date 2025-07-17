import { Router } from "express";
import Jwt from "jsonwebtoken";
import * as dotenv from "dotenv"
import { readAdminRouter } from "./actions/read.admin";
import { postAdminRouter } from "./actions/post.admin";
import { putAdminRouter } from "./actions/put.admin";
import { deleteAdminRouter } from "./actions/delete.admin";
export const AdminRouter = Router()

AdminRouter.use("/read",readAdminRouter)
AdminRouter.use("/post", postAdminRouter)
AdminRouter.use("/put" , putAdminRouter)
AdminRouter.use("/delete", deleteAdminRouter)