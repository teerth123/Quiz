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
            orderBy: {
                createdAt: "desc"
            },
            select: {
                quizId: true,
                score: true,
                createdAt: true,
                Quiz: {
                    select: {
                        title: true,
                        uniqueCode: true
                    }
                }
            }
        });
        res.json({
            result: result.map((r) => (Object.assign(Object.assign({}, r), { quiz: r.Quiz })))
        });
    }
    catch (e) {
        console.error("found error - " + e);
        return;
    }
}));
exports.readParticipantRouter.get("/quizByCode/:code", auth_middleware_1.verifyJWT, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.id) {
            console.error("user not found");
            return;
        }
        const { code } = req.params;
        const quiz = yield prisma.quiz.findFirst({
            where: { uniqueCode: code },
            select: {
                id: true,
                title: true,
                isOpen: true,
                Question: {
                    select: {
                        id: true,
                        title: true,
                        type: true,
                        answers: true,
                        marks: true
                    }
                }
            }
        });
        if (!quiz) {
            res.status(404).json({
                msg: "quiz not found"
            });
            return;
        }
        console.log("Quiz questions from DB:", JSON.stringify(quiz.Question, null, 2));
        if (!quiz.isOpen) {
            res.status(403).json({
                msg: "quiz is not accepting responses"
            });
            return;
        }
        const existingAttempt = yield prisma.studentQuiz.findFirst({
            where: {
                quizId: quiz.id,
                studentId: req.id
            },
            select: {
                id: true
            }
        });
        if (existingAttempt) {
            res.status(409).json({
                msg: "quiz already attempted"
            });
            return;
        }
        res.json({
            quiz: {
                id: quiz.id,
                title: quiz.title
            },
            questions: quiz.Question.map((q) => (Object.assign(Object.assign({}, q), { type: q.type || "MCQ" })))
        });
    }
    catch (e) {
        console.error("error found - " + e);
        res.status(500).json({
            msg: "unable to fetch quiz"
        });
        return;
    }
}));
exports.readParticipantRouter.get("/attemptedQuizDetails/:quizId", auth_middleware_1.verifyJWT, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.id) {
            console.error("user not found");
            return;
        }
        const { quizId: quizIdParam } = req.params;
        const quizId = Number(quizIdParam);
        if (Number.isNaN(quizId)) {
            res.status(400).json({
                msg: "invalid quiz id"
            });
            return;
        }
        const quiz = yield prisma.quiz.findUnique({
            where: { id: quizId },
            select: {
                id: true,
                title: true
            }
        });
        if (!quiz) {
            res.status(404).json({
                msg: "quiz not found"
            });
            return;
        }
        const attempt = yield prisma.studentQuiz.findFirst({
            where: {
                quizId: quizId,
                studentId: req.id
            },
            select: {
                score: true,
                createdAt: true
            }
        });
        if (!attempt) {
            res.status(403).json({
                msg: "quiz has not been attempted"
            });
            return;
        }
        const responses = yield prisma.response.findMany({
            where: {
                studentId: req.id,
                Question: {
                    Quiz: {
                        id: quizId
                    }
                }
            },
            select: {
                questionId: true,
                answeredIndex: true,
                answeredText: true,
                Question: {
                    select: {
                        id: true,
                        title: true,
                        type: true,
                        answers: true,
                        correctAnswerIndex: true,
                        correctAnswerText: true,
                        marks: true
                    }
                }
            }
        });
        res.json({
            quiz,
            attempt: {
                score: attempt.score,
                attemptedAt: attempt.createdAt
            },
            responses: responses.map((response) => {
                var _a, _b;
                return ({
                    questionId: response.questionId,
                    answeredIndex: response.answeredIndex,
                    answeredText: response.answeredText,
                    isCorrect: response.Question.type === "MCQ"
                        ? response.Question.correctAnswerIndex === response.answeredIndex
                        : ((_a = response.answeredText) === null || _a === void 0 ? void 0 : _a.toLowerCase().trim()) === ((_b = response.Question.correctAnswerText) === null || _b === void 0 ? void 0 : _b.toLowerCase().trim()),
                    question: Object.assign(Object.assign({}, response.Question), { id: response.Question.id, title: response.Question.title, type: response.Question.type, answers: response.Question.answers, correctAnswerIndex: response.Question.correctAnswerIndex, correctAnswerText: response.Question.correctAnswerText, marks: response.Question.marks })
                });
            })
        });
    }
    catch (e) {
        console.error("error found - " + e);
        res.status(500).json({
            msg: "unable to fetch attempt details"
        });
        return;
    }
}));
