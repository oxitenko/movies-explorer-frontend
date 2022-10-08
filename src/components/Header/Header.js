import './Header.css';
import pageLogo from '../../image/logo.svg';
import { Link, useLocation } from 'react-router-dom';
import accicon from '../../image/accicon.svg';

const Header = () => {
  let location = useLocation();

  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={pageLogo} alt="Логотип страницы" />
      </Link>
      <div className="header__container header__container-movies">
        {location.pathname === '/' ? (
          <>
            <Link className="header__link" to="/signup">
              Регистрация
            </Link>
            <Link className="header__link header__link-signin" to="/signin">
              Войти
            </Link>
          </>
        ) : location.pathname === '/movies' ? (
          <>
            <Link className="header__link header__link-movies" to="/movies">
              Фильмы
            </Link>
            <Link
              className="header__link header__link-movies"
              to="/saved-movies"
            >
              Сохранённые фильмы
            </Link>
            <Link className="header__link header__link-account" to="/profile">
              <img
                className="header__link-icon"
                src={accicon}
                alt="Иконка ссылки на страницу аккаунта"
              />
              Аккаунт
            </Link>
          </>
        ) : (
          ''
        )}
      </div>
    </header>
  );
};

export default Header;
