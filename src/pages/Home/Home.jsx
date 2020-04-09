import React from 'react';
import PostsGallery from '../../components/PostsGallery/PostsGallery';
import HomeContainer from '../../components/HomeContainer/HomeContainer';

import './Home.scss';

const Home = () => {
  return (
    <div className='home'>
      <PostsGallery />

      <HomeContainer />
    </div>
  );
};

export default Home;
