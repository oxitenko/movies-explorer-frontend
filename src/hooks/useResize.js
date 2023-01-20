import { useEffect, useState } from 'react';

const useResize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const changeSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', changeSize);

    changeSize();

    return () => window.removeEventListener('resize', changeSize);
  }, []);

  return windowSize;
};

export default useResize;
