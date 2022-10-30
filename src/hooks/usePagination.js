import { useEffect, useState } from 'react';
import useResize from './useResize';

const usePagination = () => {
  const windowSize = useResize();
  const [initValue, setInitValue] = useState(0);
  const [loadmoreNumber, setLoadMoreNumber] = useState(0);

  const computeInitValue = () => {
    if (windowSize.size >= 1280) {
      setInitValue(12);
      setLoadMoreNumber(3);
    } else if (windowSize.size < 1280 && windowSize.size >= 768) {
      setInitValue(8);
      setLoadMoreNumber(2);
    } else if (windowSize.size < 768 && windowSize.size >= 320) {
      setInitValue(5);
      setLoadMoreNumber(2);
    }
  };

  useEffect(() => {
    computeInitValue();
  }, [windowSize.size]);

  const loadMore = () => {
    setInitValue((state) => state + loadmoreNumber);
  };

  return {
    initValue,
    loadMore,
  };
};

export default usePagination;
