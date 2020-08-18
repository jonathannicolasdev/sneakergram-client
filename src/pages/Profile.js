import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
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
    font-size: 16px;
  }
  h2 {
    font-size: 12px;
  }
`;

const Profile = () => {
  let { username } = useParams();

  return (
    <div>
      <Header />
      <User>
        <UserImage src="/assets/avatars/jonathan.jpg"></UserImage>
        <UserInfo>
          <h1>{username}</h1>
          <h2>Jonathan Nicolas</h2>
          <p>8 sneakers</p>
          <p>with a sneaker he astonished paris</p>
        </UserInfo>
      </User>
    </div>
  );
};

export default Profile;
