import React, { ReactNode } from 'react';
import { ThemeProvider as MuiThemeProvider, Theme, createTheme } from '@mui/material/styles';
import { lightTheme } from './theme';

interface ThemeProviderProps {
  children: ReactNode;
  themeOverrides?: Partial<Theme>
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, themeOverrides = {} }) => {
  return (
    <MuiThemeProvider theme={lightTheme}>
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
