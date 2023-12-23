import { Nav, StyledNavLink } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <Nav>
      <StyledNavLink to="/login">Log In</StyledNavLink>

      <StyledNavLink to="/signUp">Sign Up</StyledNavLink>
    </Nav>
  );
};

export default AuthNav;
