import styles from './ChangeTheme.module';
import { memo, useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web/build/player/lottie_light';

import { useThemeContext } from '~/context/themeContext/themeContext';

import dayNight from './animation/day-night.json'; //0 -> 9: day, 10 -> 19: night

const ChangeTheme = () => {
  const { theme, changeTheme } = useThemeContext();
  const iconRef = useRef();

  const [animationData, setAnimationData] = useState(dayNight);

  useEffect(() => {
    setAnimationData(
      lottie.loadAnimation({
        container: iconRef.current,
        loop: false,
        autoplay: false,
        animationData,
        name: 'day-night',
      }),
    );

    // Set state icon when loading
    lottie.goToAndStop(theme === 'light' ? 0 : 9, true, 'day-night');
  }, []);

  const handleClick = () => {
    changeTheme();
    animationData.playSegments(theme === 'light' ? [0, 9] : [10, 19], true);
  };

  return (
    <div
      ref={iconRef}
      onClick={handleClick}
      className={styles['change-theme']}
    />
  );
};

export default memo(ChangeTheme);
