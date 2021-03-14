import React, { useState, useEffect } from "react";
import Header from "../../components/header";
import Carrousel from "../../components/carrousel";
import Genres from "../../components/genres";
import MoviesRow from "../../components/movies-row";
import Button from "@material-ui/core/Button";
import CachedIcon from "@material-ui/icons/Cached";
import { makeStyles } from '@material-ui/core';

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    width: "100%",
  }
});

export default function home() {
  const [movies, setMovies] = useState([])
  const [carrousel, setCarrousel] = useState([])
  const [genres, setGenres] = useState([])
  const [page,setPages] = useState(1)
  const [urlMoreMovies,seturlMoreMovies] = useState("https://api.themoviedb.org/3/movie/popular?api_key=ad7ed7b68068e0a84855751bb171647a&page=")

  const classes = useStyles();

  useEffect(() => {
    async function getMovies() {
      let endpoint =
        "https://api.themoviedb.org/3/movie/popular?api_key=ad7ed7b68068e0a84855751bb171647a&page=1";
      let promiseResponse = await fetch(endpoint);
      let jsonResponse = await promiseResponse.json();
      let moviearray = [...jsonResponse.results];
      setMovies(moviearray);
      setCarrousel(moviearray.splice(0, 6));
    }
    getMovies();
  }, []);

  useEffect(() => {
    async function getGenres() {
      let endpoint =
        "https://api.themoviedb.org/3/genre/movie/list?api_key=ad7ed7b68068e0a84855751bb171647a";
      let promiseRes = await fetch(endpoint);
      let json = await promiseRes.json();
      let genreArray = json.genres;
      setGenres(genreArray);
    }
    getGenres();
  }, []);

  useEffect(() => {
    async function getMoreMovies() {
      let endpoint =
      urlMoreMovies + page;
      let promiseResponse = await fetch(endpoint);
      let jsonResponse = await promiseResponse.json();
      let moviearray = [...movies, ...jsonResponse.results];
      setMovies(moviearray);
    }
    getMoreMovies();
  }, [page]);

  const getByGenre =  async (genres) => {
      if(genres.toString == [].toString()){
        setPages(1)
        seturlMoreMovies("https://api.themoviedb.org/3/movie/popular?api_key=ad7ed7b68068e0a84855751bb171647a&page=")
        return;
      }
      let endpoint =
      `https://api.themoviedb.org/3/discover/movie?api_key=ad7ed7b68068e0a84855751bb171647a&with_genres=`;
      genres.map((genre,key) =>{
        if(key ==0){
          endpoint+= genre
        }else{
          endpoint += ','
          endpoint += genre
        }
      })
      let promiseResponse = await fetch(endpoint)
      let jsonResponse = await promiseResponse.json()
      let moviearray = [...jsonResponse.results]
      setMovies(moviearray)
      seturlMoreMovies(endpoint+"&page=")
      setPages(1)
  };

  const changePage = () => {
    setPages(page + 1)
  };

  return (
    <div className="container">
      <Header />
      { movies?
      <Carrousel   movies={carrousel} />
      :
      "loading movies"
      }
      <Grid container spacing={1} style={{ marginTop: "3vh"}}>
        <Grid item xs={3}>
          { genres.toString()!= [].toString() ? (<Genres genres={genres} genreFilter={getByGenre}></Genres>) : null}
        </Grid>
        <Grid item xs={9}>
          <MoviesRow movies={movies}></MoviesRow>
          <div style={{ marginTop: "5vh", paddingLeft: "20%", paddingRight: "20%" }}>
          <Button color="primary" variant="contained" onClick={changePage} className={classes.root}>
            <CachedIcon></CachedIcon> Load More Movies
          </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
