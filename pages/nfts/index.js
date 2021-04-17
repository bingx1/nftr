import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Box, Grid } from '@material-ui/core';

import NFTcard from '../../components/nft/NFTcard';

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

function NFTSingleCardDisplay(props) {
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
      <Grid container className={classes.root} direction='row' spacing={1}>
        <Grid item xs={false} sm={2} xl={4} />
        <Grid item className={classes.grid} xs={12} sm={8} xl={4}>
          <NFTcard
            issuer={props.issuer}
            recipient={props.recipient}
            event={props.event}
            image={props.image}
            description={props.description}
            handleToggle={handleToggle}
            handleClose={handleClose}
            open={open}
          />
        </Grid>
        <Grid item xs={false} sm={2} xl={4} />
      </Grid>
    </Box>
  );
}

export default NFTSingleCardDisplay;
