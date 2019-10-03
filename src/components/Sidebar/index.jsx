import React from 'react';
import { Drawer, Typography, makeStyles, Button } from '@material-ui/core';

import Tag from './Tag';
import TabPanel from './TabPanel';

const useStyles = makeStyles({
  mainGrid: {
    width: '350px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    '& > div': {
      margin: '10px'
    }
  },

  avatar: {
    width: '65px',
    height: '65px',
    backgroundColor: '#6C74A3',
    color: 'white',
    fontSize: '26px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '20px',
    fontFamily: 'Circular STD Medium, sans-serif'
  },

  userName: {
    fontSize: 16,
    fontWeight: 100,
    fontFamily: 'Circular STD Book, sans-serif'
  },

  tagList: {
    display: 'flex',
    padding: '0 70px 0 70px',
    '& > div': {
      marginRight: '5px'
    }
  },

  primaryButton: {
    height: '35px',
    backgroundColor: 'rgba(71,73,160,0.1)',
    fontFamily: 'Circular STD Book, sans-serif',
    color: '#4749A0',
    fontSize: '12px',
    borderRadius: 8,
    width: '86px',
    margin: '0 0 0 15px',
    textTransform: 'none',
    fontWeight: 100
  },

  secondaryButton: {
    height: '35px',
    backgroundColor: 'rgba(255,126,92,0.1)',
    fontFamily: 'Circular STD Book, sans-serif',
    color: ' #FF7E5C',
    fontSize: '12px',
    borderRadius: 8,
    width: '86px',
    margin: '0 0 0 15px',
    textTransform: 'none',
    fontWeight: 100
  },

  deleteButton: {
    backgroundColor: 'rgba(255,76,67,0.1)',
    color: '#FF4C43'
  },

  controlBar: {
    marginTop: '0 !important',
    marginBottom: '15px !important',
    fontSize: 14,
    fontWeight: 100
  },

  detailInfo: {
    flexGrow: 1,
    backgroundColor: '#F5F6FA',
    padding: '20px 15px 0 15px'
  }
});

const Sidebar = ({ open, toggleSidebar, user }) => {
  const classes = useStyles();

  const getAvatarName = name => {
    if (!name) {
      return '';
    }
    const splittedName = name.split(' ');

    return `${splittedName[0][0]}${splittedName[1] ? splittedName[1][0] : ''}`;
  };
  return (
    <Drawer anchor="right" open={open} onClose={() => toggleSidebar(false)}>
      <div className={classes.mainGrid}>
        <div className={classes.avatar}>{getAvatarName(user && user.name)}</div>
        <Typography
          align="center"
          variant="subtitle1"
          className={classes.userName}
        >
          {user && user.name}
        </Typography>
        <div className={classes.tagList}>
          {['host', 'admin', 'tag3'].map(tag => (
            <Tag key={tag} name={tag} onClose={() => {}} addTag={false} />
          ))}
          <Tag addTag={true} />
        </div>

        <div className={classes.controlBar}>
          <Typography align="center" variant="subtitle1">
            {user && user.email}
          </Typography>
          <div>
            <Button className={classes.primaryButton}>Invite</Button>
            <Button className={classes.secondaryButton}>Cancel</Button>
            <Button
              className={`${classes.secondaryButton} ${classes.deleteButton}`}
            >
              Delete
            </Button>
          </div>
        </div>

        <div className={classes.detailInfo}>
          <TabPanel />
        </div>
      </div>
    </Drawer>
  );
};

export default Sidebar;
