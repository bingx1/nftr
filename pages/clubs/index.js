import React from 'react';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import ClubCard from '../../components/club/ClubCard';
import {Box} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    padding: '50px'
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
        <Grid item xs={false} sm={2} xl={4} />

        <Grid item xs={12} sm={8} xl={4}>
          <Grid container direction='row' spacing={1}>
            <ClubCard name='UMCPC' about='University of Melbourne Competitive Programming Club' />
            <ClubCard name='CISSA' about='Computing & Information Systems Students Association' />
            <ClubCard name='MISC' about='University of Melbourne Information Security Club' />
            <ClubCard name='ARES' about='Aerospace and Rocket Engieering Society' />
            <ClubCard name='SSS' about='Science Students Society' />
            <ClubCard name='UMSU' about='University of Melbourne Student Union' />
            <ClubCard name='M-ASS' about='Arts Students Society' />
            <ClubCard name='DES' about='Design Students Society' />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default clubs;
