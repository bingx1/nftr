import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { Button, Paper, Slide } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles({
  root: {
    borderRadius: 0,
    position: 'relative',
    width: '100%',
    height: '30rem',
    zIndex: 1,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    background:
      'linear-gradient(135deg, #99B898 0%, #FECEAB 70%, #FF847F 100%)',
  },
  media: {
    height: 500,
  },
  overlay: {
    position: 'absolute',
    top: '160px',
    left: '60px',
    color: '#403734',
  },
  title: {
    fontSize: 65,
    fontFamily: 'Abril Fatface',
    lineHeight: 1.1,
  },
  subtitle: {
    fontFamily: 'Poppins',
    fontSize: 18,
    lineHeight: 3,
  },
  linkStyle: {
    textDecoration: 'none',
    paddingRight: 10,
  },
});

export default function LandingCard({ checked, handleChange }) {
  const classes = useStyles();

  return (
    <Slide direction='right' in={true} timeout={2000} mountOnEnter>
      <Card className={classes.root}>
        <Slide direction='right' in={true} timeout={2500} mountOnEnter>
          <Typography className={classes.overlay}>
            <Typography className={classes.title}>
              Lorem Ipsum <br />
            </Typography>
            <Typography className={classes.subtitle}>
              Create and collect NFTs for university and clubs
            </Typography>
          </Typography>
        </Slide>
      </Card>
    </Slide>
  );
}
