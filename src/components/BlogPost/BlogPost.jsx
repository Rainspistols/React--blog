import React, { useState, useEffect } from 'react';
import BlogPostsService from '../services/blogPostsService';

import './BlogPost.scss';

const service = new BlogPostsService();

const BlogPost = ({ match }) => {
  const [activePost, setActivePost] = useState({});

  useEffect(() => {
    const neededPostId = +match.params.postId;
    const neededPost = service.getPost(neededPostId);

    setActivePost(neededPost);
  }, [match.params.postId]);

  const {
    blogTitle,
    blogCategory,
    postedOn,
    author,
    blogImage,
    blogText,
    slug,
  } = activePost;

  return (
    <div className='blogPost'>
      <h1 className='blogPost__title'>{blogTitle}</h1>
      <span className='blogPost__category'>{blogCategory}</span>
      <div className='blogPost__img'>
        {blogImage && (
          <img src={require(`../../blogpostImages/${blogImage}`)} alt={slug} />
        )}
      </div>

      <p className='blogPost__content'>{blogText}</p>

      <span className='blogPost__postedBy'>{`${postedOn} by ${author}`}</span>
    </div>
  );
};

export default BlogPost;
