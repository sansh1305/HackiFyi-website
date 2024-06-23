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

function Animation(origin,distance,duration,delay) {
  const containerRef = useScrollReveal({
    origin: origin,
    distance: distance,
    duration: duration,
    delay: delay,
    easing: 'ease',
  });

  return containerRef
}

export default Animation;
