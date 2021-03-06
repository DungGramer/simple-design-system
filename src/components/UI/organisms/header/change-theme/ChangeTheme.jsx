import styles from './ChangeTheme.module';
import { memo, useEffect, useRef } from 'react';
import lottie from 'lottie-web/build/player/lottie_light';

import { useThemeContext } from '~/context/themeContext/themeContext';

import dayNight from './animation/day-night.json'; // 0 -> 9: day, 10 -> 19: night
import { onEnter } from '~/helpers/onEnter';

const ChangeThemeButton = () => {
  const { changeTheme, switchTheme } = useThemeContext();
  const iconRef = useRef(null);
  const anim = useRef(null);

  useEffect(() => {
    if (iconRef.current) {
      anim.current = lottie.loadAnimation({
        container: iconRef.current,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        animationData: dayNight,
        name: 'day-night',
      });
    }

    // Set state icon when loading
    lottie.goToAndStop(switchTheme(0, 9), true, 'day-night');

    return () => anim.current?.destroy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = () => {
    changeTheme();
    anim.current.playSegments(switchTheme([0, 9], [10, 19]), true);
  };

  // const reverse = () => {
  //   anim.current?.setDirection(open ? -1 : 1);
  //   anim.current?.play();
  // }

  return (
    <div
      tabIndex={0}
      ref={iconRef}
      onClick={handleClick}
      onKeyDown={(e) => onEnter(e, handleClick)}
      className={styles['change-theme']}
    />
  );
};

export default memo(ChangeThemeButton);
