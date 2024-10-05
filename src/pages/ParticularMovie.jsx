import React from 'react';
import { useLocation } from 'react-router-dom';

const ParticularMovie = () => {
  let location = useLocation();
  let specificMovie = location.state.cards;

  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/original/${specificMovie.backdrop_path}`}
        alt=""
        style={{ height: '100px', width: '100px' }}
      />
      <h3> {specificMovie.title} </h3>
      <p> {specificMovie.overview} </p>
      <b> {specificMovie.vote_average} </b>
      <br />
      <br />
      <button>Play Trailer</button>
    </div>
  );
};

export default ParticularMovie;
