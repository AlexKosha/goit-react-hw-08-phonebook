import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/authOperations';
import { LogOutButton, UserNav, UserEmail } from './UserMenu.styled';

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <UserNav>
      <UserEmail>{user.email}</UserEmail>
      <LogOutButton type="button" onClick={() => dispatch(logOut())}>
        LogOut
      </LogOutButton>
    </UserNav>
  );
};

export default UserMenu;
