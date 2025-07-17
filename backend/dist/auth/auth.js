"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const client_1 = require("@prisma/client");
const dotenv = __importStar(require("dotenv"));
const auth_middleware_1 = require("./auth.middleware");
exports.authRouter = (0, express_1.Router)();
dotenv.config();
const SECRET = process.env.SECRET;
const prisma = new client_1.PrismaClient();
if (!SECRET) {
    console.error("secret env variable not found");
}
else {
    exports.authRouter.post("/signup", auth_middleware_1.signupMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { email, username, password } = req.body;
        try {
            const existingUser = yield prisma.user.findUnique({
                where: {
                    email: email
                }
            });
            if (existingUser && existingUser.password === password) {
                const token = jsonwebtoken_1.default.sign({ email: email, id: existingUser.id }, SECRET, { expiresIn: "30d" });
                res.json({
                    msg: "user already exists, signing you in",
                    token
                });
                return;
            }
            else if (existingUser && existingUser.password != password) {
                res.json({
                    msg: "user already exists, wrong credentials"
                });
                return;
            }
            else if (!existingUser) {
                const newUser = yield prisma.user.create({
                    data: {
                        username,
                        email,
                        password,
                    }
                });
                const token = jsonwebtoken_1.default.sign({ email: email, id: newUser.id }, SECRET, { expiresIn: "30d" });
                res.json({
                    msg: "user already exists, signing you in",
                    token
                });
                return;
            }
        }
        catch (e) {
            console.error("error: " + e);
            return;
        }
    }));
    exports.authRouter.post("/signin", auth_middleware_1.signinMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { email, password } = req.body;
        try {
            const existingUser = yield prisma.user.findUnique({
                where: {
                    email: email
                }
            });
            if (existingUser && existingUser.password == password) {
                const token = jsonwebtoken_1.default.sign({ email: email, id: existingUser.id }, SECRET, { expiresIn: "30d" });
                res.json({
                    msg: "succesful login",
                    token
                });
                return;
            }
            else if (existingUser) {
                res.json({
                    msg: "invalid credentials",
                });
                return;
            }
            else {
                res.json({
                    msg: "user does not exist",
                });
                return;
            }
        }
        catch (e) {
            console.error("error:" + e);
            return;
        }
    }));
}
//
