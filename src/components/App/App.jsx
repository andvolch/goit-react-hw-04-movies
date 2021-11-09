import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import AppBar from '../AppBar/AppBar';
import HomePage from '../../pages/HomePage';
import MoviesPage from '../../pages/MoviesPage';
import MovieDetailsPage from '../../pages/MovieDetailsPage';
// import Modal from '../Modal/Modal';
// import Searchbar from '../Searchbar/Searchbar';
// import ImageGallery from '../ImageGallery/ImageGallery';



export default function App() {
  
  // const [query, setQuery] = useState('');
  // const [page, setPage] = useState(1);
  // const [images, setImages] = useState([]);
  // const [showModal, setShowModal] = useState(false);
  // const [tags, seTtags] = useState('');
  // const [largeImageURL, setLargeImageURL] = useState('');

  //  const handleFormSubmit = (query) => {
  //    setQuery(query);
  //    setPage(1);
  //    setImages([]);
  // };

  // const toggleModal = () => {
  //   setShowModal(!showModal);
    
  // };

  // const onImageClick = (tags, largeImageURL) => {
  //   seTtags(tags);
  //   setLargeImageURL(largeImageURL);

  //   toggleModal();
  // };

  // const loadMore = () => {

  //     setPage(state => state + 1);
  // };

  return (
    <div>
      <AppBar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies/*" element={<MoviesPage />} >
            <Route path=":movieId/*" element={<MovieDetailsPage />} >
            <Route path="cast"
              // element={<MovieDetailsPage />}
            />
            <Route path="reviews"
              // element={<MovieDetailsPage />}
            />
            </Route>
          </Route>
       
        </Routes>
        

    </div>
    
    
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

};


