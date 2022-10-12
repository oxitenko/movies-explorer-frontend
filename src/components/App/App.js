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

function App() {
  return (
    <div className="App">
      <Header />
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
    </div>
  );
}

export default App;
