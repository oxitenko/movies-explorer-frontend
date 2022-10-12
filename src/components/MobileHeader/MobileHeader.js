import './MobileHeader.css';
import { useLocation } from 'react-router-dom';
import humbmenu from '../../image/humbmenu.svg';
import humbcross from '../../image/humbcross.svg';
import { useState } from 'react';
import MobileLinksList from '../MobileLinksList/MobileLinksList';

const MobileHeader = () => {
  let location = useLocation();

  const [open, setOpen] = useState(false);

  const closeHumbMenu = () => setOpen(false);

  return (
    <>
      {(location.pathname === '/movies' || '/saved-movies' || '/profile') && (
        <nav className="mobilenav">
          {open && <MobileLinksList close={closeHumbMenu} />}

          {(location.pathname === '/movies' ||
            '/saved-movies' ||
            '/profile') && (
            <>
              {!open ? (
                <img
                  className="mobilenav__humbicon"
                  src={humbmenu}
                  alt="Иконка меню"
                  onClick={() => setOpen(!open)}
                />
              ) : (
                <img
                  className="mobilenav__humbicon"
                  src={humbcross}
                  alt="Иконка меню"
                  onClick={() => setOpen(!open)}
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
