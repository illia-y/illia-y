import React from 'react';
import { makeStyles } from '@material-ui/core';

import usa from '../../img/usa.png';

const useStyles = makeStyles({
  mainGrid: {
    width: '320px'
  },

  tabs: {
    height: '40px',
    display: 'flex'
  },

  tab: {
    height: '100%',
    color: '#ACB5C3',
    fontFamily: 'Circular STD Book, sans-serif',
    fontSize: '14px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 10px 0 15px',
    backgroundColor: '#F5F6FA',
    zIndex: 10,
    // margin: '0 10px 0 0',
    fontWeight: 100,
    '&:first-child': {
      borderBottomLeftRadius: '10px'
    }
  },

  activeTab: {
    backgroundColor: '#fff',
    color: '#272C5E',
    fontWeight: 400,
    borderRadius: '5px 5px 0 0 !important'
  },

  panel: {
    backgroundColor: 'white',
    display: 'flex',
    padding: '15px',
    borderRadius: '0 8px 8px 8px'
  },

  panelColumn: {
    display: 'flex',
    width: '50%',
    flexDirection: 'column'
  },

  panelData: {
    '& > h5': {
      color: '#ACB5C3',
      fontSize: '10px',
      fontFamily: 'Circular STD Book, sans-serif',
      fontWeight: 100,
      textTransform: 'uppercase',
      margin: '0 0 4px 0'
    },

    marginBottom: '24px',

    color: '#272C5E',
    fontSize: '14px',
    whiteSpace: 'nowrap',
    fontFamily: 'Circular STD Book, sans-serif',
    fontWeight: 100,

    '&:last-child': {
      marginBottom: 0
    }
  },

  dataFlag: {
    display: 'flex',
    alignItems: 'center',
    '& > img': {
      marginRight: '5px'
    }
  },

  inactiveTab: {
    display: 'flex',
    backgroundColor: 'white'
  }
});

const TabPanel = () => {
  const classes = useStyles();

  return (
    <div className={classes.mainGrid}>
      <div className={classes.tabs}>
        <div className={`${classes.activeTab} ${classes.tab}`}>Main Info</div>
        <div className={classes.inactiveTab}>
          {['History', 'Message 2'].map((tab, index) => {
            return (
              <div key={tab} className={classes.tab}>
                {tab}
              </div>
            );
          })}
        </div>
      </div>
      <div className={classes.panel}>
        <div className={classes.panelColumn}>
          <div className={classes.panelData}>
            <h5>Phone</h5>
            +1 073 2714 007
          </div>

          <div className={classes.panelData}>
            <h5>Country</h5>
            <div className={classes.dataFlag}>
              <img src={usa} alt="USA" />
              USA
            </div>
          </div>

          <div className={classes.panelData}>
            <h5>LTV</h5>
            $50
          </div>
        </div>
        <div className={classes.panelColumn}>
          <div className={classes.panelData}>
            <h5>IP ADDRESS</h5>
            12312319391023091
          </div>

          <div className={classes.panelData}>
            <h5>time on webinar</h5>1 hr
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabPanel;
