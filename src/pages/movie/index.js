import React, { useState, useEffect } from "react";
import {  useParams } from "react-router-dom";
import { IMAGE_BASE_URL, CARROUSEL_SIZE } from "../../config.js";
import "./styles.css";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import Header from "../../components/header";
import { makeStyles } from '@material-ui/core/styles';
import ProgressBar from '../../components/progress-bar'

const useStyles = makeStyles({
  root: {
    height: 50,
    borderRadius: 5,
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
  },
});

export default function movie() {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();


  useEffect(() => {
    async function getMovie() {
      let endpoint = `http://api.themoviedb.org/3/movie/${id}?api_key=ad7ed7b68068e0a84855751bb171647a`;
      let promiseResponse = await fetch(endpoint);
      let jsonResponse = await promiseResponse.json();
      console.log(jsonResponse);
      setMovie(jsonResponse);
    }
    getMovie();
  }, []);

  const timeFormat = time => {
    let hours = time / 60;
    let minutes = time % 60;
    return (
      <span >
        {" "}
        Runtime:   
        {"         "}
        {Math.trunc(hours)}:{minutes} Hours
      </span>
    );
  };

  const getColor = () => {
    if(movie.vote_average <= 5.0 ){
      return "red"
    }else if(movie.vote_average <=7.5){
      return "orange"
    }else{
      return "green"
    }
  };

  return (
    <div className="container">
      <Header />
      <div
        className="rmdb-heroimage"
        style={{
          background: ` linear-gradient(to right, rgba(2, 2, 2, 0.97) 0%, rgba(0, 0, 0, 0.97) 100%)
            ,url(${IMAGE_BASE_URL}${CARROUSEL_SIZE}${movie.backdrop_path}), #1c1c1c`
        }}
      >
        <div className="moviecontent">
          <div className="movieinfo">
            <img src={IMAGE_BASE_URL + "w500" + movie.poster_path} alt="" />
            <div className="info">
              <h1>{movie.title}</h1>
              <h2>Sinopse</h2>
              <p>{movie.overview}</p>
              <QueryBuilderIcon fontSize="large" style={{ fill: "white", verticalAlign: "-12px"}} />
              {timeFormat(movie.runtime)}
              <MonetizationOnIcon fontSize="large" style={{ fill: "yellow", verticalAlign: "-12px", marginLeft: "10vw"}} /> 
              <span>Budget: ${movie.budget}</span>
              <h2> Genres</h2>
               {movie.genres
                ? movie.genres.map((genre,i) =>{
                  console.log(genre)
                  return(
                    <span key={i}> {genre.name}</span>
                  )
                } )
                : "Movie is loading"
                 }
            </div>
          </div>
        </div>
      </div>
      <div className="imdbRating">
        <h1>IMDB rating</h1>
            { movie.vote_average
            ?
            <div>
            <ProgressBar 
            color={getColor()}
            value={movie.vote_average*10}/>
            <h2>{movie.vote_average}</h2>
            </div>
            :
            "Movie does not have an imdb rating"
            }
      </div>
    </div>
  );
}
