import { useState, useEffect, useRef } from 'react';
import {
  NavLink,
  useParams,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { getMovieDetails } from '../services/TMDB';
import Item from '../components/Item/Item';
import BtnGoBack from '../components/Button/BtnGoBack';
import s from './PageStyles.module.css';

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    getMovieDetails(movieId)
      .then(setMovie)
      .catch(error => console.log(error));
  }, []);

  const toReturn = useRef('');
  toReturn.current = location.state ?? toReturn.current;

  const goBack = () => {
    navigate(toReturn.current ? toReturn.current : '/');
  };

  return (
    <>
      {movie && (
        <>
          <BtnGoBack goBack={goBack} />
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
              to="cast"
              className={navData => (navData.isActive ? s.activeLink : s.link)}
            >
              Cast
            </NavLink>

            <NavLink
              to="reviews"
              className={navData => (navData.isActive ? s.activeLink : s.link)}
            >
              Reviews
            </NavLink>
          </div>

          <Outlet />
        </>
      )}
    </>
  );
}
