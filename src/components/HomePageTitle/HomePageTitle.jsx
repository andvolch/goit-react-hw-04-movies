import s from './HomePageTitle.module.css';
import PropTypes from 'prop-types';

export default function HomePageTitle({text}) {
    return <h1 className={s.title}>{text}</h1>
    
};


HomePageTitle.propTypes = {
    text: PropTypes.string,
};
