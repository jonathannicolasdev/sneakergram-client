import React from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Header from "../components/Header";
import UploadSneakerForm from "../components/UploadSneakerForm";

const Upload = ({ token }) => {
  return (
    <div>
      <Header />
      {token && <UploadSneakerForm token={token} />}
      {!token && <Redirect to="/" />}
    </div>
  );
};

Upload.propTypes = {
  token: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return {
    token: state.login.token,
  };
};

export default connect(mapStateToProps)(Upload);
