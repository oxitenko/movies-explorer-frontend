import './MoviesLinksList.css';
import accicon from '../../image/accicon.svg';
import { Link, NavLink } from 'react-router-dom';

const MoviesLinksList = () => {
  return (
    <ul className="header__container-movies">
      <li>
        <NavLink
          className="header__link header__link-movies"
          activeClassName="header__link_active"
          to="/movies"
        >
          Фильмы
        </NavLink>
      </li>

      <li>
        <NavLink
          className="header__link header__link-movies"
          activeClassName="header__link_active"
          to="/saved-movies"
        >
          Сохранённые фильмы
        </NavLink>
      </li>

      <li>
        <NavLink
          className="header__link header__link-account"
          activeClassName="header__link_active"
          to="/profile"
        >
          <img
            className="header__link-icon"
            src={accicon}
            alt="Иконка ссылки на страницу аккаунта"
          />
          Аккаунт
        </NavLink>
      </li>
    </ul>
  );
};

export default MoviesLinksList;
