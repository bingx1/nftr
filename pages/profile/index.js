import React from 'react';
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
  Grow,
} from '@material-ui/core';
import NFTcardmini from '../../components/nft/NFTcardmini';

const useStyles = makeStyles({
  root: {
    borderRadius: 0,
    position: 'relative',
    width: '100%',
    height: 'rem',
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
    fontSize: 20,
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
  },
  text: {
    fontFamily: 'Poppins',
    fontSize: 24,
    fontWeight: 700,
    color: '#2A363B',
  },
});

function Profile() {
  const classes = useStyles();

  return (
    <Paper className={classes.wrapper}>
      <Paper className={classes.root}>
        <Slide direction='right' in={true} timeout={1000} mountOnEnter>
          <Card className={classes.root}>
            <Slide direction='right' in={true} timeout={1000} mountOnEnter>
              <Typography className={classes.overlay}>
                <Typography className={classes.title}>
                  Your Profile.
                  <br />
                </Typography>
              </Typography>
            </Slide>
          </Card>
        </Slide>
      </Paper>
      <Grow in={true} timeout={1000} mountOnEnter>
        <Grid container className={classes.grid} spacing={2} justify='center'>
          <Grid container justify='center'>
            <Typography className={classes.text}>Your NFTs.</Typography>
          </Grid>
          <NFTcardmini
            name='NFT 1'
            id='1'
            image='https://codebrew.com.au/images/remote_work.png'
          />
          <NFTcardmini name='NFT 2' id='2' />
          <NFTcardmini name='NFT 3' id='3' />
          <NFTcardmini name='NFT 4' id='4' />
        </Grid>
      </Grow>
      <Box />
    </Paper>
  );
}

export default Profile;
