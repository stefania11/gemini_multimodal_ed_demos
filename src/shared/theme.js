import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  colors: {
    primary: {
      50: '#f0f8ff',
      100: '#ccebff',
      200: '#a0d4ff',
      300: '#70c0ff',
      400: '#38b0ff',
      500: '#00a0ff',
      600: '#0080ff',
      700: '#0060ff',
      800: '#0040ff',
      900: '#0020ff',
    },
    secondary: {
      50: '#f0f8ff',
      100: '#ccebff',
      200: '#a0d4ff',
      300: '#70c0ff',
      400: '#38b0ff',
      500: '#00a0ff',
      600: '#0080ff',
      700: '#0060ff',
      800: '#0040ff',
      900: '#0020ff',
    },
  },
  fonts: {
    heading: 'Poppins, sans-serif',
    body: 'Poppins, sans-serif',
  },
  styles: {
    global: {
      body: {
        bg: 'primary.50',
        color: 'gray.800',
      },
    },
  },
});

export default customTheme;
