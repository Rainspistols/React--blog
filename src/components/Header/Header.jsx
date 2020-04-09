import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Socials from '../Socials/Socials';
import SearchIcon from '../SearchIcon/SearchIcon';
import Search from '../Search/Search';
import Logo from '../Logo/Logo';
import MainColumn from '../UI/MainColumn/MainColumn';
import AsideColumn from '../UI/AsideColumn/AsideColumn';
import './Header.scss';

const Header = () => {
  const [searchActive, setSearchActive] = useState(false);

  const navItems = [
    { title: 'Home', linkTo: '/React--blog/', exact: true },
    { title: 'About', linkTo: '/React--blog/about' },
    { title: 'Contact', linkTo: '/React--blog/contact' },
    { title: 'Posts', linkTo: '/React--blog/posts/1' },
  ];

  const buildNav = navItems.map(({ title, linkTo, exact }) => (
    <NavLink key={title} to={linkTo} activeClassName='activeLink' exact={exact}>
      {title}
    </NavLink>
  ));

  const onSearchIcon = () => setSearchActive(true);
  const onLogo = () => setSearchActive(false);

  const standartHeader = (
    <>
      <nav className='header__nav'>{buildNav}</nav>
      <div className='searchIcon__wrap'>
        <SearchIcon onSearchIcon={onSearchIcon} />
      </div>
      <Socials />
    </>
  );

  return (
    <header className='header'>
      <AsideColumn>
        <div className='logo__wrap' onClick={onLogo}>
          <Logo />
        </div>
      </AsideColumn>

      <MainColumn>
        <div className='nav__wrap'>
          {searchActive ? (
            <Search setSearchActive={setSearchActive} />
          ) : (
            standartHeader
          )}
        </div>
      </MainColumn>
    </header>
  );
};

export default Header;
