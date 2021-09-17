import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(window.localStorage.getItem('theme') || 'light');

  const changeTheme = () => {
    setTheme(prevTheme => {
      if (prevTheme === 'dark') {
        return 'light';
      }
      return 'dark';
    });
  };

  useEffect(() => {
    window.localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('theme', theme);
  }, [theme, changeTheme]);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export { ThemeProvider, ThemeContext };
