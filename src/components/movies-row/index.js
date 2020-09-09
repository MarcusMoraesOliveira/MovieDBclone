import React from 'react';
import { IMAGE_BASE_URL , CARROUSEL_SIZE } from "../../config.js"
import { Link, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
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
  console.log(movies)
  return(
    
    <div>
      <Grid container spacing={3} className={classes.root}>
      {movies.map((movie,i) =>{
        console.log(movie)
        return(
          <Grid item xs={3}>
            <Link to={`/movie/${movie.id}`}>
          <div class="paper">
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
