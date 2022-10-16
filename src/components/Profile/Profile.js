import './Profile.css';
import { student } from '../../utils/appData';
import { useEffect } from 'react';
import useForm from '../../hooks/useForm';

const Profile = () => {
  const { values, handleChange, setValues } = useForm({});

  useEffect(() => {
    setValues({ name: student.name, email: student.email });
  }, [setValues]);

  return (
    <section className="profile">
      <div className="profile__content">
        <h1 className="profile__title">Привет, {student.name}!</h1>
        <form className="profile__form">
          <label className="profile__label">
            Имя
            <input
              onChange={handleChange}
              value={values.name}
              className="profile__input"
              type="text"
              name="name"
              required
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
            />
          </label>
          <button type="submit" className="profile__editbtn">
            Редактировать
          </button>
        </form>
        <button type="button" className="profile__logoutbtn">
          Выйти из аккаунта
        </button>
      </div>
    </section>
  );
};

export default Profile;
