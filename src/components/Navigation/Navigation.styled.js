import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #333;

  &:hover,
  &:focus {
    color: #ff6347;
    text-decoration: underline;
  }

  &.active {
    font-weight: bold;
  }
`;
