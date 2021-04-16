import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import NavButton from './NavButton';
import LoyaltyIcon from '@material-ui/icons/Loyalty';

const useStyles = makeStyles(() => ({
  root: {
    background: '#2A363B',
    border: 0,
    width: '100%',
    zIndex: 2,
    padding: 0,
    display: 'cover',
  },
  toolbar: {
    minHeight: 20,
  },
  logoIcon: {
    flexGrow: 1,
    paddingLeft: '20px',
  },
  accountIcon: {
    paddingRight: '20px',
  },
  logoText: {
    variant: 'h1',
    color: '#f5eacf',
    fontSize: 18,
    fontFamily: 'Poppins',
    textTransform: 'none',
    boxShadow: 'none',
    backgroundColor: 0,
    borderColor: 0,
    paddingLeft: '10px',
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.root} position='fixed'>
      <Toolbar className={classes.toolbar}>
        <Link class={classes.logoIcon} to='/'>
          <IconButton>
            <LoyaltyIcon style={{ color: 'abcda9' }}></LoyaltyIcon>
            <Typography class={classes.logoText}>NFTr</Typography>
          </IconButton>
        </Link>

        <NavButton url='/clubs' text='clubs.' />
        <NavButton url='/profile' text='profile.' />
        <Link class={classes.accountIcon} to='/Profile'>
          <IconButton>
            <AccountCircleIcon style={{ color: 'abcda9' }} />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
