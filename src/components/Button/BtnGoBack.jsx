import PropTypes from 'prop-types';
import s from './Button.module.css';

export default function BtnGoBack({ goBack }) {
  return (
    <div className={s.container}>
      <button type="button" className={s.button} onClick={() => goBack()}>
        Go back
      </button>
    </div>
  );
}

BtnGoBack.propTypes = {
  goBack: PropTypes.func.isRequired,
};
