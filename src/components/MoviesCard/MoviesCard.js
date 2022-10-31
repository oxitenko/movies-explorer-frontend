import './MoviesCard.css';

const MoviesCard = (props) => {
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
      {props.button()}
    </li>
  );
};

export default MoviesCard;
