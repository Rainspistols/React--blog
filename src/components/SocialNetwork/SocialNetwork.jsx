import React from 'react';
import './SocialNetwork.scss';
import SmallTitle from '../SmallTitle/SmallTitle';
import Socials from '../Socials/Socials';
import Card from '../UI/Card/Card';

const SocialNetwork = () => {
  return (
    <Card>
      <div className='SocialNetwork'>
        <SmallTitle title='social network' />
        <Socials justifyContent='center' color='lightskyblue' />
      </div>
    </Card>
  );
};

export default SocialNetwork;
