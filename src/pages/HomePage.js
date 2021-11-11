import { useState, useEffect } from 'react';
import { getTrending } from '../services/TMDB';

import HomePageTitle from '../components/HomePageTitle/HomePageTitle';
import TrendingList from '../components/TrendingList/TrendingList';


// console.log(getTrending());

export default function HomePage() {

    const [page, setPage] = useState(1);
    const [movies, setMovies] = useState([]);

    // useEffect(() => {
    //     getTrending(page).then(response => {
    //         // console.log(response);
    //         setMovies([...movies, ...response]);
    //     });
    // }, [page]);
    getTrending(page).then(response => {
            // console.log(response);
            setMovies([...movies, ...response]);
        });
    console.log(movies);

    return (
        <>
            <HomePageTitle text={'Trending today'} />
            <TrendingList list={movies}/>
            <div>
                <span>
                    HomePage
                    
                </span>
            </div>
        </>
        
       
    )
    
}






