import './SearchForm.css';
import searchicon from '../../image/search-icon.svg';
import placeHolderIcon from '../../image/search-icon-placeholder.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

const SearchForm = () => {
  return (
    <section className="search">
      <div className="search__container">
        <form className="search__form">
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
          />
          <button className="search__button" type="submit">
            <img src={searchicon} alt="Кнопка поиска" />
          </button>
        </form>
        <FilterCheckbox />
      </div>
    </section>
  );
};

export default SearchForm;
