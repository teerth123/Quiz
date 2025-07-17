import { Router } from "express";
import { postParticipantRouter } from "./actions/post.participant"; 
import { readParticipantRouter } from "./actions/read.participant";

export const userRouter = Router();
userRouter.use("/post", postParticipantRouter);
userRouter.use("/read", readParticipantRouter);
