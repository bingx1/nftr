import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import Link from 'next/link';

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
      <Link href={props.url}>
        <a className={classes.root}>
          <Button className={classes.buttonStyle} color='inherit'>
            {props.text}
          </Button>
        </a>
      </Link>
    </div>
  );
}

export default NavButton;
