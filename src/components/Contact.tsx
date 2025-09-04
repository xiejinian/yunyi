import React from 'react';
import { Container, Typography, Box, Grid, Paper, Card, CardContent, Button } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessIcon from '@mui/icons-material/Business';

const Contact = () => {
  const contactInfo = [
    {
      icon: EmailIcon,
      title: 'Email',
      content: 'yymhxie@gmail.com',
      link: 'mailto:yymhxie@gmail.com',
      description: 'Feel free to reach out for business inquiries or collaboration opportunities'
    },
    {
      icon: LocationOnIcon,
      title: 'Location',
      content: 'Hangzhou, Zhejiang, China',
      link: 'https://maps.google.com/?q=Hangzhou,Zhejiang,China',
      description: 'Based in the heart of China\'s tech innovation hub'
    },
    {
      icon: BusinessIcon,
      title: 'Current Position',
      content: 'CTO at Feifan Tech',
      link: 'https://feifan-tech-website.pages.dev/',
      description: 'Leading technology strategy and development team'
    }
  ];

  const services = [
    {
      title: 'Technical Consulting',
      description: 'Enterprise software architecture design and large-scale platform development consulting',
      areas: ['System Architecture', 'Platform Design', 'Technology Strategy']
    },
    {
      title: 'Project Management',
      description: 'Agile project management and team leadership for technology initiatives',
      areas: ['Agile Methodology', 'Team Leadership', 'Process Optimization']
    },
    {
      title: 'E-commerce Solutions',
      description: 'Specialized consulting for e-commerce platforms and middle platform architecture',
      areas: ['E-commerce Platform', 'Middle Platform', 'Scalability Solutions']
    }
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
          Get In Touch
        </Typography>

        {/* Contact Information */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  component={motion.div}
                  whileHover={{ scale: 1.05 }}
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    cursor: info.link ? 'pointer' : 'default'
                  }}
                  onClick={() => info.link && window.open(info.link, '_blank')}
                >
                  <CardContent sx={{ p: 3 }}>
                    <IconComponent
                      color="primary"
                      sx={{ fontSize: 40, mb: 2 }}
                    />
                    <Typography variant="h6" gutterBottom color="primary.main">
                      {info.title}
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 'medium', mb: 1 }}>
                      {info.content}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {info.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>

        {/* Professional Services */}
        <Paper
          elevation={3}
          sx={{
            p: 4,
            mb: 6,
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.8) 100%)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(226, 232, 240, 0.6)',
            borderRadius: 3,
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ mb: 4, color: 'primary.main', textAlign: 'center' }}>
            Professional Services
          </Typography>
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box
                  component={motion.div}
                  whileHover={{ y: -5 }}
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.08) 0%, rgba(14, 165, 233, 0.08) 100%)',
                    border: '1px solid rgba(37, 99, 235, 0.15)',
                    backdropFilter: 'blur(10px)',
                    height: '100%',
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
                      transform: 'translateY(-8px)',
                      background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.12) 0%, rgba(14, 165, 233, 0.12) 100%)',
                      borderColor: 'rgba(37, 99, 235, 0.25)',
                      boxShadow: '0 15px 35px -5px rgba(37, 99, 235, 0.2)',
                    },
                    '& > *': {
                      position: 'relative',
                      zIndex: 2,
                    },
                  }}
                >
                  <Typography variant="h6" gutterBottom color="primary.main" sx={{ fontWeight: 600 }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body1" paragraph sx={{ lineHeight: 1.7 }}>
                    {service.description}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 2, fontWeight: 500 }}>
                    Key Areas:
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {service.areas.map((area, i) => (
                      <Typography 
                        key={i} 
                        variant="body2" 
                        sx={{ 
                          px: 2,
                          py: 0.5,
                          background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(14, 165, 233, 0.1) 100%)',
                          color: 'primary.main',
                          borderRadius: 2,
                          fontSize: '0.75rem',
                          fontWeight: 500,
                          border: '1px solid rgba(37, 99, 235, 0.2)',
                          backdropFilter: 'blur(5px)',
                        }}
                      >
                        {area}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* Call to Action */}
        <Paper
          elevation={3}
          sx={{
            p: 6,
            background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.85) 0%, rgba(30, 64, 175, 0.75) 100%)',
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
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 100%)',
              backdropFilter: 'blur(15px)',
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
            '& > *': {
              position: 'relative',
              zIndex: 2,
            },
            '@keyframes float': {
              '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
              '33%': { transform: 'translate(20px, -20px) rotate(120deg)' },
              '66%': { transform: 'translate(-15px, 15px) rotate(240deg)' },
            },
          }}
        >
          <Typography variant="h4" gutterBottom>
            Let's Work Together
          </Typography>
          <Typography variant="h6" paragraph sx={{ mb: 4 }}>
            Ready to discuss your next project or explore collaboration opportunities?
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
            <Button
              variant="outlined"
              size="large"
              href="mailto:yymhxie@gmail.com"
              sx={{
                borderColor: 'white',
                color: 'white',
                fontWeight: 600,
                py: 2,
                px: 4,
                borderWidth: 2,
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                }
              }}
              startIcon={<EmailIcon />}
            >
              Send Email
            </Button>
          </Box>
        </Paper>

        {/* Additional Info */}
        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Typography variant="body1" color="text.secondary" paragraph>
            Currently providing consulting services for various enterprises on software architecture and project management.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Response time: Usually within 24 hours • Time zone: GMT+8 (China Standard Time)
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;