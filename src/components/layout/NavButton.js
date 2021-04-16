import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  root: {
    textDecoration: 'none',
    paddingRight: 10,
  },
  buttonStyle: {
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

function NavButton(props) {
  const classes = useStyles();

  return (
    <div>
      <Link className={classes.root} to={props.url}>
        <Button className={classes.buttonStyle} color='inherit'>
          {props.text}
        </Button>
      </Link>
    </div>
  );
}

export default NavButton;
