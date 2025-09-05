import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, useTheme, useMediaQuery } from '@mui/material';
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
        color="primary" 
        sx={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(226, 232, 240, 0.6)',
          boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
        }}
      >
        <Toolbar sx={{ py: 1 }}>
          <Typography 
            variant="h6" 
            component={Link} 
            to="/" 
            sx={{ 
              flexGrow: 1, 
              textDecoration: 'none', 
              color: 'primary.main',
              fontWeight: 700,
              fontSize: '1.25rem',
              background: 'linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Xie Jinian
          </Typography>
          {isMobile ? (
            <IconButton
              color="primary"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <div>
              {menuItems.map((item) => (
                <Button
                  key={item}
                  component={Link}
                  to={`/${item.toLowerCase()}`}
                  color="primary"
                  sx={{ 
                    ml: 1,
                    px: 3,
                    py: 1,
                    borderRadius: 2,
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    textTransform: 'none',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                      backgroundColor: 'rgba(37, 99, 235, 0.1)',
                      transform: 'translateY(-1px)',
                    },
                  }}
                >
                  {item}
                </Button>
              ))}
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          '& .MuiDrawer-paper': {
            width: 280,
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
            borderLeft: '1px solid rgba(226, 232, 240, 0.6)',
            pt: 2,
          },
        }}
      >
        <List sx={{ px: 2 }}>
          {menuItems.map((item) => (
            <ListItem 
              key={item} 
              component={Link} 
              to={`/${item.toLowerCase()}`}
              onClick={handleDrawerToggle}
              sx={{
                mb: 1,
                borderRadius: 2,
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  backgroundColor: 'rgba(37, 99, 235, 0.1)',
                  transform: 'translateX(-4px)',
                },
              }}
            >
              <ListItemText 
                primary={item} 
                sx={{
                  '& .MuiListItemText-primary': {
                    fontWeight: 600,
                    color: 'primary.main',
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
