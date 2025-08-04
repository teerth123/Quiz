import {wss} from "../index"

interface roomInterface{
    adminWs : WebSocket,
    participantsWs : Set<WebSocket>
}

let room : Map<string, (roomInterface)> = new Map()

wss.on("connection", (wss:WebSocket)=>{
    console.log("new user connected");


})