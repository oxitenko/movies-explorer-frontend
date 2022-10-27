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
import { CurrentUserContext } from '../../context/CurrentUserContext';

function App() {
  const [isOpenHumbMenu, setIsOpenHumbMenu] = useState(false);
  const [movies, setMovies] = useState([]);
  const [checkedShortFilms, setCheckedShortFilms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isNotSuccessRequest, setIsNotSuccessRequest] = useState(false);
  const [likedAndSavedMovies, setLikedAndSavedMovies] = useState([]);
  const [isAuthSuccess, setIsAuthSuccess] = useState(true);
  const [currentUser, setCurrentUser] = useState({ name: '', email: '' });
  const [isUserDataUpdateSuccess, setIsUserDataUpdateSuccess] = useState(false);
  const [isUserDataUpdateFailed, setIsUserDataUpdateFailed] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
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

  const filterSavedMovies = (value) => {
    const filtredMovies = moviesFilters(
      likedAndSavedMovies,
      value,
      checkedShortFilms,
    );
    setLikedAndSavedMovies(filtredMovies);
  };

  const filterSavedShort = useCallback(() => {
    const savedMovies = JSON.parse(localStorage.getItem('saved-movies'));
    if (checkedShortFilms) {
      setLikedAndSavedMovies(savedMovies.filter((m) => m.duration <= 40));
    } else {
      setLikedAndSavedMovies(savedMovies);
    }
  }, [checkedShortFilms]);

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
    filterSavedShort();
  }, [filterMovies, filterSavedShort, checkedShortFilms]);

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
    if (!isLogin) {
      mainApi
        .getSavedMovies()
        .then((res) => {
          setLikedAndSavedMovies(res);
          localStorage.setItem('saved-movies', JSON.stringify(res));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isLogin]);

  useEffect(() => {
    if (!isLogin) {
      mainApi
        .getUserInfo()
        .then((res) => setCurrentUser(res))
        .catch((err) => console.log(err));
    }
  }, [isLogin]);

  const loginUser = (data) => {
    return auth
      .login(data)
      .then(() => {
        setIsLogin(true);
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
      .then((res) => {
        setCurrentUser(res);
        setIsLogin(true);
        history.push('/movies');
        loginUser(data);
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
        history.push('/');
        localStorage.clear();
      })
      .catch((err) => console.log(err));
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
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
              onSubmit={filterSavedMovies}
              checked={checkedShortFilms}
              onCheked={handleCheckShortFilms}
            />
          </Route>
          <Route path="/profile">
            <Profile
              onSubmit={handleUpdateUserData}
              isUserDataUpdateSuccess={isUserDataUpdateSuccess}
              isUserDataUpdateFailed={isUserDataUpdateFailed}
              onLogout={handleLogout}
            />
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
    </CurrentUserContext.Provider>
  );
}

export default App;
