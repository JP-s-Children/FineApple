import React from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { Nav, Footer, ScrollToTopButton, Toasts } from './common';

const Layout = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
      <Toasts />
      <ScrollToTopButton />
    </>
  );
};

export default Layout;
