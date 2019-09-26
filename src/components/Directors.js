import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const directorList = directors.map(director => <div><h3>{director.name}<ul>{director.movies}</ul></h3></div>)
  return (
    <div>
       <h1>Directors Page</h1>
        {directorList}
    </div>
  );
}

export default Directors
