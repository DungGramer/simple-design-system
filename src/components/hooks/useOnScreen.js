import { useState, useEffect } from 'react';

function useOnScreen(ref, rootMargin = '0px', threshold = 0.1, cb = () => {}) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          observer.disconnect();
          if (typeof cb === 'function') {
            cb();
          }
        }
      },
      {
        rootMargin,
        threshold,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
  }, []);

  return isVisible;
}

export default useOnScreen;
