import './MobileHeader.css';
import { useLocation } from 'react-router-dom';
import humbmenu from '../../image/humbmenu.svg';
import humbcross from '../../image/humbcross.svg';
import MobileLinksList from '../MobileLinksList/MobileLinksList';

const MobileHeader = (props) => {
  let location = useLocation();

  return (
    <>
      {(location.pathname === '/movies' || '/saved-movies' || '/profile') && (
        <nav className="mobilenav">
          {props.open && (
            <MobileLinksList open={props.open} close={props.openClose} />
          )}

          {(location.pathname === '/movies' ||
            '/saved-movies' ||
            '/profile') && (
            <>
              {!props.open ? (
                <img
                  className="mobilenav__humbicon"
                  src={humbmenu}
                  alt="Иконка меню"
                  onClick={props.openClose}
                />
              ) : (
                <img
                  className="mobilenav__humbicon"
                  src={humbcross}
                  alt="Иконка меню"
                  onClick={props.openClose}
                />
              )}
            </>
          )}
        </nav>
      )}
    </>
  );
};

export default MobileHeader;
