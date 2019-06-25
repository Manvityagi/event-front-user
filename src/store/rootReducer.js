import { combineReducers } from "redux";
import auth from './auth';
import events from './events';
import window from './window';

const rootReducer = combineReducers({
    auth,
    events,
    window
});

export default rootReducer;