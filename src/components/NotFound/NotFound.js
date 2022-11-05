import { useHistory } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  const navigation = useHistory();

  return (
    <section className="notfound">
      <div className="notfound__content">
        <h1 className="notfound__title">404</h1>
        <p className="notfound__subtitle">Страница не найдена</p>
        <button
          type="button"
          className="notfound__btn"
          onClick={() => navigation.goBack()}
        >
          Назад
        </button>
      </div>
    </section>
  );
};

export default NotFound;
