
import './App.css';
import { useState,useEffect } from 'react';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

// ebdea376
const API_URL = 'http://www.omdbapi.com?apikey=ebdea376'
const movie1=  {
  "Title": "Rocket Power",
  "Year": "1999–2004",
  "imdbID": "tt0244926",
  "Type": "series",
  "Poster": "https://m.media-amazon.com/images/M/MV5BOTAyMWQyZjQtMTdjYS00OTY5LWFjNGUtYTJlNWMxZWFhNjc3XkEyXkFqcGdeQXVyODA4OTIyMzY@._V1_SX300.jpg"
}
const App = ()=> {
 
  const searchMovies = async (title) =>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  }


  useEffect(()=>{
    searchMovies('Power');
  },[]);

  return(
    <div  className='app'>
      <h1>MovieLand</h1>

      <div className='search'>
        <input placeholder='Search for Movie' value="superman" onChange={()=>{}} />
        <img src={SearchIcon} alt="seach" onClick={() => {}}/>
      </div>

      <div className='container'>
          <MovieCard movie1={movie1}/>
      </div>
    </div>
  );
}

export default App;
