import './MobileSearchForm.css';
import searchicon from '../../image/search-icon.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

const MobileSearchForm = () => {
  return (
    <>
      <div className="search__container search__container-mobile">
        <form className="search__form search__form-mobile">
          <input
            className="search__input search__input-mobile"
            type="text"
            placeholder="Фильм"
            name="film"
          />
          <button
            className="search__button search__button-mobile"
            type="submit"
          >
            <img src={searchicon} alt="Кнопка поиска" />
          </button>
        </form>
      </div>
      <div className="search__checkbox">
        <FilterCheckbox />
      </div>
    </>
  );
};

export default MobileSearchForm;
