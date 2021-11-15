
import PropTypes from 'prop-types';
import s from './Item.module.css';

export default function Item({
    movieId,
    original_title,
    poster_path,
    homepage,
    tagline,
    budget,
    vote_average,
    overview,
}) {
  

  return (
    <article>
        <img
            src={`https://image.tmdb.org/t/p/w342${poster_path}`}
            alt={original_title}
        />
        <h3>{original_title}</h3>
          <p>Overview: <span>{overview}</span></p>
          <p>{homepage}</p>
          <p>{tagline}</p>
          <p>{budget}</p>
          
        <p>Rating: {vote_average}</p>
    </article>
    
 
    
  );
};

Item.propTypes = {
  // id: PropTypes.number.isRequired,
  backdrop_path: PropTypes.string,
  original_title: PropTypes.string,
  poster_path: PropTypes.string,
  release_date: PropTypes.string,
  vote_average: PropTypes.number,
  movieId: PropTypes.number,
};