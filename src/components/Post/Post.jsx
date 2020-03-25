import React from 'react';
import './Post.scss';
import BlogPost from '../BlogPost/BlogPost';
import Sidebar from '../Sidebar/Sidebar';

const Post = () => {
  return (
    <section className='post'>
      <BlogPost />
      <Sidebar />
    </section>
  );
};

export default Post;
