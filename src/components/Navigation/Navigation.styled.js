import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  gap: 25px;
  align-items: center;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #555;
  font-weight: 500;
  font-size: 18px;
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    color: #ff6347;
    text-decoration: underline;
  }

  &.active {
    font-weight: 700;
    color: #ff6347;
  }
`;
