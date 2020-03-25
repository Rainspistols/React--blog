import React from 'react';
import './BlogPost.scss';

const BlogPost = () => {
  return (
    <div className='blogPost'>
      <span className='blogPost__category'>Featured</span>
      <h1 className='blogPost__title'>Beautiful is always beautiful</h1>
      <span className='blogPost__postedBy'>posted on July 21, 2020 by Hannah Blogging Tips</span>
    </div>
  );
};

export default BlogPost;
