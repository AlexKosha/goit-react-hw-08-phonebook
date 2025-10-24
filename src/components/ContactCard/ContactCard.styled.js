import styled from '@emotion/styled';

export const ContactBox = styled.li`
  width: 220px;
  height: 85px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #ddd;
  padding: 12px 15px;
  margin-bottom: 12px;
  background-color: #fafafa;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  }
`;

export const ContainerBtns = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ButtonBase = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  padding: 5px;
  transition: color 0.2s, transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const DeleteBtn = styled(ButtonBase)`
  color: #e74c3c;
`;

export const ChangeBtn = styled(ButtonBase)`
  color: #3498db;
`;
