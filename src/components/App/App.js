import './App.css';
import { Switch, Route } from 'react-router-dom';

import Header from '../Header/Header';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact to="/movies">
          <Movies />
        </Route>
        <Route exact path="/signup">
          <Register />
        </Route>
        <Route exact path="/signin">
          <Login />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
