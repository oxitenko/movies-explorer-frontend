import { useState } from 'react';
import useResize from './useResize';
import {
  LARGE_WINDOW_WIDE,
  MEDIUUM_WINDOW_WIDE,
  tINY_WINDOW_WIDE,
  LARGE_WINDOW_WIDE_NUMBER_RENDER,
  MEDIUM_WINDOW_WIDE_NUMBER_RENDER,
  TINY_WINDOW_WIDE_NUMBER_RENDER,
  LARGE_WINDOW_WIDE_NUMBER_ADD,
  MEDIUM_WINDOW_WIDE_NUMBER_ADD,
} from '../utils/constants';

const usePagination = () => {
  const windowSize = useResize();
  const [initValue, setInitValue] = useState(0);
  const [loadmoreNumber, setLoadMoreNumber] = useState(0);

  const computeInitValue = () => {
    if (windowSize.width >= LARGE_WINDOW_WIDE) {
      setInitValue(LARGE_WINDOW_WIDE_NUMBER_RENDER);
      setLoadMoreNumber(LARGE_WINDOW_WIDE_NUMBER_ADD);
    } else if (
      windowSize.width < LARGE_WINDOW_WIDE &&
      windowSize.width >= MEDIUUM_WINDOW_WIDE
    ) {
      setInitValue(MEDIUM_WINDOW_WIDE_NUMBER_RENDER);
      setLoadMoreNumber(MEDIUM_WINDOW_WIDE_NUMBER_ADD);
    } else if (
      windowSize.width < MEDIUUM_WINDOW_WIDE &&
      windowSize.width >= tINY_WINDOW_WIDE
    ) {
      setInitValue(TINY_WINDOW_WIDE_NUMBER_RENDER);
      setLoadMoreNumber(MEDIUM_WINDOW_WIDE_NUMBER_ADD);
    }
  };

  const loadMore = () => {
    setInitValue((state) => state + loadmoreNumber);
  };

  return {
    initValue,
    loadMore,
    computeInitValue,
  };
};

export default usePagination;
