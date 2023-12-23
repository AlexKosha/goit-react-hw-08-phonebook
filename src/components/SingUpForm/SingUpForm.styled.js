import styled from '@emotion/styled';
import { Field, Form } from 'formik';

export const RegisterForm = styled(Form)`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f4f4f4;
`;

export const Input = styled(Field)`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

export const Button = styled.button`
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
