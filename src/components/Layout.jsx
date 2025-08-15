// src/components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <div>
      
     
        <Navbar/>
      
  
      <div className='mt-5'> 
        {/* The Outlet will render the matched child route */}
        <Outlet />
      </div>
  <Footer/>
    </div>
  );
};

export default Layout;
