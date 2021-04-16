import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Box, Grid } from '@material-ui/core';

import NFTcard from './NFTcard';

const useStyles = makeStyles({
  root: {
    position: 'static',
    height: '100rem',
    zIndex: 0,
    background:
      'linear-gradient(135deg, #99B898 0%, #FECEAB 40%, #FF847F 100%)',
  },
  grid: {
    marginTop: '5em',
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
        <Grid xs={false} sm={2} xl={4} />
        <Grid className={classes.grid} xs={12} sm={8} xl={4}>
          <NFTcard
            handleToggle={handleToggle}
            handleClose={handleClose}
            open={open}
          />
        </Grid>
        <Grid xs={false} sm={2} xl={4} />
      </Grid>
    </Box>
  );
}

export default NFTCard;
