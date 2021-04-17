import {AppBar, IconButton, Toolbar, Typography} from '@material-ui/core';
import React from 'react';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  root: {
    background: '#2A363B',
    width: '100%',
    zIndex: 100,
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
