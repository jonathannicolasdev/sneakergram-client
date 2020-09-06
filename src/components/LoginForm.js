import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import styled from "@emotion/styled";
import { connect } from "react-redux";

import login from "../redux/actions/auth/login"; // action/thunk

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

const LoginForm = ({ handleLogin }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    handleLogin(data);
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
  authenticated: state.login.authenticated,
});

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogin: (data) => dispatch(login(data)),
  };
};

LoginForm.propTypes = {
  authenticated: PropTypes.bool,
  handleLogin: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
