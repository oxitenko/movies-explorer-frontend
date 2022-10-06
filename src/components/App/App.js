import './App.css';
import { Switch, Route } from 'react-router-dom';

import Header from '../Header/Header';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Switch>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
