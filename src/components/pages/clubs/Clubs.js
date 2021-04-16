import React from 'react';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import ClubCard from './ClubCard';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: "40px",
    paddingRight: "40px",
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

function Clubs() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={3}>
      <ClubCard name="UMCPC" />
      <ClubCard name="CISSA" />
      <ClubCard name="MISC" />
    </Grid>
  );
}

export default Clubs;
