import React from "react";

import {DefaultTheme, LightTheme} from '../Theme/consts'

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  //theme = light or dark
  const [theme, setTheme] = React.useState(DefaultTheme);

  const toggleTheme = () => {
    if (theme === DefaultTheme) {
      setTheme(LightTheme);
    } else {
      setTheme(DefaultTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
