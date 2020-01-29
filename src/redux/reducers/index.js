import { combineReducers } from "redux";
import courses from "./courseReducer";
import navigation from "./navigationReducer";

const rootReducer = combineReducers({
  courses,
  navigation
});

export default rootReducer;
