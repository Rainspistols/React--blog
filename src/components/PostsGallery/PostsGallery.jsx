import React from 'react';
import './PostsGallery.scss';
import MainColumn from '../UI/MainColumn/MainColumn';
import AsideColumn from '../UI/AsideColumn/AsideColumn';
import LessPopularPosts from '../LessPopularPosts/LessPopularPosts';
import MostPopularPosts from '../MostPopularPosts/MostPopularPosts';

const PostsGallery = () => {
  return (
    <div className='postsGallery'>
      <AsideColumn>
        <LessPopularPosts />
      </AsideColumn>

      <MainColumn>
        <MostPopularPosts />
      </MainColumn>
    </div>
  );
};

export default PostsGallery;
