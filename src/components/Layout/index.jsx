import React from 'react';
import Navbar from '../navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../footer';

const Layout = () => {
  return (
    <div className='layoyut'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
