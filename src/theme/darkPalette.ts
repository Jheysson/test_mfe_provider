import { createTheme } from "@mui/material"


export const DarkPalette = () => {
  return createTheme({
    palette: {
      mode: 'dark',
      border: {
        '100': '#4B4B4B',
        '200': '#4B4B4B',
      },
    },
  })
}
