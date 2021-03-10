import React from 'react';
import {
  Paper,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import StaticBox from './StaticBox';
import Table from './Table';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Home"
    >
      <Table />
      <StaticBox />
    </Page>
  );
};

export default Home;
