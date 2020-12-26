export const SET_USER = "SET_CURRENT_USER";

export const setCurrentUser = (data) => ({
    type: SET_USER,
    payload: data,
});
