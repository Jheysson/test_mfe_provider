import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    border: {
      '100': '#EEEEEE',
      '200': '#E2E5ED',
    },
  },
  decoration: {
    shadow: {
      default: '0px 1px 2px 0px #66717B36 inset',
    },
    border: {
      radius: {
        default: 8,
        s: 4,
      },
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export default theme;

declare module '@mui/material/styles' {
  interface Palette {
    border: {
      '100': string | number
      '200': string | number
    }
  }
  interface PaletteOptions {
    border: {
      '100'?: string | number
      '200'?: string | number
    }
  }
}

declare module '@mui/material/styles' {
  interface Theme {
    decoration: {
      shadow: {
        default: string
      }
      border: {
        radius: {
          default: string | number
          s: string | number
        }
      }
    }
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    decoration?: {
      shadow?: {
        default: string
      }
      border?: {
        radius?: {
          default?: string | number
          s: string | number
        }
      }
    }
  }
}
