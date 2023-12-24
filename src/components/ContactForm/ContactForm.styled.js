import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const FormPhonebook = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-left: 20px;
  margin-bottom: 20px;
`;

export const Input = styled(Field)`
  display: block;
  border: 1px solid #ccc;
  padding: 8px;
  font-size: 16px;
`;

export const FormBtn = styled.button`
  width: 100px;
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
