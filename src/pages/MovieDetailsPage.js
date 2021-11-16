import { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { getMovieDetails } from '../services/TMDB';

import Item from '../components/Item/Item';
import Cast from '../components/Cast/Cast';
import Reviews from '../components/Reviews/Reviews';
import BtnGoBack from '../components/Button/BtnGoBack'

import s from './PageStyles.module.css'


export default function MovieDetailsPage() {
    const [movie, setMovie] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        getMovieDetails(movieId)
            .then(setMovie)
            .catch(error => console.log(error));
       
        
    }, []);
    

    
   

    return (
        <>
            {movie && 
                (
                <>  <BtnGoBack/>
                    <Item
                    movieId={movie.id}
                    original_title={movie.original_title}
                    poster_path={movie.poster_path}
                    homepage={movie.homepage}
                    tagline={movie.tagline}
                    budget={movie.budget}                
                    vote_average={movie.vote_average}
                    overview={movie.overview}
                    />
                    <div className={s.section}>
                        <NavLink 
                            to='cast'
                            className={(navData) => navData.isActive ? s.activeLink : s.link}
                        >
                        Cast
                        </NavLink>

                        <NavLink 
                            to='reviews'
                            className={(navData) => navData.isActive ? s.activeLink : s.link}
                        >
                        Reviews
                        </NavLink>
                    </div>
                    

                    <Routes>
                        <Route path="cast" element={<Cast />} />
                        <Route path="reviews" element={<Reviews />} />
                    </Routes>
                    
                    
                    
                    

                </>
            )
            }
           
                
                
           
        </>
        
        
       
      
                

            
            // {/* <NavLink 
            //     to='cast'
            //     // className={(navData) => navData.isActive ? s.activeLink : s.link}
            //     >
            //     Cast
            // </NavLink>

            // <NavLink 
            //     to='reviews'
            //     // className={(navData) => navData.isActive ? s.activeLink : s.link}
            //     >
            //     Reviews
            // </NavLink> */}
        
        
    );
    
};
