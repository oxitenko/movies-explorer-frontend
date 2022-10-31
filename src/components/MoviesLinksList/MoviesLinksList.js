import './MoviesLinksList.css';
import accicon from '../../image/accicon.svg';
import { Link } from 'react-router-dom';

const MoviesLinksList = () => {
  return (
    <ul className="header__container-movies">
      <li>
        <Link className="header__link header__link-movies" to="/movies">
          Фильмы
        </Link>
      </li>

      <li>
        <Link className="header__link header__link-movies" to="/saved-movies">
          Сохранённые фильмы
        </Link>
      </li>

      <li>
        <Link className="header__link header__link-account" to="/profile">
          <img
            className="header__link-icon"
            src={accicon}
            alt="Иконка ссылки на страницу аккаунта"
          />
          Аккаунт
        </Link>
      </li>
    </ul>
  );
};

export default MoviesLinksList;
