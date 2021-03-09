import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  FormControlLabel,
  Checkbox,
  Button,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  },
  item: {
    display: 'flex',
    flexDirection: 'column'
  }
}));

const PreferenceBox = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader
        subheader="Setting up the bias preferences"
      />
      <Divider />
      <CardContent>
        <Typography
          color="textPrimary"
          gutterBottom
          variant="h6"
        >
          Preference
        </Typography>
        <FormControlLabel
          control={(
            <Checkbox defaultChecked />
          )}
          label="Race"
        />
        <FormControlLabel
          control={(
            <Checkbox defaultChecked />
          )}
          label="Gender"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Age"
        />
      </CardContent>
      <Divider />
      <Box
        display="flex"
        justifyContent="flex-end"
        p={2}
      >
        <Button
          color="primary"
          variant="contained"
        >
          Save
        </Button>
      </Box>
    </Card>
  );
};

PreferenceBox.propTypes = {
  className: PropTypes.string
};

export default PreferenceBox;
