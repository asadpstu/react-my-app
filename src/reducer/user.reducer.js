import actionTypes from "../constants/actionTypes.const";
const initialState = {
    name: "",
    email: "",
    userName: "",
    gender: "",
    permissions: [],
    isLoggedIn: false,
    language: "en",
    secondaryEmail: '',
    details: ''
}

const userReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case actionTypes.USER_LOGIN:
            return { ...state, ...action.payload };
            break;
        case actionTypes.POPUP_MODAL:
            let temp ={
                secondaryEmail : action.payload.email,
                details : action.payload.details 
            }
            return { ...state, ...temp }
            break;
        default:
            return state;
    }
}

export default userReducer;