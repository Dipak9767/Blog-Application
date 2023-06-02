import { combineReducers } from "redux";
import { BlogReducer } from "./Reducers";

const rootReducer = combineReducers({
    blogs:BlogReducer
})

export default rootReducer;