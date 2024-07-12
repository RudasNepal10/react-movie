import React, { useEffect, useState } from "react";
import './App.css';
import searchicon from './search.svg';
import MovieCard from './MovieCard';

const API_URL = 'http://www.omdbapi.com?apikey=8ff8fa6d';  


const movie1={
  "Title": "Fighting, Flying and Driving: The Stunts of Spiderman 3",
  "Year": "2007",
  "imdbID": "tt1132238",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNTI3NDE1ZmEtMTRiMS00YTY4LTk0OGItNjY4YmI0MDM4OGM4XkEyXkFqcGdeQXVyODE2NDgwMzM@._V1_SX300.jpg"
}

const newAPI = 'http://localhost:22641/home/list'

const App = () => {

 const[Movies, setmovies] = useState([]);
 const[searchTerm, setSearchTerm]= useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setmovies(data.Search);
  }

  useEffect(() => {
    searchMovies('spiderman')
  }, []);

  return (
    <div className="App">
    <h1> Roodles Movie </h1>

    <div className="search">
        <input
        placeholder="search for movies"
        value={searchTerm}
        onChange={(e) =>setSearchTerm (e.target.value)}
        />

        <img
        src={searchicon}
        alt="search"
        onClick={()=>searchMovies(searchTerm)}
        />
    </div>
    
    {
      Movies?.length>0
      ?(
        <div className="container">
        {Movies.map((movie)=>(
          <MovieCard movie={movie}/>
        ))}
        </div>
      ):(
        <div className="Empty">
         <h2>No movies found</h2>
        </div>
      )
    }
  </div>
  );
}
export default App;