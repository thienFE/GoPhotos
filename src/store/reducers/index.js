import { combineReducers } from "redux";
import keywordSearchReducer from "./keywordSearchReducer";
import photoReducer from "./photoReducer";

const rootReducer = combineReducers({
    photos: photoReducer,
    keyword: keywordSearchReducer,
})

export default rootReducer