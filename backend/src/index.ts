import express from "express"
import http from "http"
import {WebSocketServer} from "ws"
import cors from "cors"

import { AdminRouter } from "./admin/routes"
import { authRouter } from "./auth/auth"
import { userRouter } from "./participant/routes.participants"

const app = express()
app.use(express.json())
app.use(cors());
const server = http.createServer(app)
export  const wss = new WebSocketServer({server})

app.get("/", (req, res)=>{
    res.json({
        msg:"hello server "
    })
})

wss.on("connection", (socket)=>{
    console.log("new user connected");

    socket.on("msg", (data)=>{
        wss.emit(data)
    })

    // join(wss, socket)
})

app.use("/api/v1/auth", authRouter)
app.use("/api/v1", AdminRouter)
app.use("/api/v1/student", userRouter)

server.listen(5000, ()=>{
    console.log("server running on 5000")
})





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