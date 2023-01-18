import { combineReducers } from "redux";
import { authUserReducer } from "./authReducer";

export const rootReducer = combineReducers({
    auth : authUserReducer
})