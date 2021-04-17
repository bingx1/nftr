import React from 'react';
import Carousel from 'react-material-ui-carousel';
import NFTcard from './NFTcard';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import { Home } from '@material-ui/icons';

function Example(props) {
  var items = [
    {
      name: 'Random Name #1',
      img:
        'https://images.unsplash.com/photo-1554188248-986adbb73be4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
    {
      name: 'Random Name #2',
      img:
        'https://images.unsplash.com/photo-1581352102070-b7d62164e147?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
    },
    {
      name: '2021 CodeBrew - Remote Education & Work 1st',
      img: 'https://codebrew.com.au/images/remote_work.png',
      issuer: 'CISSA',
    },
    {
      name: '2021 CodeBrew - Social Good 1st',
      img: 'https://codebrew.com.au/images/social_good.png',
    },
    {
      name: '2021 CodeBrew - Public Health',
      img: 'https://codebrew.com.au/images/mental_health.png',
      issuer: 'CISSA',
    },
  ];

  return (
    <Carousel
      NextIcon={<KeyboardArrowRightIcon />}
      PrevIcon={<KeyboardArrowLeftIcon />}
      className='Example'
      autoPlay={true}
      animation='fade'
      timeout={500}
      cycleNavigation={true}
      navButtonsAlwaysVisible={true}
      indicators={true}
      indicatorContainerProps={{
        style: {
          position: 'static',
          marginTop: '-40rem',
          textAlign: 'flex-start',
        },
      }}
    >
      {items.map((item, i) => (
        <NFTcard
          key={i}
          title={item.name}
          img={item.img}
          issuer={item.issuer}
        />
      ))}
    </Carousel>
  );
}

export default Example;
