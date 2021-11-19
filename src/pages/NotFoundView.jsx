import { Link } from 'react-router-dom';

export default function NotFoundView() {
  return <h1>404 Страница не найдена
    <Link to={'/'}> Go Home</Link>
  </h1>;
};