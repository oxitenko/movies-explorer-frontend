import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import usePagination from '../../hooks/usePagination';
import ServerError from '../ServerError/ServerError';

const MoviesCardList = (props) => {
  const { loadMore, initValue } = usePagination();

  const pagination =
    props.movies !== null
      ? props.movies.length === 0 || props.movies.length <= initValue
        ? 'movies__pagination-invis'
        : props.movies.length >= 3
        ? 'movies__pagination'
        : 'movies__pagination-invis'
      : '';

  return (
    <section className="movies__searchlist">
      {props.isNotSuccessRequest ? (
        <ServerError />
      ) : props.movies.length === 0 || null ? (
        <span className="movies__notfound">Ничего не найдено</span>
      ) : (
        <ul className="movies__list">
          {props.movies.slice(0, initValue).map((item) => {
            return (
              <MoviesCard
                key={props.isSavedMoviesPage ? item.movieId : item.id}
                card={item}
                handleSavedAndDeleteMovies={props.handleSavedAndDeleteMovies}
                savedMovies={props.savedMovies}
                isSavedMoviesPage={props.isSavedMoviesPage}
                deleteSavedMovie={props.deleteSavedMovie}
              />
            );
          })}
        </ul>
      )}
      <button
        onClick={loadMore}
        type="button"
        className={
          props.isSavedMoviesPage ? 'movies__pagination-invis' : pagination
        }
      >
        Ещё
      </button>
    </section>
  );
};

export default MoviesCardList;
