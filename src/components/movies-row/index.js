import React from 'react';
import { IMAGE_BASE_URL } from "../../config.js"
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import "./styles.css"

const useStyles = makeStyles({
  root: {
    marginLeft: 20,
  },
  paper:{
    width: 200
  }
});

export default function MoviesRow({ movies }){
  const classes = useStyles();
  return(
    
    <div>
      <Grid container spacing={3} className={classes.root}>
      {movies.map((movie,i) =>{
        return(
          <Grid  key={i} item xs={3}>
            <Link to={`/movie/${movie.id}`}>
          <div className="paper">
          <img src={IMAGE_BASE_URL + "w500" + movie.poster_path} alt=""
          />
         </div>
         </Link>
          </Grid>
        )
      })
    }
    </Grid>
    </div>
  )
}
