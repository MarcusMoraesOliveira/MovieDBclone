import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import "./styles.css";


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#000000",
    height: 75,
  },
  toolbar: {
    padding: "0 100px",
    height: "inherit"
  },
  title: {
    flexGrow: 1,
  },
}));

export default function header() {
  const classes = useStyles();
  return (
    <div className="header-container">
    <AppBar position="static" className={classes.root} >
        <Toolbar className={classes.toolbar} >
        <Link to="/">
        <span style={{ color: "white" }}> React MovieDB Clone</span>
        </Link>
          
        </Toolbar>
    </AppBar>
    </div>
  )
}
