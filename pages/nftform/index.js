import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Card, Paper, Typography } from '@material-ui/core';

import TextField from '@material-ui/core/TextField';
import { Field, Form } from 'react-final-form';

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
    margin: '1rem',
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
  textField: {
    margin: '1rem',
    width: '100%',
  },
  title: {
    fontSize: '2rem',
    fontFamily: 'Poppins',
    fontWeight: 700,
    lineHeight: 1.1,
    color: '#2A363B',
    margin: '2rem 1rem 1rem',
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

const onSubmit = async (values) => {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

function NFTFormPage() {
  const classes = useStyles();
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <Box className={classes.background}>
      <Grid container>
        <Grid xs={false} sm={2} xl={4} />
        <Grid xs={12} sm={8} xl={4}>
          <Card className={classes.root}>
            <Form
              onSubmit={onSubmit}
              render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <Paper className={classes.form}>
                    <Grid
                      container
                      alignItems='flex-start'
                      justify='center'
                      spacing={2}
                    >
                      <Typography className={classes.title}>
                        Mint an NFT!
                      </Typography>

                      <Grid item xs={8}>
                        <Field
                          fullWidth
                          required
                          name='issuer'
                          component={TextField}
                          type='text'
                          label='Issuer'
                        />
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          fullWidth
                          required
                          name='recipient'
                          component={TextField}
                          type='text'
                          label='Recipient'
                        />
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          fullWidth
                          required
                          name='event'
                          component={TextField}
                          type='event'
                          label='Event'
                        />
                      </Grid>

                      <Grid item xs={8}>
                        <input
                          type='file'
                          value={selectedFile}
                          onChange={(e) => setSelectedFile(e.target.files[0])}
                        />
                      </Grid>

                      <Grid item xs={8}>
                        <Field
                          fullWidth
                          name='description'
                          component={TextField}
                          multiline
                          label='Description'
                        />
                      </Grid>

                      <Grid item xs={8}>
                        <Grid container justify='center'>
                          <Button
                            className='classes.button'
                            variant='contained'
                            color='primary'
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
        <Grid xs={false} sm={2} xl={4} />
      </Grid>
    </Box>
  );
}
export default NFTFormPage;
