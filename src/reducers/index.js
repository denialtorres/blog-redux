import { combineReducers } from "redux";

// tricking redux reducer
export default combineReducers({
  dummy: () => 10,
});
