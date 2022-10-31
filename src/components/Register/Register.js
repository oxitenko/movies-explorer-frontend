import './Register.css';
import '../../style/AuthForm.css';
import pageLogo from '../../image/logo.svg';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <section className="auth auth__signup">
      <div className="auth__content">
        <img className="auth__logo" src={pageLogo} alt="logo" />
        <h2 className="auth__title">Добро пожаловать!</h2>
        <form className="auth__form auth__form-signup">
          <label className="auth__label auth__label-signup">
            Имя
            <input
              className="auth__input auth__input-signup"
              type="text"
              name="name"
              autoComplete="username"
              required
              placeholder="Имя"
            />
            <span className="auth__error">Error!</span>
          </label>
          <label className="auth__label auth__label-signup">
            E-mail
            <input
              className="auth__input auth__input-signup"
              type="email"
              name="email"
              autoComplete="username"
              required
              placeholder="E-mail"
            />
            <span className="auth__error">Error!</span>
          </label>
          <label className="auth__label auth__label-signup">
            Пароль
            <input
              className="auth__input auth__input-signup"
              type="password"
              name="password"
              autoComplete="new-password"
              required
              placeholder="Пароль"
            />
            <span className="auth__error">Error!</span>
          </label>
          <button type="submit" className="auth__button auth__button-signup">
            Зарегистрироваться
          </button>
        </form>
        <p className="auth__text auth__text-signup">
          Уже зарегистрированы?{' '}
          <Link className="auth__link auth__link-signup" to="/signin">
            Войти
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
