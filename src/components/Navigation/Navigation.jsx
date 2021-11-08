import { NavLink } from 'react-router-dom';

import s from './Navigation.module.css';
console.log(NavLink);

export default function Navigation() {
    return (
        <nav>
        <NavLink 
            to='/'
            className={(navData) => navData.isActive ? s.activeLink : s.link}
            >
            HomePage
        </NavLink>

        <NavLink 
            to='/movies'
            className={(navData) => navData.isActive ? s.activeLink : s.link}
            >
            MoviesPage
        </NavLink>

        <NavLink 
            to='/movies/:movieId'
            className={(navData) => navData.isActive ? s.activeLink : s.link}
            >
            MovieDetailsPage
        </NavLink>
        
    </nav>
    )
};



    
// '/' - компонент <HomePage>, домашняя страница со списком популярных кинофильмов.
// '/movies' - компонент <MoviesPage>, страница поиска фильмов по ключевому слову.
// '/movies/:movieId' - компонент <MovieDetailsPage>, страница с детальной информацией о кинофильме.
// /movies/:movieId/cast - компонент <Cast>, информация о актерском составе. Рендерится на странице <MovieDetailsPage>.
// /movies/:movieId/reviews - компонент <Reviews>, информация об обзорах. Рендерится на странице <MovieDetailsPage>.