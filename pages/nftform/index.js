import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Button,
  Card,
  CircularProgress,
  Paper,
  Slide,
  Typography,
} from '@material-ui/core';
import Grow from '@material-ui/core/Grow';
import TextField from '@material-ui/core/TextField';
import { Field, Form } from 'react-final-form';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import useWeb3Modal from '../../components/hooks/UseWeb3Modal';
const NEXT_PUBLIC_TOKEN_ADDRESS = process.env.NEXT_PUBLIC_TOKEN_ADDRESS;
const token_contract = require('../../artifacts/contracts/MyNFT.sol/MyNFT.json');
import { ethers } from 'ethers';

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 25,
    zIndex: 1,
    height: '40rem',
    backgroundColor: '#f5eacf',
    margin: '5rem',
  },
  form: {
    zIndex: 1,
    height: '100%',
    background: 'none',
    boxShadow: 'none',
    margin: '1rem',
  },
  background: {
    position: 'static',
    height: '100rem',
    zIndex: 0,
    background:
      'linear-gradient(135deg, #99B898 0%, #FECEAB 40%, #FF847F 100%)',
  },
  title: {
    fontSize: '2rem',
    fontFamily: 'Poppins',
    fontWeight: 700,
    lineHeight: 1.1,
    color: '#2A363B',
    margin: '2rem 3rem',
  },
  hash: {
    fontSize: '2rem',
    fontFamily: 'Poppins',
    fontWeight: 500,
    lineHeight: 1.1,
    color: '#2A363B',
    margin: '1rem 0rem',
  },
  button: {
    color: '#FECEAB',
    fontFamily: 'Poppins',
    fontSize: 18,
    fontWeight: 600,
    textTransform: 'none',
    backgroundColor: '#FF847C',
    boxShadow: 'none',
    margin: '4rem 0 0 0',
    '&:hover': {
      backgroundColor: 'rgb(7, 177, 77, 0.42)',
    },
  },
  successGrid: {
    height: '40rem',
  },
}));

async function loadContract() {
  return await new window.web3.eth.Contract(ABI, contractAddress);
}

async function getName(nft_contract) {
  const name = await nft_contract.name();
  console.log("The NFTs name is, ", name);
}

async function eventFilterv5(contractAddress, erc20abi, _provider)  {
  const iface = new ethers.utils.Interface(erc20abi);    
  const logs = await _provider.getLogs({address:contractAddress});
  console.log(logs);    
  const decodedEvents = logs.map(log => {iface.decodeEventLog("Transfer", log.data)});
  const toAddresses = decodedEvents.map(event => event["values"]["to"]);
  const fromAddresses = decodedEvents.map(event => event["values"]["from"]);
  const amounts = decodedEvents.map(event => event["values"]["value"]);    
  return [fromAddresses, toAddresses, amounts]}


async function fetchProvider() {
  if (typeof window.ethereum !== 'undefined') {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    console.log("The injected provider is", provider);
    console.log("The signer associated with the provider is", provider.getSigner());
    console.log("The provider is connected to the following network ", await provider.getNetwork());
    const contract = new ethers.Contract(NEXT_PUBLIC_TOKEN_ADDRESS, token_contract.abi, provider);
    console.log("The contract is ", contract);
    // const events = await eventFilterv5(NEXT_PUBLIC_TOKEN_ADDRESS, token_contract.abi, provider);
    const filter =contract.filters.Transfer(); 
    const events = await contract.queryFilter(filter);
    console.log("The transfer events are:", events);
    // const contract = new ethers.Contract(greeterAddress, Greeter.abi, provider)
    // try {
    //   const data = await contract.greet()
    //   console.log('data: ', data)
    // } catch (err) {
    //   console.log("Error: ", err)
    // }
  }    
}



function NFTFormPage() {
  const classes = useStyles();
  fetchProvider();


  const [issuer, setIssuer] = useState('');
  const [recipient, setRecipient] = useState('');
  const [event, setEvent] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [destinationAddress, setDestinationAddress] = useState('');
  const [formstage, setFormstage] = useState(true);
  const [loading, setLoading] = useState(false);
  const [finished, setFinished] = useState(false);
  const setProgress = () => {
    setLoading((loading) => !loading);
  };

  const handleChangeIssuer = (e) => {
    setIssuer(e.target.value);
  };
  const handleChangeRecipient = (e) => {
    setRecipient(e.target.value);
  };
  const handleChangeEvent = (e) => {
    setEvent(e.target.value);
  };
  const handleChangeImage = (e) => {
    setImage(e.target.value);
  };
  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleChangeDestinationAddress = (e) => {
    setDestinationAddress(e.target.value);
  };

  const makeTransaction = async () => {
    const tx = {
      from: ethereum.selectedAddress,
      to: destinationAddress,
      gas: 500000,
      data: nftContract.methods.mintNFT(destinationAddress, tokenURI).encodeABI(),
    };
  }


  const onSubmit = async (e) => {
    setFormstage(false);
    setLoading(true);
    // Submitting call to mint the NFT.
    console.log("The wallet address of the current user is:", id);
    console.log("The current signer is: ", signer);
    const nft_contract = new ethers.Contract(NEXT_PUBLIC_TOKEN_ADDRESS, token_contract.ABI, signer);
    console.log(nft_contract)
    // const hash = await ethereum.request({method: 'eth_sendTRansaction', params: [tx]})
    const uri_url = await fetch('/api/uri', {
      body: JSON.stringify({
        issuer,
        recipient,
        event,
        image,
        description,
        destinationAddress,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
    console.log("The NFT's metadata has been succesfully uploaded to the IPFS, ", uri_url);
    setLoading(false);
    setFinished(true);

    const resultHash = await res.json();
  };

  return (
    <Box className={classes.background}>
      <Grow in={true} timeout={1000}>
        <Grid container>
          <Grid item xs={false} sm={3} xl={4} />
          <Grid item xs={12} sm={6} xl={4}>
            <Card className={classes.root}>
              <Grow in={formstage} timeout={1000} mountOnEnter unmountOnExit>
                <Form
                  onSubmit={onSubmit}
                  render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                      <Paper className={classes.form}>
                        <Grid
                          container
                          justify='center'
                          alignContent='center'
                          direction='column'
                          spacing={1}
                        >
                          <Typography className={classes.title}>
                            Mint an NFT
                          </Typography>

                          <Grid item xs={10}>
                            <Field
                              fullWidth
                              name='issuer'
                              value={issuer}
                              onChange={handleChangeIssuer}
                              component={TextField}
                              type='text'
                              label='Issuer'
                              color='secondary'
                            />
                          </Grid>
                          <Grid item xs={10}>
                            <Field
                              fullWidth
                              name='recipient'
                              value={recipient}
                              onChange={handleChangeRecipient}
                              component={TextField}
                              type='text'
                              label='Recipient'
                              color='secondary'
                            />
                          </Grid>
                          <Grid item xs={10}>
                            <Field
                              fullWidth
                              name='event'
                              value={event}
                              onChange={handleChangeEvent}
                              component={TextField}
                              type='text'
                              label='Event'
                              color='secondary'
                            />
                          </Grid>

                          <Grid item xs={10}>
                            <Field
                              fullWidth
                              name='image'
                              value={image}
                              onChange={handleChangeImage}
                              component={TextField}
                              multiline
                              type='text'
                              label='Image URL'
                              color='secondary'
                            />
                          </Grid>

                          <Grid item xs={10}>
                            <Field
                              fullWidth
                              name='description'
                              value={description}
                              onChange={handleChangeDescription}
                              component={TextField}
                              multiline
                              type='text'
                              label='Description'
                              color='secondary'
                            />
                          </Grid>
                          <Grid item xs={10}>
                            <Field
                              fullWidth
                              name='destinationaddress'
                              value={destinationAddress}
                              onChange={handleChangeDestinationAddress}
                              component={TextField}
                              multiline
                              type='text'
                              label='Destination Address'
                              color='secondary'
                            />
                          </Grid>

                          <Grid item xs={10}>
                            <Grid container justify='center'>
                              <Button
                                className={classes.button}
                                variant='contained'
                                color='secondary'
                                type='submit'
                              >
                                Submit
                              </Button>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Paper>
                    </form>
                  )}
                />
              </Grow>
              <Grow in={loading} timeout={2000} mountOnEnter unmountOnExit>
                <Grid
                  container
                  className={classes.successGrid}
                  alignContent='center'
                  justify='center'
                  direction='column'
                >
                  <Grid container justify='center'>
                    <CircularProgress
                      size={200}
                      thickness={3}
                      style={{ color: '#FF847C' }}
                    />
                  </Grid>
                  <Grid container justify='center'>
                    <Typography className={classes.title}>Loading</Typography>
                  </Grid>
                </Grid>
              </Grow>
              <Grow in={finished} timeout={4000} mountOnEnter unmountOnExit>
                <Grid
                  container
                  className={classes.successGrid}
                  alignContent='center'
                  justify='center'
                  direction='column'
                >
                  <Grid container justify='center'>
                    <CheckCircleIcon
                      size={300}
                      thickness={3}
                      style={{ color: 'rgb(7, 177, 77, 0.42)', fontSize: 200 }}
                    />
                  </Grid>
                  <Grid container justify='center'>
                    <Typography className={classes.title}>Success!</Typography>
                  </Grid>
                  <Grid container justify='center'>
                    <Typography className={classes.subtitle}>
                      View the progress of your token here:
                    </Typography>
                  </Grid>
                  <Grid container justify='center'>
                    <Typography className={classes.hash}>
                      <a href='https://ropsten.etherscan.io/address/0x2eb1cd1fdcbadc3ccf3f67e1283bafd888b1e7b5'>
                        click here!
                      </a>
                    </Typography>
                  </Grid>
                </Grid>
              </Grow>
            </Card>
          </Grid>
          <Grid xs={false} sm={3} xl={4} />
        </Grid>
      </Grow>
    </Box>
  );
}
export default NFTFormPage;
