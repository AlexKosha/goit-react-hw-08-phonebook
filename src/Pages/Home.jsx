import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selectors';

const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome to the phone book.</h1>
      ) : (
        <h1>
          Welcome to the phone book. To go to contacts, you need authorization
          or registration
        </h1>
      )}
    </div>
  );
};

export default Home;
