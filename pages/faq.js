import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Faq from 'react-faq-component';
import Grid from '@material-ui/core/Grid';
import { Box, Card, Grow, Slide, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    padding: '50px',
    zIndex: 1,
  },
  background: {
    position: 'static',
    height: '100rem',
    zIndex: 0,
    background:
    'linear-gradient(135deg, #99B898 0%, #FECEAB 70%, #FF847F 100%)',
  },
  title: {
    fontSize: 70,
    fontFamily: 'Poppins',
    fontWeight: 700,
    lineHeight: 1.1,
  },
  subtitle: {
    fontFamily: 'Poppins',
    fontWeight: 500,
    lineHeight: 1,
  },
  grid: {
    paddingTop: '30px',
    paddingLeft: '30px',
    paddingRight: '30px',
  },
  card: {
    justifyItems: 'center',
    background: 'none',
    padding: '10px',
  },
});

const data = {
    title: "Getting started with NFTR",
    rows: [
      {
        title: "What is an NFT?",
        content: "NFT is an acronym for Non-Fungible Token."
      },
      {
        title: "What does NFTR do?",
        content: "NFTR provides a simple, easy-to-use platform for University Faculty, clubs and societies to mint NFTs.<br><br>These NFTs may represent acheivements or awards, such as a scholarship, or a prize won during an university event."
      },
      {
        title: "How does NFTR work?",
        content: "Everything about NFTR is decentralized. NFTs minted using our platform can be viewed directly on the <a href='https://ropsten.etherscan.io/address/0x2eb1cd1fdcbadc3ccf3f67e1283bafd888b1e7b5'>blockchain</a>.<br><br>Even the StudentID associated with your wallet address is stored on-chain.<br><br> If NFTR were to go down - absolutely nothing would happen to your assets."
      },
      {
        title: "How can I use NFTR?",
        content: "Getting started with NFTR is simple. Follow the instructions below to setup a wallet and connect to NFTR. <br> <ul> <li>Install MetaMask as a Chrome/Firefox extension. </li> <li>Create a wallet. </li> <li>Click the lock icon in the top right to login using MetaMask.</li><li>Head to the <a href='/associate'>associate</a> page to register you student number and wallet address.</li></ul><br>That's all it takes to get set-up. Have fun using NFTR!"
      },
      {
        title: "Is it free?",
        content: "Yes, NFTR is completely free-to-use. Contracts are currently being deployed on the Ropsten test network. <br>It doesn't cost you an <i>real</i> money to send transactions on the test network."
      }]
  }

const styles = {
    bgColor: 'linear-gradient(135deg, #99B898 0%, #FECEAB 70%, #FF847F 100%)',
    titleTextColor: "green",
    rowTitleColor: "#black",
    rowTitleTextSize: '18px',
    rowContentColor: '#1E3656',
    rowContentTextSize: '17px',
    rowContentPaddingTop: '10px', 
    rowContentPaddingBottom: '10px',
    rowContentPaddingLeft: '30px',
    rowContentPaddingRight: '150px'
    // arrowColor: "red",
};

const config = {
    animate: true,
    // arrowIcon: "V",
    tabFocus: true
};


function faq(){
  const classes = useStyles();
    return (    
    <Box className={classes.background}>
        <Grow in={true} timeout={1500} mountOnEnter>
          <Grid
            container
            justify='center'
            alignItems='center'
            className={classes.root}
          >
            <Box className={classes.box}>
              <Card className={classes.card} elevation={0}>
                <Typography className={classes.overlay}>
                  <Typography className={classes.title}>
                    FAQ.
                    <br />
                  </Typography>
                  <Typography className={classes.subtitle}>
                    Answers to the most frequenly asked questions about NFTR.
                  </Typography>
                </Typography>
              </Card>
            </Box>
          </Grid>
        </Grow>
        <Grid container className={classes.root}>
          <Grid item xs={false} sm={2} xl={3} />
        <div>
          <Faq data = {data} styles = {styles} config = {config}/>
        </div>
        </Grid>
      </Box>
      )
    }

export default faq;
