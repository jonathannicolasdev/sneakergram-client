import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Logo = styled.h1`
  font-family: Comfortaa;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px 10px;
  background: #eeeeee;
  border-radius: 2px;
  border: none;
`;

const SubmitInput = styled.input`
  padding: 8px 10px;
  background: #66bd22;
  border-radius: 2px;
  border: none;
  margin-top: 5px;
  color: white;
  font-size: 14px;
  font-weight: 700;
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
  return (
    <div>
      <Container>
        <div>
          <img src="/assets/featured-image.jpg" alt="featured" />
        </div>
        <Section>
          <Logo>Sneakergram</Logo>
          <Form>
            <Input type="text" placeholder="Username" />
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <SubmitInput type="submit" value="Register" />
          </Form>
          <Help>
            <p>
              Have an account? <a href="/login">Login</a>
            </p>
          </Help>
        </Section>
      </Container>
    </div>
  );
}
