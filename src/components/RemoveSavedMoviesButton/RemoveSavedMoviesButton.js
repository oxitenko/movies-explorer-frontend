import '../../style/Buttons.css';
import littliecrossicon from '../../image/littliecrossicon.svg';

const RemoveSavedMoviesButton = (props) => {
  return (
    <button
      onClick={props.deleteMovie}
      type="button"
      className="movies__button movies__button-save"
    >
      <img src={littliecrossicon} alt="like" />
    </button>
  );
};

export default RemoveSavedMoviesButton;
