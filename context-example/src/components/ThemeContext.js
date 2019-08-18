import React from 'react';

export const themes = {
  light: 'yellow',
  dark: 'blue'
}

export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {}
})

