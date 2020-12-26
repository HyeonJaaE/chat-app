import { SET_USER } from "../actions/authAction";

const initialState = {
    username: "",
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                username: action.payload.username,
            };
        default:
            return state;
    }
};
