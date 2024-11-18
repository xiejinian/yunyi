import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ fontWeight: 'bold', color: '#1a237e' }}
          >
            Xie Jinian
          </Typography>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ color: '#424242', mb: 4 }}
          >
            Senior Software Engineer at Alibaba Group
          </Typography>
          <Typography
            variant="h6"
            paragraph
            sx={{ color: '#616161', maxWidth: '800px', mb: 4 }}
          >
            With 20 years of experience in large-scale software design and development,
            I specialize in building robust and scalable systems that power millions of users.
          </Typography>
          <Box sx={{ mt: 4 }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              href="#projects"
              sx={{ mr: 2 }}
            >
              View My Work
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              href="#contact"
            >
              Contact Me
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Home;
