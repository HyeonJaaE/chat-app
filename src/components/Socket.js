import io from "socket.io-client";
let socket;

export const initiateSocket = () => {
    console.log("Connect to socket...");
    if (!socket) socket = io("http://localhost:5000");
};

export const getRooms = (callback) => {
    //if (!socket) return true;

    socket.emit("get rooms");
    socket.on("get rooms", (data) => {
        console.log("get rooms : ", data);
        return callback(data);
    });
};

export const joinRoom = (data) => {
    socket.emit("join", data);
};

export const subscribeMsg = (callback) => {
    socket.on("send message", (data) => {
        console.log("message received");
        return callback(data);
    });
};

export const sendMsg = (data) => {
    socket.emit("send message", data);
};
