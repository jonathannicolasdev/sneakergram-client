import { createStore } from "redux";

function reducer(
  initialState = {
    authenticated: false,
  },
  action
) {
  switch (action.type) {
    case "SET_AUTHENTICATED_TRUE":
      return {
        authenticated: true,
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
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
