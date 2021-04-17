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
                  Checkout these club's NFTs
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
                image='data:image/png;base64,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'
              />
              <ClubCard
                name='CISSA'
                about='Computing & Information Systems Students Association'
                image='https://scontent.fmel8-1.fna.fbcdn.net/v/t1.6435-9/91038252_2616883031921744_2081927418972471296_n.png?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=IB4xJ35ReaAAX_xotqR&_nc_ht=scontent.fmel8-1.fna&oh=50432f111e37acf0ad4d551e841b3931&oe=60A20EF9'
              />
              <ClubCard
                name='MISC'
                about='University of Melbourne Information Security Club'
              />
              <ClubCard
                name='ARES'
                about='Aerospace and Rocket Engieering Society'
                image='https://umsu.unimelb.edu.au/wp-content/uploads/2016/06/SolidBlue-400x400.png'
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
