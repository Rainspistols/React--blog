import React, { useState, useEffect } from 'react';
import BorderBottom from '../UI/BorderBottom/BorderBottom';
import BlogPostsService from '../services/blogPostsService';
import { NavLink } from 'react-router-dom';
import './RecentPosts.scss';
import SmallTitle from '../SmallTitle/SmallTitle';
import { FaRegClock } from 'react-icons/fa';

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
        <div className='postedOn__wrap' style={{ color: '#4f4f4f' }}>
          <FaRegClock />
          <span className='recentPost__date'>{postedOn}</span>
        </div>
      </NavLink>
      <BorderBottom />
    </div>
  ));

  return (
    <div className='recentPosts'>
      <SmallTitle title='recent posts' />
      {buildPosts}
    </div>
  );
};

export default RecentPosts;
