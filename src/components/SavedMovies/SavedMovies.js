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
      />
    </section>
  );
};

export default SavedMovies;
