import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';

import {
  Avatar,
  Box,
  Button,
  CardActionArea,
  CardMedia,
  Grid,
  IconButton,
} from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    width: '10rem',
    height: '10rem',
    backgroundColor: '#f5eacf',
    borderRadius: '100%',
  },
  media: {
    width: '100%',
    height: '10rem',
    display: 'tile',
  },
  text: {
    fontFamily: 'Poppins',
    fontSize: 18,
    fontWeight: 700,
    color: '#2A363B',
  },
  icon: {
    width: 'spacing(8)',
    height: 'spacing(8)',
  },
});

const useAvatarStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));

function NFTcardmini(props) {
  const classes = useStyles();
  const avatarClasses = useAvatarStyles();
  console.log(props.key);

  return (
    <Grid item xs={3} sm={2}>
      <Grid container justify='center'>
        <IconButton onClick={props.handleNFTClick}>
          <Avatar alt='NFT' src={props.image} className={avatarClasses.large} />
        </IconButton>
      </Grid>
      <Grid container justify='center'>
        <Typography className={classes.text}>{props.issuer}</Typography>
      </Grid>
    </Grid>
  );
}

export default NFTcardmini;
