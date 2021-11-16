import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../../services/TMDB';

import s from './Cast.module.css'



export default function Cast() {
    const [casts, setCasts] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        getMovieCredits(movieId)
            .then(setCasts)
            .catch(error => console.log(error));
       
        
    }, []);
   
    return (
        <ul className={s.list}>
            { 
                casts.map(
                    ({ cast_id, profile_path, original_name, }) => {
                        return (
                            <li key={cast_id} className={s.item}>
                            <img
                            src={`https://image.tmdb.org/t/p/w154${profile_path}`}
                            alt={original_name}
                            />
                            <h4 className={s.title}>{original_name}</h4>
                            
                        </li>)
                    }
        )}
        </ul>
    )
};

