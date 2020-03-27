import React from 'react';
import './Logo.scss';
import { Link } from 'react-router-dom';
import { FaJoget } from 'react-icons/fa';
import hannah from './hannah.svg';

const Logo = () => {
  return (
    <div className='logo'>
      <Link to='/' className='logo__link'>
        <FaJoget />
        <img src={hannah} alt='logo' />
      </Link>
    </div>
  );
};

export default Logo;
