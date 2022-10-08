import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const Movies = () => {
  return (
    <section>
      <SearchForm />
      <MoviesCardList />
    </section>
  );
};

export default Movies;
