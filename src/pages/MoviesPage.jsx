import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { searchMovies } from '../services/TMDB';
import Searchbar from '../components/Searchbar/Searchbar';
import List from '../components/List/List';
import Button from '../components/Button/Button';
import { toast } from 'react-toastify';

export default function MoviesPage() {
  let [searchParams, setSearchParams] = useSearchParams();
  let [query, setQuery] = useState(searchParams.get('query'));

  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);

  const handleFormSubmit = query => {
    setQuery(query);
    setSearchParams({ query });
    setPage(1);
    setMovies([]);
  };

  const getMovies = (query, page) => {
    searchMovies(query, page)
      .then(results => {
        setMovies([...movies, ...results]);
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    if (!query) {
      return;
    }

    getMovies(query, page);
  }, [query, page]);

  const loadMore = () => {
    setPage(state => state + 1);
  };

  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} />
      {movies.length > 0 && <List list={movies} />}
      {movies.length > 19 && <Button loadMore={loadMore} />}
    </>
  );
}
