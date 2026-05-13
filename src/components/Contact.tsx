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
        background: '#fafaf7',
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
            background: '#ffffff',
            border: '1px solid #edeae4',
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
                  whileHover={{ y: -4 }}
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    background: '#fafaf7',
                    border: '1px solid #edeae4',
                    height: '100%',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                      background: '#faf6f2',
                      borderColor: 'rgba(192, 120, 68, 0.25)',
                      boxShadow: '0 8px 24px -4px rgba(192, 120, 68, 0.12)',
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
                          background: 'rgba(192, 120, 68, 0.08)',
                          color: '#c07844',
                          borderRadius: 2,
                          fontSize: '0.75rem',
                          fontWeight: 500,
                          border: '1px solid rgba(192, 120, 68, 0.15)',
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
            background: '#faf6f2',
            borderRadius: 3,
            textAlign: 'center',
            border: '1px solid rgba(192, 120, 68, 0.2)',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0, left: 0, right: 0,
              height: 4,
              background: 'linear-gradient(90deg, #c07844 0%, #d4955e 100%)',
            },
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ color: '#1a1918' }}>
            Let's Work Together
          </Typography>
          <Typography variant="h6" paragraph sx={{ mb: 4, color: '#6b6560' }}>
            Ready to discuss your next project or explore collaboration opportunities?
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              href="mailto:yymhxie@gmail.com"
              sx={{
                fontWeight: 600,
                py: 1.75,
                px: 4,
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