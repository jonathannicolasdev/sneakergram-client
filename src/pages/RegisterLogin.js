import React, { useState, Fragment } from "react";
import styled from "@emotion/styled";
import RegisterForm from "../components/RegisterForm";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Logo = styled.h1`
  font-family: Comfortaa;
`;

const Help = styled.p`
  display: flex;
  justify-content: center;
  a {
    color: #66bd22;
    text-decoration: none;
    margin-left: 5px;
  }
`;

const Section = styled.div`
  border: 1px solid #cccccc;
  padding: 30px;
  border-radius: 2px;
`;

export default function RegisterLogin() {
  const [authState, setAuthState] = useState("register");

  const switchAuth = (event) => {
    event.preventDefault();
    if (authState === "register") {
      setAuthState("login");
    } else {
      setAuthState("register");
    }
    console.log(authState);
  };

  return (
    <div>
      <Container>
        <div>
          <img src="/assets/featured-image.jpg" alt="featured" />
        </div>
        <Section>
          <Logo>Sneakergram</Logo>
          {authState === "register" ? (
            <Fragment>
              <RegisterForm></RegisterForm>
              <Help>
                Have an account?
                <a onClick={switchAuth} href="/login">
                  Login
                </a>
              </Help>
            </Fragment>
          ) : (
            <Fragment>
              <Help>
                Create an account?
                <a onClick={switchAuth} href="/register">
                  Register
                </a>
              </Help>
            </Fragment>
          )}
        </Section>
      </Container>
    </div>
  );
}
