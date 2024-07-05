import { createTheme } from "@mui/material"


export const LightPalette = () => {
  return createTheme({
    palette: {
      border: {
        //TODO: Not sure what is this.
      },
      common: {
        black: '#29333B', //BLAZE/BLAZE Black
        white: '#FFFFFF',
      },
      primary: {
        light: '#1CC4E8', // BLAZE/Retail
        main: '#2CB2DC', // BLAZE/Retail Alt
      },
      info: {
        light: '#1CC4E8', // BLAZE/Retail
        main: '#2CB2DC', // BLAZE/Retail Alt
      },
      secondary: {
        light: '#EC0101', // Light Mode - Accessible Colors/Danger
        main: '#CB0000', // Light Mode - Accessible Colors/Danger Alt
      },
      error: {
        light: '#FFF5F1', // Not in the design tokens
        main: '#F25E3D', // actions.danger
        dark: '#DB572E', // actions.dangerAlt
      },
      warning: {
        light: '#FFD500', // brand.insights
        main: '#FFD500', // brand.insights
        dark: '#F0BC00', // brand.insightsAlt
        contrastText: '#FFAE00', // brand.distro
      },
      success: {
        light: '#F7FFED', // Not in the design tokens
        main: '#42D39A', // Dark Mode - Accessible Colors/Success
        dark: '#41C396', // Dark Mode - Accessible Colors/Success Alt
      },
      grey: {
        50: '#f5f7fa', // mono.f5f7fa
        100: '#EEEEEE', // mono.ee
        200: '#DDDDDD', // mono.dd
        300: '#CCCCCC', // mono.cc
        400: '#BBBBBB', // mono.bb
        500: '#999999', // mono.99
        600: '#777777', // mono.77
        700: '#555555', // mono.55
        800: '#333333', // mono.33
        900: '#202020', // mono.20
      },
      //The text color are different from retail page for now, we are getting these colors from the MFE Payments page.
      text: {
        primary: '#3E3F42',
        secondary: '#9EA0A5',
      },
      background: {
        paper: '#FFFFFF',
        default: '#FFFFFF',
      },
    },
  })
}
