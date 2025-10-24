import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const FormPhonebook = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 15px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  margin: 0 auto 30px auto;
`;

export const Input = styled(Field)`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
  outline: none;
  transition: border 0.2s, box-shadow 0.2s;

  &:focus {
    border-color: #4caf50;
    box-shadow: 0 0 5px rgba(76, 175, 80, 0.3);
  }
`;

export const FormBtn = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #4caf50;
  color: #fff;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s, transform 0.2s;

  &:hover:not(:disabled) {
    background-color: #45a049;
    transform: translateY(-2px);
  }

  &:disabled {
    background-color: #a5d6a7;
    cursor: not-allowed;
  }
`;
