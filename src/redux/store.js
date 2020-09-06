import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { loadState, saveState } from "../utils/storage";
import rootReducer from "./reducers";

const middlewares = [thunk];

const store = createStore(
  rootReducer,
  loadState(),
  composeWithDevTools(applyMiddleware(...middlewares))
);
// https://github.com/zalmoxisus/redux-devtools-extension#installation

saveState(store.getState()); // only once

store.subscribe(() => {
  saveState(store.getState()); // whenever there are state changes
});

export default store;
