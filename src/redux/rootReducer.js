import { combineReducers } from "redux";
import LanguageReducer from "./language/listReducer";

const rootReducer = combineReducers({
    Language: LanguageReducer,
})

export default rootReducer;
