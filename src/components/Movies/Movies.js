import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

const Movies = (props) => {
  return (
    <section className="movies">
      <SearchForm
        movies={props.movies}
        onSubmit={props.onSubmit}
        checked={props.checked}
        onCheked={props.onCheked}
      />
      {props.isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList
          movies={props.movies}
          isNotSuccessRequest={props.isNotSuccessRequest}
          handleSavedAndDeleteMovies={props.handleSavedAndDeleteMovies}
          savedMovies={props.savedMovies}
        />
      )}
    </section>
  );
};

export default Movies;
