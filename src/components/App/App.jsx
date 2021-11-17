import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Container from '../Container/Container';
import AppBar from '../AppBar/AppBar';
// import HomePage from '../../pages/HomePage';
// import MoviesPage from '../../pages/MoviesPage';
// import MovieDetailsPage from '../../pages/MovieDetailsPage';
// import NotFoundView from '../../pages/NotFoundView';

import Loader from '../Loader/Loader';


const HomePage = lazy(() => import('../../pages/HomePage.js' /* webpackChunkName: "home-view" */));
const MoviesPage = lazy(() => import('../../pages/MoviesPage.js' /* webpackChunkName: "movies-view" */));
const MovieDetailsPage = lazy(() => import('../../pages/MovieDetailsPage.js' /* webpackChunkName: "details-view" */));
const NotFoundView = lazy(() => import('../../pages/NotFoundView.js' /* webpackChunkName: "notFound-view" */));

export default function App() {
  
  return (
    <Container>
      <AppBar />

      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/movies" element={<MoviesPage />} />
          
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" />
            <Route path="reviews" />
          </Route>
          
          <Route path="*" element={<NotFoundView/>}/>
        </Routes>

      </Suspense>
      <ToastContainer autoClose={5000} />
    </Container>

    
    
  );
}
