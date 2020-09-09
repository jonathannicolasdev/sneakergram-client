import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import styled from "@emotion/styled";
import { connect } from "react-redux";
import register from "../redux/actions/auth/register";

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

const RegisterForm = ({ setAuthState, handleRegister }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    handleRegister(data);
    setAuthState("login");
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input name="name" type="text" placeholder="Full Name" ref={register} />
      <Input
        name="username"
        type="text"
        placeholder="Username"
        ref={register}
      />
      <Input name="email" type="email" placeholder="Email" ref={register} />
      <Input
        name="password"
        type="password"
        placeholder="Password"
        ref={register}
      />
      <SubmitInput type="submit" value="Register" />
    </Form>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    handleRegister: (data) => dispatch(register(data)),
  };
};

RegisterForm.propTypes = {
  handleRegister: PropTypes.func,
  setAuthState: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
