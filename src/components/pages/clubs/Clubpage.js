import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import {CardActionArea, CardContent, Paper, Slide} from '@material-ui/core';
import NFTcard from '../NFT/NFTcard'

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
    background: 'linear-gradient(90deg, #99B898 0%, #FECEAB 70%, #FF847F 100%)',
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
    background: '#FF847F',
  },
  text: {
    fontFamily: 'Poppins',
    fontSize: 20,
    fontWeight: 700,
    color: '#f5eacf'
  },
});

function Clubpage() {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.wrapper}>
        <Slide direction='right' in={true} timeout={1000} mountOnEnter>
          <Card className={classes.root}>
            <Slide direction='right' in={true} timeout={1000} mountOnEnter>
              <Typography className={classes.overlay}>
                <Typography className={classes.title}>
                  UMCPC.
              <br />
                </Typography>
                <Typography className={classes.subtitle}>
                  University of Melbourne Competitive Programming Club
            </Typography>
              </Typography>
            </Slide>
          </Card>
        </Slide>
      </Paper>
      <Grid container className={classes.grid} spacing={4}>
        <NFTcard name='NFT 1' id='1' />
        <NFTcard name='NFT 2' id='2' />
        <NFTcard name='NFT 3' id='3' />
        <NFTcard name='NFT 4' id='4' />
      </Grid>
    </div>

  );
}

export default Clubpage;
