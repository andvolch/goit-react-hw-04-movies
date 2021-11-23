import { useNavigate } from 'react-router-dom';
import s from './Button.module.css';

export default function BtnGoBack2() {
  const navigate = useNavigate();

  return (
   <div className={s.container}>
      <button type="button"
        className={s.button}
        onClick={() => navigate(-1)}
      >
        Go back
      </button>
    </div>
  );
}