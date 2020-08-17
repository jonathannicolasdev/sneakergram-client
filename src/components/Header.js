import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0px;
  border-bottom: 1px solid #c4c4c4;
  margin-bottom: 10px;
  background-color: #ffff;
`;

const Logo = styled.div`
  text-transform: capitalize;
  font-family: Comfortaa;
  font-size: 24px;
`;

const Navigation = styled.div`
  margin-left: 100px;
  display: flex;
`;

const HomeIcon = styled.img`
  margin: 0px 8px;
`;

const ProfileImage = styled.img`
  max-width: 100%;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  margin: 0px 8px;
`;

const UploadButton = styled.button`
  text-transform: capitalize;
  background: #66bd22;
  border-radius: 100px;
  padding: 0px 20px;
  color: #ffff;
  margin: 0px 5px;
  width: 105px;
  height: 40px;
  font-size: 16px;
  border: none;
  margin: 0px 8px;
`;

const Header = () => {
  return (
    <HeaderStyled>
      <Logo>sneakergram</Logo>
      <Navigation>
        <HomeIcon src="/assets/icons/home.svg" alt="home" />
        <ProfileImage src="/assets/avatars/jonathan.jpg" alt="jonathan" />
        <Link to="/upload">
          <UploadButton>upload</UploadButton>
        </Link>
      </Navigation>
    </HeaderStyled>
  );
};

export default Header;
