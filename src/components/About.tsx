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
        background: '#0e1412',
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
                boxShadow: '0 16px 40px -8px rgba(184, 92, 56, 0.12)'
              }}
              elevation={3}
              sx={{
                p: 4,
                background: '#141c18',
                borderRadius: 3,
                border: '1px solid #2a3830',
                transition: 'all 0.2s ease-in-out',
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
                  background: 'linear-gradient(90deg, #b85c38 0%, #d4795a 100%)',
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
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                    mb: 3,
                    border: '3px solid #2a3830',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.02)',
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
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
                boxShadow: '0 16px 40px -8px rgba(184, 92, 56, 0.12)'
              }}
              elevation={3}
              sx={{
                p: 4,
                background: '#141c18',
                borderRadius: 3,
                border: '1px solid #2a3830',
                transition: 'all 0.2s ease-in-out',
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
                  background: 'linear-gradient(90deg, #b85c38 0%, #d4795a 100%)',
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
                    boxShadow: '0 4px 16px rgba(184, 92, 56, 0.25)',
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
                      bgcolor: 'rgba(184, 92, 56, 0.1)',
                      color: '#b85c38',
                      fontWeight: 600,
                      border: '1px solid rgba(184, 92, 56, 0.2)',
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
                  Currently serving as <strong>CTO at <a href="https://feifan-tech-website.pages.dev/" target="_blank" rel="noopener noreferrer" style={{ color: '#c9a84c', textDecoration: 'none', borderBottom: '1px solid #c9a84c' }}>Feifan Tech</a></strong>, leading a development team of 10 people to deliver
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
                  boxShadow: '0 12px 32px -4px rgba(184, 92, 56, 0.12)'
                }}
                elevation={3}
                sx={{
                  p: 4,
                  background: '#141c18',
                  borderRadius: 3,
                  border: '1px solid #2a3830',
                  transition: 'all 0.2s ease-in-out',
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
                    background: 'linear-gradient(90deg, #4a8c60 0%, #72b88a 100%)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, position: 'relative', zIndex: 2 }}>
                  <Avatar
                    sx={{
                      bgcolor: '#4a8c60',
                      width: 56,
                      height: 56,
                      mr: 2,
                      boxShadow: '0 4px 12px rgba(74, 140, 96, 0.2)',
                    }}
                  >
                    <SchoolIcon sx={{ fontSize: 28 }} />
                  </Avatar>
                  <Typography variant="h5" sx={{ color: '#4a8c60', fontWeight: 600 }}>
                    Education
                  </Typography>
                </Box>
                <Box sx={{ position: 'relative', zIndex: 2 }}>
                  <Chip 
                    label="2001 Graduate"
                    size="small"
                    sx={{
                      bgcolor: 'rgba(74, 140, 96, 0.08)',
                      color: '#4a8c60',
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
                  boxShadow: '0 12px 32px -4px rgba(184, 92, 56, 0.12)'
                }}
                elevation={3}
                sx={{
                  p: 4,
                  background: '#141c18',
                  borderRadius: 3,
                  border: '1px solid #2a3830',
                  transition: 'all 0.2s ease-in-out',
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
                    background: 'linear-gradient(90deg, #b85c38 0%, #d4795a 100%)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, position: 'relative', zIndex: 2 }}>
                  <Avatar
                    sx={{
                      bgcolor: '#b85c38',
                      width: 56,
                      height: 56,
                      mr: 2,
                      boxShadow: '0 4px 12px rgba(184, 92, 56, 0.2)',
                    }}
                  >
                    <EmojiEventsIcon sx={{ fontSize: 28 }} />
                  </Avatar>
                  <Typography variant="h5" sx={{ color: '#b85c38', fontWeight: 600 }}>
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
                        background: '#182420',
                        border: '1px solid rgba(184, 92, 56, 0.1)',
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <StarIcon sx={{ color: '#b85c38', mr: 1, fontSize: 18 }} />
                        <Typography variant="body1" sx={{ fontWeight: 700, lineHeight: 1.5, color: 'text.primary' }}>
                          {cert.name}
                        </Typography>
                      </Box>
                      <Typography variant="body2" sx={{ color: '#b85c38', fontWeight: 600 }}>
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
                boxShadow: '0 16px 40px -8px rgba(184, 92, 56, 0.12)'
              }}
              elevation={3}
              sx={{
                p: 4,
                background: '#141c18',
                borderRadius: 3,
                border: '1px solid #2a3830',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 4,
                  background: 'linear-gradient(90deg, #b85c38 0%, #d4795a 100%)',
                },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, position: 'relative', zIndex: 2 }}>
                <Avatar
                  sx={{
                    bgcolor: '#b85c38',
                    width: 64,
                    height: 64,
                    mr: 3,
                    boxShadow: '0 4px 16px rgba(184, 92, 56, 0.25)',
                  }}
                >
                  <WorkIcon sx={{ fontSize: 32 }} />
                </Avatar>
                <Box>
                  <Typography variant="h4" sx={{ color: '#b85c38', fontWeight: 700, mb: 1 }}>
                    Key Achievements
                  </Typography>
                  <Chip 
                    label="20+ Years Experience"
                    icon={<TrendingUpIcon />}
                    sx={{
                      bgcolor: 'rgba(184, 92, 56, 0.1)',
                      color: '#b85c38',
                      fontWeight: 600,
                      border: '1px solid rgba(184, 92, 56, 0.2)',
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
                        background: '#182420',
                        border: '1px solid rgba(184, 92, 56, 0.15)',
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
                          background: 'linear-gradient(135deg, rgba(201, 168, 76, 0.08) 0%, rgba(201, 168, 76, 0.04) 100%)',
                          zIndex: 1,
                        },
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          background: 'rgba(201, 168, 76, 0.08)',
                          borderColor: 'rgba(184, 92, 56, 0.25)',
                          boxShadow: '0 8px 24px -4px rgba(184, 92, 56, 0.12)',
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
                scale: 1.005,
                y: -3,
                boxShadow: '0 12px 32px -8px rgba(184, 92, 56, 0.15)'
              }}
              elevation={3}
              sx={{
                p: 6,
                background: '#182420',
                borderRadius: 3,
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid rgba(184, 92, 56, 0.2)',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 4,
                  background: 'linear-gradient(90deg, #b85c38 0%, #d4795a 100%)',
                },
              }}
            >
              <Box>
                <Avatar
                  sx={{
                    bgcolor: 'rgba(184, 92, 56, 0.1)',
                    width: 80,
                    height: 80,
                    mx: 'auto',
                    mb: 3,
                    border: '2px solid rgba(184, 92, 56, 0.2)',
                  }}
                >
                  <CodeIcon sx={{ fontSize: 40, color: '#b85c38' }} />
                </Avatar>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    mb: 3, 
                    fontStyle: 'italic',
                    fontWeight: 600,
                    lineHeight: 1.4,
                    color: '#e8e0d0',
                  }}
                >
                  "Leading teams to achieve excellent business and technical goals through 
                  enterprise-level software architecture and agile project management."
                </Typography>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: '#8a8070',
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