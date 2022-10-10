import { useState } from 'react';
import './MoviesCard.css';
import checkmark from '../../image/checkmark.svg';

const MoviesCard = (props) => {
  const [liked, setLiked] = useState(false);

  return (
    <li className="movies__item">
      <div className="movies__content">
        <h4 className="movies__title">{props.card.title}</h4>
        <p className="movies__time">{props.card.time} минут</p>
      </div>
      <img
        className="movies__pic"
        src={props.card.pic}
        alt={props.card.title}
      />
      <button
        onClick={() => setLiked(!liked)}
        className={`movies__button ${
          !liked ? 'movies__button-save' : 'movies__button-like'
        }`}
      >
        {!liked ? 'Сохранить' : <img src={checkmark} alt="like" />}
      </button>
    </li>
  );
};

export default MoviesCard;
