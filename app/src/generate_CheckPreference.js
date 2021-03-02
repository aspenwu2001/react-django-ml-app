import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import SendIcon from '@material-ui/icons/Send';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import SaveIcon from '@material-ui/icons/Save';

function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles({
  checkBoxContext: {
    flex: 1,
  },
});

export default function CheckBox() {
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
    <React.Fragment>
      <Title>Preference</Title>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormHelperText>here you choice different fields of bias keywords</FormHelperText>
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
        
      </FormControl>
    </React.Fragment>
  );
}