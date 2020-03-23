import React from 'react';
import './Header.scss'

const Header = () => {
  return (
    <header className='header'>
      <nav className='header__nav'>
        <a href='#'>Home</a>
        <a href='#'>About</a>
        <a href='#'>Contact</a>
      </nav>

      <div>social media links</div>
    </header>
  );
};

export default Header;
