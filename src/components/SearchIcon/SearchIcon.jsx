import React from 'react';
import './SearchIcon.scss';
import { GoSearch } from 'react-icons/go';

const SearchIcon = ({ onSearchIcon }) => {
  return (
      <GoSearch
        className='searchIcon'
        onClick={() => onSearchIcon()}
        alt='search'
      />
  );
};

export default SearchIcon;
