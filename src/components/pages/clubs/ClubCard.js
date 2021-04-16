import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardActionArea, CardMedia, Grid } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    width: 400,
  },
  media: {
    height: 50,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();

  return (
    <Grid item xs={3}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia className={classes.media} image={props.image} />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {props.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
