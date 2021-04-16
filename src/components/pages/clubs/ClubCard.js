import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardActionArea, CardMedia, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  card: {},
  media: {
    height: 50,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <Link to={'/clubs/' + props.name}>
          <CardActionArea>
            <CardMedia className={classes.media} image={props.image} />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                {props.name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </Grid>
  );
}
