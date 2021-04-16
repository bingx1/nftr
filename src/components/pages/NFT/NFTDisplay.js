import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import {
  Backdrop,
  Box,
  Button,
  CardActionArea,
  CardMedia,
  CircularProgress,
  Grid,
  Paper,
  Slide,
} from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import NavButton from '../../layout/NavButton';

const useStyles = makeStyles({
  root: {
    borderRadius: 0,
    position: 'relative',
    width: '100%',
    zIndex: 10,
    boxShadow: 'none',
    background: 'none',
  },
  card: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    zIndex: 1,
    height: '95rem',
    backgroundColor: '#f5eacf',
    marginTop: '5rem',
  },

  title: {
    padding: '2rem 2rem 0',
    fontSize: '7.5ch',
    fontFamily: 'Poppins',
    fontWeight: 700,
    lineHeight: 1.1,
    color: '#2A363B',
  },
  subtitle: {
    padding: '1rem 2rem',
    fontFamily: 'Poppins',
    fontSize: 20,
    fontWeight: 500,
    lineHeight: 1,
    color: '#2A363B',
  },
  linkStyle: {
    textDecoration: 'none',
    paddingRight: 10,
  },
  wrapper: {
    position: 'relative',
    height: '100rem',
    zIndex: 0,
    background:
      'linear-gradient(135deg, #99B898 0%, #FECEAB 40%, #FF847F 100%)',
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
  minMedia: {
    width: '100%',
    alignContent: 'centre',
    height: '40rem',
    position: 'relative',
  },
  expandedMedia: {
    width: '100%',
    height: '100%',
    display: 'block',
    position: 'relative',
    margin: 'auto',
  },
  mediawrapper: {
    padding: '2rem',
  },
  backdrop: {
    zIndex: 100,
    color: '#fff',
  },
});

function NFTCard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Box className={classes.wrapper}>
      <Grid item container className={classes.root} direction='row' spacing={1}>
        <Grid xs={false} sm={2} />
        <Grid xs={12} sm={8}>
          <Card className={classes.card}>
            <Typography className={classes.title}>
              CodeBrew 2021 1st place.
            </Typography>
            <Typography className={classes.subtitle}>
              Issuer: Bing <br />
              Current Owner: Hao
            </Typography>
            <CardActionArea
              className={classes.mediawrapper}
              onClick={handleToggle}
            >
              <CardMedia
                className={classes.minMedia}
                image='https://images.unsplash.com/photo-1554188248-986adbb73be4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                title='NFT Image'
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid xs={false} sm={2} />
      </Grid>
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <CardMedia
          className={classes.expandedMedia}
          image='https://images.unsplash.com/photo-1554188248-986adbb73be4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
          title='NFT Image'
        />
      </Backdrop>
    </Box>
  );
}

export default NFTCard;
