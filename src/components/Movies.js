import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const movieList = movies.map(movie => <div><h3>{movie.title + " " + movie.time + ' '}<ul>{movie.genres}</ul></h3></div>)

  return (
    <div>
        <h1>Movies Page</h1>
        {movieList}
    </div>
  );
};

export default Movies;
