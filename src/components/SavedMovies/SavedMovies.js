import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { savedMovies } from '../../utils/appData';
import {
  SavedMoviesButton,
  PaginationButtonInvisible,
} from '../Buttons/Buttons';

const SavedMovies = () => {
  return (
    <section className="saved-movies">
      <SearchForm />
      <MoviesCardList
        pagination={PaginationButtonInvisible}
        button={SavedMoviesButton}
        movies={savedMovies}
      />
    </section>
  );
};

export default SavedMovies;
