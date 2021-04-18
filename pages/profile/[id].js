import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import {
  CardActionArea,
  CardContent,
  Paper,
  Box,
  Slide,
  IconButton,
  Grow,
} from '@material-ui/core';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import NFTcardmini from '../../components/nft/NFTcardmini';
import NFTlist from '../../components/nft/NFTlist';

import { useRouter } from 'next/router';
import useSWR from 'swr';

const useStyles = makeStyles({
  root: {
    borderRadius: 0,
    position: 'relative',
    width: '100%',
    height: '20rem',
    zIndex: 1,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'left',
    paddingLeft: '32px',
    alignContent: 'center',
    overflow: 'hidden',
    boxShadow: 'none',
    background: 'none',
  },
  media: {
    height: 500,
  },
  overlay: {
    position: 'absolute',
    top: '90px',
    left: '65px',
    color: '#2A363B',
  },
  title: {
    fontSize: 70,
    fontFamily: 'Poppins',
    fontWeight: 700,
    lineHeight: 1.1,
  },
  subtitle: {
    fontFamily: 'Poppins',
    marginLeft: '15px',
    fontSize: 24,
    fontWeight: 500,
    lineHeight: 1,
  },
  grid: {
    paddingTop: '30px',
    paddingLeft: '30px',
    paddingRight: '30px',
  },
  card: {
    background: 'none',
    justifyContent: 'center',
    justify: 'center',
    width: '150%',
    height: '100px',
  },
  wrapper: {
    background:
      'linear-gradient(135deg, #99B898 0%, #FECEAB 70%, #FF847F 100%)',
    height: '100rem',
  },
  button: {
    marginTop: '-0.75rem',
    marginLeft: '-21rem',
    color: '#000000',
  },
  text: {
    fontFamily: 'Poppins',
    fontSize: 24,
    fontWeight: 700,
    marginLeft: '0px',
    color: '#2A363B',
    marginBottom: '10px',
  },
});

// const fetcher = (url) => fetch(url).then(console.log(url), (res) => res.json());

// function useUser (id) {
//   console.log("Sending a request to API endpoint: ", `/api/user/${id}`)
//   const { data, error } = useSWR(`/api/user/${id}`, fetcher)

//   return {
//     user: data,
//     isLoading: !error && !data,
//     isError: error
//   }
// }

Profile.getInitialProps = async () => {
  return {};
};

function Profile() {
  const classes = useStyles();
  const router = useRouter();
  console.log(router);
  console.log('Call to frontend route, profile/', router.query.id);
  // const {data, isLoading, isError} = useUser(router.query.id)
  // if (isError) return <div>Failed to load user</div>;
  // if (isLoading) return <div>Loading...</div>;
  return (
    <Box className={classes.wrapper}>
      <Box className={classes.root}>
        <Grow in={true} timeout={1000} mountOnEnter>
          <Card className={classes.root}>
            <Box>
              <Typography className={classes.title}>Your Profile.</Typography>
              <Grid container className={classes.card} spacing={1}>
                <Grid item xs={8}>
                  <Typography className={classes.subtitle}>
                    {1068412}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <IconButton
                    onClick={() =>
                      navigator.clipboard.writeText(router.query.id)
                    }
                    className={classes.button}
                  >
                    <FileCopyOutlinedIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Box>
          </Card>
        </Grow>
      </Box>
      <Slide direction='up' in={true} timeout={1000} mountOnEnter>
        <Grid container className={classes.grid} spacing={1}>
          <Grid container justify='center'>
            <Typography className={classes.text}> Your NFTs.</Typography>
          </Grid>
          <NFTlist id={router.query.id} />
        </Grid>
      </Slide>
    </Box>
  );
}

export default Profile;
