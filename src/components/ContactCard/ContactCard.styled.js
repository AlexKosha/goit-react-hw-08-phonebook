import styled from '@emotion/styled';

export const ContactBox = styled.li`
  width: calc((100% - 50px) / 5);
  height: 85px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #f5f5f5;
`;

export const DeleteBtn = styled.button`
  background-color: transparent;
  color: green;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
export const ChangeBtn = styled.button`
  background-color: transparent;
  color: green;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const ContainerBtns = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
