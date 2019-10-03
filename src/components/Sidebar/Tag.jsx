import React from 'react';
import { makeStyles } from '@material-ui/core';
import Close from '@material-ui/icons/Close';

const useStyles = makeStyles({
  tagBody: {
    height: '20px',
    border: '1px solid #ECECF5',
    borderRadius: '6px',
    backgroundColor: '#fff',
    color: '#4749A0',
    fontFamily: 'Roboto, Helvetica, sans-serif',
    fontSize: '10px',
    display: 'flex',
    paddingLeft: '7px',
    letterSpacing: '0.42px',
    lineHeight: '12px',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 100,
    textTransform: 'uppercase',
    '& > svg': {
      height: '10px',
      color: '#FF4C43',
      cursor: 'pointer'
    }
  },

  addTag: {
    width: '21px',
    height: '21px',
    color: '#FF4C43',
    fontSize: '16px',
    cursor: 'pointer',
    fontWeight: 100,
    padding: '0'
  }
});

const Tag = ({ name, onDelete, addTag }) => {
  const classes = useStyles();

  return (
    <div className={`${addTag && classes.addTag}  ${classes.tagBody}`}>
      {addTag ? (
        '+'
      ) : (
        <>
          {name}
          <Close onClick={onDelete} />
        </>
      )}
    </div>
  );
};

export default Tag;
