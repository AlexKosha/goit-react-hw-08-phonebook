import { Formik } from 'formik';
import React from 'react';
import {
  LoginButton,
  LoginForm,
  LoginInput,
  SignUpButton,
} from './FormLogin.styled';
import { useDispatch } from 'react-redux';
import { authorization } from '../../redux/auth/authOperations';

const initialValues = {
  email: '',
  password: '',
};

const FormLogin = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({ email, password }, { resetForm }) => {
    const authUser = {
      email,
      password,
    };

    dispatch(authorization(authUser));

    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      //   validationSchema={Schema}
    >
      <LoginForm>
        <label>
          Email
          <LoginInput type="email" name="email" required />
        </label>
        <label>
          Password
          <LoginInput type="password" name="password" />
        </label>
        <LoginButton type="submit">Login</LoginButton>
        <SignUpButton to="/signUp">SignUp</SignUpButton>
      </LoginForm>
    </Formik>
  );
};

export default FormLogin;
