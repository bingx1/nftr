import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Box, CardActionArea, CardMedia, Grid } from '@material-ui/core';
import Link from 'next/link';

const useStyles = makeStyles({
  card: {
    backgroundColor: '#f5eacf',
    borderRadius: 5,
  },
  media: {
    width: '40%',
    height: '50px',
    position: 'relative',
    borderRadius: 3,
  },
  mediawrapper: {
    padding: '0 0.5rem 0.5rem 0.5rem',
  },
  text: {
    fontFamily: 'Poppins',
    fontSize: 18,
    fontWeight: 700,
    color: '#2A363B',
  },
});

export default function ClubCard(props) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={12}>
      <Card className={classes.card}>
        <Link href={'/clubs/' + props.name}>
          <CardActionArea>
            <CardContent>
              <Typography className={classes.text}>{props.name}</Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </Grid>
  );
}
