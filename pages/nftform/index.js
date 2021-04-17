import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import {Box, Button, Card, Paper, Typography} from '@material-ui/core';
import Grow from '@material-ui/core/Grow';
import TextField from '@material-ui/core/TextField';
import {Field, Form} from 'react-final-form';

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 25,
    zIndex: 1,
    height: '100%',
    backgroundColor: '#f5eacf',
    margin: '5rem',
  },
  form: {
    zIndex: 1,
    height: '100%',
    background: 'none',
    boxShadow: 'none',
  },
  background: {
    position: 'static',
    height: '100rem',
    zIndex: 0,
    background:
      'linear-gradient(135deg, #99B898 0%, #FECEAB 40%, #FF847F 100%)',
  },
  title: {
    fontSize: '2rem',
    fontFamily: 'Poppins',
    fontWeight: 700,
    lineHeight: 1.1,
    color: '#2A363B',
    margin: '3rem 3rem',
  },
  button: {
    variant: 'h1',
    color: '#f5eacf',
    fontFamily: 'Poppins',
    fontSize: 18,
    fontWeight: 600,
    textTransform: 'none',
    boxShadow: 'none',
    backgroundColor: 0,
    borderColor: 0,
  },
}));

function NFTFormPage() {
  const classes = useStyles();

  const [issuer, setIssuer] = useState('');
  const [recipient, setRecipient] = useState('');
  const [event, setEvent] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const handleChangeIssuer = (e) => {
    setIssuer(e.target.value);
  };
  const handleChangeRecipient = (e) => {
    setRecipient(e.target.value);
  };
  const handleChangeEvent = (e) => {
    setEvent(e.target.value);
  };
  const handleChangeImage = (e) => {
    setImage(e.target.value);
  };
  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const onSubmit = async (e) => {
    const res = await fetch('/api/register', {
      body: JSON.stringify({
        issuer,
        recipient,
        event,
        image,
        description,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const result = await res.json();
  };

  return (
    <Box className={classes.background}>
      <Grow in={true} timeout={1000}>
        <Grid container>
          <Grid item xs={false} sm={3} xl={4} />
          <Grid item xs={12} sm={6} xl={4}>
            <Card className={classes.root}>
              <Form
                onSubmit={onSubmit}
                render={({handleSubmit}) => (
                  <form onSubmit={handleSubmit}>
                    <Paper className={classes.form}>
                      <Grid
                        container
                        justify='center'
                        alignContent='center'
                        direction='column'
                        spacing={1}
                      >
                        <Typography className={classes.title}>
                          Mint an NFT!
                      </Typography>

                        <Grid item xs={10}>
                          <Field
                            fullWidth
                            required
                            name='issuer'
                            value={issuer}
                            onChange={handleChangeIssuer}
                            component={TextField}
                            type='text'
                            label='Issuer'
                          />
                        </Grid>
                        <Grid item xs={10}>
                          <Field
                            fullWidth
                            required
                            name='recipient'
                            value={recipient}
                            onChange={handleChangeRecipient}
                            component={TextField}
                            type='text'
                            label='Recipient'
                          />
                        </Grid>
                        <Grid item xs={10}>
                          <Field
                            fullWidth
                            required
                            name='event'
                            value={event}
                            onChange={handleChangeEvent}
                            component={TextField}
                            type='text'
                            label='Event'
                          />
                        </Grid>

                        <Grid item xs={10}>
                          <Field
                            fullWidth
                            required
                            name='image'
                            value={image}
                            onChange={handleChangeImage}
                            component={TextField}
                            multiline
                            type='text'
                            label='Image URL'
                          />
                        </Grid>

                        <Grid item xs={10}>
                          <Field
                            fullWidth
                            name='description'
                            value={description}
                            onChange={handleChangeDescription}
                            component={TextField}
                            multiline
                            type='text'
                            label='Description'
                          />
                        </Grid>

                        <Grid item xs={10}>
                          <Grid container justify='center'>
                            <Button
                              className='classes.button'
                              variant='contained'
                              color='secondary'
                              type='submit'
                            >
                              Submit
                          </Button>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Paper>
                  </form>
                )}
              />
            </Card>
          </Grid>
          <Grid xs={false} sm={3} xl={4} />
        </Grid>
      </Grow>
    </Box>
  );
}
export default NFTFormPage;
