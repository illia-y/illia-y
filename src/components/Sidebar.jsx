import React from 'react';
import { Drawer, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  mainGrid: {
    width: '400px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    '& > div': {
      margin: '10px'
    }
  },

  avatar: {
    width: '75px',
    height: '75px',
    backgroundColor: '#6C74A3',
    color: 'white',
    fontFamily: 'Roboto, sans-serif',
    fontSize: '32px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px'
  }
});

const Sidebar = ({ open, toggleSidebar, user }) => {
  const classes = useStyles();

  const getAvatarName = name => {
    if (!name) {
      return '';
    }
    const splittedName = name.split();

    return `${splittedName[0][0]}${splittedName[1] ? splittedName[1][0] : ''}`;
  };
  return (
    <Drawer anchor="right" open={open} onClose={() => toggleSidebar(false)}>
      <div className={classes.mainGrid}>
        <div className={classes.avatar}>{getAvatarName(user && user.name)}</div>
        <Typography align="center" variant="subtitle1">
          {user && user.name}
        </Typography>
        <Typography align="center" variant="subtitle1">
          {user && user.email}
        </Typography>
      </div>
    </Drawer>
  );
};

export default Sidebar;
