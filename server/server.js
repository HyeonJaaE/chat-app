const cors = require("cors");
const bodyParser = require("body-parser");
const express = require("express");

const app = express();
const router = require("./routes/index");

app.use(bodyParser.json());
app.use(cors());
app.use(router);

//server instance
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server, {
    cors: {
        origin: "*",
    },
});

const PORT = process.env.PORT || 5000;

let rooms = [];

io.on("connection", (socket) => {
    const { id } = socket.client;
    console.log("소켓 접속 완료", id);
    socket.on("disconnect", () => {
        console.log("user disconnected", id);
    });

    socket.on("get rooms", () => {
        io.emit("get rooms", rooms);
    });

    socket.on("join", (data) => {
        console.log("user", data.username, "joined to", data.roomId);
        if (!rooms.includes(data.roomId)) {
            rooms.push(data.roomId);
        }
        socket.join(data.roomId);
        io.emit("get rooms", rooms);
    });

    socket.on("send message", (data) => {
        console.log("user", data.username, "send msg", data);
        io.to(data.roomId).emit("send message", data);
    });
});

server.listen(PORT, () => {
    console.log(`express is running on ${PORT}`);
});
