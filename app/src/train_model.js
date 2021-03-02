import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
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
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';



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

export default function Orders() {
  const classes = useStyles();
  const shortHeightPaper = clsx(classes.paper, classes.shortFixedHeight);
  const [value, setValue] = React.useState('model2');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <React.Fragment>
      
        <Title>Models</Title>
        <div>
        <FormControl component="fieldset">
            <FormLabel component="legend">Choice models</FormLabel>
            <RadioGroup aria-label="model" name="model0" value={value} onChange={handleChange}>
                <FormControlLabel value="model1" control={<Radio />} label="model1" />
                <FormControlLabel value="model2" control={<Radio />} label="model2" />
                <FormControlLabel value="model3" control={<Radio />} label="model3" />
            </RadioGroup>
        </FormControl>
        <div>
            <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
                startIcon={<SaveIcon />}
            >
                Save
            </Button>
        </div>
        </div>
      
    </React.Fragment>
  );
}