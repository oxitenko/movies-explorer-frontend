import './Header.css';
import pageLogo from '../../image/logo.svg';
import { Link, useLocation } from 'react-router-dom';
import MobileHeader from '../MobileHeader/MobileHeader';
import MainLinksList from '../MainLinksList/MainLinksList';
import MoviesLinksList from '../MoviesLinksList/MoviesLinksList';

const Header = () => {
  let location = useLocation();

  return (
    <header
      className={
        location.pathname === '/signup' && '/signin' && '*' //временная заглушка, переделать под защищённый роут
          ? 'header__auth'
          : 'header'
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
      <MobileHeader />
    </header>
  );
};

export default Header;
