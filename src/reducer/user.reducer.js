import actionTypes from "../constants/actionTypes.const";
const initialState = {
    name: "",
    email: "",
    userName: "",
    gender: "",
    permissions: [],
    isLoggedIn : false,
    language : "en"
}

const userReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case actionTypes.USER_LOGIN:
            return {...state,...action.payload};
            break;
        default:
            return state;
    }
}

export default userReducer;