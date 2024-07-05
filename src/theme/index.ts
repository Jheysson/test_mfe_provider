import { TypographyOptions } from "@mui/material/styles/createTypography"
import { createTheme } from "@mui/material"
import { LightPalette } from "./lightPalette"
import { createTypographyTheme } from "./typography"

const lightPaletteTheme = LightPalette()
const themeTypography: TypographyOptions = createTypographyTheme(lightPaletteTheme)

export const lightTheme = createTheme({
  typography: themeTypography,
  spacing: 4,
  palette: lightPaletteTheme.palette,
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
})

export const darkTheme = createTheme({
  ...lightTheme,
  palette: {
    mode: 'dark',
    border: {
      '100': '#4B4B4B',
      '200': '#4B4B4B',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#272727',
        },
      },
    },
  },
})