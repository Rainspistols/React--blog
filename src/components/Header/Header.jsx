import React from 'react';
import { NavLink } from 'react-router-dom';
import Search from '../Search/Search';
import Socials from '../Socials/Socials';
import './Header.scss';

const Header = () => {
  const navItems = [
    { title: 'Home', linkTo: '/', exact: true },
    { title: 'About', linkTo: '/about' },
    { title: 'Contact', linkTo: '/contact' },
    { title: 'Posts', linkTo: '/post' },
  ];

  const buildNav = navItems.map(({ title, linkTo, exact }) => (
    <NavLink key={title} to={linkTo} activeClassName='activeLink' exact={exact}>
      {title}
    </NavLink>
  ));

  return (
    <header className='header'>
      <div className='header__wrap'>
        <nav className='header__nav'>{buildNav}</nav>
        <div className='search__wrap'>
          <Search />
        </div>
        <Socials />
      </div>
    </header>
  );
};

export default Header;
