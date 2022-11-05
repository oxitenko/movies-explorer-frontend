import './PopupError.css';
import close from '../../image/humbcross.svg';
import error from '../../image/popup-err.svg';

const PopupError = (props) => {
  return (
    <div className={`popup ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__content">
        <button className="popup__closebtn" onClick={props.onClose}>
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
