import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

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

const Button = styled.button`
  text-transform: capitalize;
  background: #66bd22;
  border-radius: 100px;
  padding: 0px 20px;
  color: #ffff;
  margin: 0px 5px;
  height: 40px;
  font-size: 16px;
  border: none;
`;

const Header = ({ authenticated, username, logout }) => {
  return (
    <HeaderStyled>
      <Link to="/">
        <Logo>sneakergram</Logo>
      </Link>
      <Navigation>
        <HomeIcon src="/assets/icons/home.svg" alt="home" />
        {username && (
          <Link to={username}>
            <ProfileImage src="/assets/avatars/jonathan.jpg" alt={username} />
          </Link>
        )}
        <Link to="/upload">
          <Button>upload</Button>
        </Link>
        {authenticated && <Button onClick={logout}>logout</Button>}
      </Navigation>
    </HeaderStyled>
  );
};

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated || false,
  username: state.auth.decodedToken ? state.auth.decodedToken.username : null,
});

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch({ type: "SET_AUTHENTICATED_FALSE" }),
  };
};

Header.propTypes = {
  authenticated: PropTypes.bool,
  username: PropTypes.string,
  logout: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
