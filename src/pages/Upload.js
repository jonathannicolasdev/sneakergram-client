import React from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import styled from "@emotion/styled";

import Header from "../components/Header";
import UploadSneakerForm from "../components/UploadSneakerForm";

const UploadContainer = styled.div`
  background-color: #efefef;
  padding-bottom: 30px;
`;

const Upload = ({ token }) => {
  return (
    <UploadContainer>
      <Header />
      {token && <UploadSneakerForm token={token} />}
      {!token && <Redirect to="/" />}
    </UploadContainer>
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
