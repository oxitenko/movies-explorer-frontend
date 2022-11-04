import './Register.css';
import '../../style/AuthForm.css';
import pageLogo from '../../image/logo.svg';
import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { useEffect } from 'react';

const Register = (props) => {
  const { values, handleChange, errors, isValid, resetForm } = useForm({});

  useEffect(() => {
    props.updateAuthError();
  }, []);

  useEffect(() => {
    if (props.isRegisterSuccess) {
      resetForm();
    }
  }, [props.isRegisterSuccess, resetForm]);

  const submitRegisterform = (e) => {
    e.preventDefault();
    props.onRegister(values);
  };

  return (
    <section className="auth auth__signup">
      <div className="auth__content">
        <Link to="/">
          <img className="auth__logo" src={pageLogo} alt="logo" />
        </Link>
        <h2 className="auth__title">Добро пожаловать!</h2>
        <form
          className="auth__form auth__form-signup"
          onSubmit={submitRegisterform}
          noValidate
        >
          <label className="auth__label auth__label-signup">
            Имя
            <input
              className="auth__input auth__input-signup"
              value={values.name || ''}
              onChange={handleChange}
              type="text"
              name="name"
              autoComplete="username"
              minLength={2}
              maxLength={30}
              required
              placeholder="Имя"
            />
            <span aria-live="polite" className="auth__error">
              {errors.name}
            </span>
          </label>
          <label className="auth__label auth__label-signup">
            E-mail
            <input
              className="auth__input auth__input-signup"
              type="email"
              name="email"
              value={values.email || ''}
              onChange={handleChange}
              autoComplete="username"
              pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
              required
              placeholder="E-mail"
            />
            <span aria-live="polite" className="auth__error">
              {errors.email}
            </span>
          </label>
          <label className="auth__label auth__label-signup">
            Пароль
            <input
              className="auth__input auth__input-signup"
              type="password"
              name="password"
              value={values.password || ''}
              onChange={handleChange}
              autoComplete="new-password"
              minLength={6}
              maxLength={24}
              required
              placeholder="Пароль"
            />
            <span aria-live="polite" className="auth__error">
              {errors.password}
            </span>
          </label>
          {!props.isRegisterSuccess ? (
            <span className="auth__error">
              Произошла ошибка, попробуйте снова
            </span>
          ) : (
            ''
          )}
          <button
            type="submit"
            disabled={!isValid}
            className="auth__button auth__button-signup"
          >
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
