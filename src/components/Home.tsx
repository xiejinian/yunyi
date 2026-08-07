import React from 'react';
import { Box, Typography, Container, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EmailIcon from '@mui/icons-material/Email';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupIcon from '@mui/icons-material/Group';
import BusinessIcon from '@mui/icons-material/Business';

const Home = () => {
  const badges = [
    { icon: BusinessIcon, label: 'CTO', sub: 'Feifan Tech', link: 'https://feifan-tech-website.pages.dev/' },
    { icon: TrendingUpIcon, label: '20+ YRS', sub: 'Experience' },
    { icon: GroupIcon, label: '110+', sub: 'People Led' },
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        background: '#0e1412',
        overflow: 'hidden',
        // Subtle grid lines — engineering-drawing feel
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(42,56,48,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(42,56,48,0.35) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          zIndex: 0,
        },
        // Radial vignette to soften edges
        '&::after': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 75% 70% at 50% 50%, transparent 40%, rgba(14,20,18,0.85) 100%)',
          zIndex: 1,
        },
      }}
    >
      <Container sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* System-log status line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <Typography
              sx={{
                fontFamily: '"JetBrains Mono", "Courier Prime", monospace',
                fontSize: '0.72rem',
                letterSpacing: '0.08em',
                color: '#4a8c60',
                textAlign: 'center',
                mb: 4,
                '&::before': { content: '"[  OK  ] "', color: '#4a8c60' },
              }}
            >
              20+ years of enterprise engineering experience loaded
            </Typography>
          </motion.div>

          {/* Badge row — styled as industrial nameplates */}
          <Stack
            direction="row"
            sx={{ mb: 5, justifyContent: 'center', flexWrap: 'wrap', gap: 1.5 }}
          >
            {badges.map((badge, index) => {
              const Icon = badge.icon;
              const inner = (
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.25,
                    px: 2.5,
                    py: 1.25,
                    border: '1px solid #2a3830',
                    borderRadius: '2px',
                    background: 'rgba(20,28,24,0.8)',
                    cursor: badge.link ? 'pointer' : 'default',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': badge.link
                      ? {
                          borderColor: 'rgba(201,168,76,0.45)',
                          background: 'rgba(201,168,76,0.06)',
                        }
                      : {},
                  }}
                >
                  <Icon sx={{ fontSize: '1rem', color: '#c9a84c', opacity: 0.85 }} />
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: '"JetBrains Mono", monospace',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                        color: '#c9a84c',
                        lineHeight: 1.2,
                      }}
                    >
                      {badge.label}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '0.7rem',
                        letterSpacing: '0.04em',
                        color: '#8a8070',
                        lineHeight: 1.2,
                      }}
                    >
                      {badge.sub}
                    </Typography>
                  </Box>
                </Box>
              );

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.45 + index * 0.1 }}
                >
                  {badge.link ? (
                    <Box
                      component="a"
                      href={badge.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ textDecoration: 'none', display: 'block' }}
                    >
                      {inner}
                    </Box>
                  ) : (
                    inner
                  )}
                </motion.div>
              );
            })}
          </Stack>

          {/* Main name */}
          <Box sx={{ textAlign: 'center' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  mb: 1,
                  fontFamily: '"JetBrains Mono", "Courier Prime", "Noto Serif SC", monospace',
                  fontWeight: 700,
                  color: '#e8e0d0',
                  letterSpacing: '0.04em',
                }}
              >
                Xie Jinian
              </Typography>
              <Typography
                sx={{
                  fontFamily: '"Noto Serif SC", serif',
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  color: 'rgba(201,168,76,0.75)',
                  letterSpacing: '0.2em',
                  mb: 3,
                }}
              >
                谢记年
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <Typography
                variant="h3"
                sx={{
                  color: '#8a8070',
                  mb: 3,
                  fontWeight: 400,
                  fontSize: '1.35rem',
                  letterSpacing: '0.02em',
                }}
              >
                CTO at{' '}
                <Typography
                  component="a"
                  href="https://feifan-tech-website.pages.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    fontSize: 'inherit',
                    fontWeight: 600,
                    color: '#c9a84c',
                    textDecoration: 'none',
                    borderBottom: '1px solid rgba(201,168,76,0.3)',
                    transition: 'border-color 0.2s',
                    '&:hover': { borderBottomColor: '#c9a84c' },
                  }}
                >
                  Feifan Tech
                </Typography>
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <Typography
                sx={{
                  color: '#8a8070',
                  maxWidth: '780px',
                  mx: 'auto',
                  mb: 6,
                  lineHeight: 1.85,
                  fontSize: '1rem',
                  fontWeight: 400,
                }}
              >
                Former Staff Engineer at Huawei, Alibaba/Ant Group. Co-founder of Alibaba's E-commerce Middle Platform.
                <br />
                Leading enterprise-level software architecture and building scalable systems that power millions of users.
              </Typography>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2.5}
                sx={{ justifyContent: 'center' }}
              >
                <Button
                  variant="contained"
                  size="large"
                  component={RouterLink}
                  to="/projects"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    py: 1.5,
                    px: 4,
                    fontSize: '0.9rem',
                    letterSpacing: '0.06em',
                    fontWeight: 700,
                    textDecoration: 'none',
                    borderRadius: '2px',
                    background: '#c9a84c',
                    color: '#0e1412',
                    '&:hover': {
                      background: '#dbbf6e',
                      boxShadow: '0 4px 20px rgba(201,168,76,0.2)',
                    },
                  }}
                >
                  View My Work
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  component={RouterLink}
                  to="/contact"
                  startIcon={<EmailIcon />}
                  sx={{
                    py: 1.5,
                    px: 4,
                    fontSize: '0.9rem',
                    letterSpacing: '0.06em',
                    textDecoration: 'none',
                    borderRadius: '2px',
                    borderColor: '#2a3830',
                    color: '#c9a84c',
                    '&:hover': {
                      borderColor: '#c9a84c',
                      backgroundColor: 'rgba(201,168,76,0.06)',
                    },
                  }}
                >
                  Contact Me
                </Button>
              </Stack>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Home;
