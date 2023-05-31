import React, { useState, useEffect } from 'react';

import MovieCard from './MovieCard';

import logo from './movielogo.png';

import search from './search.png'

import './App.css';

const API_URL = 'http://www.omdbapi.com?apikey=1f96a07a';

function App() {

  const [movies, setMovies] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  // const movie = {
  //   "Title": "Ben 10: Ultimate Alien",
  //   "Year": "2010-2012",
  //   "imdbID": "tt1622696",
  //   "Type": "series",
  //   "Poster": "https://m.media-amazon.com/images/M/MV5BNzgxYjcwNDUtZTcxZS00NmIyLWI3OTAtNTQ3NzZjM2RkMTFkXkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_SX300.jpg"
  // }

  useEffect(() => {
    searchMovies('india');
  }, []);

  return (
    <div className="App">
      <div className="header">
        <div className="logo">
          <img src={logo} alt="Logo Img" />
        </div>
        <div className="search">
          <input value={searchTerm} placeholder='Search Movie Here'
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="simage">
            <img src={search} alt="Search" onClick={() => searchMovies(searchTerm)} />
          </div>

          {/* <button onClick={() => searchMovies(searchTerm)}>Search</button> */}
        </div>
      </div>

      <div className="hr">
        <hr />
      </div>

      {
        movies?.length > 0
          ? (
            <div className="container">
              {
                movies.map((movie) => (
                  <MovieCard movie={movie} />
                ))
              }
            </div>
          ) : (
            <div className="empty">
              <h1>No Movie Found</h1>
            </div>
          )
      }

      {/* <div className="container">
        <MovieCard movie={movie}/>
      </div> */}
      <div className="hr1">
        <hr />
      </div>

      <div className="footer">
        <div className="head"> <p>Question Call ? 00000000</p> </div>
        <div className="p__container">
          <div className="ps footer__1">
            <p>FAQ</p>
            <p>Media Centre</p>
            <p>Ways To Watch</p>
            <p>Cookie Preferences</p>
            <p>Speed Test</p>
          </div>
          <div className="ps footer__2">
            <p>Help Centre</p>
            <p>Investor Relations</p>
            <p>Terms of Use</p>
            <p>Coorporate Information</p>
            <p>Legal Notices</p>
          </div>
          <div className="ps footer__3">
            <p>Account</p>
            <p>Jobs</p>
            <p>Privacy</p>
            <p>Contact Us</p>
            <p>Only On MovieMania</p>
          </div>
        </div>
        <div className="name">
          <p>@MovieMania India</p>
        </div>

      </div>

    </div>


  );
}

export default App;
