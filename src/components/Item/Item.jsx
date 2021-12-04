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
    <article className={s.list}>
      <img
        src={`https://image.tmdb.org/t/p/w342${poster_path}`}
        alt={original_title}
      />
      <div className={s.block}>
        <h2>{original_title}</h2>

        <p className={s.title}>
          Overview: <span className={s.text}>{overview}</span>
        </p>
        <p className={s.title}>
          Homepage:{' '}
          <a href={homepage} target="_blank" rel="noreferrer">
            {homepage}
          </a>
        </p>
        <p className={s.title}>
          Tagline: <span className={s.text}>{tagline}</span>
        </p>
        <p className={s.title}>
          Budget, $: <span className={s.text}>{budget}</span>
        </p>
        <p className={s.title}>
          Rating: <span className={s.text}>{vote_average}</span>
        </p>
      </div>
    </article>
  );
}

Item.propTypes = {
  backdrop_path: PropTypes.string,
  original_title: PropTypes.string,
  poster_path: PropTypes.string,
  release_date: PropTypes.string,
  vote_average: PropTypes.number,
  movieId: PropTypes.number,
};
