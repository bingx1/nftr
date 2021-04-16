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
    height: '1000px',
    zIndex: 1,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    background: 'linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)',
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
  head: {
    fontSize: 60,
    fontFamily: 'Poppins',
    lineHeight: 1.1,
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
        {/* <CardActionArea>
          <CardMedia
            className={classes.media}
            image='https://images.unsplash.com/photo-1545989253-02cc26577f88?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            title='Contemplative Reptile'
          />
        </CardActionArea> */}
        <Slide direction='right' in={true} timeout={2500} mountOnEnter>
          <Typography className={classes.overlay}>
            <Typography className={classes.head}>
              non- <br />
              fungible- <br />
              tokens- <br />
            </Typography>
          </Typography>
        </Slide>
      </Card>
    </Slide>
  );
}
