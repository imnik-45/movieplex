import React, { useEffect, useState } from "react";

import Movie from "./components/Movie";

const featured_api =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const img_api = "https://image.tmdb.org/t/p/w1280";

const search_api =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm,setSearchTerm] = useState('');

  useEffect(() => {
    fetch(featured_api)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  const handleOnSubmit = (e) =>{
    e.preventDefault();

    if(searchTerm){
      fetch(search_api+searchTerm)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
      setSearchTerm('');  
    }
   
  }

  const handleOnChange = (e) =>{
   setSearchTerm(e.target.value);
  }



  return (
    <>
    <a href="index.html" className="head"><center > <h2>Movieplex</h2></center></a>
      <header>
        
        <form onSubmit={handleOnSubmit}>
          <input className="search" type="search" placeholder="search..." value={searchTerm} onChange={handleOnChange} />
        </form>
      </header>
      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </>
  );
}

export default App;
