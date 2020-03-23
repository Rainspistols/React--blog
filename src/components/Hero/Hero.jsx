import './Hero.scss';
import React from 'react';
import Card from '../UI/Card/Card';
import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';

const Hero = () => {
  return (
    <div>
      <Card>
        <div style={{ padding: '40px 0' }}>
          <Logo />
        </div>
      </Card>
      <Navbar />
    </div>
  );
};

export default Hero;
