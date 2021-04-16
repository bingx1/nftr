import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
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
    height: 50,
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
    fontFamily: 'Poppins',
    fontSize: 18,
    fontWeight: 700,
    textTransform: 'none',
    boxShadow: 'none',
    backgroundColor: 0,
    borderColor: 0,
    paddingLeft: '10px',
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.root} position='static'>
      <Toolbar className={classes.toolbar} variant='dense'>
        <Link className={classes.logoIcon} to='/'>
          <IconButton>
            <LoyaltyIcon style={{ color: 'abcda9' }}></LoyaltyIcon>
            <Typography className={classes.logoText}>NFTR</Typography>
          </IconButton>
        </Link>

        <NavButton url='/clubs' text='clubs.' />
        <NavButton url='/nfttest' text='NFTtest.' />
        <NavButton url='/profile' text='profile.' />
        <Link className={classes.accountIcon} to='/Profile'>
          <IconButton>
            <AccountCircleIcon style={{ color: 'abcda9' }} />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
