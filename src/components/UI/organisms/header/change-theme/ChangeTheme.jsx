import styles from './ChangeTheme.module';
import { memo, useCallback, useEffect, useState } from 'react';
// import lottie from 'lottie-web/build/player/lottie_light';
import Lottie from 'react-lottie';
import { useThemeContext } from '~/context/themeContext/themeContext';
import darkToLight from './images/dark-to-light.json';
import lightToDark from './images/light-to-dark.json';

const ChangeTheme = () => {
  const { theme, changeTheme } = useThemeContext();

  const changeIcon = theme === 'light' ? lightToDark : darkToLight;

  const [animationData, setAnimationData] = useState(changeIcon);

  const toggleAnimationData = useCallback(
    () => setAnimationData(changeIcon),
    [theme],
  );

  return (
    <div
      onClick={() => {
        toggleAnimationData();
        changeTheme();
      }}
      className={styles['change-theme']}
    >
      <Lottie
        options={{
          loop: false,
          autoplay: false,
          animationData,
        }}
      />
    </div>
  );
};

export default memo(ChangeTheme);
