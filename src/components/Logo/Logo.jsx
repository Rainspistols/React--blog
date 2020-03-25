import React from 'react';
import './Logo.scss';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className='Logo'>
      <Link to='/'>Hannah Tito</Link>
    </div>
  );
};

export default Logo;
