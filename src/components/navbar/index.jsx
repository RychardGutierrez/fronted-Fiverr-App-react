import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Menu from './Menu';

import './index.scss';
import Options from '../options';

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const { pathname } = useLocation();
  const currentUser = {
    id: 1,
    username: 'John Doe',
    isSeller: true,
  };

  const hanbleOpenMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', isActive);
    return () => {
      window.removeEventListener('scroll', isActive);
    };
  }, []);

  return (
    <div className={active || pathname !== '/' ? 'navbar active' : 'navbar'}>
      <div className='container'>
        <section className='logo'>
          <Link to='/' className='link'>
            <span className='text'>Fiverr</span>
          </Link>
          <span className='dot'>.</span>
        </section>
        <section className='links'>
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          {!currentUser?.isSeller && <span>Become a seller</span>}
          {!currentUser && <button>Join</button>}
          {currentUser && (
            <div className='user' onClick={hanbleOpenMenu}>
              <img src={'../../../public/img/duck-img.jpg'} alt='' />
              <span> {currentUser?.username} </span>
              {openMenu && <Options isSeller={currentUser?.isSeller} />}
            </div>
          )}
        </section>
      </div>
      {(active || pathname !== '/') && (
        <>
          <hr />
          <Menu />
        </>
      )}
    </div>
  );
};

export default Navbar;
