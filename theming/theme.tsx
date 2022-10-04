import {createTheme, styled} from '@mui/material/styles'
import { orange } from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface Theme {
    pagebackground: {
      color: string;
    }
  }

  // allow configuration using `createTheme`
  interface ThemeOptions {
    pagebackground?: {
      color?: string;
    }
  }
}


export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#5ea',
    },
    secondary: {
      main: '#0c7d1f',
    },
  },
})

export const lightTheme = createTheme({
  palette: {
    background: {
      default: '#fff'
    },
    primary: {
      main: '#0c7d1f',
    },
    secondary: {
      main: '#5ea',
    },
  },
  pagebackground:{
    color: '#fff',
  }

})
