import React from 'react';
import { Typography } from '@material-ui/core';

const HomePage = ({ user }) => {
  return (
    <Typography align="center" variant="h3">
      {user === null ? null : user.username}
    </Typography>
  );
};

export default HomePage;
