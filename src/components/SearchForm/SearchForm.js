import './SearchForm.css';
import searchicon from '../../image/search-icon.svg';
import placeHolderIcon from '../../image/search-icon-placeholder.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import useForm from '../../hooks/useForm';
import { useEffect, useState } from 'react';

const SearchForm = (props) => {
  const [isEmptySearchInput, setEmptySearchInput] = useState(false);
  const { values, handleChange, setValues, resetForm } = useForm({});
  const storageValue = localStorage.getItem('value');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.film) {
      setEmptySearchInput(true);
      return;
    }
    props.onSubmit(values.film);
    setEmptySearchInput(false);
    resetForm();
  };

  useEffect(() => {
    if (!props.isSavedMoviesPage) {
      setValues({ film: storageValue });
    }
  }, [storageValue, setValues, props.isSavedMoviesPage]);

  return (
    <section className="search">
      <div className="search__container">
        <form className="search__form" onSubmit={handleSubmit} noValidate>
          <img
            className="search__icon"
            src={placeHolderIcon}
            alt="Иконка поиска"
          />
          <input
            className="search__input"
            type="text"
            placeholder="Фильм"
            name="film"
            value={values.film || ''}
            onChange={handleChange}
            required
          />
          <button className="search__button" type="submit">
            <img src={searchicon} alt="Кнопка поиска" />
          </button>
        </form>
        <FilterCheckbox checked={props.checked} onCheked={props.onCheked} />
        {isEmptySearchInput ? (
          <span className="search__error">Нужно ввести ключевое слово</span>
        ) : (
          ''
        )}
      </div>
    </section>
  );
};

export default SearchForm;
