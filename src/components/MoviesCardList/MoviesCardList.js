import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import usePagination from '../../hooks/usePagination';

const MoviesCardList = (props) => {
  const { loadMore, visibleValue } = usePagination();
  const storageMovies = JSON.parse(localStorage.getItem('storage-film'));

  const pagination =
    props.movies.length === 0 || props.movies.length <= visibleValue
      ? 'movies__pagination-invis'
      : props.movies.length >= 3
      ? 'movies__pagination'
      : 'movies__pagination-invis';

  return (
    <section className="movies__searchlist">
      {props.movies.length === 0 || null ? (
        <span className="movies__notfound">Ничего не найдено</span>
      ) : (
        <ul className="movies__list">
          {props.movies.slice(0, visibleValue).map((item) => {
            return (
              <MoviesCard button={props.button} key={item.id} card={item} />
            );
          })}
        </ul>
      )}
      <button onClick={loadMore} type="button" className={pagination}>
        Ещё
      </button>
    </section>
  );
};

export default MoviesCardList;
