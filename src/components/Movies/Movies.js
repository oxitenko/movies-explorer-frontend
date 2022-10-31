import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { movies } from '../../utils/appData';
import { MoviesButton, PaginationButtonVisible } from '../Buttons/Buttons';

const Movies = () => {
  return (
    <section className="movies">
      <SearchForm />
      <MoviesCardList
        pagination={PaginationButtonVisible}
        button={MoviesButton}
        movies={movies}
      />
    </section>
  );
};

export default Movies;
