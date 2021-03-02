import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 150,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  text: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [value0, setValue0] = React.useState('model1');


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handle0Change = (event, newValue) => {
    setValue0(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="model" {...a11yProps(0)} />
        <Tab label="co-pairs" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        
        <FormControl component="fieldset">
            <FormLabel component="legend">Model</FormLabel>
            <RadioGroup aria-label="model" name="model1" value={value} onChange={handle0Change}>
                <FormControlLabel value0="model1" control={<Radio />} label="model1" />
                <FormControlLabel value0="model2" control={<Radio />} label="model2" />
                <FormControlLabel value0="other" control={<Radio />} label="Other" />
            </RadioGroup>
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<SaveIcon />}
            >
                Save
            </Button>
            </FormControl>
        
      </TabPanel>
      <TabPanel value={value} index={1}>
        <form className={classes.text} noValidate autoComplete="off">
            <TextField id="standard-basic" label="pair1" />
            <TextField id="standard-basic" label="paiir2" />
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<SaveIcon />}
            >
                Save
            </Button>
        </form>
      </TabPanel>
      
    </div>
  );
}