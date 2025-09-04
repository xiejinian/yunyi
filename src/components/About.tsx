import React from 'react';
import { Container, Typography, Box, Grid, Paper, Chip, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PersonIcon from '@mui/icons-material/Person';
import StarIcon from '@mui/icons-material/Star';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CodeIcon from '@mui/icons-material/Code';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

const About = () => {
  const achievements = [
    'Co-founder of Alibaba\'s E-commerce Middle Platform',
    'Led DingTalk international expansion from 0 to millions DAU',
    'Former Staff Engineer at Huawei, Alibaba/Ant Group',
    'Member of Alibaba Trading Technical Committee',
    'Pioneer of agile project management at Huawei',
    'Led teams ranging from 7 to 110 people'
  ];

  const certifications = [
    { name: 'PMP Certification', year: '2005', org: 'Huawei' },
    { name: 'National Senior Programmer', year: '2001', org: 'China' }
  ];

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      sx={{
        minHeight: '100vh',
        py: 12,
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      }}
    >
      <Container>
        <Typography variant="h3" component="h2" gutterBottom sx={{ mb: 6, color: 'primary.main' }}>
          About Me
        </Typography>

        <Grid container spacing={4} sx={{ alignItems: 'stretch' }}>
          {/* Personal Photo */}
          <Grid item xs={12} lg={3}>
            <Paper
              component={motion.div}
              whileHover={{ 
                scale: 1.02,
                y: -3,
                boxShadow: '0 25px 50px -12px rgba(37, 99, 235, 0.15)'
              }}
              elevation={3}
              sx={{
                p: 4,
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.9) 100%)',
                backdropFilter: 'blur(20px)',
                borderRadius: 3,
                border: '1px solid rgba(37, 99, 235, 0.1)',
                transition: 'all 0.3s ease-in-out',
                height: '100%',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 4,
                  background: 'linear-gradient(90deg, #2563eb 0%, #0ea5e9 100%)',
                },
              }}
            >
              <Box sx={{ position: 'relative', zIndex: 2, width: '100%' }}>
                <Box
                  component="img"
                  src="/image.png"
                  alt="Xie Jinian (谢记年) - CTO at Feifan Tech"
                  sx={{
                    width: '100%',
                    maxWidth: 200,
                    height: 'auto',
                    borderRadius: 3,
                    boxShadow: '0 8px 25px rgba(37, 99, 235, 0.2)',
                    mb: 3,
                    border: '3px solid rgba(255, 255, 255, 0.8)',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.02)',
                      boxShadow: '0 12px 35px rgba(37, 99, 235, 0.3)',
                    }
                  }}
                />
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: 'primary.main', 
                    fontWeight: 700,
                    mb: 1
                  }}
                >
                  Xie Jinian (谢记年)
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: 'text.secondary',
                    fontWeight: 500,
                    mb: 2
                  }}
                >
                  CTO & Software Architect
                </Typography>
                <Chip 
                  label="Feifan Tech"
                  icon={<BusinessCenterIcon />}
                  component="a"
                  href="https://feifan-tech-website.pages.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  clickable
                  sx={{
                    bgcolor: 'primary.light',
                    color: 'primary.contrastText',
                    fontWeight: 600,
                    fontSize: '0.75rem',
                    textDecoration: 'none',
                    '&:hover': {
                      bgcolor: 'primary.main',
                      transform: 'scale(1.05)',
                    },
                    '&:focus': {
                      bgcolor: 'primary.main',
                    }
                  }}
                />
              </Box>
            </Paper>
          </Grid>

          {/* Professional Background */}
          <Grid item xs={12} lg={6}>
            <Paper
              component={motion.div}
              whileHover={{ 
                scale: 1.01,
                y: -3,
                boxShadow: '0 25px 50px -12px rgba(37, 99, 235, 0.15)'
              }}
              elevation={3}
              sx={{
                p: 4,
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.9) 100%)',
                backdropFilter: 'blur(20px)',
                borderRadius: 3,
                border: '1px solid rgba(37, 99, 235, 0.1)',
                transition: 'all 0.3s ease-in-out',
                height: '100%',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 4,
                  background: 'linear-gradient(90deg, #2563eb 0%, #0ea5e9 100%)',
                },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, position: 'relative', zIndex: 2 }}>
                <Avatar
                  sx={{
                    bgcolor: 'primary.main',
                    width: 64,
                    height: 64,
                    mr: 3,
                    boxShadow: '0 8px 25px rgba(37, 99, 235, 0.3)',
                  }}
                >
                  <PersonIcon sx={{ fontSize: 32 }} />
                </Avatar>
                <Box>
                  <Typography variant="h4" color="primary.main" sx={{ fontWeight: 700, mb: 1 }}>
                    Professional Background
                  </Typography>
                  <Chip 
                    label="CTO & Software Architect"
                    icon={<BusinessCenterIcon />}
                    sx={{
                      bgcolor: 'primary.light',
                      color: 'primary.contrastText',
                      fontWeight: 600,
                    }}
                  />
                </Box>
              </Box>
              <Box sx={{ position: 'relative', zIndex: 2 }}>
                <Typography 
                  variant="body1" 
                  paragraph 
                  sx={{ 
                    lineHeight: 1.8, 
                    mb: 3,
                    fontSize: '1.1rem',
                    color: 'text.primary'
                  }}
                >
                  Currently serving as <strong>CTO at <a href="https://feifan-tech-website.pages.dev/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'none', borderBottom: '1px solid #2563eb' }}>Feifan Tech</a></strong>, leading a development team of 10 people to deliver 
                  innovative software products to clients. I specialize in providing technical support for 
                  e-commerce startups and consulting services on software architecture and project management.
                </Typography>
                <Typography 
                  variant="body1" 
                  paragraph 
                  sx={{ 
                    lineHeight: 1.8, 
                    mb: 3,
                    fontSize: '1.1rem',
                    color: 'text.primary'
                  }}
                >
                  With over <strong>20 years of experience</strong> in enterprise-level software architecture design and 
                  large-scale software platform stability assurance, I have had the privilege of working 
                  at some of China's most innovative tech companies including <strong>Huawei, Alibaba, and Ant Group</strong>.
                </Typography>
                <Typography 
                  variant="body1" 
                  paragraph 
                  sx={{ 
                    lineHeight: 1.8,
                    fontSize: '1.1rem',
                    color: 'text.primary'
                  }}
                >
                  As <strong>co-founder of Alibaba's E-commerce Middle Platform</strong>, I helped establish the fundamental 
                  development platform that powers Alibaba Group's massive e-commerce ecosystem, enabling 
                  rapid business growth and technological innovation across the organization.
                </Typography>
              </Box>
            </Paper>
          </Grid>

          {/* Education & Certifications */}
          <Grid item xs={12} lg={3}>
            <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Paper
                component={motion.div}
                whileHover={{ 
                  scale: 1.02,
                  y: -2,
                  boxShadow: '0 20px 40px rgba(37, 99, 235, 0.15)'
                }}
                elevation={3}
                sx={{
                  p: 4,
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.9) 100%)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: 3,
                  border: '1px solid rgba(34, 197, 94, 0.2)',
                  transition: 'all 0.3s ease-in-out',
                  flex: 1,
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    background: 'linear-gradient(90deg, #22c55e 0%, #16a34a 100%)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, position: 'relative', zIndex: 2 }}>
                  <Avatar
                    sx={{
                      bgcolor: '#22c55e',
                      width: 56,
                      height: 56,
                      mr: 2,
                      boxShadow: '0 4px 12px rgba(34, 197, 94, 0.3)',
                    }}
                  >
                    <SchoolIcon sx={{ fontSize: 28 }} />
                  </Avatar>
                  <Typography variant="h5" sx={{ color: '#16a34a', fontWeight: 600 }}>
                    Education
                  </Typography>
                </Box>
                <Box sx={{ position: 'relative', zIndex: 2 }}>
                  <Chip 
                    label="2001 Graduate"
                    size="small"
                    sx={{
                      bgcolor: 'rgba(34, 197, 94, 0.1)',
                      color: '#16a34a',
                      mb: 2,
                      fontWeight: 600,
                    }}
                  />
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 700, color: 'text.primary' }}>
                    Bachelor of Technology
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6, fontWeight: 500 }}>
                    Computer Science and Technology
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.5 }}>
                    National Huaqiao University, China
                  </Typography>
                </Box>
              </Paper>

              {/* Certifications */}
              <Paper
                component={motion.div}
                whileHover={{ 
                  scale: 1.02,
                  y: -2,
                  boxShadow: '0 20px 40px rgba(245, 158, 11, 0.15)'
                }}
                elevation={3}
                sx={{
                  p: 4,
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(254, 252, 232, 0.9) 100%)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: 3,
                  border: '1px solid rgba(245, 158, 11, 0.2)',
                  transition: 'all 0.3s ease-in-out',
                  flex: 1,
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    background: 'linear-gradient(90deg, #f59e0b 0%, #d97706 100%)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, position: 'relative', zIndex: 2 }}>
                  <Avatar
                    sx={{
                      bgcolor: '#f59e0b',
                      width: 56,
                      height: 56,
                      mr: 2,
                      boxShadow: '0 4px 12px rgba(245, 158, 11, 0.3)',
                    }}
                  >
                    <EmojiEventsIcon sx={{ fontSize: 28 }} />
                  </Avatar>
                  <Typography variant="h5" sx={{ color: '#d97706', fontWeight: 600 }}>
                    Certifications
                  </Typography>
                </Box>
                <Box sx={{ position: 'relative', zIndex: 2 }}>
                  {certifications.map((cert, index) => (
                    <Box 
                      key={index} 
                      sx={{ 
                        mb: index < certifications.length - 1 ? 3 : 0,
                        p: 2,
                        borderRadius: 2,
                        background: 'rgba(245, 158, 11, 0.05)',
                        border: '1px solid rgba(245, 158, 11, 0.1)',
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <StarIcon sx={{ color: '#f59e0b', mr: 1, fontSize: 18 }} />
                        <Typography variant="body1" sx={{ fontWeight: 700, lineHeight: 1.5, color: 'text.primary' }}>
                          {cert.name}
                        </Typography>
                      </Box>
                      <Typography variant="body2" sx={{ color: '#d97706', fontWeight: 600 }}>
                        {cert.year} • {cert.org}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Paper>
            </Box>
          </Grid>

          {/* Key Achievements */}
          <Grid item xs={12}>
            <Paper
              component={motion.div}
              whileHover={{ 
                scale: 1.005,
                y: -2,
                boxShadow: '0 25px 50px -12px rgba(139, 92, 246, 0.15)'
              }}
              elevation={3}
              sx={{
                p: 4,
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.9) 100%)',
                backdropFilter: 'blur(20px)',
                borderRadius: 3,
                border: '1px solid rgba(139, 92, 246, 0.1)',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 4,
                  background: 'linear-gradient(90deg, #8b5cf6 0%, #7c3aed 100%)',
                },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, position: 'relative', zIndex: 2 }}>
                <Avatar
                  sx={{
                    bgcolor: '#8b5cf6',
                    width: 64,
                    height: 64,
                    mr: 3,
                    boxShadow: '0 8px 25px rgba(139, 92, 246, 0.3)',
                  }}
                >
                  <WorkIcon sx={{ fontSize: 32 }} />
                </Avatar>
                <Box>
                  <Typography variant="h4" sx={{ color: '#7c3aed', fontWeight: 700, mb: 1 }}>
                    Key Achievements
                  </Typography>
                  <Chip 
                    label="20+ Years Experience"
                    icon={<TrendingUpIcon />}
                    sx={{
                      bgcolor: 'rgba(139, 92, 246, 0.1)',
                      color: '#7c3aed',
                      fontWeight: 600,
                      border: '1px solid rgba(139, 92, 246, 0.2)',
                    }}
                  />
                </Box>
              </Box>
              <Grid container spacing={3} sx={{ position: 'relative', zIndex: 2 }}>
                {achievements.map((achievement, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Box
                      component={motion.div}
                      whileHover={{ scale: 1.02 }}
                      sx={{
                        p: 3,
                        borderRadius: 3,
                        background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(14, 165, 233, 0.1) 100%)',
                        border: '1px solid rgba(37, 99, 235, 0.2)',
                        backdropFilter: 'blur(10px)',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        transition: 'all 0.3s ease-in-out',
                        position: 'relative',
                        overflow: 'hidden',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                          zIndex: 1,
                        },
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.15) 0%, rgba(14, 165, 233, 0.15) 100%)',
                          borderColor: 'rgba(37, 99, 235, 0.3)',
                          boxShadow: '0 10px 25px -5px rgba(37, 99, 235, 0.25)',
                        },
                        '& > *': {
                          position: 'relative',
                          zIndex: 2,
                        },
                      }}
                    >
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          fontWeight: 500,
                          color: 'primary.main',
                          lineHeight: 1.6,
                        }}
                      >
                        {achievement}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>

          {/* Philosophy */}
          <Grid item xs={12}>
            <Paper
              component={motion.div}
              whileHover={{ 
                scale: 1.01,
                y: -3,
                boxShadow: '0 25px 50px -12px rgba(14, 165, 233, 0.2)'
              }}
              elevation={3}
              sx={{
                p: 6,
                background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.9) 0%, rgba(37, 99, 235, 0.8) 100%)',
                color: 'white',
                borderRadius: 3,
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                  zIndex: 1,
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  top: '-50%',
                  right: '-50%',
                  width: '200%',
                  height: '200%',
                  background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 50%)',
                  animation: 'float 20s ease-in-out infinite',
                  zIndex: 1,
                },
                '@keyframes float': {
                  '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
                  '33%': { transform: 'translate(20px, -20px) rotate(120deg)' },
                  '66%': { transform: 'translate(-15px, 15px) rotate(240deg)' },
                },
              }}
            >
              <Box sx={{ position: 'relative', zIndex: 2 }}>
                <Avatar
                  sx={{
                    bgcolor: 'rgba(255, 255, 255, 0.15)',
                    width: 80,
                    height: 80,
                    mx: 'auto',
                    mb: 3,
                    backdropFilter: 'blur(10px)',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                  }}
                >
                  <CodeIcon sx={{ fontSize: 40, color: 'white' }} />
                </Avatar>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    mb: 3, 
                    fontStyle: 'italic',
                    fontWeight: 600,
                    lineHeight: 1.4,
                    textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}
                >
                  "Leading teams to achieve excellent business and technical goals through 
                  enterprise-level software architecture and agile project management."
                </Typography>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.9)',
                    maxWidth: '800px',
                    mx: 'auto',
                    lineHeight: 1.6,
                    fontWeight: 400
                  }}
                >
                  My passion lies in building robust, scalable systems and mentoring teams to deliver 
                  innovative solutions that make a real impact on businesses and users worldwide.
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;