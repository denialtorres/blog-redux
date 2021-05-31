import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import userReducer from "./usersReducer";

// tricking redux reducer
export default combineReducers({
  posts: postsReducer,
  users: userReducer,
});
