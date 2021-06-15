import { combineReducers } from "redux";
import searchReducer from "./header";

const allReducers = combineReducers({
    search :searchReducer
})

export default allReducers;