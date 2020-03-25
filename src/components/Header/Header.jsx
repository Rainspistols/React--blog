import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__wrap'>
        <nav className='header__nav'>
          <NavLink to='/' exact activeClassName='activeLink'>
            Home
          </NavLink>
          <NavLink to='/about' activeClassName='activeLink'>
            About
          </NavLink>
          <NavLink to='/contact' activeClassName='activeLink'>
            Contact
          </NavLink>
        </nav>
        <div>social media links</div>
      </div>
    </header>
  );
};

export default Header;
