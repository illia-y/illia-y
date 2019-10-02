import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Link, makeStyles } from '@material-ui/core';

const AdapterLink = React.forwardRef((props, ref) => (
  <RouterLink innerRef={ref} {...props} />
));

const useStyles = makeStyles({
  link: {
    color: 'white',
    fontFamily: 'Roboto, sans-serif',
    margin: '0 10px 0 10px'
  }
});

const Header = ({ login }) => {
  const classes = useStyles();

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Link
          className={classes.link}
          underline="none"
          component={AdapterLink}
          to="/"
        >
          Home
        </Link>
        {!login ? (
          <Link
            className={classes.link}
            underline="none"
            component={AdapterLink}
            to="/login"
          >
            Login
          </Link>
        ) : null}
        {login ? (
          <Link
            className={classes.link}
            underline="none"
            component={AdapterLink}
            to="/profile"
          >
            Profile
          </Link>
        ) : null}
        {login ? (
          <Link
            className={classes.link}
            underline="none"
            component={AdapterLink}
            to="/contacts"
          >
            Contacts
          </Link>
        ) : null}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
