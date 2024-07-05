import { Theme } from '@mui/material/styles'
import { TypographyOptions } from '@mui/material/styles/createTypography'

//https://m2.material.io/design/typography/the-type-system.html#type-scale

export const createTypographyTheme = (
  theme: Theme,
): TypographyOptions => ({
  h1: {
    fontSize: '48px',
    fontWeight: 400,
    color: theme.palette.text.primary
  },
  h2: {
    fontWeight: 500,
    fontSize: '20px',
  },
  h3: {
    fontSize: '24px',
    fontWeight: 400,
    color: theme.palette.text.primary
  },
  h4: {
    fontSize: '22px',
    fontWeight: 400,
    color: theme.palette.text.primary
  },
  h5: {
    fontSize: '20px',
    fontWeight: 400,
    color: theme.palette.text.primary
  },
  h6: {
    fontSize: '18px',
    fontWeight: 400,
    color: theme.palette.text.primary
  },
  subtitle1: {
    fontSize: '16px',
    fontWeight: 500,
    color: theme.palette.text.primary
  },
  subtitle2: {
    fontSize: '14px',
    fontWeight: 400,
    color: theme.palette.text.primary
  },
  body1: {
    fontSize: '16px',
    color: theme.palette.text.primary
  },
  body2: {
    fontSize: '14px',
    color: theme.palette.text.primary,
    lineHeight: '1.78571'
  },
  button: {
    fontSize: '14px',
    fontWeight: 400,
    color: theme.palette.text.primary
  },
  caption: {
    fontSize: '12px',
    fontWeight: 400,
    color: theme.palette.text.primary
  },
  overline: {
    fontSize: '12px',
    fontWeight: 400,
    color: theme.palette.text.primary
  }

})