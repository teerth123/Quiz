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
exports.postAdminRouter = void 0;
const client_1 = require("@prisma/client");
const express_1 = require("express");
const auth_middleware_1 = require("../auth/auth.middleware");
const nanoid_1 = require("nanoid");
exports.postAdminRouter = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
exports.postAdminRouter.post("/createQuiz", auth_middleware_1.verifyJWT, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.id) {
            console.error("user id not found");
            return;
        }
        const { title, realTime } = req.body;
        let uniqueCode = (0, nanoid_1.nanoid)(6);
        while (1) {
            const isDuplicate = yield prisma.quiz.findMany({
                where: {
                    uniqueCode: uniqueCode
                }
            });
            if (isDuplicate.length > 0) {
                uniqueCode = (0, nanoid_1.nanoid)(6);
            }
            else {
                break;
            }
        }
        const quizCreated = yield prisma.quiz.create({
            data: {
                title: title,
                createdAt: new Date(),
                authorId: req.id,
                uniqueCode: uniqueCode,
                realTime: realTime
            }
        });
        const quizId = quizCreated.id;
        res.json({
            msg: "quiz created succesfully",
            quizId
        });
    }
    catch (e) {
        console.error("error found : " + e);
        return;
    }
}));
exports.postAdminRouter.post("/addQuestions", auth_middleware_1.verifyJWT, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { questions, quizId } = req.body;
        const quiz = yield prisma.quiz.findUnique({
            where: { id: quizId }
        });
        if (!quiz) {
            res.json({
                msg: "quiz does not exist with quizid - ",
                quizId
            });
            return;
        }
        const addQuestions = yield prisma.question.createMany({
            data: questions.map((i) => {
                var _a;
                return ({
                    title: i.title,
                    answers: i.answers,
                    countDown: (quiz === null || quiz === void 0 ? void 0 : quiz.realTime) ? ((_a = i.countDown) !== null && _a !== void 0 ? _a : 30) : null,
                    correctAnswerIndex: i.correctAnswerIndex,
                    marks: i.marks,
                    quizId: quizId
                });
            })
        });
        if (addQuestions) {
            res.json({
                msg: "added questions succesfully to quiz, quizId is",
                quizId
            });
        }
    }
    catch (e) {
        console.error("error found  " + e);
        return;
    }
}));
