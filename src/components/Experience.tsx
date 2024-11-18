import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      year: '2003-Present',
      title: 'Senior Software Engineer',
      company: 'Alibaba Group',
      description: 'Leading large-scale software design and development initiatives. Specializing in building robust and scalable systems that serve millions of users.',
      achievements: [
        'Architected and implemented mission-critical systems',
        'Led teams in developing scalable solutions',
        'Mentored junior developers and promoted best practices',
        'Contributed to major technological transformations'
      ]
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
        backgroundColor: 'background.default'
      }}
    >
      <Container>
        <Typography variant="h3" component="h2" gutterBottom sx={{ mb: 6, color: 'primary.main' }}>
          Professional Experience
        </Typography>

        <Timeline position="alternate">
          {experiences.map((exp, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot color="primary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    backgroundColor: 'white',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      transition: 'transform 0.3s ease-in-out'
                    }
                  }}
                >
                  <Typography variant="h6" component="h3" color="primary.main">
                    {exp.year}
                  </Typography>
                  <Typography variant="h5" component="h3" sx={{ mt: 1 }}>
                    {exp.title}
                  </Typography>
                  <Typography color="text.secondary" sx={{ mb: 2 }}>
                    {exp.company}
                  </Typography>
                  <Typography paragraph>
                    {exp.description}
                  </Typography>
                  <Box component="ul" sx={{ pl: 2 }}>
                    {exp.achievements.map((achievement, i) => (
                      <Typography component="li" key={i} sx={{ mb: 1 }}>
                        {achievement}
                      </Typography>
                    ))}
                  </Box>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Box>
  );
};

export default Experience;
