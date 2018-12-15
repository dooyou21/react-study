import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({title, poster}) {
  return (
    <div className="movie">
      <MoviePoster poster={poster}/>
      <h2>{title}</h2>
    </div>
  )
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};
Movie.defaultProps = {
  title: "",
  poster: "/imageNotFound.png"
}

function MoviePoster({poster}) {
  return (<img src={poster} alt={poster}/>);
}

export default Movie;