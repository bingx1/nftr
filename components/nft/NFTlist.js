import React from 'react';
import NFTcardmini from './NFTcardmini';
import { Grid } from '@material-ui/core';
import useSWR from 'swr';
import { useRouter } from 'next/router';

// const fetcher = (url) => fetch(url).then(console.log(url), (res) => res.json());

function Items(props) {
  // const router = useRouter();
  // const { slug } = router.query;
  // const { data, error } = useSWR(
  //   router.query.id ? `/api/user/${router.query.id}` : null,
  //   fetcher
  // );

  // if (error) return <div>Failed to load user</div>;
  // if (!data) return <div>Loading...</div>;
  // console.log(data);

  var data = [
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

  const getNFTMini = (NFTObj) => {
    return (
      <Grid item xs={6} sm={3}>
        <NFTcardmini {...NFTObj} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={1} justify='center'>
      {data.map((NFTObj, i) => (
        <NFTcardmini
          id={i}
          issuer={NFTObj.issuer}
          recipient={NFTObj.recipient}
          event={NFTObj.event}
          image={NFTObj.image}
          description={NFTObj.description}
          handleNFTClick={props.handleNFTClick}
        />
      ))}
    </Grid>
  );
}

export default Items;
