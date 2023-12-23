import styled from '@emotion/styled';
import { Field, Form } from 'formik';
import { Link } from 'react-router-dom';

export const LoginForm = styled(Form)`
  position: relative;
  max-width: 400px;
  height: 210px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f4f4f4;
`;

export const LoginInput = styled(Field)`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

export const LoginButton = styled.button`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: none;
  border-radius: 3px;
  background-color: #4caf50;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

export const SignUpButton = styled(Link)`
  position: absolute;
  bottom: 10px;
  left: 20px;
  width: 100px;
  padding: 10px;
  box-sizing: border-box;
  border: none;
  border-radius: 3px;
  background-color: #45a049;
  color: #fff;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: #4caf50;
  }
`;
