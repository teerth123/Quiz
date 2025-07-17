"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const post_participant_1 = require("./actions/post.participant");
const read_participant_1 = require("./actions/read.participant");
exports.userRouter = (0, express_1.Router)();
exports.userRouter.use("/post", post_participant_1.postParticipantRouter);
exports.userRouter.use("/read", read_participant_1.readParticipantRouter);
