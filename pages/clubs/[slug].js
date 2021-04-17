import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
<<<<<<< HEAD:src/components/pages/clubs/Clubpage.js
import {CardActionArea, CardContent, Paper, Slide} from '@material-ui/core';
import NFTcard from '../NFT/NFTcard';
import SocialShare from 'react-simple-social';
=======
import { CardActionArea, CardContent, Paper, Slide } from '@material-ui/core';
import NFTcard from '../../components/nft/NFTcard';
>>>>>>> next.js:pages/clubs/[slug].js

const useStyles = makeStyles({
  root: {
    borderRadius: 0,
    position: 'relative',
    width: '100%',
    height: '20rem',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    boxShadow: 'none',
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
<<<<<<< HEAD:src/components/pages/clubs/Clubpage.js
    color: '#2A363B'
=======
    color: '#f5eacf',
>>>>>>> next.js:pages/clubs/[slug].js
  },
});

function Clubpage() {
  const classes = useStyles();

  return (
    <Paper className={classes.wrapper}>
      <Paper className={classes.root}>
        <Slide direction='right' in={true} timeout={1000} mountOnEnter>
          <Card className={classes.root}>
            <Slide direction='right' in={true} timeout={1000} mountOnEnter>
              <Typography className={classes.overlay}>
                <Typography className={classes.title}>
                  UMCPC.
                  <br />
                </Typography>
                <Typography>
                  University of Melbourne Competitive Programming Club
                </Typography>
              </Typography>
            </Slide>
          </Card>
        </Slide>
        <Card>
          <Typography>
            Hellooooooooooooooooooooo
          </Typography>
          <SocialShare
            sites={['facebook']}
            color='gray'
            theme="minimal"
            height="20"
            width="20" />
        </Card>
      </Paper>
      <Grid container className={classes.grid} spacing={4}>
        <Grid item xs={12}>
          <Paper elevation={0}>
            <Typography className={classes.text}>
              Available NFTs.
          </Typography>
          </Paper>
        </Grid>
        <NFTcard name='NFT 1' id='1' />
        <NFTcard name='NFT 2' id='2' />
        <NFTcard name='NFT 3' id='3' />
        <NFTcard name='NFT 4' id='4' />
      </Grid>
<<<<<<< HEAD:src/components/pages/clubs/Clubpage.js
    </Paper>

=======
    </div>
>>>>>>> next.js:pages/clubs/[slug].js
  );
}

export default Clubpage;
