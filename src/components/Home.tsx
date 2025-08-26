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
    { icon: BusinessIcon, text: 'CTO at Feifan Tech', color: 'primary' },
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
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.9) 0%, rgba(30, 64, 175, 0.8) 100%)',
          zIndex: 1,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: '-50%',
          right: '-50%',
          width: '200%',
          height: '200%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
          animation: 'float 20s ease-in-out infinite',
          zIndex: 2,
        },
        '@keyframes float': {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '33%': { transform: 'translate(30px, -30px) rotate(120deg)' },
          '66%': { transform: 'translate(-20px, 20px) rotate(240deg)' },
        },
      }}
    >
      <Container sx={{ position: 'relative', zIndex: 3 }}>
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
                    color={achievement.color as any}
                    variant="filled"
                    sx={{
                      py: 3,
                      px: 2,
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      color: 'white',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      '& .MuiChip-icon': {
                        color: 'white',
                      },
                    }}
                  />
                </motion.div>
              );
            })}
          </Stack>

          {/* Main Content */}
          <Box sx={{ textAlign: 'center', color: 'white' }}>
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
                  background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 2,
                  textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                }}
              >
                Xie Jinian (谢记年)
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
                  color: 'rgba(255, 255, 255, 0.9)',
                  mb: 3,
                  fontWeight: 500,
                }}
              >
                CTO at Feifan Tech
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
                  color: 'rgba(255, 255, 255, 0.85)',
                  maxWidth: '900px',
                  mx: 'auto',
                  mb: 5,
                  lineHeight: 1.8,
                  fontSize: '1.25rem',
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
                    py: 2,
                    px: 4,
                    fontSize: '1.1rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    backdropFilter: 'blur(10px)',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    textDecoration: 'none',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.3)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
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
                    py: 2,
                    px: 4,
                    fontSize: '1.1rem',
                    color: 'white',
                    borderColor: 'rgba(255, 255, 255, 0.6)',
                    borderWidth: '2px',
                    backdropFilter: 'blur(10px)',
                    textDecoration: 'none',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      borderColor: 'rgba(255, 255, 255, 0.8)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
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

      {/* Decorative Elements */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px)',
          zIndex: 2,
          animation: 'pulse 4s ease-in-out infinite',
          '@keyframes pulse': {
            '0%, 100%': { transform: 'scale(1)', opacity: 0.7 },
            '50%': { transform: 'scale(1.1)', opacity: 0.4 },
          },
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '15%',
          right: '8%',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(15px)',
          zIndex: 2,
          animation: 'float 6s ease-in-out infinite reverse',
        }}
      />
    </Box>
  );
};

export default Home;
