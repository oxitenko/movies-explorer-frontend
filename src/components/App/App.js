import './App.css';
import {
  Switch,
  Route,
  useHistory,
  useLocation,
  Redirect,
} from 'react-router-dom';
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
import { CurrentUserContext } from '../../context/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  const [isOpenHumbMenu, setIsOpenHumbMenu] = useState(false);
  const [movies, setMovies] = useState([]);
  const [checkedShortFilmsMovies, setCheckedShortFilmsMovies] = useState(false);
  const [checkedShortFilmsSavedMovies, setCheckedShortFilmsSavedMovies] =
    useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isNotSuccessRequest, setIsNotSuccessRequest] = useState(false);
  const [likedAndSavedMovies, setLikedAndSavedMovies] = useState([]);
  const [savedMoviesForRender, setSavedMoviesForRender] = useState([]);
  const [isAuthSuccess, setIsAuthSuccess] = useState(true);
  const [currentUser, setCurrentUser] = useState({ name: '', email: '' });
  const [isUserDataUpdateSuccess, setIsUserDataUpdateSuccess] = useState(false);
  const [isUserDataUpdateFailed, setIsUserDataUpdateFailed] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isPopupErrorOpen, setIsPopupErrorOpen] = useState(false);
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
          checkedShortFilmsMovies,
        );
        setMovies(filtredMovies);
        localStorage.setItem('filtred-movies', JSON.stringify(filtredMovies));
        localStorage.setItem('value', value);
      }
    },
    [checkedShortFilmsMovies],
  );

  const filterSavedMovies = (value) => {
    const filtredMovies = moviesFilters(
      likedAndSavedMovies,
      value,
      checkedShortFilmsMovies,
    );
    setSavedMoviesForRender(filtredMovies);
  };

  useEffect(() => {
    if (!isSavedMoviesPage) {
      setSavedMoviesForRender(likedAndSavedMovies);
    }
  }, [isSavedMoviesPage, likedAndSavedMovies]);

  const filterSavedShort = useCallback(() => {
    if (checkedShortFilmsSavedMovies) {
      const filter = likedAndSavedMovies.filter((m) => m.duration <= 40);
      setSavedMoviesForRender(filter);
    } else {
      setSavedMoviesForRender(likedAndSavedMovies);
    }
  }, [checkedShortFilmsSavedMovies, likedAndSavedMovies]);

  const handleCheckShortFilms = () => {
    setCheckedShortFilmsMovies(!checkedShortFilmsMovies);
    localStorage.setItem('checkbox', !checkedShortFilmsMovies);
  };

  const handleCheckShortFilmsSavedMovies = () => {
    setCheckedShortFilmsSavedMovies(!checkedShortFilmsSavedMovies);
    localStorage.setItem('checkbox-short', !checkedShortFilmsSavedMovies);
  };

  useEffect(() => {
    const checkbox = localStorage.getItem('checkbox');
    const checkboxShort = localStorage.getItem('checkbox-short');
    setCheckedShortFilmsMovies(JSON.parse(checkbox));
    setCheckedShortFilmsSavedMovies(JSON.parse(checkboxShort));
  }, []);

  useEffect(() => {
    const storageValue = localStorage.getItem('value');
    filterMovies(storageValue);
  }, [filterMovies, checkedShortFilmsMovies]);

  useEffect(() => {
    filterSavedShort();
  }, [filterSavedShort, checkedShortFilmsSavedMovies]);

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
        .catch((err) => {
          setIsPopupErrorOpen(true);
          console.log(err);
        });
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
        .catch((err) => {
          setIsPopupErrorOpen(true);
          console.log(err);
        });
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
      .catch((err) => {
        setIsPopupErrorOpen(true);
        console.log(err);
      });
  };

  useEffect(() => {
    if (isLogin) {
      mainApi
        .getSavedMovies()
        .then((res) => {
          setLikedAndSavedMovies(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isLogin]);

  useEffect(() => {
    mainApi
      .getUserInfo()
      .then((res) => {
        setIsLogin(true);
        setCurrentUser(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const loginUser = (data) => {
    return auth
      .login(data)
      .then((res) => {
        setIsLogin(true);
        setCurrentUser(res);
        history.push('/movies');
      })
      .catch((err) => {
        setIsAuthSuccess(false);
        console.log(err);
      });
  };

  const registerUser = (data) => {
    return auth
      .register(data)
      .then(() => {
        loginUser({
          email: data.email,
          password: data.password,
        });
        history.push('/movies');
      })
      .catch((err) => {
        setIsAuthSuccess(false);
        console.log(err);
      });
  };

  const handleUpdateUserData = (data) => {
    mainApi
      .updateUserInfo(data)
      .then((res) => {
        setCurrentUser(res);
        setIsUserDataUpdateSuccess(true);
      })
      .catch((err) => {
        setIsUserDataUpdateFailed(true);
        console(err);
      });
  };

  const handleLogout = () => {
    mainApi
      .logout()
      .then(() => {
        setIsLogin(false);
        setMovies([]);
        history.push('/');
        localStorage.clear();
      })
      .catch((err) => {
        setIsPopupErrorOpen(true);
        console.log(err);
      });
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  const closeAllPopup = () => {
    setIsPopupErrorOpen(false);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <main className="App">
        <Header isLogin={isLogin}>
          <MobileHeader
            open={isOpenHumbMenu}
            openClose={handleOpenCloseHumbMenu}
            isLogin={isLogin}
          />
        </Header>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>

          <ProtectedRoute
            exact
            path="/movies"
            isLogin={isLogin}
            component={Movies}
            movies={movies}
            savedMovies={likedAndSavedMovies}
            onSubmit={handleSearchFilms}
            checked={checkedShortFilmsMovies}
            onCheked={handleCheckShortFilms}
            isLoading={isLoading}
            isNotSuccessRequest={isNotSuccessRequest}
            handleSavedAndDeleteMovies={handleSavedAndDeleteMovies}
          />

          <ProtectedRoute
            exact
            path="/saved-movies"
            isLogin={isLogin}
            component={SavedMovies}
            savedMovies={savedMoviesForRender}
            isSavedMoviesPage={isSavedMoviesPage}
            deleteSavedMovie={handleRemoveSavedMovies}
            onSubmit={filterSavedMovies}
            checked={checkedShortFilmsSavedMovies}
            onCheked={handleCheckShortFilmsSavedMovies}
          />

          <ProtectedRoute
            exact
            path="/profile"
            isLogin={isLogin}
            component={Profile}
            onSubmit={handleUpdateUserData}
            isUserDataUpdateSuccess={isUserDataUpdateSuccess}
            isUserDataUpdateFailed={isUserDataUpdateFailed}
            onLogout={handleLogout}
          />

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
          <Route>
            {isLogin ? <Redirect to="/" /> : <Redirect to="/movies" />}
          </Route>
        </Switch>
        <Footer />
        <PopupError isOpen={isPopupErrorOpen} onClose={closeAllPopup} />
      </main>
    </CurrentUserContext.Provider>
  );
}

export default App;
