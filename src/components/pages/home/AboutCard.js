import React from 'react';
import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import ContactMailIcon from '@material-ui/icons/ContactMail';

const useStyles = makeStyles({
  root: {
    borderRadius: 0,
    position: 'relative',
    width: '100%',
    height: '100%',
    zIndex: 1,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    boxShadow: 'none',
    background: 'white',
  },
  title: {
    paddingTop: '40px',
    paddingBottom: '10px',
    fontFamily: 'Abril Fatface',
    fontSize: 40,
    lineHeight: 1.1,
  },
  text: {
    fontFamily: 'Poppins',
    fontSize: 18,
    fontWeight: 300,
    lineHeight: 1.5,
    paddingRight: '10px',
  },
  icon: {
    padding: '20px',
    fontSize: '25rem',
    justify: 'center',
    alignItems: 'center',
  },
});

function AboutCard() {
  const classes = useStyles();

  return (
    <Box class={classes.root}>
      <Grid item container direction='row' spacing={1}>
        <Grid xs={false} sm={2} />
        <Grid xs={6} sm={4}>
          <Typography className={classes.title}>About us.</Typography>
          <Typography className={classes.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac
            ipsum purus. Donec varius vel turpis eget bibendum. Aenean commodo
            ipsum ligula, ut mollis neque suscipit nec. Integer sem enim, luctus
            fermentum sapien vel, cursus malesuada turpis.
          </Typography>
        </Grid>
        <Grid xs={4} sm={4}>
          <ContactMailIcon
            className={classes.icon}
            style={{ color: '#2A363B' }}
          />
        </Grid>
        <Grid xs={false} sm={2} />
      </Grid>
    </Box>
  );
}

export default AboutCard;
