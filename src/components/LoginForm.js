import React from "react";
import { useForm } from "react-hook-form";
import styled from "@emotion/styled";

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

const LoginForm = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

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

export default LoginForm;
