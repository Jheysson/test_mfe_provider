import React, { ReactNode } from 'react';
import { ThemeProvider as MuiThemeProvider, Theme, createTheme } from '@mui/material/styles';
import theme from './theme';

interface ThemeProviderProps {
  children: ReactNode;
  themeOverrides?: Partial<Theme>
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, themeOverrides = {} }) => {
  const customTheme = createTheme(theme, themeOverrides)
  return (
    <MuiThemeProvider theme={customTheme}>
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
