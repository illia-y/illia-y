import React, { useState } from 'react';
import {
  Grid,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
  makeStyles
} from '@material-ui/core';

import contacts from '../data/contacts';
import Sidebar from '../components/Sidebar/index';

const useStyles = makeStyles({
  tableRow: {
    cursor: 'pointer'
  }
});

const ContactsPage = () => {
  const classes = useStyles();

  const [open, toggleSidebar] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <Grid container justify="center" alignItems="center">
      <Sidebar open={open} toggleSidebar={toggleSidebar} user={user} />
      <Table>
        <TableHead>
          <TableRow>
            {['Name', 'Email'].map(category => {
              return <TableCell key={category}>{category}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {contacts.map(contact => {
            return (
              <TableRow
                key={contact.name}
                onClick={() => {
                  setUser(contact);
                  toggleSidebar(true);
                }}
              >
                <TableCell className={classes.tableRow}>
                  {contact.name}
                </TableCell>
                <TableCell className={classes.tableRow}>
                  {contact.email}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Grid>
  );
};

export default ContactsPage;
