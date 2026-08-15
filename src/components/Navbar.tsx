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
import TranslateIcon from '@mui/icons-material/Translate';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { language, toggleLanguage } = useLanguage();
  const isZh = language === 'zh';

  const menuItems = [
    { label: isZh ? '关于我' : 'About', path: '/about' },
    { label: isZh ? '经历' : 'Experience', path: '/experience' },
    { label: isZh ? '我的故事' : 'My Story', path: '/mystory' },
    { label: isZh ? '项目' : 'Projects', path: '/projects' },
    { label: isZh ? '技能' : 'Skills', path: '/skills' },
    { label: isZh ? '联系' : 'Contact', path: '/contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const languageButton = (
    <Button
      onClick={toggleLanguage}
      startIcon={<TranslateIcon sx={{ fontSize: 18 }} />}
      sx={{
        ml: 1,
        px: 1.5,
        py: 0.75,
        minWidth: 'auto',
        borderRadius: '2px',
        border: '1px solid #2a3830',
        color: '#c9a84c',
        fontWeight: 700,
        fontSize: '0.78rem',
        letterSpacing: '0.08em',
        textTransform: 'none',
        '&:hover': {
          borderColor: '#c9a84c',
          backgroundColor: 'rgba(201, 168, 76, 0.06)',
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
        sx={{
          backgroundColor: 'rgba(14, 20, 18, 0.90)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid #2a3830',
          boxShadow: 'none',
          backgroundImage: 'none',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '1px',
            background:
              'linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.5) 30%, rgba(201,168,76,0.7) 50%, rgba(201,168,76,0.5) 70%, transparent 100%)',
          }}
        />
        <Toolbar sx={{ py: 0.75 }}>
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
            {isZh ? 'xiejinian / 谢记年' : 'xiejinian'}
          </Typography>

          {isMobile ? (
            <Stack direction="row" spacing={1} alignItems="center">
              {languageButton}
              <IconButton
                aria-label={isZh ? '打开导航' : 'open drawer'}
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ color: '#c9a84c' }}
              >
                <MenuIcon />
              </IconButton>
            </Stack>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.path}
                  component={Link}
                  to={item.path}
                  sx={{
                    ml: 0.5,
                    px: 2,
                    py: 0.875,
                    borderRadius: '2px',
                    fontWeight: 500,
                    fontSize: '0.82rem',
                    textTransform: 'none',
                    letterSpacing: '0.05em',
                    color: '#9a9080',
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
                  {item.label}
                </Button>
              ))}
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
            background: '#0e1412',
            backdropFilter: 'blur(20px)',
            borderLeft: '1px solid #2a3830',
            pt: 2,
          },
        }}
      >
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
              mb: 1.5,
            }}
          >
            {isZh ? '导航' : 'Navigation'}
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
                primary={item.label}
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
