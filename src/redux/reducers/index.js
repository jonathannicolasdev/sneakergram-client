import { combineReducers } from "redux";

import register from "./register";
import login from "./login";
import profile from "./profile";
import sneakers from "./sneakers";

const rootReducer = combineReducers({
  register,
  login,
  profile,
  sneakers,
});

export default rootReducer;
