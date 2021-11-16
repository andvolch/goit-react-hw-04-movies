import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Container from '../Container/Container';
import AppBar from '../AppBar/AppBar';
import HomePage from '../../pages/HomePage';
import MoviesPage from '../../pages/MoviesPage';
import MovieDetailsPage from '../../pages/MovieDetailsPage';
import NotFoundView from '../../pages/NotFoundView';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews'



export default function App() {
  
  return (
    <Container>
      <AppBar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="movies/" element={<MoviesPage />} />
        
        <Route path="movies/:movieId/" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />}/>

          <Route path="reviews" element={<Reviews />}/>
        </Route>
         
       

        <Route path="*" element={<NotFoundView/>}/>
      </Routes>
    </Container>

    // <div>
    //   <Searchbar
    //     onSubmit={handleFormSubmit}
    //   />
    //   <ImageGallery
    //     query={query}
    //     page={page}
    //     images={images}
    //     setImages={setImages}
    //     onImageClick={onImageClick}
    //     loadMore={loadMore}
    //   />
    //   {showModal && (
    //       <Modal
    //         onClose={toggleModal}
    //         tags={tags}
    //         largeImageURL={largeImageURL}
    //       />
    //   )}
    //   <ToastContainer autoClose={5000} />
    // </div>
  );
}
