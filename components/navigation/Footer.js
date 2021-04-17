import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/styles';
import NavButton from './NavButton';
import LoyaltyIcon from '@material-ui/icons/Loyalty';

const useStyles = makeStyles(() => ({
  root: {
    background: '#2A363B',
    width: '100%',
    zIndex: 100,
    padding: 0,
  },
  toolbar: {
    zIndex: 50,
    height: 100,
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.root} position='static'>
      <Toolbar className={classes.toolbar} variant='dense'></Toolbar>
    </AppBar>
  );
};

export default Footer;
