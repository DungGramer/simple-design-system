import { useEffect, useState } from 'react';
import breakpoint from '~/constants/mediaQuery';

/**
 * Media query hook
 * @param {string} query
 * @memberof custom-hook
 * @example
 * let maxDesktop = useMediaQuery(breakpoint.m_desktop);
 **/

const useMediaQuery = query => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const handleChange = () => {
      setMatches(window.matchMedia(query).matches);
    };

    handleChange();
    window.addEventListener('resize', handleChange);
    return () => {
      window.removeEventListener('resize', handleChange);
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;
