import React, { useState } from "react";
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

const Help = styled.div`
  display: flex;
  justify-content: center;
  a {
    color: #66bd22;
    text-decoration: none;
  }
`;

const Section = styled.div`
  border: 1px solid #cccccc;
  padding: 30px;
  border-radius: 2px;
`;

export default function RegisterLogin() {
  const [authState, setAuthState] = useState("register");

  const switchRegisterLogin = (event) => {
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
          <RegisterForm></RegisterForm>

          <Help>
            <p>
              Have an account?{" "}
              <a onClick={switchRegisterLogin} href="/login">
                Login
              </a>
            </p>
          </Help>
        </Section>
      </Container>
    </div>
  );
}
