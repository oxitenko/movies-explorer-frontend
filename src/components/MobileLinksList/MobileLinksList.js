import './MobileLinksList.css';
import accicon from '../../image/accicon.svg';
import { NavLink, Link } from 'react-router-dom';

const MobileLinksList = (props) => {
  return (
    <ul className="mobilenav__menu">
      <li onClick={props.close} className="mobilenav__menu-link">
        <NavLink
          activeClassName="header__link-active"
          className="header__link header__link-humb"
          exact
          to="/"
        >
          Главная
        </NavLink>
      </li>
      <li onClick={props.close} className="mobilenav__menu-link">
        <NavLink
          activeClassName="header__link-active"
          className="header__link header__link-humb"
          to="/movies"
        >
          Фильмы
        </NavLink>
      </li>
      <li onClick={props.close} className="mobilenav__menu-link">
        <NavLink
          activeClassName="header__link-active"
          className="header__link header__link-humb"
          to="/saved-movies"
        >
          Сохранённые фильмы
        </NavLink>
      </li>
      <li onClick={props.close} className="mobilenav__menu-link">
        <Link
          className="header__link header__link-account header__link-account-humb"
          to="/profile"
        >
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

export default MobileLinksList;
