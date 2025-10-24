import { Field, Form } from 'formik';
import styled from '@emotion/styled';

export const ChangeForm = styled(Form)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
`;

export const InputChange = styled(Field)`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
  box-sizing: border-box;

  &:focus {
    border-color: #3498db;
    box-shadow: 0 0 5px rgba(52, 152, 219, 0.3);
    outline: none;
  }
`;

export const AcceptBtn = styled.button`
  background-color: transparent;
  padding: 5px 10px;
  color: #2ecc71;
  border: 1px solid #2ecc71;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s;

  &:hover {
    background-color: #2ecc71;
    color: #fff;
    transform: scale(1.05);
  }
`;
