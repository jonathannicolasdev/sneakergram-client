import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import RegisterLogin from "./pages/RegisterLogin";

const Router = ({ authenticated }) => {
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

Router.propTypes = {
  authenticated: PropTypes.bool,
};

export default connect(mapStateToProps)(Router);
