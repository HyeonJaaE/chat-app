import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";
import Lobby from "./components/Lobby";
import Room from "./components/Room";
import store from "./store";
import "./css/App.css";

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route exact path="/" component={App}></Route>
            <Route path="/room/:roomid" component={Room}></Route>
            <Route path="/lobby" component={Lobby}></Route>
        </Router>
    </Provider>,
    document.getElementById("root")
);
