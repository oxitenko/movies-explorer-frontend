import './App.css';
import { Switch, Route } from 'react-router-dom';

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
import { useState } from 'react';

function App() {
  const [isOpenHumbMenu, setIsOpenHumbMenu] = useState(false);

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
          <Movies />
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
