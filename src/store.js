import { createStore, applyMiddleware, compose } from "redux";
//import thunk from "redux-thunk";
import rootReducer from "./reducers";
import loggerMiddleware from "./middleware/loggerMiddleware";

const initialState = {};
const middleware = [loggerMiddleware];

const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware)));

export default store;
