import { createTheme, responsiveFontSizes } from "@mui/material";

import { grey, deepPurple, amber, blue, red } from '@mui/material/colors';

declare module '@mui/material/styles' {
    interface Theme {
      status: {
        danger: string;
      };
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
      status?: {
        danger?: string;
      };
    }
  }


  const headingStyles = {
    fontFamily: ["'Helvetica Neue'", 'Helvetica', 'sans-serif'].toString(),
    fontWeight: 700
  };
  
  const themeOptions = {
    palette: {
      primary: blue,
      secondary: red
    },
    typography: {
      fontFamily: ["'Fira Mono'", 'Menlo', 'monospace'].toString(),
      h1: headingStyles,
      h2: headingStyles,
      h3: headingStyles,
      h4: headingStyles,
      h5: headingStyles,
      h6: {
        fontWeight: 400
      },
      overline: {
        fontSize: '0.875rem',
        fontWeight: 500,
        letterSpacing: 2
      },
      button: {
        fontWeight: 500
      }
    },
    shape: {
      borderRadius: 6
    },
    overrides: {
      MuiFab: {
        extended: {
          padding: '0 24px'
        },
        label: {
          fontSize: '1rem'
        }
      }
    }
  };
  

const theme = createTheme(themeOptions);

export default theme;