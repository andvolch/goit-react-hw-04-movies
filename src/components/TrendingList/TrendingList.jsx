import PropTypes from 'prop-types';
import s from './TrendingList.module.css';
import MoviesList from '../ItemList/ItemList';

export default function TrendingList({ list }) {
  console.log(list);
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
          <MoviesList
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
