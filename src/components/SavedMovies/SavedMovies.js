import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const SavedMovies = (props) => {
  return (
    <section className="saved-movies">
      <SearchForm
        isSavedMoviesPage={props.isSavedMoviesPage}
        onSubmit={props.onSubmit}
        checked={props.checked}
        onCheked={props.onCheked}
      />
      <MoviesCardList
        movies={props.savedMovies}
        savedMovies={props.savedMovies}
        isSavedMoviesPage={props.isSavedMoviesPage}
        deleteSavedMovie={props.deleteSavedMovie}
        isMoviesFound={props.isMoviesFound}
      />
    </section>
  );
};

export default SavedMovies;
