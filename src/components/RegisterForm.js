import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import styled from "@emotion/styled";
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

const RegisterForm = ({ setAuthState }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/users/register`, data);
      setAuthState("login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
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

RegisterForm.propTypes = {
  setAuthState: PropTypes.func,
};

export default RegisterForm;
