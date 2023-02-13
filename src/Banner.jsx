import React, { useState, useEffect } from 'react';
import './Banner.css';
import axios from './axios'
import requests from './requests';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

function Banner() {
  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [buttonText, setButtonText] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNowPlaying);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ])
    }
    fetchData()
  }, []);

  function truncate(str, n) {
      return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  const opts = {
    height: "550",
    width: "100%",
    playerVars: {
        autoplay: 1,
    },
}

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("")
      setButtonText(!buttonText)
    } else {
      movieTrailer(movie?.title || movie?.original_title || "")
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search)
       setTrailerUrl(urlParams.get("v"))
       setButtonText("Play")
      })
      .catch((error) => console.log(error))
    }
  }


  return (
    <header className='banner'
    style={{
      backgroundSize: 'cover',
      backgroundImage: `url(
        "https://image.tmdb.org/t/p/w500/${movie?.poster_path}"
      )`,
      backgroundPosition: 'center center',
      backgroundRepeat: "no-repeat",
      height: "448px"
    }}
    >
        <div className='banner_contents'>
            <h1 className='banner_title'>
              {movie?.title || movie?.name || movie?.original_title}
            </h1>
            <div className='banner_buttons'>
            <button 
              className='banner_button'
              onClick={() => handleClick(movie)}>
                { buttonText ? "Pause" : "Play"}
            </button>
            <button className='banner_button'>My List</button>
            </div>

            <div className='banner_trailer'>{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}</div>

            <div>
              <h1 className='banner_description'>
                {truncate(movie?.overview, 250)}
              </h1>
            </div>
        </div>
        <div className='banner_fadeBottom'></div>
        
    </header>
  )
}

export default Banner