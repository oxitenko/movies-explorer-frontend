import './Profile.css';
import { useContext, useEffect, useState } from 'react';
import useForm from '../../hooks/useForm';
import { CurrentUserContext } from '../../context/CurrentUserContext';

const Profile = (props) => {
  const [isformValid, setIsFormValid] = useState(false);
  const currentUser = useContext(CurrentUserContext);
  const { values, handleChange, setValues, resetForm, errors, isValid } =
    useForm({});

  useEffect(() => {
    if (
      values.name === currentUser.name ||
      values.email === currentUser.email ||
      !isValid
    ) {
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
    }
  }, [currentUser, values, isValid]);

  useEffect(() => {
    setValues({ name: currentUser.name, email: currentUser.email });
  }, [setValues, currentUser]);

  const upadateUser = (e) => {
    e.preventDefault();
    props.onSubmit(values);
    resetForm();
  };

  return (
    <section className="profile">
      <div className="profile__content">
        <h1 className="profile__title">Привет, {currentUser.name}!</h1>
        <form className="profile__form" onSubmit={upadateUser} noValidate>
          <label className="profile__label">
            Имя
            <input
              onChange={handleChange}
              value={values.name || ''}
              className="profile__input"
              type="text"
              name="name"
              minLength={2}
              maxLength={30}
              required
              placeholder="Имя"
            />
          </label>
          <span className="propfile__error">{errors.name}</span>
          <span className="profile__line"></span>
          <label className="profile__label">
            E-mail
            <input
              onChange={handleChange}
              value={values.email || ''}
              className="profile__input"
              type="email"
              name="email"
              pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
              required
              placeholder="E-mail"
            />
          </label>
          <span className="propfile__error">{errors.email}</span>
          {props.isUserDataUpdateSuccess ? (
            <span className="profile__confirm">Данные успешно изменены</span>
          ) : (
            ''
          )}
          {props.isUserDataUpdateFailed ? (
            <span className="profile__failed">
              Произошла ошибка, попробуйте снова
            </span>
          ) : (
            ''
          )}
          <button
            type="submit"
            className="profile__editbtn"
            disabled={!isformValid}
          >
            Редактировать
          </button>
        </form>
        <button
          onClick={props.onLogout}
          type="button"
          className="profile__logoutbtn"
        >
          Выйти из аккаунта
        </button>
      </div>
    </section>
  );
};

export default Profile;
