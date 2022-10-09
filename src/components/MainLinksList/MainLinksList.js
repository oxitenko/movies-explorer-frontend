import './MainLinksList.css';
import { Link } from 'react-router-dom';

const MainLinksList = () => {
  return (
    <ul className="header__container-main">
      <li>
        <Link className="header__link" to="/signup">
          Регистрация
        </Link>
      </li>
      <li>
        <Link className="header__link header__link-signin" to="/signin">
          Войти
        </Link>
      </li>
    </ul>
  );
};

export default MainLinksList;
