import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// 沧桑·智识 — Industrial dark theme with aged copper & tech precision
let theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#c9a84c',       // Aged bronze / matte gold
      light: '#dbbf6e',
      dark: '#a07c2e',
      contrastText: '#0e1412',
    },
    secondary: {
      main: '#b85c38',       // Rust orange — weathered iron
      light: '#d4795a',
      dark: '#8c3e22',
      contrastText: '#e8e0d0',
    },
    background: {
      default: '#0e1412',    // Deep moss-black
      paper: '#141c18',      // Slightly lifted — layered depth
    },
    text: {
      primary: '#e8e0d0',    // Aged parchment white
      secondary: '#8a8070',  // Faded sepia
    },
    success: {
      main: '#4a8c60',
      light: '#72b88a',
      dark: '#2e5c3e',
    },
    warning: {
      main: '#c9a84c',
      light: '#dbbf6e',
      dark: '#a07c2e',
    },
    error: {
      main: '#b85c38',
      light: '#d4795a',
      dark: '#8c3e22',
    },
    divider: '#2a3830',
    grey: {
      50: '#e8e0d0',
      100: '#cfc6b4',
      200: '#a89e8c',
      300: '#8a8070',
      400: '#5e5648',
      500: '#3e3830',
      600: '#2a3830',
      700: '#1e2a24',
      800: '#141c18',
      900: '#0e1412',
    },
  },
  typography: {
    fontFamily: '"Inter", "SF Pro Display", "Segoe UI", "Noto Serif SC", "PingFang SC", "Hiragino Sans GB", sans-serif',
    h1: {
      fontFamily: '"JetBrains Mono", "Courier Prime", "Courier New", "Noto Serif SC", monospace',
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.1,
      letterSpacing: '0.01em',
      color: '#e8e0d0',
    },
    h2: {
      fontFamily: '"JetBrains Mono", "Courier Prime", "Courier New", "Noto Serif SC", monospace',
      fontWeight: 600,
      fontSize: '2.5rem',
      lineHeight: 1.2,
      letterSpacing: '0.01em',
      color: '#e8e0d0',
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.3,
      color: '#e8e0d0',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4,
      color: '#e8e0d0',
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
      lineHeight: 1.75,
      color: '#cfc6b4',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.65,
      color: '#8a8070',
    },
    caption: {
      fontFamily: '"JetBrains Mono", "Courier Prime", monospace',
      fontSize: '0.75rem',
      letterSpacing: '0.05em',
      color: '#8a8070',
    },
  },
  shape: {
    borderRadius: 2,  // Sharp, industrial — minimal rounding
  },
  shadows: [
    'none',
    '0 1px 2px 0 rgb(0 0 0 / 0.3)',
    '0 1px 4px 0 rgb(0 0 0 / 0.4)',
    '0 4px 8px -1px rgb(0 0 0 / 0.5)',
    '0 8px 16px -2px rgb(0 0 0 / 0.5)',
    '0 16px 32px -4px rgb(0 0 0 / 0.5)',
    '0 24px 48px -8px rgb(0 0 0 / 0.6)',
    '0 24px 48px -8px rgb(0 0 0 / 0.6)',
    '0 24px 48px -8px rgb(0 0 0 / 0.6)',
    '0 24px 48px -8px rgb(0 0 0 / 0.6)',
    '0 24px 48px -8px rgb(0 0 0 / 0.6)',
    '0 24px 48px -8px rgb(0 0 0 / 0.6)',
    '0 24px 48px -8px rgb(0 0 0 / 0.6)',
    '0 24px 48px -8px rgb(0 0 0 / 0.6)',
    '0 24px 48px -8px rgb(0 0 0 / 0.6)',
    '0 24px 48px -8px rgb(0 0 0 / 0.6)',
    '0 24px 48px -8px rgb(0 0 0 / 0.6)',
    '0 24px 48px -8px rgb(0 0 0 / 0.6)',
    '0 24px 48px -8px rgb(0 0 0 / 0.6)',
    '0 24px 48px -8px rgb(0 0 0 / 0.6)',
    '0 24px 48px -8px rgb(0 0 0 / 0.6)',
    '0 24px 48px -8px rgb(0 0 0 / 0.6)',
    '0 24px 48px -8px rgb(0 0 0 / 0.6)',
    '0 24px 48px -8px rgb(0 0 0 / 0.6)',
    '0 24px 48px -8px rgb(0 0 0 / 0.6)',
  ],
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: '#0e1412',
          minHeight: '100vh',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 2,
          textTransform: 'none',
          fontWeight: 600,
          fontSize: '0.875rem',
          padding: '10px 24px',
          boxShadow: 'none',
          letterSpacing: '0.04em',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-1px)',
            boxShadow: '0 4px 16px rgba(201, 168, 76, 0.15)',
          },
        },
        contained: {
          background: '#c9a84c',
          color: '#0e1412',
          fontWeight: 700,
          '&:hover': {
            background: '#dbbf6e',
            boxShadow: '0 4px 16px rgba(201, 168, 76, 0.25)',
          },
        },
        outlined: {
          borderWidth: '1px',
          borderColor: '#2a3830',
          color: '#c9a84c',
          '&:hover': {
            borderWidth: '1px',
            backgroundColor: 'rgba(201, 168, 76, 0.06)',
            borderColor: '#c9a84c',
            color: '#dbbf6e',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 2,
          boxShadow: '0 1px 4px 0 rgb(0 0 0 / 0.4)',
          border: '1px solid #2a3830',
          background: '#141c18',
          transition: 'all 0.25s ease-in-out',
          backgroundImage: 'none',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 24px -4px rgb(0 0 0 / 0.5)',
            borderColor: 'rgba(201, 168, 76, 0.35)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 2,
          boxShadow: '0 1px 4px 0 rgb(0 0 0 / 0.4)',
          border: '1px solid #2a3830',
          background: '#141c18',
          backgroundImage: 'none',
        },
        elevation1: {
          boxShadow: '0 1px 4px 0 rgb(0 0 0 / 0.4)',
        },
        elevation2: {
          boxShadow: '0 4px 8px -1px rgb(0 0 0 / 0.5)',
        },
        elevation3: {
          boxShadow: '0 8px 16px -2px rgb(0 0 0 / 0.5)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(14, 20, 18, 0.88)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid #2a3830',
          boxShadow: 'none',
          backgroundImage: 'none',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 2,
          fontWeight: 600,
          fontSize: '0.78rem',
          letterSpacing: '0.04em',
        },
        outlined: {
          borderWidth: '1px',
          borderColor: '#2a3830',
          color: '#cfc6b4',
          '&:hover': {
            backgroundColor: 'rgba(201, 168, 76, 0.08)',
            borderColor: 'rgba(201, 168, 76, 0.4)',
          },
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 1,
          backgroundColor: '#1e2a24',
          height: 3,
        },
        bar: {
          borderRadius: 1,
          background: 'linear-gradient(90deg, #a07c2e 0%, #c9a84c 60%, #dbbf6e 100%)',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#2a3830',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: '#0e1412',
          borderLeft: '1px solid #2a3830',
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
          paddingLeft: '20px',
          paddingRight: '20px',
          '@media (min-width:600px)': {
            paddingLeft: '32px',
            paddingRight: '32px',
          },
        },
      },
    },
  },
});

// Automatically scale down heading font sizes on smaller viewports so that
// large headings never overflow or crowd out content on mobile devices.
theme = responsiveFontSizes(theme, { breakpoints: ['sm', 'md', 'lg'], factor: 2.5 });

export default theme;
