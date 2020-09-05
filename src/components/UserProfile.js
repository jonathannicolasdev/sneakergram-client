import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

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

const UserProfile = ({ isLoading, profileData }) => {
  return (
    <div>
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

UserProfile.propTypes = {
  isLoading: PropTypes.bool,
  profileData: PropTypes.object,
};

export default UserProfile;
