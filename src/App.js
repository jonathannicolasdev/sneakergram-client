import React from "react";
import { Provider } from "react-redux";

import store from "./redux/store";
import Router from "./Router";

console.log(process.env.REACT_APP_API_URL);

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
