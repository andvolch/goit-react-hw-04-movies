import { useState, useEffect } from 'react';

import { getTrending } from '../services/TMDB';

import HomePageTitle from '../components/HomePageTitle/HomePageTitle';
import List from '../components/List/List';

// console.log(getTrending());

export default function HomePage() {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrending(page)
      .then(results => setMovies([...movies, ...results]))
      .catch(error => console.log(error));
  }, []);

  // console.log(movies);

  return (
    <>
      <HomePageTitle text={'Trending today'} />
      <List list={movies} />
    </>
  );
}
