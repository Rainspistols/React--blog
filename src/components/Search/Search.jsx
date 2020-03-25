import React, { useState } from 'react';
import './Search.scss';
import { GoSearch } from 'react-icons/go';
import posed from 'react-pose';

const InputPose = posed.input({
  active: {
    opacity: 1,
  },
  notActive: {
    opacity: 0,
  },
});

const Search = () => {
  const [searchActive, setSearchactive] = useState(false);
  const activateSearch = () => setSearchactive(true);

  const submitSearch = (e) => {
    e.preventDefault();
    alert('Clicked Search');
  };

  return (
    <div className='search'>
      <form onSubmit={submitSearch}>
        <InputPose
          className='input'
          type='search'
          placeholder='Search'
          pose={searchActive ? 'active' : 'notActive'}
        />
        <GoSearch
          className='search__icon'
          onClick={activateSearch}
          alt='search'
        />
      </form>
    </div>
  );
};

export default Search;
