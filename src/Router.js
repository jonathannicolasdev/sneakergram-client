import React from "react";
import { connect } from "react-redux";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import RegisterLogin from "./pages/RegisterLogin";

const Router = ({ authenticated, login, logout }) => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">{authenticated ? <Home /> : <RegisterLogin />}</Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({
  authenticated: state.authenticated,
});

const mapDispatchToProps = (dispatch) => {
  return {
    login: () => dispatch({ type: "SET_AUTHENTICATED_TRUE" }),
    logout: () => dispatch({ type: "SET_AUTHENTICATED_FALSE" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Router);
