import { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';

import { getMovieDetails } from '../services/TMDB';

export default function MovieDetailsPage() {

    const {movieId} = useParams();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMovieDetails(movieId).then(setMovies)
        
    }, [movieId]);

    


    return (

        <>
            <NavLink 
                to='cast'
                // className={(navData) => navData.isActive ? s.activeLink : s.link}
                >
                Cast
            </NavLink>

            <NavLink 
                to='reviews'
                // className={(navData) => navData.isActive ? s.activeLink : s.link}
                >
                Reviews
            </NavLink>
        </>
        
    );
    
};

