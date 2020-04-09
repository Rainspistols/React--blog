import React from 'react';
import './HomeContainer.scss';
import MainColumn from '../UI/MainColumn/MainColumn';
import AsideColumn from '../UI/AsideColumn/AsideColumn';
import HomePosts from '../HomePosts/HomePosts';
import AboutUs from '../AboutUs/AboutUs';
import SocialNetwork from '../SocialNetwork/SocialNetwork';
import RecentPosts from '../RecentPosts/RecentPosts';
import SubscribeUs from '../SubscribeUs/SubscribeUs';
const HomeContainer = () => {
  return (
    <div className='HomeContainer'>
      <AsideColumn>
        <AboutUs />
        <SocialNetwork />
        <div className='RecentPosts__wrap'>
          <RecentPosts />
        </div>
        <SubscribeUs />
      </AsideColumn>
      <MainColumn>
        <HomePosts />
      </MainColumn>
    </div>
  );
};

export default HomeContainer;
