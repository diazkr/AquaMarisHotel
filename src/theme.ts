"use client"
import { createTheme } from '@mui/material/styles';
import '@fontsource/poppins';

const theme = createTheme({
  palette: {
    primary: {
      main: '#23B3B7',
    },
    secondary: {
      main: '#17858A',
    },
    text: {
      primary: '#07282C',
      secondary: '#ffffff',

    },
  },
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif', 
  },
});

export default theme;