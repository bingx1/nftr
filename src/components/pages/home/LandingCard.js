import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { Button, Paper, Slide } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import NavButton from '../../layout/NavButton';

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
  linkStyle: {
    textDecoration: 'none',
    paddingRight: 10,
  },
  wrapper: {
    background: '#FF847F',
  },
  buttonStyle: {
    color: '#2A363B',
    opacity: 0.7,
    fontFamily: 'Poppins',
    fontSize: 18,
    fontWeight: 400,
    textTransform: 'none',
    boxShadow: 'none',
    backgroundColor: 0,
    borderColor: 0,
    padding: 0,
  },
});

function LandingCard() {
  const classes = useStyles();

  return (
    <Paper className={classes.wrapper}>
      <Slide direction='right' in={true} timeout={1000} mountOnEnter>
        <Card className={classes.root}>
          <Slide direction='right' in={true} timeout={2000} mountOnEnter>
            <Typography className={classes.overlay}>
              <Typography className={classes.title}>
                NFTR.
                <br />
              </Typography>
              <Typography className={classes.subtitle}>
                Create and collect NFTs for university and clubs
              </Typography>
              <Typography className={classes.subtitle}>
                <Link className={classes.linkStyle} to='clubs'>
                  <Button className={classes.buttonStyle}>
                    <KeyboardArrowRightIcon size='100px' />
                    start checking out our clubs now...
                  </Button>
                </Link>
              </Typography>
            </Typography>
          </Slide>
        </Card>
      </Slide>
    </Paper>
  );
}

export default LandingCard;
