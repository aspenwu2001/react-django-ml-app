import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';


// Generate Order Data
function createData(id, word0, word1) {
  return { id, word0, word1 };
}

const rows = [
  createData(0, 'Male', 'female'),
  createData(1, 'his', 'her'),
  createData(2, 'blacks', 'white'),
  createData(3, 'girl', 'boy'),
  createData(4, 'Hero', 'heroine'),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1, 1.5),
        
      },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
      },
    shortFixedHeight: {
        height: 240,
      },
    button: {
    margin: theme.spacing(1),
  },
}));

export default function Models() {
  const classes = useStyles();

  const shortHeightPaper = clsx(classes.paper, classes.shortFixedHeight);
  return (
    <React.Fragment>
      <Paper className={shortHeightPaper}>
        <Title>Bias Co-Pairs</Title>
        <Table size="small">
            <TableHead>
            <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Word_0</TableCell>
                <TableCell>Word_1</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.word0}</TableCell>
                <TableCell>{row.word1}</TableCell>-
                </TableRow>
            ))}
            </TableBody>
        </Table>
      </Paper>
      {/* text-field aimed to input word pairs */}
      <Typography variant="h7" align="center" color="textSecondary" component="p">
        <br/>Here's able to type your co-pairs to train the models and
        sumbit them. You can find the inputs in the table above.
        <br/>
      </Typography>
      <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={3}>
            <TextField
            required
            id="outlined-required"
            label="Required"
            variant="outlined"
            />
            </Grid>
            <Grid item xs={3}>
            <TextField
            required
            id="outlined-required"
            label="Required"
            variant="outlined"
            />
            </Grid>
            <Grid item xs={3}>
            <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
                startIcon={<SaveIcon />}
            >
                Save
            </Button>
            </Grid>
            <Grid item xs={3}>
            <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
                startIcon={<CloudUploadIcon />}
            >
                Upload
            </Button>
            </Grid>
        </Grid>
      </div>
      <Divider variant="middle" spacing={6}/>
      <Typography variant="h7" align="center" color="textSecondary" component="p">
        <br/>Otherwise, you can upload CSV file to train a model
      </Typography>

      <div className={classes.root}>
        <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
        />
        <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
            Upload
        </Button>
        </label>
      </div>
    </React.Fragment>
  );
}