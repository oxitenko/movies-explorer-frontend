import './Header.css';
import pageLogo from '../../image/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" src={pageLogo} alt="Логотип страницы" />
      <div className="header__container">
        <Link className="header__link" to="/signup">
          Регистрация
        </Link>
        <Link className="header__link header__link-signin" to="/signin">
          Войти
        </Link>
      </div>
    </header>
  );
};

export default Header;
