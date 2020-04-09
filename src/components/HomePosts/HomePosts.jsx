import React from 'react';
import './HomePosts.scss';
import img2 from '../../blogpostImages/2.jpg';
import img1 from '../../blogpostImages/woman.jpg';

const HomePosts = () => {
  const homePostsData = [img1, img2];
  const renderHomePosts = homePostsData.map((item) => (
    <div className='HomePost' key={item}>
      <span className='HomePost__category'>Feature</span>
      <h2 className='HomePost__title'>Fintess Mantra To Live Life</h2>
      <span className='HomePost__postedBy'>posted on July 21, 2020 by Max</span>
      <div className='HomePost__img-wrap'>
        <img src={item} alt='' />
      </div>
      <p className='HomePost__content'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia nesciunt
        nulla porro aliquam voluptatem aperiam excepturi mollitia ducimus
        accusantium facere magnam, fugiat sed, corrupti eligendi maiores rerum
        provident numquam earum tenetur? Deleniti temporibus laudantium quasi
        incidunt eos maxime eaque recusandae dicta iusto quidem soluta
        voluptatem at perferendis, cupiditate fuga pariatur?...
      </p>
      <button className='readMore'>Read more</button>
    </div>
  ));

  return <div className='HomePosts'>{renderHomePosts}</div>;
};

export default HomePosts;
