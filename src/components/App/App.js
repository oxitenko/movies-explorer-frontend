import './App.css';
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';
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
import mainApi from '../../utils/MainApi';
import * as auth from '../../utils/Auth';

function App() {
  const [isOpenHumbMenu, setIsOpenHumbMenu] = useState(false);
  const [movies, setMovies] = useState([]);
  const [checkedShortFilms, setCheckedShortFilms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isNotSuccessRequest, setIsNotSuccessRequest] = useState(false);
  const [likedAndSavedMovies, setLikedAndSavedMovies] = useState([]);
  const [isAuthSuccess, setIsAuthSuccess] = useState(true);
  const history = useHistory();
  const location = useLocation();
  const isSavedMoviesPage =
    location.pathname === '/saved-movies' ? true : false;

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

  const failterSavedMovies = (value) => {
    const filtredMovies = moviesFilters(
      likedAndSavedMovies,
      value,
      checkedShortFilms,
    );
    setLikedAndSavedMovies(filtredMovies);
  };

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

  const handleSavedAndDeleteMovies = (data) => {
    const isLikedAndSaved = likedAndSavedMovies.some(
      (m) => data.movieId === m.movieId,
    );

    if (!isLikedAndSaved) {
      mainApi
        .likedAndSavedMovie(data)
        .then((res) => {
          setLikedAndSavedMovies([res, ...likedAndSavedMovies]);
        })
        .catch((err) => console.log(err));
    }

    if (isLikedAndSaved) {
      const movie = likedAndSavedMovies.find((i) => i.movieId === data.movieId);
      mainApi
        .deleteSavedMovie(movie)
        .then((res) => {
          setLikedAndSavedMovies(
            likedAndSavedMovies.filter((m) => m._id !== movie._id && res),
          );
        })
        .catch((err) => console.log(err));
    }
  };

  const handleRemoveSavedMovies = (data) => {
    mainApi
      .deleteSavedMovie(data)
      .then((res) => {
        setLikedAndSavedMovies(
          likedAndSavedMovies.filter((m) => m._id !== data._id && res),
        );
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    mainApi
      .getSavedMovies()
      .then((res) => {
        setLikedAndSavedMovies(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const registerUser = (data) => {
    return auth
      .register(data)
      .then(() => {
        history.push('/movies');
      })
      .catch((err) => {
        setIsAuthSuccess(false);
        console.log(err);
      });
  };

  const loginUser = (data) => {
    return auth
      .login(data)
      .then(() => {
        history.push('/movies');
      })
      .catch((err) => {
        setIsAuthSuccess(false);
        console.log(err);
      });
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
            savedMovies={likedAndSavedMovies}
            onSubmit={handleSearchFilms}
            checked={checkedShortFilms}
            onCheked={handleCheckShortFilms}
            isLoading={isLoading}
            isNotSuccessRequest={isNotSuccessRequest}
            handleSavedAndDeleteMovies={handleSavedAndDeleteMovies}
          />
        </Route>
        <Route path="/saved-movies">
          <SavedMovies
            savedMovies={likedAndSavedMovies}
            isSavedMoviesPage={isSavedMoviesPage}
            deleteSavedMovie={handleRemoveSavedMovies}
            onSubmit={failterSavedMovies}
          />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/signup">
          <Register
            onRegister={registerUser}
            isRegisterSuccess={isAuthSuccess}
          />
        </Route>
        <Route path="/signin">
          <Login onLogin={loginUser} isLoginSuccess={isAuthSuccess} />
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
