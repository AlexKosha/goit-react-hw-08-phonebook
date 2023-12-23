import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/authOperations';
import { LogOutButton, Nav, UserEmail } from './UserMenu.styled';

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <Nav>
      <UserEmail>{user.email}</UserEmail>
      <LogOutButton type="button" onClick={() => dispatch(logOut())}>
        LogOut
      </LogOutButton>
    </Nav>
  );
};

export default UserMenu;
