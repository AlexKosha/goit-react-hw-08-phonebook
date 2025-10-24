import styled from '@emotion/styled';
import { Field, Form } from 'formik';

export const RegisterForm = styled(Form)`
  max-width: 400px;
  margin: 40px auto;
  padding: 25px 20px;
  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const Input = styled(Field)`
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-sizing: border-box;
  transition: border 0.2s, box-shadow 0.2s;

  &:focus {
    border-color: #4caf50;
    box-shadow: 0 0 5px rgba(76, 175, 80, 0.3);
    outline: none;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 8px;
  background-color: #4caf50;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #45a049;
    transform: translateY(-2px);
  }

  &:disabled {
    background-color: #a5d6a7;
    cursor: not-allowed;
  }
`;
