import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Authmodal from "./Authmodal";
import { initiateSocket, getRooms } from "./Socket";

const Lobby = () => {
    const auth = useSelector((state) => state.auth);
    const history = useHistory();
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        console.log("Lobby was rendered.");
        initiateSocket();
        getRooms((data) => {
            setRooms(data);
        });
    }, []);

    const makeRoom = () => {
        let roomid = String(Math.floor(Math.random() * (1000 - 0)));
        history.push("/room/" + roomid);
    };

    const enterRoom = (e) => {
        e.preventDefault();
        history.push("/room/" + e.target.value);
    };

    return (
        <div className="main-div">
            {auth.username === "" && <Authmodal />}
            <section>
                <h1>Hello, {auth.username}</h1>
                <div className="room-list">
                    {rooms.map((roomId) => (
                        <div>
                            <button key={roomId} value={roomId} onClick={(e) => enterRoom(e)}>
                                {roomId}
                            </button>
                        </div>
                    ))}
                </div>
                <button onClick={makeRoom}> Make Room </button>
            </section>
        </div>
    );
};

export default Lobby;
