import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ClubCard from '../../components/club/ClubCard';
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    padding: '50px',
  },
  background: {
    position: 'static',
    height: '100rem',
    zIndex: 0,
    background:
      'linear-gradient(135deg, #99B898 0%, #FECEAB 40%, #FF847F 100%)',
  },
});

function clubs() {
  const classes = useStyles();

  return (
    <Box className={classes.background}>
      <Grid container className={classes.root}>
        <Grid xs={false} sm={2} xl={4} />
        <Grid xs={12} sm={8} xl={4} direction='row' spacing={1}>
          <ClubCard name='UMCPC' />
          <ClubCard name='CISSA' />
          <ClubCard name='MISC' />
          <ClubCard name='MESS' />
          <ClubCard name='SAS' />
          <ClubCard name='UMSU' />
          <ClubCard name='M-ASS' />
          <ClubCard name='DES' />
        </Grid>
        <Grid xs={false} sm={2} xl={4} />
      </Grid>
    </Box>
  );
}

export default clubs;
