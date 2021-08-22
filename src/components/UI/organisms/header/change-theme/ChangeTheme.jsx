import styles from './ChangeTheme.module';
import { useEffect, useState } from 'react';
// import lottie from 'lottie-web/build/player/lottie_light';
import Lottie from 'react-lottie';
import { useThemeContext } from '~/context/themeContext/themeContext';
import lightToDark from './images/dark-to-light.json';
import darkToLight from './images/light-to-dark.json';

const ChangeTheme = () => {
  const { theme, changeTheme } = useThemeContext();

  const changeIcon = theme === 'light' ? lightToDark : darkToLight;

  const [animationData, setAnimationData] = useState(changeIcon);

  const toggleAnimationData = () => setAnimationData(changeIcon);

  return (
    <picture
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
    </picture>
  );
};

export default ChangeTheme;
