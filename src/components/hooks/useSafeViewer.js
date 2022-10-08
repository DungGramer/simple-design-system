import { useEffect } from 'react';

/**
 * Set safe area for iOS devices
 * @param {string} selector: CSS selector
 * @param {*} variableName: CSS variable name
 *
 * @example
 * useSafeViewer('.header', '--safe-area-top');
 */
const useSafeViewer = (selector, variableName = 'footer-gap') => {
  const observer = new ResizeObserver((entries) => {
    entries.forEach((entry) => {
      document.documentElement.style.setProperty(
        `--${variableName}`,
        `${entry.contentRect.height}px`
      );
    });
  });
  useEffect(() => {
    observer.observe(document.querySelector(selector));

    return () => {
      observer.disconnect();
    };
  }, []);
};

export default useSafeViewer;
