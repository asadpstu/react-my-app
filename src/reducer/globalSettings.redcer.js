const initialState = {
  menu : [],
  theme : "default" /* default | dark | light */
}

const globalSettingsReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default globalSettingsReducer;