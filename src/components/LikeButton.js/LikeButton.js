import '../../style/Buttons.css';
import checkmark from '../../image/checkmark.svg';

const LikeButton = (props) => {
  return (
    <button
      type="button"
      onClick={props.likeAndSaved}
      className={`movies__button ${
        !props.liked ? 'movies__button-save' : 'movies__button-like'
      }`}
    >
      {!props.liked ? 'Сохранить' : <img src={checkmark} alt="like" />}
    </button>
  );
};

export default LikeButton;
