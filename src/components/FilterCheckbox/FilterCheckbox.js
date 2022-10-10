import { useState } from 'react';
import './FilterCheckbox.css';

const FilterCheckbox = () => {
  const [checked, setChecked] = useState(true);

  return (
    <div className="filter">
      <label className="filter__label">
        <input
          className="filter__checkbox"
          type="checkbox"
          name="filter"
          id="filter"
          onChange={() => setChecked(!checked)}
          checked={checked}
        />
        <span className="filter__style"></span>
        <span className="filter__text">Короткометражки</span>
      </label>
    </div>
  );
};

export default FilterCheckbox;
