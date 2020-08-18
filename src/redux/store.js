import { createStore } from "redux";

import { loadState, saveState } from "../utils/storage";

import rootReducer from "./reducers";

const store = createStore(
  rootReducer,
  loadState(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

saveState(store.getState());

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
