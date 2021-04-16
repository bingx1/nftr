import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {CardActionArea, CardMedia, Grid} from '@material-ui/core';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
  card: {
    backgroundColor: '#99B898',
  },
  media: {
    height: 50,
  },
  text: {
    fontFamily: 'Poppins',
    fontSize: 26,
    fontWeight: 700,
    textTransform: 'none',
    boxShadow: 'none',
    backgroundColor: 0,
    borderColor: 0,
    paddingLeft: '10px',
    color: '#f5eacf',
  },
});

export default function NFTcard(props) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card className={classes.card}>
        <Link to={'/NFT/' + props.id} style={{textDecoration: 'none'}} color="inherit">
          <CardActionArea>
            <CardMedia className={classes.media} image={props.image} />
            <CardContent>
              <Typography className={classes.text} gutterBottom variant='h5' component='h2'>
                {props.name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </Grid>
  );
}
