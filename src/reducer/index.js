import {combineReducers} from 'redux'
import userReducer from "./user.reducer"
import globalSettingsReducer from './globalSettings.redcer';


const rootReducer = combineReducers({userReducer,globalSettingsReducer});
export default rootReducer;