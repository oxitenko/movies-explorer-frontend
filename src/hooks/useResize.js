import { useEffect, useState } from 'react';

const getWindowSize = () => {
  return document.documentElement.clientWidth;
};

const useResize = () => {
  const [windowSize, setWindowSize] = useState({
    size: getWindowSize(),
  });

  useEffect(() => {
    let timeout = null;

    const changeSize = () => {
      timeout = setTimeout(() => {
        setWindowSize({
          size: getWindowSize(),
        });
      }, 150);

      clearTimeout(timeout);
    };

    window.addEventListener('resize', changeSize);

    return () => window.removeEventListener('resize', changeSize);
  }, [windowSize.size]);

  return windowSize;
};

export default useResize;
