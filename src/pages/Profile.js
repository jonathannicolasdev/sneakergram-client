import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import Header from "../components/Header";
import UserProfile from "../components/UserProfile";

import getProfile from "../redux/actions/profile";

const Profile = ({ isLoading, profileData, handleGetProfile }) => {
  const { username } = useParams();

  useEffect(() => {
    handleGetProfile(username);
  }, [username, handleGetProfile]);

  return (
    <div>
      <Header />
      <UserProfile isLoading={isLoading} profileData={profileData} />
    </div>
  );
};

Profile.propTypes = {
  isLoading: PropTypes.bool,
  profileData: PropTypes.object,
  handleGetProfile: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.profile.isLoading,
    profileData: state.profile.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleGetProfile: (username) => dispatch(getProfile(username)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
