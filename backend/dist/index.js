"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.wss = void 0;
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const ws_1 = require("ws");
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./admin/routes");
const auth_1 = require("./auth/auth");
const routes_participants_1 = require("./participant/routes.participants");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const server = http_1.default.createServer(app);
exports.wss = new ws_1.WebSocketServer({ server });
app.get("/", (req, res) => {
    res.json({
        msg: "hello server "
    });
});
exports.wss.on("connection", (socket) => {
    console.log("new user connected");
    socket.on("msg", (data) => {
        exports.wss.emit(data);
    });
    // join(wss, socket)
});
app.use("/api/v1/auth", auth_1.authRouter);
app.use("/api/v1", routes_1.AdminRouter);
app.use("/api/v1/student", routes_participants_1.userRouter);
server.listen(5000, () => {
    console.log("server running on 5000");
});
// 
//create new quiz
//add questions, update, delete
//get created quiz   
//toggle [realtime, http]
//close quiz(!realtime) -> not accepting responses
// get bulk result quiz wise for teacher
//done till here
//start quiz
//if (realtime) get next que
//get result(realtime)
//kick participant
//close quiz(realtime)
//join quiz
//get leaderboard(realtime)
//answer que
//leave quiz
// done following
//get attended quiz
//submit quiz(!realtime)
//admin routes do not have following conditions
// if(!req.id){
//     console.error("user does not exist")
//     return
// }
