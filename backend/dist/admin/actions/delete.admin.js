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
exports.deleteAdminRouter = void 0;
const express_1 = require("express");
const client_1 = require("@prisma/client");
const auth_middleware_1 = require("../../auth/auth.middleware");
const prisma = new client_1.PrismaClient();
exports.deleteAdminRouter = (0, express_1.Router)();
exports.deleteAdminRouter.delete("/deleteQue", auth_middleware_1.verifyJWT, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.id) {
            console.error("user not found");
            return;
        }
        const { queId } = req.body;
        const deleteQue = yield prisma.question.delete({
            where: { id: queId }
        });
        res.json({
            msg: "deleted succesfully, queId - ",
            queId
        });
    }
    catch (e) {
        console.error("error found - " + e);
        return;
    }
}));
exports.deleteAdminRouter.delete("/deleteQuiz", auth_middleware_1.verifyJWT, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { quizId } = req.body;
        const deleteQue = yield prisma.quiz.delete({
            where: { id: quizId }
        });
        res.json({
            msg: "deleted succesfully, queId - ",
            quizId
        });
    }
    catch (e) {
        console.error("error found - " + e);
        return;
    }
}));
