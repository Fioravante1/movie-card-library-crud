import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, id, imagePath, genre, subtitle } = movie;
    const URL = `/movies/${id}`;
    return (
      <div data-testid="movie-card">
        Movie Card
        <img src={ imagePath } alt="poster movie" />
        <h1>{ title }</h1>
        <h3>{ subtitle }</h3>
        <p>{ storyline }</p>
        <Link to={ URL }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    storyline: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
