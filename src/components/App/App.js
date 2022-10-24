import './App.css';
import { Switch, Route } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';

import Header from '../Header/Header';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import PopupError from '../PopupError/PopupError';
import MobileHeader from '../MobileHeader/MobileHeader';
import moviesApi from '../../utils/MoviesApi';
import moviesFilters from '../../utils/filters';

function App() {
  const [isOpenHumbMenu, setIsOpenHumbMenu] = useState(false);
  const [movies, setMovies] = useState([]);
  const [checkedShortFilms, setCheckedShortFilms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isNotSuccessRequest, setIsNotSuccessRequest] = useState(false);

  const handleSearchFilms = (value) => {
    if (movies.length === 0) {
      setIsLoading(true);
      moviesApi
        .getMovies()
        .then((res) => {
          localStorage.setItem('initmovies', JSON.stringify(res));
          filterMovies(value);
        })
        .catch((err) => {
          console.log(err);
          setIsNotSuccessRequest(true);
        })
        .finally(() => setIsLoading(false));
    }
    filterMovies(value);
  };

  const filterMovies = useCallback(
    (value) => {
      const savedMovies = JSON.parse(localStorage.getItem('initmovies'));
      if (savedMovies) {
        const filtredMovies = moviesFilters(
          savedMovies,
          value,
          checkedShortFilms,
        );
        setMovies(filtredMovies);
        localStorage.setItem('filtred-movies', JSON.stringify(filtredMovies));
        localStorage.setItem('value', value);
      }
    },
    [checkedShortFilms],
  );

  const handleCheckShortFilms = () => {
    setCheckedShortFilms(!checkedShortFilms);
    localStorage.setItem('checkbox', !checkedShortFilms);
  };

  useEffect(() => {
    const checkbox = localStorage.getItem('checkbox');
    setCheckedShortFilms(JSON.parse(checkbox));
  }, []);

  useEffect(() => {
    const storageValue = localStorage.getItem('value');
    filterMovies(storageValue);
  }, [filterMovies, checkedShortFilms]);

  const handleOpenCloseHumbMenu = () => {
    setIsOpenHumbMenu(!isOpenHumbMenu);
    document.body.classList.toggle('body_lock');
  };

  return (
    <main className="App">
      <Header>
        <MobileHeader
          open={isOpenHumbMenu}
          openClose={handleOpenCloseHumbMenu}
        />
      </Header>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/movies">
          <Movies
            movies={movies}
            onSubmit={handleSearchFilms}
            checked={checkedShortFilms}
            onCheked={handleCheckShortFilms}
            isLoading={isLoading}
            isNotSuccessRequest={isNotSuccessRequest}
          />
        </Route>
        <Route path="/saved-movies">
          <SavedMovies />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
      <PopupError />
    </main>
  );
}

export default App;
