import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { MoviesButton, PaginationButtonVisible } from '../Buttons/Buttons';
import Preloader from '../Preloader/Preloader';

const Movies = (props) => {
  return (
    <section className="movies">
      <SearchForm
        movies={props.movies}
        onSubmit={props.onSubmit}
        cheked={props.cheked}
        onCheked={props.onCheked}
      />
      {props.isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList
          pagination={PaginationButtonVisible}
          button={MoviesButton}
          movies={props.movies}
        />
      )}
    </section>
  );
};

export default Movies;
