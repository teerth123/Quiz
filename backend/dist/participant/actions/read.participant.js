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
exports.readParticipantRouter = void 0;
const express_1 = require("express");
const client_1 = require("@prisma/client");
const auth_middleware_1 = require("../../auth/auth.middleware");
exports.readParticipantRouter = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
exports.readParticipantRouter.get("/attemptedQuiz", auth_middleware_1.verifyJWT, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.id) {
            console.error("user not found");
            return;
        }
        const result = yield prisma.studentQuiz.findMany({
            where: {
                studentId: req.id,
            },
            select: {
                quizId: true,
                score: true,
                quiz: {
                    select: {
                        title: true
                    }
                }
            }
        });
        res.json({
            result
        });
    }
    catch (e) {
        console.error("found error - " + e);
        return;
    }
}));
exports.readParticipantRouter.get("/attemptedQuizDetails", auth_middleware_1.verifyJWT, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.id) {
            console.error("user not found");
            return;
        }
        const { quizId } = req.body;
        const isQuiz = yield prisma.quiz.findUnique({ where: { id: quizId } });
        if (!isQuiz) {
            res.json({
                msg: "quiz not found"
            });
            return;
        }
        const isAttempted = yield prisma.studentQuiz.findFirst({
            where: {
                studentId: req.id,
                quizId: quizId
            }
        });
        if (!isAttempted) {
            res.json({
                msg: "you haven't attended the quiz"
            });
            return;
        }
        const studentResp = yield prisma.response.findMany({
            where: {
                studentId: req.id,
                question: {
                    quizId: quizId
                }
            },
            select: {
                questionId: true,
                answeredIndex: true,
                question: {
                    select: {
                        title: true,
                        correctAnswerIndex: true,
                        marks: true,
                        answers: true
                    }
                }
            }
        });
        res.json({
            msg: studentResp
        });
    }
    catch (e) {
        console.error("error found - " + e);
        return;
    }
}));
