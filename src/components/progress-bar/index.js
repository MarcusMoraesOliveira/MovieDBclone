import React from 'react';
import { makeStyles } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';


const useStyles = makeStyles({
  root: {
    height: 50,
    borderRadius: 5,
  },
  bar: {
    borderRadius: 5,
    backgroundColor: props => props.color,
  },
});

export default function ProgressBar(props){
    const { root, bar } = useStyles(props);
    return(
      <LinearProgress variant="determinate" 
      className={root}
      classes={{
        bar: bar,
      }}
      value={props.value} />
    )
}
