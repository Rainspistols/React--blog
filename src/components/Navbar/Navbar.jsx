import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import { IoMdSearch } from 'react-icons/io';
import posed from 'react-pose';
import { NavLink } from 'react-router-dom';

const InputPose = posed.input({
  active: {
    opacity: 1,
  },
  notActive: {
    opacity: 0,
  },
});

const Navbar = () => {
  const [searchActive, setSearchactive] = useState(false);

  const navItems = [
    { title: 'Home', linkTo: '/' },
    { title: 'About', linkTo: '/about' },
    { title: 'Contact', linkTo: '/contact' },
    { title: 'Posts', linkTo: '/post' },
  ];

  const buildNav = navItems.map(({ title, linkTo }) => (
    <li>
      <NavLink to={linkTo}>{title}</NavLink>
    </li>
  ));

  const activateSearch = () => setSearchactive(true);

  const submitSearch = (e) => {
    e.preventDefault();
    alert('Clicked Search');
  };

  return (
    <div className='Navbar'>
      <ul>{buildNav}</ul>
      <div className='search'>
        <form onSubmit={submitSearch}>
          <InputPose
            className='input'
            type='search'
            placeholder='Search'
            pose={searchActive ? 'active' : 'notActive'}
          />
          <IoMdSearch
            className='search__icon'
            onClick={activateSearch}
            alt='search'
          />
        </form>
      </div>
    </div>
  );
};

export default Navbar;
