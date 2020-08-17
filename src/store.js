import { createStore } from "redux";

import { loadState, saveState } from "./utils/storage";

function reducer(
  initialState = {
    authenticated: false,
    token: null,
  },
  action
) {
  switch (action.type) {
    case "SET_AUTHENTICATED_TRUE":
      return {
        authenticated: true,
        token: action.payload.token,
        decodedToken: action.payload.decodedToken,
      };
    case "SET_AUTHENTICATED_FALSE":
      return {
        authenticated: false,
      };
    default:
      return initialState;
  }
}

const store = createStore(
  reducer,
  loadState(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

saveState(store.getState());

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
