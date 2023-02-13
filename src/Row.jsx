import React, { useEffect, useState } from 'react'
import axios from './axios.js';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/w500/";

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
    async function fetchData() {
       const request = await axios.get(fetchUrl);
       setMovies(request.data.results);
    }
    fetchData()
    }, [fetchUrl]);

    console.log(movies)

    const opts = {
        height: "450",
        width: "95%",
        playerVars: {
            autoplay: 1,
        },
    }

    const handleClick = (movie) => {
      if (trailerUrl) {
        setTrailerUrl("")
      } else {
        movieTrailer(movie?.title || movie?.original_title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search)
         setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error))
      }
    }
    
  return (
    <div className='row'>
        <h2>{title}</h2>

        <div className='row_posters'>
           {movies.map(movie => (
            <img 
                className='row_poster'
                key={movie.id}
                onClick={() => handleClick(movie)}
                src={`${base_url}${movie?.poster_path}`}
                alt={movie?.title || movie?.original_title}
            />
           ))}
        </div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}

export default Row