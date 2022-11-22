import actionTypes from "../constants/actionTypes.const";
const initialState = {
    users:[]
}

const userlistReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case actionTypes.USER_LIST_TYPICODE:
            return {...state, users:action.payload};
            break;
        default:
            return state;
    }
}

export default userlistReducer;