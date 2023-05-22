/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

const useInfinityScroll = callback => {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        callback();
      }
    });

    observer.observe(ref.current);
  }, []);

  return ref;
};

export default useInfinityScroll;
