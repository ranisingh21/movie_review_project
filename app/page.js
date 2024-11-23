"use client"
import { useState, useEffect } from 'react';
import Header from "./Header.js";
import Movie_row from "./movie_row";

const App = () => {
  const [movies, setData] = useState([]);
  
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=89eef3426d167c3c8145a257ebe68357")
      .then((response) => response.json())
      .then((data) => {
        if (data.results && Array.isArray(data.results)) {
          const moviesWithVotes = data.results.map((movie, index) => ({
            ...movie,
            votes: 0,
            id: index + 1,
            hour: movie.release_date.slice(5, 7),
            min: movie.release_date.slice(8, 11),
          }));
          console.log(data);
          setData(moviesWithVotes);
        } else {
          console.error('Invalid movie data format:', data);
        }
      })
      .catch((error) => {
        console.error('Error fetching movie data:', error);
      });
  }, []);
  
  const handleDelete = (itemId) => {
    const updatedData = movies.filter(items => items.id !== itemId);
    setData(updatedData);
  };
  
  const handleLike = (id) => {
    const updatedMovies = movies.map((movie) => {
      if (movie.id === id) {
        const votes = movie.votes + 1;
        return { ...movie, votes: votes };
      }
      return movie;
    });
    const sortedMovies = updatedMovies.sort((a, b) => b.votes - a.votes);
    setData(sortedMovies);
  };
  
  const handleDislike = (id) => {
    const updatedMovies = movies.map((movie) => {
      if (movie.id === id) {
        const votes = movie.votes - 1;
        return { ...movie, votes: votes };
      }
      return movie;
    });
    const sortedMovies = updatedMovies.sort((a, b) => b.votes - a.votes);
    setData(sortedMovies);
  };
  
  return (
    <div>
      <Header />
      {movies.map((movie) => (
        <div key={movie.id}>
          <Movie_row
            movie_data={movie}
            onDelete={() => handleDelete(movie.id)}
            handleLike={() => handleLike(movie.id)}
            handleDislike={() => handleDislike(movie.id)}
            Add_movie_data={movie}
            likes={movie.votes}
            hour={movie.hour}
            min={movie.min}
          />
        </div>
      ))}
    </div>
  );
};

export default App;
