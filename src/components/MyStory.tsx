import React from 'react';
import { Box, Button, Container, Paper, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const MyStory = () => {
  const navigate = useNavigate();

  return (
    <Box component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} sx={{ py: 10 }}>
      <Container maxWidth="md">
        <Paper sx={{ p: { xs: 3, md: 6 }, borderRadius: 3 }}>
          <Typography variant="overline" sx={{ letterSpacing: 2, color: 'text.secondary' }}>
            代码人生 · 云翼回忆录
          </Typography>
          <Typography variant="h3" sx={{ mt: 1, mb: 2, fontWeight: 700 }}>
            我的故事
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
            从 2001 到 2023，从 VB 到 AI。这是我的二十年技术旅程：关于成长、迁徙、系统演进、组织协作与再出发。
          </Typography>
          <Button variant="contained" onClick={() => navigate('/story/biography-2001-2023')}>
            阅读完整传记
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default MyStory;
