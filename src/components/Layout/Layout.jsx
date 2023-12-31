import AppBar from 'components/AppBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <AppBar />
      <main>
        <Suspense fallback={<div>loading ...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
