import React from 'react';
import './MostPopularPosts.scss';
import CategoryAndTitle from '../CategoryAndTitle/CategoryAndTitle';

const MostPopularPosts = () => {
  return (
    <section className='MostPopularPosts'>
      <div className='MostPopularPosts__img'>
      </div>
      <div className='CategoryAndTitle__position'>
        <CategoryAndTitle
          title={'Memories from Last Summer'}
          category='fashion'
        />
      </div>
    </section>
  );
};

export default MostPopularPosts;
