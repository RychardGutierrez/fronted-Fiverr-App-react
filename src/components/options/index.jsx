import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './index.scss';

const Options = ({ isSeller = false }) => {
  return (
    <div className='options'>
      {isSeller && (
        <>
          <Link className='link' to='/mygigs'>
            My gigs
          </Link>
          <Link className='link' to='/newGig'>
            Add new Gig
          </Link>
        </>
      )}
      <Link className='link' to='/orders'>
        Orders
      </Link>
      <Link className='link' to='/messages'>
        Messages
      </Link>
      <Link className='link' to='/'>
        Logout
      </Link>
    </div>
  );
};

Options.propTypes = {
  isSeller: PropTypes.bool.isRequired,
};

export default Options;
