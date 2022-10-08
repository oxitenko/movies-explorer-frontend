import './AboutMe.css';
import studentFoto from '../../image/me.jpg';
import { student, portfolio } from '../../utils/appData';

const AboutMe = () => {
  return (
    <section className="student" name="student">
      <h2 className="student__title project__title">Студент</h2>
      <div className="student__container">
        <div className="student__sammary">
          <h3 className="student__name">{student.name}</h3>
          <p className="student__profi">{student.profi}</p>
          <p className="student__about">{student.summary}</p>
          <a className="student__gitlink" href="https://github.com/oxitenko">
            Github
          </a>
        </div>
        <img className="student__foto" src={studentFoto} alt="Фото студента" />
      </div>
      <div>
        <h3 className="student__portfolio">Портфолио</h3>
        <ul className="student__applist">
          {portfolio.map((item) => {
            return (
              <li className="student__appitem" key={item.id}>
                <p className="student__text">{item.title}</p>
                <a href={item.link}>
                  <img
                    className="student__applink"
                    src={item.icon}
                    alt="Ссылка на гитхаб"
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default AboutMe;
