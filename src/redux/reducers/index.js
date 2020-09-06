import { combineReducers } from "redux";

import register from "./register";
import login from "./login";
import profile from "./profile";

const rootReducer = combineReducers({
  register,
  login,
  profile,
});

export default rootReducer;
