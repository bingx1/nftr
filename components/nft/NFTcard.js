import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { Backdrop, CardActionArea, CardMedia } from '@material-ui/core';

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
    margin: '0',
  },
  title: {
    padding: '2rem 2rem 0',
    fontSize: '2rem',
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
        <Typography className={classes.title}>{props.event}</Typography>
        <Typography className={classes.subtitle}>
          Issuer: {props.issuer} <br />
          Current Owner: {props.recipient}
        </Typography>
        <CardActionArea
          className={classes.mediawrapper}
          onClick={props.handleToggle}
        >
          <CardMedia
            className={classes.minMedia}
            image={props.image}
            title='NFT Image'
          />
        </CardActionArea>
        <Typography className={classes.subtitle}>
          {props.description}
        </Typography>
      </Card>
      <Backdrop
        className={classes.backdrop}
        open={props.open}
        onClick={props.handleClose}
      >
        <img href={props.image} />
      </Backdrop>
    </>
  );
}

export default NFTcard;
