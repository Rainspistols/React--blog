import React from 'react';
import './Navbar.scss';
import { IoMdSearch } from 'react-icons/io';

const Navbar = () => {
  const navNames = ['Home', 'About', 'Contact', 'Posts'];
  const buildNav = navNames.map((navItem) => (
    <li>
      <a href='#'>{navItem}</a>
    </li>
  ));

  return (
    <div className='Navbar'>
      <ul>{buildNav}</ul>
      <div className='search'>
        <input type='search' placeholder='Search' />
        <IoMdSearch className='search__icon' />
      </div>
    </div>
  );
};

export default Navbar;
