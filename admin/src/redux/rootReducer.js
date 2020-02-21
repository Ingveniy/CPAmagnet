import { combineReducers } from "redux";
import articles from "./articles/reducer";
import article from "./article/reducer";

const rootReducer = combineReducers({
  articles,
  article,
});

export default rootReducer;
