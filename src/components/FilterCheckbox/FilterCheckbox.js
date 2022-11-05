import './FilterCheckbox.css';

const FilterCheckbox = (props) => {
  return (
    <div className="filter">
      <label className="filter__label">
        <input
          className="filter__checkbox"
          type="checkbox"
          name="filter"
          id="filter"
          value={props.checked || false}
          onChange={props.onCheked}
          checked={props.checked}
        />
        <span className="filter__style"></span>
        <span className="filter__text">Короткометражки</span>
      </label>
    </div>
  );
};

export default FilterCheckbox;
