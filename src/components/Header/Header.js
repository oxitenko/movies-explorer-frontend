import './Header.css';
import pageLogo from '../../image/logo.svg';
import { Link, useLocation } from 'react-router-dom';
import MainLinksList from '../MainLinksList/MainLinksList';
import MoviesLinksList from '../MoviesLinksList/MoviesLinksList';

const Header = (props) => {
  let location = useLocation();

  return (
    <header
      className={
        location.pathname === '/'
          ? 'header'
          : location.pathname === '/movies'
          ? 'header'
          : location.pathname === '/saved-movies'
          ? 'header'
          : location.pathname === '/profile'
          ? 'header'
          : 'header__auth'
      }
    >
      <Link to="/">
        <img className="header__logo" src={pageLogo} alt="Логотип страницы" />
      </Link>
      <nav
        className={
          location.pathname === '/'
            ? 'header__novigation'
            : 'header__novigation-movies'
        }
      >
        {location.pathname === '/' ? <MainLinksList /> : <MoviesLinksList />}
      </nav>
      {props.children}
    </header>
  );
};

export default Header;
