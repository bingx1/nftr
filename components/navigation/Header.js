import {AppBar, IconButton, Toolbar, Typography} from "@material-ui/core";
import React from "react";
import Blockies from "react-blockies";
import {makeStyles} from "@material-ui/styles";
import Link from "next/link";
import NavButton from "./NavButton";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import useWeb3Modal from "../hooks/UseWeb3Modal";
import LockIcon from "@material-ui/icons/Lock";
import {Button} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    background: "#2A363B",
    width: "100%",
    zIndex: 100,
    padding: 0,
  },
  toolbar: {
    zIndex: 50,
    height: 50,
  },
  logoIcon: {
    flexGrow: 1,
    paddingLeft: "20px",
  },
  accountIcon: {
    paddingRight: "20px",
  },
  logoText: {
    variant: "h1",
    color: "#f5eacf",
    fontFamily: "Poppins",
    fontSize: 18,
    fontWeight: 700,
    textTransform: "none",
    boxShadow: "none",
    backgroundColor: 0,
    borderColor: 0,
    paddingLeft: "10px",
  },
}));

const Header = (props) => {
  const ret = useWeb3Modal();
  const classes = useStyles();
  return (
    <AppBar className={classes.root} position="static">
      <Toolbar className={classes.toolbar} variant="dense">
        <Link href="/">
          <a className={classes.logoIcon}>
            <IconButton>
              <LoyaltyIcon style={{color: "#abcda9"}}></LoyaltyIcon>
              <Typography className={classes.logoText}>NFTR</Typography>
            </IconButton>
          </a>
        </Link>
        {ret && ret[0] ? (
          <Typography> {ret[0].provider.selectedAddress} </Typography>
        ) : (
          ""
        )}
        <NavButton url="/clubs" text="clubs." />
        <NavButton url="/nfts" text="NFTs." />
        <NavButton url="/nftform" text="create." />
        {ret && ret[0] ? (
          <Link href={props.isLoggedIn ? "/profile" : "/registration"}>
            <a className={classes.accountIcon}>
              <Blockies seed={ret[0].provider.selectedAddress} />
            </a>
          </Link>
        ) : (
          <></>
        )}
        <WalletButton
          provider={ret ? ret[0] : undefined}
          loadWeb3Modal={ret ? ret[1] : undefined}
          logoutOfWeb3Modal={ret ? ret[2] : undefined}
        />
      </Toolbar>
    </AppBar>
  );
};

function WalletButton({provider, loadWeb3Modal, logoutOfWeb3Modal}) {
  return (
    <Button
      onClick={() => {
        if (!provider) {
          loadWeb3Modal();
        } else {
          logoutOfWeb3Modal();
        }
      }}
    >
      {!provider ? <LockOpenIcon /> : <LockIcon />}
    </Button>
  );
}
export default Header;
