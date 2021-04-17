import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { Box, Paper, Slide } from '@material-ui/core';
import NFTcardmulti from '../../components/nft/NFTcardmulti';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

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
    boxShadow: 'none',
    background: 'none',
  },
  card: {
    borderRadius: 0,
    position: 'relative',
    width: '100%',
    height: '20rem',
    zIndex: 1,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    boxShadow: 'none',
    background: 'none',
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
  grid: {
    paddingTop: '30px',
    paddingLeft: '30px',
    paddingRight: '30px',
  },
  card: {
    backgroundColor: '#99B898',
  },
  wrapper: {
    background:
      'linear-gradient(135deg, #99B898 0%, #FECEAB 70%, #FF847F 100%)',
  },
  section: {
    justifyContent: 'space-around',
    overflow: 'hidden',
    width: '100%',
    flexWrap: 'wrap',
    display: 'flex',
    background: 'none',
  },
  text: {
    fontFamily: 'Poppins',
    fontSize: 24,
    fontWeight: 700,
    color: '#2A363B',
  },
  item: {
    flexDirection: 'row',
    height: '100px',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
  },
  iconbox: {
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 1,
  },
});

function Clubpage() {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.root}>
        <Card className={classes.card}>
          <Typography className={classes.overlay}>
            <Typography className={classes.title}>
              UMCPC.
              <br />
            </Typography>
            <Typography>
              University of Melbourne Competitive Programming Club
            </Typography>
            <Typography>
              University of Melbourne Competitive Programming Club
            </Typography>
          </Typography>
        </Card>
      </Box>
      <Grid container className={classes.grid} spacing={4}>
        <Grid item xs={12}>
          <Paper elevation={0} className={classes.section}>
            <Typography className={classes.text}>Available NFTs.</Typography>
          </Paper>
        </Grid>
        <Grid item xs={false} sm={2} xl={4} />
        <Grid item justify='center' xs={12} sm={8} xl={4}>
          <Grid container direction='row' spacing={1}>
            <NFTcardmulti name='NFT 1' id='1' />
            <NFTcardmulti name='NFT 2' id='2' />
            <NFTcardmulti name='NFT 3' id='3' />
            <NFTcardmulti name='NFT 4' id='4' />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Clubpage;
