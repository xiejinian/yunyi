import { createTheme } from '@mui/material/styles';

// Claude-inspired warm light theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#c07844', // Warm terracotta-orange (Claude brand)
      light: '#d4955e', // Light terracotta
      dark: '#a0622e', // Dark terracotta
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#7c6b5a', // Warm brown
      light: '#a08c78', // Light warm brown
      dark: '#5a4d3e', // Dark warm brown
      contrastText: '#ffffff',
    },
    background: {
      default: '#fafaf7', // Warm off-white (Claude bg)
      paper: '#ffffff',
    },
    text: {
      primary: '#1a1918', // Near-black warm
      secondary: '#6b6560', // Warm medium gray
    },
    success: {
      main: '#3d7a55', // Muted green
      light: '#6aaa82',
      dark: '#2a5a3e',
    },
    warning: {
      main: '#c07844', // Terracotta (same as primary)
      light: '#d4955e',
      dark: '#a0622e',
    },
    error: {
      main: '#c0392b',
      light: '#e57373',
      dark: '#a93226',
    },
    grey: {
      50: '#fafaf7',
      100: '#f5f3ef',
      200: '#edeae4',
      300: '#dbd7cf',
      400: '#b8b2a8',
      500: '#8f8880',
      600: '#6b6560',
      700: '#4a4440',
      800: '#2d2926',
      900: '#1a1918',
    },
  },
  typography: {
    fontFamily: '"Inter", "SF Pro Display", "Segoe UI", "Roboto", sans-serif',
    h1: {
      fontWeight: 800,
      fontSize: '3.5rem',
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.3,
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: 1.5,
    },
    h6: {
      fontWeight: 500,
      fontSize: '1.125rem',
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
      color: '#4a4440',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
      color: '#6b6560',
    },
  },
  shape: {
    borderRadius: 4,
  },
  shadows: [
    'none',
    '0 1px 2px 0 rgb(0 0 0 / 0.04)',
    '0 1px 3px 0 rgb(0 0 0 / 0.07), 0 1px 2px -1px rgb(0 0 0 / 0.06)',
    '0 4px 6px -1px rgb(0 0 0 / 0.07), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
    '0 10px 15px -3px rgb(0 0 0 / 0.07), 0 4px 6px -4px rgb(0 0 0 / 0.05)',
    '0 20px 25px -5px rgb(0 0 0 / 0.07), 0 8px 10px -6px rgb(0 0 0 / 0.05)',
    '0 25px 50px -12px rgb(0 0 0 / 0.12)',
    '0 25px 50px -12px rgb(0 0 0 / 0.12)',
    '0 25px 50px -12px rgb(0 0 0 / 0.12)',
    '0 25px 50px -12px rgb(0 0 0 / 0.12)',
    '0 25px 50px -12px rgb(0 0 0 / 0.12)',
    '0 25px 50px -12px rgb(0 0 0 / 0.12)',
    '0 25px 50px -12px rgb(0 0 0 / 0.12)',
    '0 25px 50px -12px rgb(0 0 0 / 0.12)',
    '0 25px 50px -12px rgb(0 0 0 / 0.12)',
    '0 25px 50px -12px rgb(0 0 0 / 0.12)',
    '0 25px 50px -12px rgb(0 0 0 / 0.12)',
    '0 25px 50px -12px rgb(0 0 0 / 0.12)',
    '0 25px 50px -12px rgb(0 0 0 / 0.12)',
    '0 25px 50px -12px rgb(0 0 0 / 0.12)',
    '0 25px 50px -12px rgb(0 0 0 / 0.12)',
    '0 25px 50px -12px rgb(0 0 0 / 0.12)',
    '0 25px 50px -12px rgb(0 0 0 / 0.12)',
    '0 25px 50px -12px rgb(0 0 0 / 0.12)',
    '0 25px 50px -12px rgb(0 0 0 / 0.12)',
  ],
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: '#fafaf7',
          minHeight: '100vh',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
          fontSize: '0.875rem',
          padding: '10px 24px',
          boxShadow: 'none',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-1px)',
            boxShadow: '0 4px 12px -2px rgb(0 0 0 / 0.12)',
          },
        },
        contained: {
          background: '#c07844',
          color: '#ffffff',
          '&:hover': {
            background: '#a0622e',
          },
        },
        outlined: {
          borderWidth: '1.5px',
          borderColor: '#dbd7cf',
          color: '#4a4440',
          '&:hover': {
            borderWidth: '1.5px',
            backgroundColor: '#f5f3ef',
            borderColor: '#c07844',
            color: '#c07844',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.07)',
          border: '1px solid #edeae4',
          transition: 'all 0.2s ease-in-out',
          backgroundImage: 'none',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 24px -4px rgb(0 0 0 / 0.1)',
            borderColor: '#dbd7cf',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.07)',
          border: '1px solid #edeae4',
          backgroundImage: 'none',
        },
        elevation1: {
          boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.07)',
        },
        elevation2: {
          boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.07)',
        },
        elevation3: {
          boxShadow: '0 8px 16px -4px rgb(0 0 0 / 0.08)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(250, 250, 247, 0.92)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid #edeae4',
          boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.05)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          fontWeight: 500,
          fontSize: '0.8rem',
        },
        outlined: {
          borderWidth: '1.5px',
          '&:hover': {
            backgroundColor: '#f5f3ef',
          },
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          backgroundColor: '#edeae4',
        },
        bar: {
          borderRadius: 4,
          background: 'linear-gradient(90deg, #c07844 0%, #d4955e 100%)',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#edeae4',
        },
      },
    },
  },
});

export default theme;
