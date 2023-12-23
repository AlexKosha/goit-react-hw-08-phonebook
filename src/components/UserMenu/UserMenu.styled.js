import styled from '@emotion/styled';

export const Nav = styled.div`
  display: flex;
  gap: 20px;
`;

export const UserEmail = styled.p`
  font-size: 16px;
`;

export const LogOutButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }

  &:active {
    background-color: #3e8e41;
  }
`;
