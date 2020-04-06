import React from 'react';
import './PostsGallery.scss';
import MainColumn from '../UI/MainColumn/MainColumn';
import AsideColumn from '../UI/AsideColumn/AsideColumn';
import LessPopularPosts from '../LessPopularPosts/LessPopularPosts';

const PostsGallery = () => {
  return (
    <div className='postsGallery'>
      <AsideColumn width={'30%'}>
        <LessPopularPosts />
        <LessPopularPosts />
        <LessPopularPosts />
      </AsideColumn>

      <MainColumn width={'70%'}>
        <section className='mostPopularPosts'>
          <div>
            <img src={require('../../blogpostImages/baby.jpg')} alt='' />
          </div>
        </section>
      </MainColumn>
    </div>
  );
};

export default PostsGallery;
