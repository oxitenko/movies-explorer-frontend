import './Profile.css';
import { useContext, useEffect } from 'react';
import useForm from '../../hooks/useForm';
import { CurrentUserContext } from '../../context/CurrentUserContext';

const Profile = (props) => {
  const currentUser = useContext(CurrentUserContext);
  const { values, handleChange, setValues } = useForm({});

  useEffect(() => {
    setValues({ name: currentUser.name, email: currentUser.email });
  }, [setValues, currentUser]);

  const upadateUser = (e) => {
    e.preventDefault();
    props.onSubmit(values);
  };

  return (
    <section className="profile">
      <div className="profile__content">
        <h1 className="profile__title">Привет, {currentUser.name}!</h1>
        <form className="profile__form" onSubmit={upadateUser}>
          <label className="profile__label">
            Имя
            <input
              onChange={handleChange}
              value={values.name}
              className="profile__input"
              type="text"
              name="name"
              required
              placeholder="Имя"
            />
          </label>
          <span className="profile__line"></span>
          <label className="profile__label">
            E-mail
            <input
              onChange={handleChange}
              value={values.email}
              className="profile__input"
              type="email"
              name="email"
              required
              placeholder="E-mail"
            />
          </label>
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
          <button type="submit" className="profile__editbtn">
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
