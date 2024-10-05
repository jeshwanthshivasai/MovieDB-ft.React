import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import YouTube from 'react-youtube';

const ParticularMovie = () => {
  let location = useLocation();
  let specificMovie = location.state.x;
  console.log(specificMovie);

  const [trailer, setTrailer] = useState('');
  async function getTrailers(id) {
    fetch(`http://api.themoviedb.org/3/movie/ ${id}/videos?api_key=9edd9f02605ba5cd665dacc891acabe1`)
    .then(res => res.json())
    .then(data => {
      setTrailer(data.results[0].key);
    })
  }

  return (
    <div style={{height: "100vh"}}>
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
      <button onClick={() => getTrailers(specificMovie.id)}>Play Trailer</button>
      <div>
        {
          trailer && <YouTube videoId={trailer} />
        }
      </div>
    </div>
  );
};

export default ParticularMovie;
