import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import {
  Box,
  Paper,
  IconButton,
  CardActions,
  Slide,
  Grow,
} from '@material-ui/core';
import NFTcardmini from '../../components/nft/NFTcardmini';
import { useRouter } from 'next/router';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import ChatIcon from '@material-ui/icons/Chat';

const useStyles = makeStyles({
  root: {
    borderRadius: 0,
    position: 'relative',
    width: '100%',
    height: '16rem',
    zIndex: 1,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    overflow: 'hidden',
    boxShadow: 'none',
    background: 'none',
    flexDirection: 'column',
  },
  media: {
    height: 500,
  },
  overlay: {
    position: 'center',
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
    fontWeight: 500,
    lineHeight: 1,
  },
  card: {
    justifyItems: 'center',
    background: 'none',
    padding: '10px',
  },
  wrapper: {
    height: '100rem',

    background:
      'linear-gradient(135deg, #99B898 0%, #FECEAB 70%, #FF847F 100%)',
  },
  socials: {
    justifyContent: 'space-around',
    overflow: 'hidden',
    alignItems: 'center',
    justify: 'center',
    flexWrap: 'wrap',
    display: 'flex',
    background: 'none',
  },
  section: {
    justifyContent: 'space-around',
    overflow: 'hidden',
    width: '100%',
    flexWrap: 'wrap',
    display: 'flex',
    background: 'none',
  },
  text: {
    fontFamily: 'Poppins',
    fontSize: 24,
    fontWeight: 700,
    color: '#2A363B',
  },
  item: {
    flexDirection: 'row',
    height: '100px',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
  },
  iconbox: {
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 1,
  },
  box: {
    justifyContent: 'center',
  },
  icon: {
    color: '#2A363B',
  },
});

function Clubpage() {
  const classes = useStyles();
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Box className={classes.wrapper}>
      <Slide direction='left' in={true} timeout={1000} mountOnEnter>
        <Grid container alignItems='center' className={classes.root}>
          <Box className={classes.box}>
            <Card className={classes.card} elevation={0}>
              <Typography className={classes.overlay}>
                <Typography className={classes.title}>
                  {slug}.
                  <br />
                </Typography>
                <Typography className={classes.subtitle}>
                  University of Melbourne Competitive Programming Club
                </Typography>
              </Typography>
            </Card>
          </Box>

          <Box item className={classes.socials}>
            <IconButton className={classes.icon}>
              <FacebookIcon />
            </IconButton>
            <IconButton className={classes.icon}>
              <EmailIcon />
            </IconButton>
            <IconButton className={classes.icon}>
              <ChatIcon />
            </IconButton>
          </Box>
        </Grid>
      </Slide>
      <Grid container justify='center' className={classes.grid} spacing={4}>
        <Grid item xs={12}>
          <Paper elevation={0} className={classes.section}>
            <Typography className={classes.text}>Available NFTs.</Typography>
          </Paper>
        </Grid>
        <Grow direction='up' in={true} timeout={1000} mountOnEnter>
          <Grid container className={classes.grid} spacing={2} justify='center'>
            <NFTcardmini
              name='NFT 1'
              id='1'
              image='https://codebrew.com.au/images/remote_work.png'
            />
            <NFTcardmini
              name='NFT 2'
              id='2'
              image='https://codebrew.com.au/images/social_good.png'
            />{' '}
            <NFTcardmini
              name='NFT 3'
              id='3'
              image='https://codebrew.com.au/images/mental_health.png'
            />
            <NFTcardmini
              name='NFT 4'
              id='4'
              image='https://codebrew.com.au/images/remote_work.png'
            />
          </Grid>
        </Grow>
      </Grid>
      <Box height='10px' />
    </Box>
  );
}

export default Clubpage;
