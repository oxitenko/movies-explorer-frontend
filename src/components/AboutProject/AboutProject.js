import './AboutProject.css';

const AboutProject = () => {
  return (
    <section className="aboutproject" name="aboutproject">
      <h3 className="aboutproject__title project__title">О проекте</h3>
      <ul className="aboutproject__list">
        <li className="aboutproject__item">
          <p className="aboutproject__subtitle">
            Дипломный проект включал 5 этапов
          </p>
          <p className="aboutproject__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className="aboutproject__item">
          <p className="aboutproject__subtitle">
            На выполнение диплома ушло 5 недель
          </p>
          <p className="aboutproject__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <ul className="aboutproject__bar">
        <li className="aboutproject__week">
          <p className="aboutproject__time aboutproject__time-one">1 неделя</p>
          <p className="aboutproject__tech">Back-end</p>
        </li>
        <li className="aboutproject__week">
          <p className="aboutproject__time aboutproject__time-four">4 недели</p>
          <p className="aboutproject__tech">Front-end</p>
        </li>
      </ul>
    </section>
  );
};

export default AboutProject;
