import React from 'react';
import { Container, Typography, Card, CardContent, Box, Chip, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import BusinessIcon from '@mui/icons-material/Business';
import CodeIcon from '@mui/icons-material/Code';
import PersonIcon from '@mui/icons-material/Person';
import StarIcon from '@mui/icons-material/Star';

const Projects = () => {
  const project = {
    name: 'Alibaba Middle Platform',
    description: 'The core platform of Alibaba e-commerce ecosystem, supporting all business units with extensible architecture. This foundational system powers the massive Double 11 Shopping Festival and serves as the backbone for Alibaba\'s various business operations.',
    role: 'Led the Taobao Business Unit team, collaborating across multiple BUs to architect and implement the platform infrastructure.',
    technologies: ['Java 8', 'Spring Framework', 'Micro Core', 'Plugin System'],
    impact: 'Established the fundamental development platform for Alibaba Group, enabling rapid business growth and technological innovation across the organization.',
    keyFeatures: [
      'Extensible Architecture',
      'Cross-BU Integration',
      'High-Performance Infrastructure',
      'Scalable Plugin System'
    ]
  };

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      sx={{
        minHeight: '100vh',
        py: 12,
        backgroundColor: 'background.default'
      }}
    >
      <Container>
        <Typography 
          variant="h3" 
          component="h2" 
          gutterBottom 
          sx={{ 
            mb: 6, 
            color: 'primary.main',
            fontWeight: 'bold'
          }}
        >
          Notable Projects
        </Typography>

        <Card
          component={motion.div}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          sx={{
            mb: 4,
            borderRadius: 2,
            boxShadow: 3,
            overflow: 'visible'
          }}
        >
          <CardContent sx={{ p: 4 }}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Typography variant="h4" gutterBottom color="primary.main">
                  {project.name}
                </Typography>
                <Typography variant="body1" paragraph>
                  {project.description}
                </Typography>
              </Grid>

              <Grid item xs={12} md={6}>
                <Box sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <PersonIcon color="primary" sx={{ mr: 1 }} />
                    <Typography variant="h6">Role</Typography>
                  </Box>
                  <Typography variant="body1">
                    {project.role}
                  </Typography>
                </Box>

                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <CodeIcon color="primary" sx={{ mr: 1 }} />
                    <Typography variant="h6">Technologies</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {project.technologies.map((tech, index) => (
                      <Chip
                        key={index}
                        label={tech}
                        color="primary"
                        variant="outlined"
                        size="medium"
                      />
                    ))}
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <Box sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <StarIcon color="primary" sx={{ mr: 1 }} />
                    <Typography variant="h6">Key Features</Typography>
                  </Box>
                  <Box component="ul" sx={{ pl: 2, mt: 1 }}>
                    {project.keyFeatures.map((feature, index) => (
                      <Typography component="li" key={index} sx={{ mb: 1 }}>
                        {feature}
                      </Typography>
                    ))}
                  </Box>
                </Box>

                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <BusinessIcon color="primary" sx={{ mr: 1 }} />
                    <Typography variant="h6">Impact</Typography>
                  </Box>
                  <Typography variant="body1">
                    {project.impact}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default Projects;
