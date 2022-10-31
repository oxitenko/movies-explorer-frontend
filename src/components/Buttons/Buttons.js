import './Buttons.css';
import checkmark from '../../image/checkmark.svg';
import littliecrossicon from '../../image/littliecrossicon.svg';
import { useState } from 'react';

const MoviesButton = () => {
  const [liked, setLiked] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setLiked(!liked)}
      className={`movies__button ${
        !liked ? 'movies__button-save' : 'movies__button-like'
      }`}
    >
      {!liked ? 'Сохранить' : <img src={checkmark} alt="like" />}
    </button>
  );
};

const SavedMoviesButton = () => {
  return (
    <button type="button" className="movies__button movies__button-save">
      <img src={littliecrossicon} alt="like" />
    </button>
  );
};

const PaginationButtonVisible = () => {
  return (
    <button type="button" className="movies__pagination">
      Ещё
    </button>
  );
};

const PaginationButtonInvisible = () => {
  return (
    <button type="button" className="movies__pagination-invis">
      Ещё
    </button>
  );
};

export {
  MoviesButton,
  SavedMoviesButton,
  PaginationButtonVisible,
  PaginationButtonInvisible,
};
