import React from 'react';
import { Box, Typography, Container, Button, Stack, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EmailIcon from '@mui/icons-material/Email';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupIcon from '@mui/icons-material/Group';
import BusinessIcon from '@mui/icons-material/Business';

const Home = () => {
  const achievements = [
    { icon: BusinessIcon, text: 'CTO at Feifan Tech', color: 'primary', link: 'https://feifan-tech-website.pages.dev/' },
    { icon: TrendingUpIcon, text: '20+ Years Experience', color: 'secondary' },
    { icon: GroupIcon, text: 'Led 110+ People Teams', color: 'success' },
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        background: '#fafaf7',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(192, 120, 68, 0.08) 0%, transparent 70%)',
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
          {/* Achievement Chips */}
          <Stack 
            direction="row" 
            spacing={2} 
            sx={{ mb: 4, justifyContent: 'center', flexWrap: 'wrap', gap: 2 }}
          >
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <Chip
                    icon={<IconComponent />}
                    label={achievement.text}
                    variant="outlined"
                    component={achievement.link ? "a" : "div"}
                    href={achievement.link}
                    target={achievement.link ? "_blank" : undefined}
                    rel={achievement.link ? "noopener noreferrer" : undefined}
                    clickable={!!achievement.link}
                    sx={{
                      py: 3,
                      px: 2,
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      backgroundColor: '#ffffff',
                      color: '#4a4440',
                      border: '1.5px solid #edeae4',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease-in-out',
                      '& .MuiChip-icon': {
                        color: '#c07844',
                      },
                      '&:hover': achievement.link ? {
                        backgroundColor: '#faf6f2',
                        borderColor: '#c07844',
                        color: '#c07844',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 12px rgba(192, 120, 68, 0.12)',
                      } : {},
                    }}
                  />
                </motion.div>
              );
            })}
          </Stack>

          {/* Main Content */}
          <Box sx={{ textAlign: 'center' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Typography
                variant="h1"
                component="h1"
                gutterBottom
                sx={{
                  fontWeight: 800,
                  color: '#1a1918',
                  mb: 2,
                }}
              >
                Xie Jinian{' '}
                <Box component="span" sx={{ color: '#c07844' }}>
                  (谢记年)
                </Box>
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Typography
                variant="h3"
                gutterBottom
                sx={{
                  color: '#4a4440',
                  mb: 3,
                  fontWeight: 500,
                }}
              >
                CTO at{' '}
                <Typography
                  component="a"
                  href="https://feifan-tech-website.pages.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="h3"
                  sx={{
                    color: '#c07844',
                    textDecoration: 'none',
                    borderBottom: '2px solid rgba(192, 120, 68, 0.3)',
                    fontWeight: 600,
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                      borderBottomColor: '#c07844',
                    }
                  }}
                >
                  Feifan Tech
                </Typography>
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <Typography
                variant="h6"
                paragraph
                sx={{
                  color: '#6b6560',
                  maxWidth: '820px',
                  mx: 'auto',
                  mb: 5,
                  lineHeight: 1.8,
                  fontSize: '1.2rem',
                  fontWeight: 400,
                }}
              >
                Former Staff Engineer at Huawei, Alibaba/Ant Group. Co-founder of Alibaba's E-commerce Middle Platform.
                <br />
                Leading enterprise-level software architecture and building scalable systems that power millions of users.
              </Typography>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={3} 
                sx={{ justifyContent: 'center', mt: 6 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  component={RouterLink}
                  to="/projects"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    py: 1.75,
                    px: 4,
                    fontSize: '1rem',
                    textDecoration: 'none',
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
                    py: 1.75,
                    px: 4,
                    fontSize: '1rem',
                    textDecoration: 'none',
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
