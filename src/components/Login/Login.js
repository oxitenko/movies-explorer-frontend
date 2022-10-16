import './Login.css';
import '../../style/AuthForm.css';
import pageLogo from '../../image/logo.svg';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <section className="auth auth__signin">
      <div className="auth__content">
        <img className="auth__logo" src={pageLogo} alt="logo" />
        <h2 className="auth__title">Рады видеть!</h2>
        <form className="auth__form auth__form-signin">
          <label className="auth__label auth__label-signin">
            E-mail
            <input
              className="auth__input auth__input-signin"
              type="email"
              name="email"
              autoComplete="username"
              required
            />
          </label>
          <label className="auth__label auth__label-signin">
            Пароль
            <input
              className="auth__input auth__input-signin"
              type="password"
              name="password"
              autoComplete="current-password"
              required
            />
          </label>
          <button type="submit" className="auth__button auth__button-signin">
            Войти
          </button>
        </form>
        <p className="auth__text auth__text-signin">
          Ещё не зарегистрированы?{' '}
          <Link className="auth__link auth__link-signin" to="/signup">
            Регистрация
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
