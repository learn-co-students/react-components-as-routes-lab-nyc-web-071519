import React from 'react';
import { actors } from '../data';

const Actors = () => {

  const actorList = actors.map(actor => <div><h3>{actor.name}<ul>{actor.movies}</ul></h3></div>)
  return (
    <div>
       <h1>Actors Page</h1>
        {actorList}
    </div>
  );
};

export default Actors;
