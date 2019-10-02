import React, { useState } from 'react';
import { Grid, TextField, Button, makeStyles } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

import { postLogin } from '../API';

const useStyles = makeStyles({
  mainGrid: {
    width: '100%',
    height: '100%'
  },

  loginForm: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '500px',
    '& .MuiTextField-root': {
      margin: '10px',
      width: '400px'
    }
  },

  submitButton: {
    width: '100px'
  }
});

const LoginPage = ({ history }) => {
  const classes = useStyles();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
      event.preventDefault();

      const data = {
        username,
        password
      };

      postLogin(data).then(res => {
        if (res === "User valid") {
          history.push("/profile");
        } else {
          alert("User is invalid");
        }
      });
  };

  return (
    <Grid container justify="center" className={classes.mainGrid}>
      <form className={classes.loginForm} onSubmit={handleSubmit}>
          <TextField
            label="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
        <TextField
          label="Password"
          value={password}
          type="password"
          onChange={e => setPassword(e.target.value)}
          required
        />
        <Button disabled={!username || !password} className={classes.submitButton} type="submit" variant="contained" color="primary">Submit</Button>
      </form>
    </Grid>
  );
};

export default withRouter(LoginPage);
