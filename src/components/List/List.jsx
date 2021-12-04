import PropTypes from 'prop-types';
import s from './List.module.css';
import ItemList from '../ItemList/ItemList';

export default function TrendingList({ list }) {
  return (
    <ul className={s.list}>
      {list.map(
        ({
          id,
          backdrop_path,
          original_title,
          poster_path,
          release_date,
          vote_average,
        }) => (
          <ItemList
            key={id}
            movieId={id}
            backdrop_path={backdrop_path}
            original_title={original_title}
            poster_path={poster_path}
            release_date={release_date}
            vote_average={vote_average}
          />
        ),
      )}
    </ul>
  );
}

TrendingList.propTypes = {
  list: PropTypes.array.isRequired,
};
