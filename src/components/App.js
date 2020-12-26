import React from "react";
import { useHistory } from "react-router-dom";

const App = () => {
    const history = useHistory();

    const enterLobby = (e) => {
        e.preventDefault();
        history.push("/lobby");
    };

    return (
        <div className="app-main-div main-div">
            <section className="app-title">
                <h1>Chat</h1>
            </section>
            <button onClick={enterLobby}> Make / Join Room </button>
        </div>
    );
};

export default App;
