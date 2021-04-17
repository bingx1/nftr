import React, { useState } from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'next/link';
import { useRouter } from 'next/router';

import { Button, Grid, Paper, Slide } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { Box } from '@material-ui/core';
import NFTcarousel from '../components/nft/NFTcarousel';

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
    background: 'none',
    boxShadow: 'none',
  },
  media: {
    height: 500,
  },
  textLayout: {
    position: 'center',
    paddingTop: '5rem',
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
  link: {
    textDecoration: 'none',
  },
  wrapper: {
    background:
      'linear-gradient(135deg, #99B898 0%, #FECEAB 70%, #FF847F 100%)',
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
});

function Home() {
  const classes = useStyles();
  const [slide, setSlide] = useState(false);
  const router = useRouter();

  const handleChangeSlide = () => {
    setSlide((slide) => !slide);
    setTimeout(function () {
      router.push('clubs');
    }, 1000);
  };

  return (
    <Paper className={classes.wrapper}>
      <Box className={classes.root}>
        <Slide direction='down' in={!slide} out={slide} timeout={1000}>
          <Typography className={classes.textLayout}>
            <Typography className={classes.title}>NFTR.</Typography>
            <Typography className={classes.subtitle}>
              Create and collect NFTs for university and clubs
            </Typography>
            <Typography className={classes.subtitle}>
              {/* <Link href='clubs'>
                <a className={classes.linkStyle}> */}
              <Button
                className={classes.buttonStyle}
                onClick={handleChangeSlide}
              >
                <KeyboardArrowRightIcon size='100px' />
                start checking out our clubs now...
              </Button>
              {/* </a>
              </Link> */}
            </Typography>
          </Typography>
        </Slide>
      </Box>
      <Slide direction='up' in={!slide} out={slide} timeout={1000}>
        <Grid container direction='row'>
          <Grid item xs={false} sm={3} xl={4} />
          <Grid item xs={12} sm={6} xl={4}>
            <NFTcarousel />
          </Grid>
          <Grid item xs={false} sm={3} xl={4} />
        </Grid>
      </Slide>
    </Paper>
  );
}

export default Home;
