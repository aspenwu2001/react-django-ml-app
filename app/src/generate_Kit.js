import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import CachedIcon from '@material-ui/icons/Cached';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  dividerFullWidth: {
    margin: `5px 0 0 ${theme.spacing(2)}px`,
  },
}));

export default function SubheaderDividers() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {/* Upload Button */}
      <Divider component="li" />
      <li>
        <Typography
          className={classes.dividerFullWidth}
          color="textSecondary"
          display="block"
          variant="caption"
        >
          Upload
        </Typography>
      </li>
      <ListItem>
        <Button
          variant="contained"
          color="default"
          className={classes.button}
          startIcon={<CloudUploadIcon />}
        >
            Upload
        </Button>
      </ListItem>
      {/* Generate Button */}
      <Divider component="li"/>
      <li>
        <Typography
          className={classes.dividerFullWidth}
          color="textSecondary"
          display="block"
          variant="caption"
        >
          Generate
        </Typography>
      </li>
      <ListItem>
        <Button
          variant="contained"
          color="default"
          className={classes.button}
          startIcon={<CachedIcon />}
        >
          Generate
        </Button>
      </ListItem>
      {/* Download Button */}
      <Divider component="li" />
      <li>
        <Typography
          className={classes.dividerFullWidth}
          color="textSecondary"
          display="block"
          variant="caption"
        >
          Download
        </Typography>
      </li>
      <ListItem>
        <Button
          variant="contained"
          color="default"
          className={classes.button}
          startIcon={<CloudUploadIcon />}
        >
            Download
        </Button>
      </ListItem>
      <ListItem>
        <ListItemText primary="description" secondary="blablabalbalbabablddafad" />
      </ListItem>
    </List>
  );
}