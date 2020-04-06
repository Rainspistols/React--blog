import React, { useState, useEffect } from 'react';
import BorderBottom from '../UI/BorderBottom/BorderBottom';
import BlogPostsService from '../services/blogPostsService';

import './RecentPosts.scss';
import { NavLink } from 'react-router-dom';

const service = new BlogPostsService();

const RecentPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const actualPosts = service.getAllPosts();
    setPosts(actualPosts);
  }, [posts]);

  const buildPosts = posts.map(({ blogTitle, postedOn, id }) => (
    <div className='recentPosts__item' key={id}>
      <NavLink to={`/posts/${id}`} className='recentPost'>
        <h3 className='recentPost__title'>{blogTitle}</h3>
        <span className='recentPost__date'>{postedOn}</span>
      </NavLink>
      <BorderBottom />
    </div>
  ));

  return (
    <div className='recentPosts'>
      <h2 className='recentPosts__title'>Recent posts</h2>
      {buildPosts}
    </div>
  );
};

export default RecentPosts;
