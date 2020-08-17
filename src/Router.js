import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import RegisterLogin from "./pages/RegisterLogin";
import Upload from "./pages/Upload";

const Router = ({ authenticated }) => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/">
            {authenticated ? <Home /> : <RegisterLogin />}
          </Route>
          <Route path="/upload">
            <Upload />
          </Route>
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
