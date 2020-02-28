import { combineReducers } from "redux";
import users from "./users/reducer";
import timer from "./timer/reducer";
import counter from "./counter/reducer";

const rootReducer = combineReducers({
  users,
  timer,
  counter,
});

export default rootReducer;
