import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../services/TMDB';

import s from './Reviews.module.css'

export default function Reviews() {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        getMovieReviews(movieId)
            .then(setReviews)
            .catch(error => console.log(error));
    }, []);
   
    return (
        <ul className={s.list}>
            { 
                reviews.map(
                    ({ author, content, id,  }) => {
                        return (
                            <li key={id} className={s.item}>
                                <h4 className={s.title} >{author}</h4>
                                <p className={s.text} >{content}</p>
                            
                        </li>)
                    }
        )}
        </ul>
    )
};