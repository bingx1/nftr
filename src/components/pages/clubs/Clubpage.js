import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';

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
    background: 'linear-gradient(90deg, #99B898 0%, #FECEAB 70%, #FF847F 100%)',
    boxShadow: 'none',
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
    fontFamily: 'Abril Fatface',
    lineHeight: 1.1,
  },
  subtitle: {
    fontFamily: 'Poppins',
    fontSize: 20,
    fontWeight: 500,
    lineHeight: 1,
  },
  wrapper: {
    background: '#FF847F',
  },
});

function Clubpage() {
  const classes = useStyles();

  return (
    <Paper className={classes.wrapper}>
      <Card className={classes.root}>
        <Typography className={classes.overlay}>
          <Typography className={classes.title}>
            UMCPC
            <br />
          </Typography>
          <Typography className={classes.subtitle}>
            University of Melbourne Competitive Programming Club
          </Typography>
        </Typography>
      </Card>
    </Paper>
  );
}

export default Clubpage;
