import React, { useState } from 'react';
import {
  Container,
  Grid,
  Box,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Results from './Results';
import data from './data';
import Toolbar from './Toolbar';
import PreferenceBox from './PreferenceBox';
import DisplayBox from './DisplayBox';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const GenerateView = () => {
  const classes = useStyles();
  const [customers] = useState(data);

  return (
    <Page
      className={classes.root}
      title="Generate"
    >
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              xs={8}
            >
              <DisplayBox />
            </Grid>
            <Grid
              item
              xs={4}
            >
              <PreferenceBox />
            </Grid>
            <Grid
              item
              xs={12}
            >
              <Results customers={customers} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Page>
  );
};

export default GenerateView;
