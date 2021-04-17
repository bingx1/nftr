import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Box, CardActionArea, CardMedia, Grid } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    width: '10rem',
    height: '10rem',
    backgroundColor: '#f5eacf',
    borderRadius: '100%',
  },
  media: {
    display: 'block',
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  text: {
    fontFamily: 'Poppins',
    fontSize: 20,
    fontWeight: 700,
    color: '#2A363B',
  },
});

export default function NFTcardmulti(props) {
  const classes = useStyles();

  return (
    <Grid item xs={4} sm={2}>
      <Grid container justify='center'>
        <Card className={classes.card}>
          <CardActionArea href={'/NFT/' + props.id}>
            <CardMedia className={classes.media} image={props.image} />
          </CardActionArea>
        </Card>
      </Grid>
      <Grid container justify='center'>
        <Typography className={classes.text}>{props.name}</Typography>
      </Grid>
    </Grid>
  );
}
