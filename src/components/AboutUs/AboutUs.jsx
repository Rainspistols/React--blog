import React from 'react';
import './AboutUs.scss';
import img from '../../blogpostImages/1.jpg';
import SmallTitle from '../SmallTitle/SmallTitle';
import SmallText from '../SmallText/SmallText';
import Card from '../UI/Card/Card';

const AboutUs = () => {
  return (
    <Card>
      <article className='AboutUs'>
        <SmallTitle title='about us' />
        <img className='img' src={img} alt='girl' />
        <SmallText
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit.
       At ex voluptatibus sed dignissimos incidunt similique optio consequatur
        iure dolores ab optio'
        />
      </article>
    </Card>
  );
};

export default AboutUs;
