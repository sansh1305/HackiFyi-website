import { useRef, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const useScrollReveal = (config = {}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    ScrollReveal().reveal(containerRef.current, config);

    return () => {
      ScrollReveal().destroy();
    };
  }, [config]);

  return containerRef;
};

export default useScrollReveal;
