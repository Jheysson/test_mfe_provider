import { TypographyOptions } from "@mui/material/styles/createTypography"
import { createTheme } from "@mui/material"
import { LightPalette } from "./lightPalette"
import { useTheme } from '@mui/material/styles'
import { createTypographyTheme } from "./typography"
import { createMakeAndWithStyles } from 'tss-react'
import { DarkPalette } from "./darkPalette"

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

const darkPaletteTheme = DarkPalette()

export const darkTheme = createTheme({
  ...lightTheme,
  palette: darkPaletteTheme.palette,
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

export const { makeStyles, withStyles } = createMakeAndWithStyles({ useTheme })

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