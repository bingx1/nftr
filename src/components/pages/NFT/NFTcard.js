import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {
  Backdrop,
  CardActionArea,
  CardMedia,
  Grid,
  Slide,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    borderRadius: 0,
    position: 'relative',
    width: '100%',
    zIndex: 10,
    boxShadow: 'none',
    background: 'none',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  card: {
    borderRadius: 25,
    zIndex: 1,
    height: '95rem',
    backgroundColor: '#f5eacf',
  },
  title: {
    padding: '2rem 2rem 0',
    fontSize: '7.5ch',
    fontFamily: 'Poppins',
    fontWeight: 700,
    lineHeight: 1.1,
    color: '#2A363B',
  },
  subtitle: {
    padding: '1rem 2rem',
    fontFamily: 'Poppins',
    fontSize: 20,
    fontWeight: 500,
    lineHeight: 1,
    color: '#2A363B',
  },
  wrapper: {
    position: 'static',
    height: '50rem',
    zIndex: 0,
    background:
      'linear-gradient(135deg, #99B898 0%, #FECEAB 40%, #FF847F 100%)',
  },
  minMedia: {
    width: '100%',
    alignContent: 'centre',
    height: '40rem',
    position: 'relative',
  },
  expandedMedia: {
    width: '100%',
    height: '100%',
    display: 'block',
    position: 'relative',
    margin: 'auto',
  },
  mediawrapper: {
    padding: '2rem',
  },
  backdrop: {
    zIndex: 50,
    color: '#fff',
  },
});

function NFTcard(props) {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.card}>
        <Typography className={classes.title}>{props.title} </Typography>
        <Typography className={classes.subtitle}>
          Issuer: Bing <br />
          Current Owner: Hao
        </Typography>
        <CardActionArea
          className={classes.mediawrapper}
          onClick={props.handleToggle}
        >
          <CardMedia
            className={classes.minMedia}
            image={props.img}
            title='NFT Image'
          />
        </CardActionArea>
      </Card>
      <Backdrop
        className={classes.backdrop}
        open={props.open}
        onClick={props.handleClose}
      >
        <img src='https://images.unsplash.com/photo-1554188248-986adbb73be4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' />
      </Backdrop>
    </>
  );
}

export default NFTcard;
