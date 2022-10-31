import './PopupError.css';
import close from '../../image/humbcross.svg';
import error from '../../image/popup-err.svg';

const PopupError = () => {
  return (
    <div className="popup">
      <div className="popup__content">
        <button className="popup__closebtn">
          <img src={close} alt="close button" />
        </button>
        <img className="popup__errpic" src={error} alt="error pic" />
        <h2 className="popup__title">
          Упс, произошла ошибка. Попробуйте ещё раз
        </h2>
      </div>
    </div>
  );
};

export default PopupError;
