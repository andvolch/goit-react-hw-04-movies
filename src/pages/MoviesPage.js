import { useState, useEffect } from 'react';

import { searchMovies } from '../services/TMDB';
import Searchbar from '../components/Searchbar/Searchbar';

export default function MoviesPage() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies(query, page)
      .then(results => setMovies([...movies, ...results]))
      .catch(error => console.log(error));
  }, [query]);

  return (
    <>
      <Searchbar query={query} />
    </>
  );
}
