import React from 'react';
import BlogPost from '../../components/BlogPost/BlogPost';
import MainColumn from '../../components/UI/MainColumn/MainColumn';
import AsideColumn from '../../components/UI/AsideColumn/AsideColumn';
import RecentPosts from '../../components/RecentPosts/RecentPosts';

import './Posts.scss';

const Posts = (props) => {

  return (
    <div className='posts'>
      <AsideColumn>
        <RecentPosts />
      </AsideColumn>

      <MainColumn>
        <BlogPost {...props} />
      </MainColumn>
    </div>
  );
};

export default Posts;
