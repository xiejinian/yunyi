import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Editorial cream — warm paper, terracotta accent, serif typography
let theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#C45A38',
      light: '#D4785A',
      dark: '#A3472C',
      contrastText: '#FBF8F2',
    },
    secondary: {
      main: '#6F675E',
      light: '#8A8278',
      dark: '#4A4540',
      contrastText: '#FBF8F2',
    },
    background: {
      default: '#F6F1E7',
      paper: '#FBF8F2',
    },
    text: {
      primary: '#2F2C28',
      secondary: '#6F675E',
    },
    success: {
      main: '#5B7A62',
      light: '#7A9880',
      dark: '#3E5644',
    },
    warning: {
      main: '#C45A38',
      light: '#D4785A',
      dark: '#A3472C',
    },
    error: {
      main: '#C45A38',
      light: '#D4785A',
      dark: '#A3472C',
    },
    divider: '#E6DCCB',
    grey: {
      50: '#FBF8F2',
      100: '#F3EDE2',
      200: '#E6DCCB',
      300: '#D4C8B4',
      400: '#B8AD9C',
      500: '#8A8278',
      600: '#6F675E',
      700: '#4A4540',
      800: '#2F2C28',
      900: '#1C1A18',
    },
  },
  typography: {
    fontFamily:
      '"Source Serif 4", "Noto Serif SC", "Songti SC", "SimSun", Georgia, serif',
    h1: {
      fontFamily: '"Playfair Display", "Noto Serif SC", Georgia, serif',
      fontWeight: 500,
      fontSize: '4.2rem',
      lineHeight: 1.15,
      letterSpacing: '0.01em',
      color: '#2F2C28',
    },
    h2: {
      fontFamily: '"Playfair Display", "Noto Serif SC", Georgia, serif',
      fontWeight: 500,
      fontSize: '2.6rem',
      lineHeight: 1.25,
      letterSpacing: '0.01em',
      color: '#2F2C28',
    },
    h3: {
      fontFamily: '"Playfair Display", "Noto Serif SC", Georgia, serif',
      fontWeight: 500,
      fontSize: '2.1rem',
      lineHeight: 1.3,
      color: '#2F2C28',
    },
    h4: {
      fontFamily: '"Playfair Display", "Noto Serif SC", Georgia, serif',
      fontWeight: 500,
      fontSize: '1.55rem',
      lineHeight: 1.4,
      color: '#2F2C28',
    },
    h5: {
      fontFamily: '"Playfair Display", "Noto Serif SC", Georgia, serif',
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: 1.45,
    },
    h6: {
      fontFamily: '"Playfair Display", "Noto Serif SC", Georgia, serif',
      fontWeight: 500,
      fontSize: '1.08rem',
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1.05rem',
      lineHeight: 1.85,
      color: '#3A3632',
    },
    body2: {
      fontSize: '0.92rem',
      lineHeight: 1.7,
      color: '#6F675E',
    },
    caption: {
      fontFamily: '"Source Serif 4", "Noto Serif SC", Georgia, serif',
      fontSize: '0.78rem',
      letterSpacing: '0.02em',
      color: '#8A8278',
    },
    button: {
      fontFamily: '"Source Serif 4", "Noto Serif SC", Georgia, serif',
      fontWeight: 500,
      letterSpacing: '0.04em',
    },
  },
  shape: {
    borderRadius: 2,
  },
  shadows: [
    'none',
    '0 1px 2px rgba(47, 44, 40, 0.04)',
    '0 2px 8px rgba(47, 44, 40, 0.05)',
    '0 6px 18px rgba(47, 44, 40, 0.06)',
    '0 10px 28px rgba(47, 44, 40, 0.07)',
    '0 14px 36px rgba(47, 44, 40, 0.08)',
    '0 14px 36px rgba(47, 44, 40, 0.08)',
    '0 14px 36px rgba(47, 44, 40, 0.08)',
    '0 14px 36px rgba(47, 44, 40, 0.08)',
    '0 14px 36px rgba(47, 44, 40, 0.08)',
    '0 14px 36px rgba(47, 44, 40, 0.08)',
    '0 14px 36px rgba(47, 44, 40, 0.08)',
    '0 14px 36px rgba(47, 44, 40, 0.08)',
    '0 14px 36px rgba(47, 44, 40, 0.08)',
    '0 14px 36px rgba(47, 44, 40, 0.08)',
    '0 14px 36px rgba(47, 44, 40, 0.08)',
    '0 14px 36px rgba(47, 44, 40, 0.08)',
    '0 14px 36px rgba(47, 44, 40, 0.08)',
    '0 14px 36px rgba(47, 44, 40, 0.08)',
    '0 14px 36px rgba(47, 44, 40, 0.08)',
    '0 14px 36px rgba(47, 44, 40, 0.08)',
    '0 14px 36px rgba(47, 44, 40, 0.08)',
    '0 14px 36px rgba(47, 44, 40, 0.08)',
    '0 14px 36px rgba(47, 44, 40, 0.08)',
    '0 14px 36px rgba(47, 44, 40, 0.08)',
  ],
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: '#F6F1E7',
          minHeight: '100vh',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 2,
          textTransform: 'none',
          fontWeight: 500,
          fontSize: '0.95rem',
          padding: '8px 22px',
          boxShadow: 'none',
          letterSpacing: '0.03em',
          transition: 'color 0.2s ease, background-color 0.2s ease, border-color 0.2s ease',
          '&:hover': {
            transform: 'none',
            boxShadow: 'none',
          },
        },
        contained: {
          background: '#C45A38',
          color: '#FBF8F2',
          fontWeight: 500,
          '&:hover': {
            background: '#A3472C',
            boxShadow: 'none',
          },
        },
        outlined: {
          borderWidth: '1px',
          borderColor: '#E6DCCB',
          color: '#C45A38',
          '&:hover': {
            borderWidth: '1px',
            backgroundColor: 'rgba(196, 90, 56, 0.06)',
            borderColor: '#C45A38',
            color: '#A3472C',
          },
        },
        text: {
          color: '#C45A38',
          '&:hover': {
            backgroundColor: 'transparent',
            color: '#A3472C',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 2,
          boxShadow: 'none',
          border: '1px solid #E6DCCB',
          background: '#FBF8F2',
          transition: 'border-color 0.2s ease',
          backgroundImage: 'none',
          '&:hover': {
            transform: 'none',
            boxShadow: 'none',
            borderColor: '#D4C8B4',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 2,
          boxShadow: 'none',
          border: '1px solid #E6DCCB',
          background: '#FBF8F2',
          backgroundImage: 'none',
        },
        elevation1: { boxShadow: 'none' },
        elevation2: { boxShadow: 'none' },
        elevation3: { boxShadow: 'none' },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(246, 241, 231, 0.92)',
          backdropFilter: 'blur(16px)',
          borderBottom: 'none',
          boxShadow: 'none',
          backgroundImage: 'none',
          color: '#2F2C28',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 2,
          fontWeight: 500,
          fontSize: '0.78rem',
          letterSpacing: '0.02em',
          backgroundColor: 'transparent',
        },
        outlined: {
          borderWidth: '1px',
          borderColor: '#E6DCCB',
          color: '#6F675E',
          '&:hover': {
            backgroundColor: 'rgba(196, 90, 56, 0.06)',
            borderColor: 'rgba(196, 90, 56, 0.35)',
          },
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 1,
          backgroundColor: '#E6DCCB',
          height: 2,
        },
        bar: {
          borderRadius: 1,
          background: '#C45A38',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#E6DCCB',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: '#F6F1E7',
          borderLeft: '1px solid #E6DCCB',
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          borderRadius: 2,
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: '24px',
          paddingRight: '24px',
          '@media (min-width:600px)': {
            paddingLeft: '40px',
            paddingRight: '40px',
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#C45A38',
          textDecoration: 'none',
          '&:hover': {
            color: '#A3472C',
          },
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme, { breakpoints: ['sm', 'md', 'lg'], factor: 2.5 });

export default theme;
