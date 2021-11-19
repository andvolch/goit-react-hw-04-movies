import { useState, useEffect } from 'react';

import { searchMovies } from '../services/TMDB';
import Searchbar from '../components/Searchbar/Searchbar';
import List from '../components/List/List';
import Button from '../components/Button/Button';

export default function MoviesPage() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState(null);

  const handleFormSubmit = (query) => {
     setQuery(query);
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
    };
    getMovies(query, page);

  }, [query, page]);


  const loadMore = () => {
    setPage(state => state + 1);
  };


  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} />
      {movies && (
        <>
          <List list={movies} />
          <Button loadMore={loadMore} />
        </>
      )}
      
    </>
  );
}
