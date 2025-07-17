"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postParticipantRouter = void 0;
const express_1 = require("express");
const client_1 = require("@prisma/client");
const auth_middleware_1 = require("../../auth/auth.middleware");
exports.postParticipantRouter = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
exports.postParticipantRouter.post("/attemptQuiz", auth_middleware_1.verifyJWT, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let score = 0;
        if (!req.id) {
            console.error("user not found ");
            return;
        }
        const { studentResp, quizId } = req.body;
        const quiz = yield prisma.quiz.findUnique({
            where: { id: quizId }
        });
        if (!quiz) {
            res.json({
                msg: "quiz does not exist",
            });
            return;
        }
        const isAttended = yield prisma.studentQuiz.findFirst({
            where: {
                quizId: quizId,
                studentId: req.id
            }
        });
        if (isAttended) {
            res.json({
                msg: "already attempted",
            });
            return;
        }
        if (!quiz.isOpen) {
            res.json({
                msg: "not accepting responses"
            });
            return;
        }
        else {
            const res = yield prisma.response.createMany({
                data: studentResp.map((i) => ({
                    studentId: req.id,
                    questionId: i.questionId,
                    answeredIndex: i.answeredIndex,
                    createdAt: new Date(),
                }))
            });
            for (let i of studentResp) {
                let que = yield prisma.question.findUnique({
                    where: {
                        id: i.questionId
                    },
                    select: {
                        correctAnswerIndex: true,
                        marks: true
                    }
                });
                if ((que === null || que === void 0 ? void 0 : que.correctAnswerIndex) == i.answeredIndex)
                    score += que.marks;
            }
            const res2 = yield prisma.studentQuiz.create({
                data: {
                    studentId: req.id,
                    quizId: quizId,
                    score: score
                }
            });
        }
        res.json({
            msg: "succesfully submitted",
            marks: score
        });
    }
    catch (e) {
        console.error("error found - " + e);
        return;
    }
}));
