import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel'
import { IMAGE_BASE_URL , CARROUSEL_SIZE } from "../../config.js"
import "./styles.css"



export default function Carrousel({ movies }){
   return(
    <div>
      
          <Carousel showThumbs={false}>
          {movies.map((movie,i) =>{
          return(
            <div
            key={i}
            className="rmdb-heroimage"
            style={{
            background: `linear-gradient(to bottom, rgba(0,0,0,0)
            39%, rgba(0,0,0,0)
            41%, rgba(0,0,0,0.65)
            100%), url(${IMAGE_BASE_URL}${CARROUSEL_SIZE}${movie.backdrop_path}), #1c1c1c`
            }}
            >
         <div className="rmdb-heroimage-content">
            <div className="rmdb-heroimage-text">
               <h1>{movie.original_title}</h1>
               <p>{movie.overview}</p>
            </div> 
         </div> 
         </div>  
          )
          })} 
          </Carousel>
    </div>
   );
}








/* <div
                 className="rmdb-heroimage"
                 style={{
                 background: `linear-gradient(to bottom, rgba(0,0,0,0)
                 39%, rgba(0,0,0,0)
                 41%, rgba(0,0,0,0.65)
                 100%), url(${IMAGE_BASE_URL}${CARROUSEL_SIZE}${movie.backdrop_path}), #1c1c1c`
                 }}
                 >
              <div className="rmdb-heroimage-content">
                 <div className="rmdb-heroimage-text">
                    <h1>{movie.original_title}</h1>
                    <p>{movie.overview}</p>
                 </div>
              </div> 
              </div>    */