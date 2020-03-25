import React from 'react';
import './BlogPost.scss';
import Card from '../UI/Card/Card';

const BlogPost = () => {
  return (
    <div className='blogPost'>
      <Card>
        <span>Featured</span>
        <h1>Beautiful is always beautiful</h1>
        <span>posted on July 21, 2020 by Hannah Blogging Tips</span>
      </Card>
    </div>
  );
};

export default BlogPost;
