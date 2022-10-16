import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => window.localStorage.getItem('theme') || 'light');

  // Change theme when called
  const changeTheme = () => {
    setTheme((prevTheme) => {
      if (prevTheme === 'dark') {
        return 'light';
      }
      return 'dark';
    });
  };

  // Conditionally set theme
  const switchTheme = (light, dark, ...args) => {
    switch (theme) {
      case 'light':
        return light;
      case 'dark':
        return dark;
      default:
        return light;
    }
  };

  useEffect(() => {
    window.localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('theme', theme);
  }, [theme, changeTheme]);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export { ThemeProvider, ThemeContext };
