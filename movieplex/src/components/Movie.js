import React from "react";

const img_api = "https://image.tmdb.org/t/p/w1280";

const Movie = ({ title, poster_path, overview, vote_average }) => {
  return (
    <div className="movie">

        <img src={img_api + poster_path} alt="poster" />
        <div className="movie-info">
          <h3>{title}</h3>
          <span>{vote_average}</span>
        </div>
        <div className="movie-over">
            <h2>Overview</h2>
            <p>{overview}</p>
        </div>

      </div>
  
  );
};

export default Movie;
