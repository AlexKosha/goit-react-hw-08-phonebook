import styled from '@emotion/styled';

export const UserNav = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const UserEmail = styled.p`
  font-size: 16px;
  color: #333;
  margin: 0;
`;

export const LogOutButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #45a049;
    transform: translateY(-1px);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }

  &:active {
    background-color: #3e8e41;
  }
`;
