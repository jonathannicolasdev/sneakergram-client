import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import RegisterLogin from "./pages/RegisterLogin";

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">{authenticated ? <Home /> : <RegisterLogin />}</Route>
        </Switch>

        <footer>
          <button onClick={() => setAuthenticated(!authenticated)}>
            Change Auth
          </button>
        </footer>
      </div>
    </Router>
  );
}
