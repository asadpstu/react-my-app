import {combineReducers} from 'redux'
import userReducer from "./user.reducer"
import globalSettingsReducer from './globalSettings.redcer';
import userlistReducer from './userlist.reducer';


const rootReducer = combineReducers({userReducer,globalSettingsReducer,userlistReducer});
export default rootReducer;