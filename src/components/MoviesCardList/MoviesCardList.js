import './MoviesCardList.css';
import { movies } from '../../utils/appData';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = () => {
  return (
    <section className="movies__searchlist">
      <ul className="movies__list">
        {movies.map((item) => {
          return <MoviesCard key={item.id} card={item} />;
        })}
      </ul>
      <button className="movies__pagination">Ещё</button>
    </section>
  );
};

export default MoviesCardList;
