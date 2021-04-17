import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {
  Avatar,
  Box,
  CardActionArea,
  CardMedia,
  Grid,
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
    fontSize: 20,
    fontWeight: 700,
    color: '#2A363B',
  },
  icon: {
    width: 'spacing(7)',
    height: 'spacing(7)',
  },
});

const useAvatarStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(17),
    height: theme.spacing(17),
  },
}));

export default function NFTcardmulti(props) {
  const classes = useStyles();
  const avatarClasses = useAvatarStyles();

  return (
    <Grid item xs={4} sm={2}>
      <Grid container justify='center'>
        <div className={avatarClasses.root}>
          <Avatar
            alt='Remy Sharp'
            src={props.image}
            className={avatarClasses.large}
          />
        </div>
      </Grid>
      <Grid container justify='center'>
        <Typography className={classes.text}>{props.name}</Typography>
      </Grid>
    </Grid>
  );
}
