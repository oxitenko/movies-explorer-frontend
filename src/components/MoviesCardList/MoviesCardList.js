import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import usePagination from '../../hooks/usePagination';
import ServerError from '../ServerError/ServerError';
import { useEffect } from 'react';
import useResize from '../../hooks/useResize';
import { LOADMORE_NUMBER } from '../../utils/constants';

const MoviesCardList = (props) => {
  const { loadMore, initValue, computeInitValue } = usePagination();
  const windowSize = useResize();

  useEffect(() => {
    computeInitValue();
  }, [windowSize.width]);

  const pagination =
    props.movies !== null
      ? props.movies.length === 0 || props.movies.length <= initValue
        ? 'movies__pagination-invis'
        : props.movies.length >= LOADMORE_NUMBER
        ? 'movies__pagination'
        : 'movies__pagination-invis'
      : '';

  return (
    <section className="movies__searchlist">
      {props.isNotSuccessRequest ? (
        <ServerError />
      ) : props.isMoviesFound ? (
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
