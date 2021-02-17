import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


function NaviBar() {
    const classes = useStyles();
    return (
        <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
            <Button variant="contained" color="primary"href="#contained-buttons">
            Home
            </Button>
            <Button variant="contained" color="primary" href="#contained-buttons">
            Generate 
            </Button>
            <Button variant="contained" color="primary" href="#contained-buttons">
            Train 
            </Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    )
}

export default NaviBar;