import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import logo from "./images/logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
      flexGrow: 1,
      backgroundColor: 'white'
  },
  title: {
    marginLeft: '40px',
    marginRight: '40px',
    textDecoration: 'none',
    alignItems: 'center',
    // paddingLeft: '20px'
  },
  rightText: {
    flexGrow: 1,
    display: 'inline-block',
    paddingLeft: '275px'
  },
  buttonStyle: {
      margin: '0px 20px 0px 20px',
      "&:hover": {
        backgroundColor: "#FFF"
    }
  },
  logo: {
    paddingRight: '270px'
  }
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="white" elevation={0}>
          
        <Toolbar className={classes.title}>
        <img src={logo} alt="logo" className={classes.logo} />
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          </IconButton> */}
          <Button variant="h6" className={classes.buttonStyle} style={{ fontSize: '16px' }}>
            HOW TO USE
          </Button>
          <Button variant="h6" className={classes.buttonStyle} style={{ fontSize: '16px' }}>
            ABOUT US
          </Button>
          <Button variant="h6" className={classes.buttonStyle} style={{ fontSize: '16px' }}>
            CONTACT US
          </Button>
          <div className={classes.rightText}>
            <Button color="inherit" className={classes.buttonStyle} style={{ fontSize: '16px' }}>Login</Button>
            <Button variant="contained" color="primary" style={{ fontSize: '16px' }}>Get started</Button>
          </div>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
