import './Main.css';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';

const Main = () => {
  return (
    <section className="prodject">
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
    </section>
  );
};

export default Main;
