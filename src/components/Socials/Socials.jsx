import React from 'react';
import './Socials.scss';
import {
  TiSocialInstagram,
  TiSocialPinterest,
  TiSocialTwitter,
  TiSocialYoutubeCircular,
} from 'react-icons/ti/';

const Socials = () => {
  const icons = [
    { icon: <TiSocialInstagram />, linkTo: 'https://www.instagram.com/' },
    { icon: <TiSocialPinterest />, linkTo: 'https://pinterest.com/' },
    { icon: <TiSocialTwitter />, linkTo: 'https://twitter.com/' },
    { icon: <TiSocialYoutubeCircular />, linkTo: 'https://www.youtube.com/' },
  ];

  return (
    <ul
      className='socials'
      style={{ display: 'flex' }}
      rel='noopener noreferrer'
    >
      {icons.map(({ linkTo, icon }, index) => {
        return (
          <li key={index}>
            <a href={linkTo} target='_blank' rel='noopener noreferrer'>
              {icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
