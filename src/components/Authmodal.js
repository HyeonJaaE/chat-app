import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../actions/authAction";

const Authmodal = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState("unknown");

    const setAuth = (e) => {
        e.preventDefault();
        if (username === "") {
            window.alert("enter the username");
        } else {
            dispatch(setCurrentUser({ username: username }));
        }
    };

    return (
        <div className="modal main-div">
            <section className="modal-section">
                <h1>Set Username</h1>
                <form onSubmit={(e) => setAuth(e)}>
                    <input
                        type="text"
                        autoComplete="off"
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="unknown"
                    />
                    <button type="submit"> Accept </button>
                </form>
            </section>
        </div>
    );
};

export default Authmodal;
