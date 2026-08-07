import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, useTheme, useMediaQuery, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const menuItems = ['About', 'Experience', 'MyStory', 'Projects', 'Skills', 'Contact'];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: 'rgba(14, 20, 18, 0.90)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid #2a3830',
          boxShadow: 'none',
          backgroundImage: 'none',
        }}
      >
        {/* Decorative precision line — 0.5px copper accent at very top */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '1px',
            background: 'linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.5) 30%, rgba(201,168,76,0.7) 50%, rgba(201,168,76,0.5) 70%, transparent 100%)',
          }}
        />
        <Toolbar sx={{ py: 0.75 }}>
          {/* Logo / Brand */}
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              fontFamily: '"JetBrains Mono", "Courier Prime", monospace',
              fontWeight: 700,
              fontSize: '1.1rem',
              letterSpacing: '0.06em',
              color: '#c9a84c',
              display: 'flex',
              alignItems: 'center',
              gap: 0.75,
              '&::before': {
                content: '">"',
                opacity: 0.5,
                fontSize: '0.9rem',
                fontWeight: 400,
              },
            }}
          >
            xiejinian
          </Typography>

          {isMobile ? (
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ color: '#c9a84c' }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 0.5 }}>
              {menuItems.map((item) => (
                <Button
                  key={item}
                  component={Link}
                  to={`/${item.toLowerCase()}`}
                  sx={{
                    ml: 0.5,
                    px: 2,
                    py: 0.875,
                    borderRadius: '2px',
                    fontWeight: 500,
                    fontSize: '0.82rem',
                    textTransform: 'none',
                    letterSpacing: '0.05em',
                    color: '#8a8070',
                    position: 'relative',
                    transition: 'all 0.2s ease-in-out',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 4,
                      left: '50%',
                      transform: 'translateX(-50%) scaleX(0)',
                      width: '80%',
                      height: '1px',
                      background: '#c9a84c',
                      transition: 'transform 0.2s ease-in-out',
                    },
                    '&:hover': {
                      color: '#c9a84c',
                      backgroundColor: 'rgba(201, 168, 76, 0.05)',
                      '&::after': {
                        transform: 'translateX(-50%) scaleX(1)',
                      },
                    },
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          '& .MuiDrawer-paper': {
            width: 260,
            background: '#0e1412',
            backdropFilter: 'blur(20px)',
            borderLeft: '1px solid #2a3830',
            pt: 2,
          },
        }}
      >
        {/* Drawer header line */}
        <Box
          sx={{
            px: 3,
            pb: 2,
            borderBottom: '1px solid #2a3830',
            mb: 1,
          }}
        >
          <Typography
            sx={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '0.7rem',
              letterSpacing: '0.12em',
              color: '#4a5a50',
              textTransform: 'uppercase',
            }}
          >
            Navigation
          </Typography>
        </Box>
        <List sx={{ px: 1.5 }}>
          {menuItems.map((item) => (
            <ListItem
              key={item}
              component={Link}
              to={`/${item.toLowerCase()}`}
              onClick={handleDrawerToggle}
              sx={{
                mb: 0.5,
                borderRadius: '2px',
                borderLeft: '2px solid transparent',
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  backgroundColor: 'rgba(201, 168, 76, 0.06)',
                  borderLeftColor: '#c9a84c',
                },
              }}
            >
              <ListItemText
                primary={item}
                sx={{
                  '& .MuiListItemText-primary': {
                    fontWeight: 500,
                    fontSize: '0.9rem',
                    letterSpacing: '0.04em',
                    color: '#cfc6b4',
                  },
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
