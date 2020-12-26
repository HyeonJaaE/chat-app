import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Authmodal from "./Authmodal";
import { initiateSocket, joinRoom, subscribeMsg, sendMsg } from "./Socket";

const Room = (props) => {
    const auth = useSelector((state) => state.auth);
    const [chat, setChat] = useState([]);
    const [msg, setMsg] = useState("");
    const roomid = props.match.params.roomid;

    useEffect(() => {
        console.log(chat);
    }, [chat]);

    useEffect(() => {
        initiateSocket();
        joinRoom({ roomId: roomid, username: auth.username });
        subscribeMsg((data) => {
            console.log("in component", data);
            setChat((chat) => [...chat, data]);
        });
    }, []);

    const submit = (e) => {
        e.preventDefault();
        setMsg("");
        sendMsg({ roomId: roomid, username: auth.username, msg: msg });
    };

    return (
        <div className="main-div">
            {auth.username === "" && <Authmodal />}
            <section className="chat">
                <h1> Room {roomid}</h1>

                {chat.map((c, idx) => (
                    <div key={idx}>
                        {c.username} : {c.msg}
                    </div>
                ))}
            </section>
            <section>
                <form className="chat-form" onSubmit={(e) => submit(e)}>
                    <input
                        type="text"
                        autoComplete="off"
                        onChange={(e) => setMsg(e.target.value)}
                        value={msg}
                        placeholder="message"
                    />
                    <button type="submit"> send </button>
                </form>
            </section>
        </div>
    );
};

export default Room;
