import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import "./styles.css"

const useStyles = makeStyles((theme) => ({
  root: {
    height: 265,
    width: 505,
    marginTop: 50,
  },
  son: {
    height: "inherit",
  }
}));

export default function Card({url}) {
  const classes = useStyles();
  console.log(url)
  return (
    <div className="container">
    <Paper className={classes.root}>
    <Grid container spacing={3} className={classes.root}>
    
        <Grid item xs={5} className={classes.son}>

          <div className="cover" >
          <img src={url} alt="a" className="img"/>
          <div className="divi">
            House of sun
          </div>
          </div>
        </Grid>

    </Grid>
    </Paper>
    </div>
  )
}
