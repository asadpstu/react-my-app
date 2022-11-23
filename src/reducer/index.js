import {combineReducers} from 'redux'
import userReducer from "./user.reducer"
import globalSettingsReducer from './globalSettings.redcer';
import userlistReducer from './userlist.reducer';
import Child1Reducer from './child1.reducer';
import Child2Reducer from './child2.reducer';
import ParentReducer from './parent.reducer';

const rootReducer = combineReducers({userReducer,globalSettingsReducer,userlistReducer,Child1Reducer,Child2Reducer, ParentReducer});
export default rootReducer;