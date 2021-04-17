import React from 'react';
import Carousel from 'react-material-ui-carousel';
import NFTcard from './NFTcard';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';

function NFTCarousel() {
  var items = [
    {
      issuer: 'Bing Xu',
      recipient: 'Hao Xu',
      event: 'Random Event #1',
      image:
        'https://images.unsplash.com/photo-1554188248-986adbb73be4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac ipsum purus. Donec varius vel turpis eget bibendum. Aenean commodo ipsum ligula, ut mollis neque suscipit nec. Integer sem enim, luctus fermentum sapien vel, cursus malesuada turpis. Donec at urna mauris. Nullam nec rhoncus ipsum, sed dictum quam. Morbi ut mi dolor. Integer lobortis tortor id sollicitudin ullamcorper.',
    },
    {
      issuer: 'Bing Xu',
      recipient: 'Hao Xu',
      event: 'Random Event #2',
      image:
        'https://images.unsplash.com/photo-1581352102070-b7d62164e147?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac ipsum purus. Donec varius vel turpis eget bibendum. Aenean commodo ipsum ligula, ut mollis neque suscipit nec. Integer sem enim, luctus fermentum sapien vel, cursus malesuada turpis. Donec at urna mauris. Nullam nec rhoncus ipsum, sed dictum quam. Morbi ut mi dolor. Integer lobortis tortor id sollicitudin ullamcorper.',
    },
    {
      issuer: 'CISSA',
      recipient: 'Hao Xu',
      event: '2021 CodeBrew - Remote Education & Work 1st',
      image: 'https://codebrew.com.au/images/remote_work.png',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac ipsum purus. Donec varius vel turpis eget bibendum. Aenean commodo ipsum ligula, ut mollis neque suscipit nec. Integer sem enim, luctus fermentum sapien vel, cursus malesuada turpis. Donec at urna mauris. Nullam nec rhoncus ipsum, sed dictum quam. Morbi ut mi dolor. Integer lobortis tortor id sollicitudin ullamcorper.',
    },
    {
      issuer: 'CISSA',
      recipient: 'Hao Xu',
      event: '2021 CodeBrew - Social Good 1st',
      image: 'https://codebrew.com.au/images/social_good.png',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac ipsum purus. Donec varius vel turpis eget bibendum. Aenean commodo ipsum ligula, ut mollis neque suscipit nec. Integer sem enim, luctus fermentum sapien vel, cursus malesuada turpis. Donec at urna mauris. Nullam nec rhoncus ipsum, sed dictum quam. Morbi ut mi dolor. Integer lobortis tortor id sollicitudin ullamcorper.',
    },
    {
      issuer: 'CISSA',
      recipient: 'Hao Xu',
      event: '2021 CodeBrew - Public Health',
      image: 'https://codebrew.com.au/images/mental_health.png',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac ipsum purus. Donec varius vel turpis eget bibendum. Aenean commodo ipsum ligula, ut mollis neque suscipit nec. Integer sem enim, luctus fermentum sapien vel, cursus malesuada turpis. Donec at urna mauris. Nullam nec rhoncus ipsum, sed dictum quam. Morbi ut mi dolor. Integer lobortis tortor id sollicitudin ullamcorper.',
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
          marginTop: '-35rem',
          marginBottom: '5rem',
          textAlign: 'flex-start',
        },
      }}
    >
      {items.map((item, i) => (
        <NFTcard
          key={i}
          issuer={item.issuer}
          recipient={item.recipient}
          event={item.event}
          image={item.image}
          description={item.description}
          open={false}
        />
      ))}
    </Carousel>
  );
}

export default NFTCarousel;
