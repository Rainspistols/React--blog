import React from 'react';
import './Search.scss';

const Search = ({ setSearchActive }) => {
  const onCancelBtn = (e) => {
    e.preventDefault();
    setSearchActive(false);
  };

  const onSearchBtn = () => {
    alert('search btn clicked');
  };

  return (
    <form className='search'>
      <input type='search' placeholder=' Search' />
      <div className='search__buttons'>
        <button className='btn btn--cancel' onClick={onCancelBtn}>
          Cancel
        </button>
        <button type='submit' className='btn btn--search' onClick={onSearchBtn}>
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;
