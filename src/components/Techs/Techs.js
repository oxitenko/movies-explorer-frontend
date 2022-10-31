import './Techs.css';
import { techs } from '../../utils/appData';

const Techs = () => {
  return (
    <section className="techs" name="techs">
      <h2 className="techs__title project__title">Технологии</h2>
      <div className="techs__container">
        <h2 className="techs__subtitle">7 технологий</h2>
        <p className="techs__text">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className="techs__skillslist">
          {techs.map((item) => {
            return (
              <li className="techs__skill" key={item.id}>
                {item.titile}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Techs;
