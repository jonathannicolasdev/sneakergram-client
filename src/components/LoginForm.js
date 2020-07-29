import React from "react";
import { useForm } from "react-hook-form";
import styled from "@emotion/styled";
import { connect } from "react-redux";
import axios from "axios";

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

const LoginForm = ({ authenticated, login }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/users/login`,
        data
      );
      console.log(response);
      login();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input name="email" type="email" placeholder="Email" ref={register} />
      <Input
        name="password"
        type="password"
        placeholder="Password"
        ref={register}
      />
      <SubmitInput type="submit" value="Login" />
    </Form>
  );
};

const mapStateToProps = (state) => ({
  authenticated: state.authenticated,
});

const mapDispatchToProps = (dispatch) => {
  return {
    login: () => dispatch({ type: "SET_AUTHENTICATED_TRUE" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
