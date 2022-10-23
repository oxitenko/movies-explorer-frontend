import './MoviesCard.css';

const MoviesCard = (props) => {
  return (
    <li className="movies__item">
      <div className="movies__content">
        <h4 className="movies__title">{props.card.nameRU}</h4>
        <p className="movies__time">{props.card.duration} минут</p>
      </div>
      <img
        className="movies__pic"
        src={`https://api.nomoreparties.co/${props.card.image.url}`}
        alt={props.card.nameRU}
      />
      {props.button()}
    </li>
  );
};

export default MoviesCard;
