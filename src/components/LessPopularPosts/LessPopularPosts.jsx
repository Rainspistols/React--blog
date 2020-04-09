import React from 'react';
import './LessPopularPosts.scss';
import CategoryAndTitle from '../CategoryAndTitle/CategoryAndTitle';

const LessPopularPosts = () => {
  const LessPopularPostsData = [
    { title: 'Lorem, ipsum dolor.', id: 1 },
    { title: 'Lorem ipsum dolor sit.', id: 2 },
    { title: 'Lorem ipsum sit amet.', id: 3 },
  ];

  const renderLessPopularPosts = LessPopularPostsData.map(({ title, id }) => (
    <div className='lessPopularPosts__item' key={id}>
      <img src={require(`./imgs/${id}.jpg`)} alt='blogPost' />
      <div className='CategoryAndTitle__position'>
        <CategoryAndTitle title={title} category='fashion' />
      </div>
    </div>
  ));

  return (
    <section className='lessPopularPosts'>{renderLessPopularPosts}</section>
  );
};

export default LessPopularPosts;
