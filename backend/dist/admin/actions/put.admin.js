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
exports.putAdminRouter = void 0;
const express_1 = require("express");
const client_1 = require("@prisma/client");
const auth_middleware_1 = require("../../auth/auth.middleware");
exports.putAdminRouter = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
exports.putAdminRouter.put("/updateQuiz", auth_middleware_1.verifyJWT, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        if (!req.id) {
            console.error("user not found");
            return;
        }
        const { quizId, title, realTime, questions } = req.body;
        const quiz = yield prisma.quiz.findUnique({
            where: {
                id: quizId
            }
        });
        if (quiz && quiz.id == quizId) {
            //change in quiz
            const changeInQuiz = yield prisma.quiz.update({
                data: {
                    title: title,
                    realTime: realTime
                },
                where: {
                    id: quizId
                }
            });
            //change in questions
            for (const q of questions) {
                yield prisma.question.update({
                    where: { id: q.id },
                    data: {
                        title: q.title,
                        answers: q.answers,
                        correctAnswerIndex: q.correctAnswerIndex,
                        marks: q.marks,
                        countDown: (quiz === null || quiz === void 0 ? void 0 : quiz.realTime) ? ((_a = q.countDown) !== null && _a !== void 0 ? _a : 30) : null,
                    }
                });
            }
            res.json({
                msg: "changes succesful in quiz = ",
                quizId
            });
            return;
        }
        else {
            res.json({
                msg: "quiz  does not exist with quiz id - ",
                quizId
            });
            return;
        }
    }
    catch (e) {
        console.error("error found - " + e);
        return;
    }
}));
exports.putAdminRouter.put("/toggleAccepting", auth_middleware_1.verifyJWT, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.id) {
            console.error("user not found");
            return;
        }
        const { quizId, action } = req.body;
        const quiz = yield prisma.quiz.findUnique({
            where: { id: quizId }
        });
        if (!quiz) {
            res.json({
                msg: "quiz does not exist",
            });
            return;
        }
        else {
            const res = yield prisma.quiz.update({
                where: {
                    id: quizId
                },
                data: {
                    isOpen: action
                }
            });
        }
        res.json({
            msg: "closed succesfully"
        });
        return;
    }
    catch (e) {
        console.error("error found - " + e);
        return;
    }
}));
