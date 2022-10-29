import './Login.css';
import '../../style/AuthForm.css';
import pageLogo from '../../image/logo.svg';
import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { useEffect } from 'react';

const Login = (props) => {
  const { values, handleChange, errors, isValid, resetForm } = useForm({});

  const submitLoginForm = (e) => {
    e.preventDefault();
    props.onLogin(values);
    resetForm();
  };

  return (
    <section className="auth auth__signin">
      <div className="auth__content auth__content-signin">
        <img className="auth__logo" src={pageLogo} alt="logo" />
        <h2 className="auth__title">Рады видеть!</h2>
        <form
          className="auth__form auth__form-signin"
          onSubmit={submitLoginForm}
          noValidate
        >
          <label className="auth__label auth__label-signin">
            E-mail
            <input
              className="auth__input auth__input-signin"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              autoComplete="username"
              required
              placeholder="E-mail"
            />
            <span aria-live="polite" className="auth__error">
              {errors.email}
            </span>
          </label>
          <label className="auth__label auth__label-signin">
            Пароль
            <input
              className="auth__input auth__input-signin"
              type="password"
              name="password"
              value={values.props}
              onChange={handleChange}
              autoComplete="current-password"
              minLength={6}
              maxLength={24}
              required
              placeholder="Пароль"
            />
            <span aria-live="polite" className="auth__error">
              {errors.password}
            </span>
          </label>
          {!props.isLoginSuccess ? (
            <span className="auth__error">
              Произошла ошибка, попробуйту снова
            </span>
          ) : (
            ''
          )}
          <button
            type="submit"
            className="auth__button auth__button-signin"
            disabled={!isValid}
          >
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
