import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import {
  CardActionArea,
  CardContent,
  Paper,
  Box,
  Slide,
} from '@material-ui/core';
import NFTcardmini from '../../components/nft/NFTcardmini';
import {useRouter} from 'next/router';

const useStyles = makeStyles({
  root: {
    borderRadius: 0,
    position: 'relative',
    width: '100%',
    height: '20rem',
    zIndex: 1,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
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
    backgroundColor: '#99B898',
  },
  wrapper: {
    background:
      'linear-gradient(135deg, #99B898 0%, #FECEAB 70%, #FF847F 100%)',
    height: '100rem',
  },
  text: {
    fontFamily: 'Poppins',
    fontSize: 24,
    fontWeight: 700,
    marginLeft: '50px',
    color: '#2A363B',
  },
});

function Profile() {
  const classes = useStyles();
  const router = useRouter();
  const {slug} = router.query;

  return (
    <Paper className={classes.wrapper}>
      <Paper className={classes.root}>
        <Slide direction='right' in={true} timeout={1000} mountOnEnter>
          <Card className={classes.root}>
            <Slide direction='right' in={true} timeout={1000} mountOnEnter>
              <Typography className={classes.overlay}>
                <Typography className={classes.title}>
                  Your Profile.
                </Typography>
                <Typography className={classes.subtitle}>
                  {"ID: " + slug}
                </Typography>
              </Typography>
            </Slide>
          </Card>
        </Slide>
      </Paper>
      <Slide direction='left' in={true} timeout={1000} mountOnEnter>
        <Grid container className={classes.grid} spacing={1}>
          <Grid item xs={12}>
            <Typography className={classes.text}>Your NFTs.</Typography>
          </Grid>
          <NFTcardmini name='NFT 1' id='1' />
          <NFTcardmini name='NFT 2' id='2' />
          <NFTcardmini name='NFT 3' id='3' />
          <NFTcardmini name='NFT 4' id='4' />
        </Grid>
      </Slide>
      <Box height='15px' />
    </Paper>
  );
}

export default Profile;
