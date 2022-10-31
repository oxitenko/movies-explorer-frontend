import './NavTab.css';
import { Link, animateScroll as scroll } from 'react-scroll';

const NavTab = () => {
  return (
    <nav className="navigation">
      <Link
        className="navigation__link"
        to="aboutproject"
        smooth={true}
        duration={500}
        offset={50}
      >
        О проекте
      </Link>
      <Link
        className="navigation__link"
        to="techs"
        smooth={true}
        duration={500}
        offset={50}
      >
        Технологии
      </Link>
      <Link
        className="navigation__link"
        to="student"
        smooth={true}
        duration={500}
        offset={50}
      >
        Студент
      </Link>
    </nav>
  );
};

export default NavTab;
