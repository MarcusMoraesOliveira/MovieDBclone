import React, { useState, useEffect  } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from '../../components/header'
import Carrousel from '../../components/carrousel'
import Genres from '../../components/genres'
import MoviesRow from '../../components/movies-row'

import Grid from '@material-ui/core/Grid';



export default function home() {
  const [movies,setMovies] = useState([]);
  const [carrousel,setCarrousel] = useState([])
  const [genres,setGenres] = useState([])

  useEffect(() =>{
      async function getMovies(){
      let endpoint = "https://api.themoviedb.org/3/movie/popular?api_key=ad7ed7b68068e0a84855751bb171647a&page=1"
      let promiseResponse = await fetch(endpoint);
      let jsonResponse = await promiseResponse.json();
      let moviearray = [...jsonResponse.results]
      setMovies(moviearray)
      setCarrousel(moviearray.splice(0,6))
      }
    getMovies();
  },[])

  useEffect(() =>{
    async function getGenres(){
      let endpoint = "https://api.themoviedb.org/3/genre/movie/list?api_key=ad7ed7b68068e0a84855751bb171647a"
      let promiseRes = await fetch(endpoint)
      let json = await promiseRes.json();
      let genreArray = json.genres
      setGenres(genreArray)
    }
    getGenres()
  },[])

  return (
    <div className="container">
    <Header/>
      { carrousel!=0 ? 
      <Carrousel movies={carrousel}/>
      : undefined}
      <Grid container spacing={1}>
      <Grid item xs={3}>
      { genres !=0 ?
      <Genres genres={genres}></Genres>
      : undefined}
      </Grid>
      <Grid item xs={9}>
      { movies!=0 ?
      <MoviesRow movies={movies}></MoviesRow>
      : undefined}
      </Grid>
      </Grid>
    </div>
  )
}

