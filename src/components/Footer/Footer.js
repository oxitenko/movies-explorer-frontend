import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__sourse">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__container">
        <a className="footer__link footer__link-year" href="#toup">
          &copy; {new Date().getFullYear()}
        </a>
        <ul className="footer__linklist">
          <li>
            <a className="footer__link" href="https://practicum.yandex.ru/">
              Яндекс.Практикум
            </a>
          </li>
          <li>
            <a className="footer__link" href="https://github.com/oxitenko">
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
