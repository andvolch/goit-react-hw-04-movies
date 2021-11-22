import { Link } from 'react-router-dom';
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
  return (
    <Link key={movieId} to={`/movies/${movieId}`} className={s.link}>
      <li key={movieId} className={s.item}>
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
      </li>
    </Link>
  );
}

ItemList.propTypes = {
  // id: PropTypes.number.isRequired,
  backdrop_path: PropTypes.string,
  original_title: PropTypes.string,
  poster_path: PropTypes.string,
  release_date: PropTypes.string,
  vote_average: PropTypes.number,
  movieId: PropTypes.number,
};

// backdrop_path: "/cinER0ESG0eJ49kXlExM0MEWGxW.jpg"
// genre_ids: (3) [28, 12, 14]
// id: 566525
// media_type: "movie"
// original_language: "en"
// original_title: "Shang-Chi and the Legend of the Ten Rings"
// overview: "Shang-Chi must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization."
// popularity: 1858.052
// poster_path: "/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg"
// release_date: "2021-09-01"
// title: "Shang-Chi and the Legend of the Ten Rings"
// video: false
// vote_average: 7.8
// vote_count: 1556
