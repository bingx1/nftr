import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import {Paper, Slide} from '@material-ui/core';
import NFTcardmulti from '../../components/nft/NFTcardmulti';

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
      </Paper>
      <Grid container className={classes.grid} spacing={2}>
        <Grid item xs={12}>
          <Paper elevation={0} className={classes.section}>
            <Typography className={classes.text}>Available NFTs.</Typography>
          </Paper>
        </Grid>
        <Grid item xs={false} sm={2} xl={4} />
        <Grid item justify='center' xs={12} sm={8} xl={4}>
          <Grid container direction='row' spacing={1}>
            <NFTcardmulti name='NFT 1' id='1' />
            <NFTcardmulti name='NFT 2' id='2' />
            <NFTcardmulti name='NFT 3' id='3' />
            <NFTcardmulti name='NFT 4' id='4' />
          </Grid>
        </Grid>
      </Grid>
    </Paper >
  );
}

export default Clubpage;
