import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ClubCard from '../../components/club/ClubCard';
import { Box, Card, Grow, Slide, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    padding: '50px',
    zIndex: 1,
  },
  background: {
    position: 'static',
    height: '100rem',
    zIndex: 0,
    background:
      'linear-gradient(135deg, #99B898 0%, #FECEAB 70%, #FF847F 100%)',
  },
  title: {
    fontSize: 70,
    fontFamily: 'Poppins',
    fontWeight: 700,
    lineHeight: 1.1,
  },
  subtitle: {
    fontFamily: 'Poppins',
    fontWeight: 500,
    lineHeight: 1,
  },
  grid: {
    paddingTop: '30px',
    paddingLeft: '30px',
    paddingRight: '30px',
  },
  card: {
    justifyItems: 'center',
    background: 'none',
    padding: '10px',
  },
});

function clubs() {
  const classes = useStyles();

  return (
    <Box className={classes.background}>
      <Grow in={true} timeout={1500} mountOnEnter>
        <Grid
          container
          justify='center'
          alignItems='center'
          className={classes.root}
        >
          <Box className={classes.box}>
            <Card className={classes.card} elevation={0}>
              <Typography className={classes.overlay}>
                <Typography className={classes.title}>
                  Clubs.
                  <br />
                </Typography>
                <Typography className={classes.subtitle}>
                  University of Melbourne Competitive Programming Club
                </Typography>
              </Typography>
            </Card>
          </Box>
        </Grid>
      </Grow>
      <Grid container className={classes.root}>
        <Grid item xs={false} sm={2} xl={4} />

        <Grid item xs={12} sm={8} xl={4}>
          <Slide direction='up' in={true} timeout={1000} mountOnEnter>
            <Grid container direction='row' spacing={1}>
              <ClubCard
                name='UMCPC'
                about='University of Melbourne Competitive Programming Club'
              />
              <ClubCard
                name='CISSA'
                about='Computing & Information Systems Students Association'
              />
              <ClubCard
                name='MISC'
                about='University of Melbourne Information Security Club'
              />
              <ClubCard
                name='ARES'
                about='Aerospace and Rocket Engieering Society'
              />
              <ClubCard name='SSS' about='Science Students Society' />
              <ClubCard
                name='UMSU'
                about='University of Melbourne Student Union'
              />
              <ClubCard name='M-ASS' about='Arts Students Society' />
              <ClubCard name='DES' about='Design Students Society' />
            </Grid>
          </Slide>
        </Grid>
      </Grid>
    </Box>
  );
}

export default clubs;
