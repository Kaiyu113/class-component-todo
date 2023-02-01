import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import calReducer from "./calReducer";
const store = createStore(calReducer, applyMiddleware(thunk));

export default store;
