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
const prisma_1 = require("../../generated/prisma");
const auth_middleware_1 = require("../../auth/auth.middleware");
exports.readAdminRouter = (0, express_1.Router)();
const prisma = new prisma_1.PrismaClient();
exports.readAdminRouter.get("/createdQuizes", auth_middleware_1.verifyJWT, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const quizes = yield prisma.quiz.findMany({
        where: {
            authorId: req.id
        },
        select: {
            studentQuizzes: true,
            title: true,
        }
    });
    res.json({
        quizes
    });
}));
exports.readAdminRouter.get("/resultperQuiz", auth_middleware_1.verifyJWT, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.id) {
            console.error("user not found");
            return;
        }
        const { quizId } = req.body;
        const result = yield prisma.quiz.findUnique({
            where: {
                id: quizId,
                authorId: req.id
            },
            include: {
                studentQuizzes: {
                    select: {
                        student: {
                            select: {
                                username: true
                            }
                        },
                        score: true
                    },
                }
            }
        });
        res.json({
            result
        });
    }
    catch (e) {
    }
}));
// readAdminRouter.get("/attendedQuizes", verifyJWT, async(req:userReq, res:Response)=>{
//     const quizes = await prisma.quiz.findMany({
//         where:{
//         }
//     })
// })
