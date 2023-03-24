import React from 'react';
import './menu.scss';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className='menu'>
      <Link to='/' className='link menuLink'>
        Graphics & Design
      </Link>
      <Link to='/' className='link'>
        Video & Animation
      </Link>
      <Link to='/' className='link'>
        Ai Services
      </Link>
      <Link to='/' className='link'>
        Digital Marketing
      </Link>
      <Link to='/' className='link'>
        Music and Audio
      </Link>
      <Link to='/' className='link'>
        Programming & Tech
      </Link>
      <Link to='/' className='link'>
        Business
      </Link>
      <Link to='/' className='link'>
        Lifestyle
      </Link>
    </div>
  );
};

export default Menu;
