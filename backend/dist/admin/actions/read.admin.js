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
exports.readAdminRouter = void 0;
const express_1 = require("express");
const client_1 = require("@prisma/client");
const auth_middleware_1 = require("../../auth/auth.middleware");
exports.readAdminRouter = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
exports.readAdminRouter.get("/createdQuizes", auth_middleware_1.verifyJWT, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const quizes = yield (prisma.quiz.findMany)({
        where: {
            authorId: req.id
        },
        select: {
            id: true,
            StudentQuiz: true,
            title: true,
            createdAt: true,
            // isOpen:true 
            realTime: true,
            uniqueCode: true
        },
    });
    res.json({
        quizes
    });
}));
exports.readAdminRouter.get("/resultperQuiz/:quizId", auth_middleware_1.verifyJWT, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { quizId } = req.params;
    // console.log(typeof (quizId))
    const quizIdNum = Number(quizId);
    // console.log(quizId)
    try {
        if (!req.id) {
            console.error("user not found");
            return;
        }
        const quizTitle = yield prisma.quiz.findUnique({
            where: {
                id: quizIdNum
            },
            select: {
                title: true
            }
        });
        const result = yield prisma.studentQuiz.findMany({
            where: {
                quizId: quizIdNum,
            },
            select: {
                score: true,
                User: {
                    select: {
                        username: true,
                        id: true,
                        email: true
                    },
                },
                // Quiz:{
                //     select:{
                //         title:true,
                //         Question:{
                //            select:{
                //                 title:true,
                //                 answers:true,
                //                 correctAnswerIndex:true,
                //                 marks:true
                //             }
                //         }
                //     }
                // }
            }
        });
        const questions = yield prisma.quiz.findMany({
            where: {
                id: quizIdNum
            },
            select: {
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
            result: result.map((r) => (Object.assign(Object.assign({}, r), { student: r.User }))),
            quizTitle,
            questions: questions.map((q) => ({
                question: q.Question
            })),
            status: "+"
        });
        console.log(result); //student response
        console.log(quizTitle); //quiz title
        console.log(questions); //questoins
    }
    catch (e) {
        console.error("error found -" + e);
    }
}));
// readAdminRouter.get("/attendedQuizes", verifyJWT, async(req:userReq, res:Response)=>{
//     const quizes = await prisma.quiz.findMany({
//         where:{
//         }
//     })
// })
