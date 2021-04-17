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
      description: 'Probably the most random thing you have ever seen!',
    },
    {
      name: 'Random Name #2',
      img:
        'https://images.unsplash.com/photo-1581352102070-b7d62164e147?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
      description: 'Hello World!',
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
      navButtonsAlwaysVisible={false}
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
        <NFTcard key={i} title={item.name} img={item.img} />
      ))}
    </Carousel>
  );
}

export default Example;
