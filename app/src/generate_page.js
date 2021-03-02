import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import CheckPreference from './generate_CheckPreference';
import BiasTable from './generate_BiasTable';
import Kit from './generate_Kit';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        COMP0016_GROUP_9
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
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
  fixedHeight: {
    height: 400,
  },
  longFixedHeight: {
    height: 640,
  },
}));

export default function Generate() {
  const classes = useStyles();

  const shortHeightPaper = clsx(classes.paper, classes.shortFixedHeight);
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const longHeightPaper = clsx(classes.paper, classes.longFixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <main className={classes.content}>
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Left side Bars */}
            <Grid item xs={12} md={8} lg={9}>
              {/* View */}
              <Paper className={fixedHeightPaper}>
                <BiasTable />
              </Paper>
              <Divider variant="middle" />
              {/* Bias Table */}
              <Paper className={shortHeightPaper}>
                <BiasTable />
              </Paper>
            </Grid>
            {/* Right side Bar */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={longHeightPaper}>
                {/* Recent Preference Checker */}
                <CheckPreference />
                <Kit />
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}