import { useSelector } from 'react-redux';
import { Nav, StyledNavLink } from './Navigation.styled';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Nav>
      <StyledNavLink to="/">Home</StyledNavLink>

      {isLoggedIn && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
    </Nav>
  );
};

export default Navigation;
