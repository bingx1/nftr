import React from 'react';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import ClubCard from './ClubCard';

const useStyles = makeStyles({
  root: {
    paddingLeft: "40px",
    paddingTop: "40px",
    paddingRight: "40px",
  },
  paper: {
    height: 140,
    width: 100,
  },
});

function Clubs() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={6}>
      <ClubCard name="UMCPC" />
      <ClubCard name="CISSA" />
      <ClubCard name="MISC" />
      <ClubCard name="MESS" />
      <ClubCard name="SAS" />
      <ClubCard name="UMSU" />
      <ClubCard name="M-ASS" />
      <ClubCard name="DES" />
    </Grid>
  );
}

export default Clubs;
