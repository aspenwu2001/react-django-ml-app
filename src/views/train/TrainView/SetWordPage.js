import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  Input,
  Button,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    minWidth: 650,
  }
}));

function createData(id, word1, word2) {
  return { id, word1, word2 };
}

const rows = [
  createData(1, 'man', 'girl'),
  createData(2, 'male', 'female'),
];

const SetWordPage = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Table size="small" aria-label=" table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Word1</TableCell>
            <TableCell align="right">Word2</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.word1}</TableCell>
              <TableCell align="right">{row.word2}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <form className={classes.root} noValidate autoComplete="off">
        <Input placeholder="word1" inputProps={{ 'aria-label': 'description' }} />
        <Input placeholder="word2" inputProps={{ 'aria-label': 'description' }} />
      </form>
      <Button variant="contained" color="primary">
        Submit
      </Button>
    </div>
  );
};
SetWordPage.propTypes = {
  className: PropTypes.string
};

export default SetWordPage;
