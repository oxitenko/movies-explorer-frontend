import '../../style/MobileLinksList.css';
import { NavLink } from 'react-router-dom';

const MobileLinkListNoAuth = (props) => {
  return (
    <ul
      className={
        !props.open
          ? 'mobilenav__menu'
          : 'mobilenav__menu mobilenav__menu-active'
      }
    >
      <li
        onClick={props.close}
        className="mobilenav__menulink mobilenav__menulink-noauth"
      >
        <NavLink
          activeClassName="header__link-active"
          className="header__link header__link-humb "
          exact
          to="/signup"
        >
          Регистрация
        </NavLink>
      </li>
      <li
        onClick={props.close}
        className="mobilenav__menulink mobilenav__menulink-noauth"
      >
        <NavLink
          activeClassName="header__link-active"
          className="header__link header__link-humb"
          to="/signin"
        >
          Войти
        </NavLink>
      </li>
    </ul>
  );
};

export default MobileLinkListNoAuth;
