import React from 'react';
import './CategoryAndTitle.scss';

const CategoryAndTitle = ({ category, title }) => {
  return (
    <div className='CategoryAndTitle'>
      <a href='/' className='category'>
        {category}
      </a>
      <h1 className='title'>{title}</h1>
    </div>
  );
};

export default CategoryAndTitle;
