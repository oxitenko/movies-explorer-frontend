import { useEffect, useState } from 'react';

const usePagination = () => {
  useEffect(() => {
    computeInitValue();
    loadMore();
  }, []);

  const computeInitValue = () => {
    let initValue = 0;
    if (document.documentElement.clientWidth >= 1280) {
      initValue = 12;
    } else if (document.documentElement.clientWidth >= 768) {
      initValue = 8;
    } else if (document.documentElement.clientWidth >= 320) {
      initValue = 5;
    }
    return initValue;
  };

  const [visibleValue, setVesibleValue] = useState(computeInitValue);

  const loadMore = (count) => {
    if (document.documentElement.clientWidth >= 1280) {
      count = 3;
    } else if (document.documentElement.clientWidth >= 768) {
      count = 2;
    } else if (document.documentElement.clientWidth >= 320) {
      count = 5;
    }
    setVesibleValue((prevValue) => prevValue + count);
  };

  return {
    loadMore,
    visibleValue,
  };
};

export default usePagination;
