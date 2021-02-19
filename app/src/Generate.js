import React from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import SendIcon from '@material-ui/icons/Send';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import { Container } from '@material-ui/core';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
const useStyles = makeStyles((theme) => ({
  root: {
    width: "30%",
    float: "right"
  },
  preference_text: {
      margin: "30px",
      text: "center",
  },   
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function TypographyMenu() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    lang: true,
    gender: true,
    race: false,
    etc: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { lang, gender, race, etc } = state;
  const error = [lang, gender, race, etc].filter((v) => v).length !== 2;

  return (
    <Container className={classes.root}>
        <Typography variant="h5" className={classes.preference_text}>Preference</Typography>
        <Paper>     
        <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Assign responsibility</FormLabel>
            <FormGroup>
            <FormControlLabel
                control={<Checkbox checked={lang} onChange={handleChange} name="lang" />}
                label="Language"
            />
            <FormControlLabel
                control={<Checkbox checked={gender} onChange={handleChange} name="gender" />}
                label="Gender"
            />
            <FormControlLabel
                control={<Checkbox checked={race} onChange={handleChange} name="race" />}
                label="Race"
            />
            <FormControlLabel
                control={<Checkbox checked={etc} onChange={handleChange} name="etc" />}
                label="Etc."
            />
            </FormGroup>
            <FormHelperText>Be careful</FormHelperText>
        </FormControl>
        </Paper>
    </Container>
  );
}