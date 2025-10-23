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
    var _a;
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
                data: studentResp.map((i) => {
                    var _a, _b;
                    return ({
                        studentId: req.id,
                        questionId: i.questionId,
                        answeredIndex: (_a = i.answeredIndex) !== null && _a !== void 0 ? _a : 0,
                        answeredText: (_b = i.answeredText) !== null && _b !== void 0 ? _b : "",
                        createdAt: new Date(),
                    });
                })
            });
            for (let i of studentResp) {
                const que = yield prisma.question.findUnique({
                    where: {
                        id: i.questionId
                    },
                    select: {
                        type: true,
                        correctAnswerIndex: true,
                        marks: true
                    }
                });
                if (!que)
                    continue;
                // Score MCQ questions
                if (que.type === "MCQ" && que.correctAnswerIndex != null) {
                    if (que.correctAnswerIndex == i.answeredIndex) {
                        score += que.marks;
                    }
                }
                // For INPUT questions: award marks only if teacher explicitly verified
                // (For now, teachers must manually grade input responses)
                // Optional: Add automatic text matching if correctAnswerText is set
                else if (que.type === "INPUT") {
                    // Fetch full question to get correctAnswerText if needed
                    const fullQuestion = yield prisma.question.findUnique({
                        where: { id: i.questionId }
                    });
                    if ((fullQuestion === null || fullQuestion === void 0 ? void 0 : fullQuestion.correctAnswerText) && ((_a = i.answeredText) === null || _a === void 0 ? void 0 : _a.toLowerCase().trim()) === fullQuestion.correctAnswerText.toLowerCase().trim()) {
                        score += que.marks;
                    }
                }
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
