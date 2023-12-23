import styled from '@emotion/styled';
import { Field, Form } from 'formik';

export const ChangeForm = styled(Form)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const InputChange = styled(Field)`
  display: block;
  width: 100%;
`;

export const AcceptBtn = styled.button`
  background-color: transparent;
  padding: 0;
  color: green;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
