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

saveState(store.getState());

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
