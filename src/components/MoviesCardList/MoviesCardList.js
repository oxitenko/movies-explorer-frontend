import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = (props) => {
  return (
    <section className="movies__searchlist">
      <ul className="movies__list">
        {props.movies.map((item) => {
          return <MoviesCard button={props.button} key={item.id} card={item} />;
        })}
      </ul>
      {props.pagination()}
    </section>
  );
};

export default MoviesCardList;
