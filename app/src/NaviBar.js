import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import HomeIcon from '@material-ui/icons/Home';
import CloudIcon from '@material-ui/icons/Cloud';
import ColorLensIcon from '@material-ui/icons/ColorLens';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
  },


}));

export default  function NaviBar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <div>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            
            <Typography variant="h6" className={classes.title}>
              Avanada IHP
            </Typography>

            

            <div>
              <Tooltip title="Home">
                <IconButton aria-label="delete" href="#">
                  <HomeIcon  />
                </IconButton>
              </Tooltip>
              <Tooltip title="Generate">
                <IconButton aria-label="generate" href="#">
                  <CloudIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Train">
                <IconButton aria-label="train" href="#">
                  <ColorLensIcon />
                </IconButton>
              </Tooltip>

              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>

          </Toolbar>
        </AppBar>
      </div>


      </div>
    );
}