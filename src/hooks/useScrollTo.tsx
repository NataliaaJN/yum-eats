import { RefObject, useCallback } from 'react';

const useScrollTo = () => {
  const scrollToRef = useCallback((ref: RefObject<HTMLElement>) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth',
      });
    }
  }, []);

  return scrollToRef;
};

export default useScrollTo;
