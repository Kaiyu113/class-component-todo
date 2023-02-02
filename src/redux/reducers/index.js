import { combineReducers } from "redux";
import calReducer from "./calculator";
import personReducer from "./person";
export default combineReducers({
  calReducer,
  personReducer,
});
