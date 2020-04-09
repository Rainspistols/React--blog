import React from 'react';
import './SubscribeUs.scss';
import Card from '../UI/Card/Card';
import SmallTitle from '../SmallTitle/SmallTitle';

const SubscribeUs = () => {
  return (
    <Card>
      <div className='SubscribeUs'>
        <SmallTitle title='subscribe us' />
        <iframe
          width='100%'
          height='auto'
          src='https://www.youtube.com/embed/dVMseFlUcc8'
          frameborder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
        ></iframe>
      </div>
    </Card>
  );
};

export default SubscribeUs;
