import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Contacts from 'Pages/Contacts';
import LogIn from 'Pages/LogIn';
import Home from 'Pages/Home';
import RegisterPage from 'Pages/RegisterPage';
import Layout from './Layout/Layout';
import RestrictedRoute from './RestrictedRoute/RestrictedRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import { selectIsRefreshing } from '../redux/auth/selectors';
import { refreshUser } from '../redux/auth/authOperations';

export default function App() {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p>Refreshing user ..</p>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/signUp"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<LogIn />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <ToastContainer autoClose={3000} />
    </>
  );

  // return (
  //   <>
  //     <Routes>
  //       <Route path="/" element={<Layout />}>
  //         <Route index element={<ContactForm />} />
  //         <Route
  //           path="/signUp"
  //           element={
  //             <RestrictedRoute
  //               redirectTo="/contacts"
  //               component={<RegisterPage />}
  //             />
  //           }
  //         />
  //         <Route
  //           path="/login"
  //           element={
  //             <RestrictedRoute redirectTo="/contacts" component={<Login />} />
  //           }
  //         />
  //         <Route
  //           path="/contacts"
  //           element={
  //             <PrivateRoute redirectTo="/login" component={<ContactsList />} />
  //           }
  //         />
  //         {/* <Route path="/contacts" element={<ContactsList />} /> */}
  //       </Route>
  //       <Route path="*" element={<Navigate to="/" />} />
  //     </Routes>
  //     <ToastContainer autoClose={3000} />
  //   </>
  // );
}
