import React from 'react';
import Result from "../src/components/result";
import axios from "axios";
import { useState, useEffect } from "react";
import './App.css'; 

const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const changeTheSearch = (event) => {
    setSearch(event.target.value);
  }

  const getAllMovies = () => {
    axios.get(APIURL)
      .then(response => {
        setMovies(response.data.results);
      })
      .catch(error => {
        console.log(error)
      });
  }

  useEffect(() => {
    setMovies([]);
    
    if (search === "") {
      getAllMovies();
    } else {
      // Move getSearchedMovies logic here
      axios.get(SEARCHAPI + search)
        .then(response => {
          setMovies(response.data.results);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [search]);

  return (
    <div className="container">
      <input
        type="search"
        value={search}
        onChange={changeTheSearch}
        className="search-input"
        placeholder="Search for movies..."
      />
      {
        movies.length === 0
          ? <div className="loading-text">Loading...</div>
          : <Result movies={movies} />
      }
    </div>
  );
}

export default App;
