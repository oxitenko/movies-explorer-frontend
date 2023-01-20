import './MobileHeader.css';
import { useLocation } from 'react-router-dom';
import humbmenu from '../../image/humbmenu.svg';
import humbcross from '../../image/humbcross.svg';
import MobileLinksListAuth from '../MobileLinksListAuth/MobileLinksListAuth';
import MobileLinkListNoAuth from '../MobileLinkListNoAuth/MobileLinkListNoAuth';

const MobileHeader = (props) => {
  let location = useLocation();

  return (
    <>
      {
        <nav className="mobilenav">
          {props.open &&
            (props.isLogin ? (
              <MobileLinksListAuth open={props.open} close={props.openClose} />
            ) : (
              <MobileLinkListNoAuth open={props.open} close={props.openClose} />
            ))}

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
      }
    </>
  );
};

export default MobileHeader;
