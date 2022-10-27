import './MoviesCard.css';
import LikeButton from '../LikeButton.js/LikeButton';
import RemoveSavedMoviesButton from '../RemoveSavedMoviesButton/RemoveSavedMoviesButton';

const MoviesCard = (props) => {
  const isLikedAndSaved = props.savedMovies.some(
    (m) => m.movieId === props.card.id,
  );

  const likeAndSaved = () => {
    props.handleSavedAndDeleteMovies({
      country: props.card.country,
      director: props.card.director,
      duration: props.card.duration,
      year: props.card.year,
      description: props.card.description,
      image: `https://api.nomoreparties.co/${props.card.image.url}`,
      trailerLink: props.card.trailerLink,
      nameRU: props.card.nameRU,
      nameEN: props.card.nameEN,
      thumbnail: `https://api.nomoreparties.co/${props.card.image.formats.thumbnail.url}`,
      movieId: props.card.id,
    });
  };

  const deleteMovie = () => {
    props.deleteSavedMovie(props.card);
  };

  return (
    <li className="movies__item">
      <div className="movies__content">
        <h4 className="movies__title">{props.card.nameRU}</h4>
        <p className="movies__time">{props.card.duration} минут</p>
      </div>
      <a href={props.card.trailerLink} target="_blank" rel="noreferrer">
        <img
          className="movies__pic"
          src={
            props.isSavedMoviesPage
              ? props.card.image
              : `https://api.nomoreparties.co/${props.card.image.url}`
          }
          alt={props.card.nameRU}
        />
      </a>
      {props.isSavedMoviesPage ? (
        <RemoveSavedMoviesButton deleteMovie={deleteMovie} />
      ) : (
        <LikeButton liked={isLikedAndSaved} likeAndSaved={likeAndSaved} />
      )}
    </li>
  );
};

export default MoviesCard;
