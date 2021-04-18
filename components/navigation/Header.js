import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import Blockies from 'react-blockies';
import { makeStyles } from '@material-ui/styles';
import Link from 'next/link';
import NavButton from './NavButton';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import useWeb3Modal from '../hooks/UseWeb3Modal';
import LockIcon from '@material-ui/icons/Lock';
import { Button } from '@material-ui/core';

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
  address: {
    color: '#f5eacf',
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: 300,
    textTransform: 'none',
    boxShadow: 'none',
    backgroundColor: 0,
    borderColor: 0,
    paddingLeft: '10px',
  },
}));

const Header = (props) => {
  const ret = useWeb3Modal();
  const classes = useStyles();
  const id = ret && ret[0] ? ret[0].provider.selectedAddress : null;
  return (
    <AppBar className={classes.root} position='static'>
      <Toolbar className={classes.toolbar} variant='dense'>
        <Link href='/'>
          <a className={classes.logoIcon}>
            <IconButton>
              <LoyaltyIcon style={{ color: '#abcda9' }}></LoyaltyIcon>
              <Typography className={classes.logoText}>NFTR</Typography>
            </IconButton>
          </a>
        </Link>

        <NavButton url='/clubs' text='clubs.' />
        <NavButton url='/associate' text='associate.' />

        <NavButton url='/nftform' text='create.' />
        {/* 
        {ret && ret[0] ? (
          <NavButton url={'/profile/' + id} text={id.slice(0, 6)} />
        ) : (
          ''
        )} */}

        <WalletButton
          provider={ret ? ret[0] : undefined}
          loadWeb3Modal={ret ? ret[1] : undefined}
          logoutOfWeb3Modal={ret ? ret[2] : undefined}
        />
        {ret && ret[0] ? (
          <div>
            <Link href={'/profile/' + id}>
              <a className={classes.accountIcon}>
                <Button>
                  <Blockies seed={ret[0].provider.selectedAddress} />
                </Button>
              </a>
            </Link>
          </div>
        ) : (
          <></>
        )}
      </Toolbar>
    </AppBar>
  );
};

function WalletButton({ provider, loadWeb3Modal, logoutOfWeb3Modal }) {
  return (
    <div>
      <Button
        onClick={() => {
          if (!provider) {
            loadWeb3Modal();
          } else {
            logoutOfWeb3Modal();
          }
        }}
        style={{ color: '#abcda9' }}
      >
        {!provider ? <LockOpenIcon /> : <LockIcon />}
      </Button>
    </div>
  );
}
export default Header;
