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
        default:
            return state;
    }
}

export default userReducer;