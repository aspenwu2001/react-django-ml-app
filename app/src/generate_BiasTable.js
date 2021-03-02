import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, word, type, degree, position, amount) {
  return { id, word, type, degree, position, amount };
}

const rows = [
  createData(0, 'Male', 'gender', 0.9, 'row 1', 4),
  createData(1, 'Hero', 'gender', 0.4, 'row 5', 4),
  createData(2, 'blacks', 'race', 1.0, 'row 66', 2),
  createData(3, 'japanese', 'language', 0.5, 'row 3', 10),
  createData(4, 'Hero', 'gender', 0.4, 'row 44', 4),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({

}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Bias</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Word</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Degree</TableCell>
            <TableCell>Position</TableCell>
            <TableCell align="right">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.word}</TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.degree}</TableCell>
              <TableCell>{row.position}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}