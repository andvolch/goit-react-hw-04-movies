import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './ItemList.module.css';

export default function ItemList({
  backdrop_path,
  original_title,
  poster_path,
  release_date,
  vote_average,
  movieId,
}) {
  const location = useLocation();
  return (
    <li key={movieId} className={s.item}>
      <Link
        key={movieId}
        to={`/movies/${movieId}`}
        className={s.link}
        state={location}
      >
        <article>
          <img
            src={`https://image.tmdb.org/t/p/w780${backdrop_path}`}
            alt={original_title}
          />
          <h3>{original_title}</h3>
          <p>
            Release date:
            <span className={s.text_date}>{release_date}</span>
          </p>
          <p>Rating: {vote_average}</p>
        </article>
      </Link>
    </li>
  );
}

ItemList.propTypes = {
  backdrop_path: PropTypes.string,
  original_title: PropTypes.string,
  poster_path: PropTypes.string,
  release_date: PropTypes.string,
  vote_average: PropTypes.number,
  movieId: PropTypes.number,
};
