import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Box,
  Stack,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { language, toggleLanguage } = useLanguage();
  const isZh = language === 'zh';
  const location = useLocation();

  const menuItems = [
    { label: isZh ? '关于我' : 'About', path: '/about' },
    { label: isZh ? '经历' : 'Experience', path: '/experience' },
    { label: isZh ? '我的故事' : 'My Story', path: '/mystory' },
    { label: isZh ? '项目' : 'Projects', path: '/projects' },
    { label: isZh ? '技能' : 'Skills', path: '/skills' },
    { label: isZh ? '联系我' : 'Contact', path: '/contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const languageButton = (
    <Button
      onClick={toggleLanguage}
      sx={{
        ml: 1.5,
        px: 0.5,
        minWidth: 'auto',
        color: '#6F675E',
        fontWeight: 400,
        fontSize: '0.92rem',
        letterSpacing: '0.04em',
        textTransform: 'none',
        fontFamily: '"Source Serif 4", "Noto Serif SC", Georgia, serif',
        '&:hover': {
          backgroundColor: 'transparent',
          color: '#C45A38',
        },
      }}
    >
      {isZh ? 'EN' : '中'}
    </Button>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: 'rgba(246, 241, 231, 0.92)',
          backdropFilter: 'blur(16px)',
          borderBottom: 'none',
          boxShadow: 'none',
          backgroundImage: 'none',
        }}
      >
        <Toolbar
          sx={{
            py: 1.25,
            px: { xs: 2, md: 5 },
            minHeight: { xs: 64, md: 72 },
            maxWidth: 1280,
            width: '100%',
            mx: 'auto',
          }}
        >
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              fontFamily: '"Playfair Display", "Noto Serif SC", Georgia, serif',
              fontWeight: 500,
              fontSize: { xs: '1.15rem', md: '1.28rem' },
              letterSpacing: '0.02em',
              color: '#2F2C28',
              '&:hover': { color: '#C45A38' },
            }}
          >
            Xie Jinian
          </Typography>

          {isMobile ? (
            <Stack direction="row" spacing={0.5} alignItems="center">
              {languageButton}
              <IconButton
                aria-label={isZh ? '打开导航' : 'open drawer'}
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ color: '#2F2C28' }}
              >
                <MenuIcon />
              </IconButton>
            </Stack>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.25 }}>
              {menuItems.map((item) => {
                const active = location.pathname === item.path;
                return (
                  <Button
                    key={item.path}
                    component={Link}
                    to={item.path}
                    sx={{
                      px: 1.5,
                      py: 0.5,
                      minWidth: 0,
                      borderRadius: 0,
                      fontWeight: 400,
                      fontSize: '0.95rem',
                      textTransform: 'none',
                      letterSpacing: '0.02em',
                      color: active ? '#C45A38' : '#4A4540',
                      fontFamily: '"Source Serif 4", "Noto Serif SC", Georgia, serif',
                      backgroundColor: 'transparent',
                      '&:hover': {
                        color: '#C45A38',
                        backgroundColor: 'transparent',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                );
              })}
              {languageButton}
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
            background: '#F6F1E7',
            borderLeft: '1px solid #E6DCCB',
            pt: 2,
          },
        }}
      >
        <Box sx={{ px: 3, pb: 2, mb: 1 }}>
          <Typography
            sx={{
              fontFamily: '"Playfair Display", "Noto Serif SC", Georgia, serif',
              fontSize: '1.05rem',
              color: '#2F2C28',
              mb: 1.5,
            }}
          >
            Xie Jinian
          </Typography>
          <Box>{languageButton}</Box>
        </Box>
        <List sx={{ px: 1.5 }}>
          {menuItems.map((item) => (
            <ListItem
              key={item.path}
              component={Link}
              to={item.path}
              onClick={handleDrawerToggle}
              sx={{
                mb: 0.25,
                borderRadius: 0,
                color: location.pathname === item.path ? '#C45A38' : '#4A4540',
                '&:hover': {
                  backgroundColor: 'transparent',
                  color: '#C45A38',
                },
              }}
            >
              <ListItemText
                primary={item.label}
                sx={{
                  '& .MuiListItemText-primary': {
                    fontWeight: 400,
                    fontSize: '1rem',
                    fontFamily: '"Source Serif 4", "Noto Serif SC", Georgia, serif',
                    color: 'inherit',
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
