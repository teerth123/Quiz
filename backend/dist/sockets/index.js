"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
let room = new Map();
index_1.wss.on("connection", (wss) => {
    console.log("new user connected");
});
