import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";

import Header from "../components/Header";

import getProfile from "../redux/actions/profile";

const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UserImage = styled.img`
  border-radius: 50%;
  width: 80px;
`;

const UserInfo = styled.div`
  margin: 15px;
  h1 {
    font-size: 28px;
  }
  h2 {
    font-size: 16px;
  }
  p {
    font-size: 16px;
  }
`;

const Profile = ({ isLoading, profileData, handleGetProfile }) => {
  const { username } = useParams();

  useEffect(() => {
    handleGetProfile(username);
  }, [username, handleGetProfile]);

  return (
    <div>
      <Header />
      {isLoading && <p>Loading profile data...</p>}
      {!isLoading && profileData && (
        <User>
          <UserImage src={profileData.avatarUrl} />
          <UserInfo>
            <h1>{profileData.username}</h1>
            <h2>{profileData.name || ""}</h2>
            <p>
              <b>{profileData.sneakers.length}</b> sneakers
            </p>
            <p>{profileData.bio || ""}</p>
          </UserInfo>
        </User>
      )}
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
