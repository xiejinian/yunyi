import React from 'react';
import { Container, Typography, Box, Grid, Paper, Chip, LinearProgress, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LanguageIcon from '@mui/icons-material/Language';
import VerifiedIcon from '@mui/icons-material/Verified';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import GroupsIcon from '@mui/icons-material/Groups';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import StarIcon from '@mui/icons-material/Star';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const Skills = () => {
  const technicalSkills = [
    { name: 'Java Platform', level: 95, category: 'Core Technology' },
    { name: 'Enterprise Architecture Design', level: 95, category: 'Architecture' },
    { name: 'Large-scale Platform Development', level: 90, category: 'Platform' },
    { name: 'Microservices Architecture', level: 90, category: 'Architecture' },
    { name: 'E-commerce Platforms', level: 95, category: 'Domain' },
    { name: 'Low-code/No-code Platforms', level: 85, category: 'Platform' },
    { name: 'Cloud Computing', level: 85, category: 'Infrastructure' },
    { name: 'System Integration', level: 90, category: 'Integration' }
  ];

  const managementSkills = [
    { name: 'Agile Project Management', level: 95 },
    { name: 'Team Leadership', level: 95 },
    { name: 'Technical Architecture', level: 95 },
    { name: 'Product Development', level: 90 },
    { name: 'Quality Assurance', level: 90 },
    { name: 'Strategic Planning', level: 85 }
  ];

  const certifications = [
    {
      name: 'Project Management Professional (PMP)',
      issuer: 'Huawei',
      year: '2005',
      type: 'Management'
    },
    {
      name: 'National Senior Programmer Certification',
      issuer: 'China National Certification',
      year: '2001',
      type: 'Technical'
    }
  ];

  const languages = [
    { name: 'Chinese', level: 'Native', proficiency: 100, description: 'Mandarin (Native Speaker)' },
    { name: 'English', level: 'CET-6 (Good at Reading and Writing)', proficiency: 80, description: 'Business English, Technical Writing' },
    { name: 'Technical Languages', level: 'Java, JavaScript, SQL', proficiency: 95, description: 'Programming Languages Proficiency' },
    { name: 'Business Communication', level: 'Cross-cultural Teams', proficiency: 85, description: 'International Team Leadership' }
  ];

  const platforms = [
    'Taobao E-commerce Platform',
    'Mogu Street Fashion Platform',
    'DingTalk International',
    'Ant Group Low-code Platform',
    'Huawei OSS Products',
    'Alibaba Middle Platform'
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
        <Typography 
          variant="h3" 
          component="h2" 
          gutterBottom 
          sx={{ 
            mb: 6, 
            color: 'primary.main',
            fontWeight: 700,
            textAlign: 'center'
          }}
        >
          Skills & Expertise
        </Typography>

        <Grid container spacing={4}>
          {/* Technical Skills */}
          <Grid item xs={12}>
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
                borderRadius: 2,
                border: '1px solid rgba(37, 99, 235, 0.1)',
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
                  <CodeIcon sx={{ fontSize: 32 }} />
                </Avatar>
                <Box>
                  <Typography variant="h4" sx={{ color: 'primary.main', fontWeight: 700, mb: 1 }}>
                    Technical Skills
                  </Typography>
                  <Chip 
                    label="20+ Years Experience"
                    icon={<TrendingUpIcon />}
                    sx={{
                      bgcolor: 'primary.light',
                      color: 'primary.contrastText',
                      fontWeight: 600,
                    }}
                  />
                </Box>
              </Box>
              <Grid container spacing={3} sx={{ position: 'relative', zIndex: 2 }}>
                {technicalSkills.map((skill, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Box 
                      component={motion.div}
                      whileHover={{ scale: 1.02 }}
                      sx={{ 
                        p: 2,
                        borderRadius: 1,
                        background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.05) 0%, rgba(14, 165, 233, 0.02) 100%)',
                        border: '1px solid rgba(37, 99, 235, 0.1)',
                        transition: 'all 0.3s ease-in-out',
                        '&:hover': {
                          background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(14, 165, 233, 0.05) 100%)',
                          borderColor: 'rgba(37, 99, 235, 0.2)',
                        }
                      }}
                    >
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                        <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary' }}>
                          {skill.name}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <StarIcon sx={{ color: 'primary.main', fontSize: 16 }} />
                          <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 600 }}>
                            {skill.level}%
                          </Typography>
                        </Box>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={skill.level}
                        sx={{
                          height: 10,
                          borderRadius: 5,
                          backgroundColor: 'rgba(37, 99, 235, 0.1)',
                          mb: 1,
                          '& .MuiLinearProgress-bar': {
                            borderRadius: 5,
                            background: 'linear-gradient(90deg, #2563eb 0%, #0ea5e9 100%)',
                          },
                        }}
                      />
                      <Chip
                        label={skill.category}
                        size="small"
                        sx={{
                          bgcolor: 'primary.light',
                          color: 'primary.contrastText',
                          fontWeight: 500,
                          fontSize: '0.75rem'
                        }}
                      />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>

          {/* Management Skills */}
          <Grid item xs={12}>
            <Paper
              component={motion.div}
              whileHover={{ 
                scale: 1.02,
                y: -2,
                boxShadow: '0 20px 40px rgba(139, 92, 246, 0.15)'
              }}
              elevation={3}
              sx={{
                p: 4,
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.9) 100%)',
                backdropFilter: 'blur(20px)',
                borderRadius: 2,
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
                  <ManageAccountsIcon sx={{ fontSize: 32 }} />
                </Avatar>
                <Box>
                  <Typography variant="h4" sx={{ color: '#7c3aed', fontWeight: 700, mb: 1 }}>
                    Management Skills
                  </Typography>
                  <Chip 
                    label="Leadership Expert"
                    icon={<EmojiEventsIcon />}
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
                {managementSkills.map((skill, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Box 
                      component={motion.div}
                      whileHover={{ x: 4 }}
                      sx={{ 
                        p: 2,
                        borderRadius: 1,
                        background: 'rgba(139, 92, 246, 0.05)',
                        border: '1px solid rgba(139, 92, 246, 0.1)',
                        transition: 'all 0.3s ease-in-out',
                        height: '100%',
                        '&:hover': {
                          background: 'rgba(139, 92, 246, 0.1)',
                          borderColor: 'rgba(139, 92, 246, 0.2)',
                        }
                      }}
                    >
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                        <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary' }}>
                          {skill.name}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <EmojiEventsIcon sx={{ color: '#8b5cf6', fontSize: 16 }} />
                          <Typography variant="body2" sx={{ color: '#8b5cf6', fontWeight: 600 }}>
                            {skill.level}%
                          </Typography>
                        </Box>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={skill.level}
                        sx={{
                          height: 8,
                          borderRadius: 4,
                          backgroundColor: 'rgba(139, 92, 246, 0.1)',
                          '& .MuiLinearProgress-bar': {
                            borderRadius: 4,
                            background: 'linear-gradient(90deg, #8b5cf6 0%, #7c3aed 100%)',
                          },
                        }}
                      />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>

          {/* Languages */}
          <Grid item xs={12}>
            <Paper
              component={motion.div}
              whileHover={{ 
                scale: 1.02,
                y: -2,
                boxShadow: '0 20px 40px rgba(34, 197, 94, 0.15)'
              }}
              elevation={3}
              sx={{
                p: 4,
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(240, 253, 244, 0.9) 100%)',
                backdropFilter: 'blur(20px)',
                borderRadius: 2,
                border: '1px solid rgba(34, 197, 94, 0.2)',
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
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, position: 'relative', zIndex: 2 }}>
                <Avatar
                  sx={{
                    bgcolor: '#22c55e',
                    width: 64,
                    height: 64,
                    mr: 3,
                    boxShadow: '0 8px 25px rgba(34, 197, 94, 0.3)',
                  }}
                >
                  <LanguageIcon sx={{ fontSize: 32 }} />
                </Avatar>
                <Box>
                  <Typography variant="h4" sx={{ color: '#16a34a', fontWeight: 700, mb: 1 }}>
                    Languages & Communication
                  </Typography>
                  <Chip 
                    label="Multilingual Professional"
                    icon={<TrendingUpIcon />}
                    sx={{
                      bgcolor: 'rgba(34, 197, 94, 0.1)',
                      color: '#16a34a',
                      fontWeight: 600,
                      border: '1px solid rgba(34, 197, 94, 0.2)',
                    }}
                  />
                </Box>
              </Box>
              <Grid container spacing={3} sx={{ position: 'relative', zIndex: 2 }}>
                {languages.map((lang, index) => (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <Box 
                      component={motion.div}
                      whileHover={{ scale: 1.02 }}
                      sx={{ 
                        p: 2,
                        borderRadius: 1,
                        background: 'rgba(34, 197, 94, 0.05)',
                        border: '1px solid rgba(34, 197, 94, 0.1)',
                        transition: 'all 0.3s ease-in-out',
                        height: '100%',
                        '&:hover': {
                          background: 'rgba(34, 197, 94, 0.1)',
                          borderColor: 'rgba(34, 197, 94, 0.2)',
                        }
                      }}
                    >
                      <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary', mb: 0.5 }}>
                        {lang.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#16a34a', mb: 0.5, fontWeight: 500 }}>
                        {lang.level}
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary', mb: 1, display: 'block', fontStyle: 'italic' }}>
                        {lang.description}
                      </Typography>
                      <LinearProgress
                        variant="determinate"
                        value={lang.proficiency}
                        sx={{
                          height: 8,
                          borderRadius: 4,
                          backgroundColor: 'rgba(34, 197, 94, 0.1)',
                          '& .MuiLinearProgress-bar': {
                            borderRadius: 4,
                            background: 'linear-gradient(90deg, #22c55e 0%, #16a34a 100%)',
                          },
                        }}
                      />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>

          {/* Certifications */}
          <Grid item xs={12}>
            <Paper
              component={motion.div}
              whileHover={{ 
                scale: 1.01,
                y: -3,
                boxShadow: '0 25px 50px -12px rgba(245, 158, 11, 0.15)'
              }}
              elevation={3}
              sx={{
                p: 4,
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(254, 252, 232, 0.9) 100%)',
                backdropFilter: 'blur(20px)',
                borderRadius: 2,
                border: '1px solid rgba(245, 158, 11, 0.2)',
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
                  background: 'linear-gradient(90deg, #f59e0b 0%, #d97706 100%)',
                },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, position: 'relative', zIndex: 2 }}>
                <Avatar
                  sx={{
                    bgcolor: '#f59e0b',
                    width: 64,
                    height: 64,
                    mr: 3,
                    boxShadow: '0 8px 25px rgba(245, 158, 11, 0.3)',
                  }}
                >
                  <VerifiedIcon sx={{ fontSize: 32 }} />
                </Avatar>
                <Box>
                  <Typography variant="h4" sx={{ color: '#d97706', fontWeight: 700, mb: 1 }}>
                    Certifications
                  </Typography>
                  <Chip 
                    label="Professional Certified"
                    icon={<WorkspacePremiumIcon />}
                    sx={{
                      bgcolor: 'rgba(245, 158, 11, 0.1)',
                      color: '#d97706',
                      fontWeight: 600,
                      border: '1px solid rgba(245, 158, 11, 0.2)',
                    }}
                  />
                </Box>
              </Box>
              <Box sx={{ position: 'relative', zIndex: 2, flex: 1 }}>
                <Grid container spacing={3}>
                  {certifications.map((cert, index) => (
                    <Grid item xs={12} md={6} key={index}>
                      <Box
                        component={motion.div}
                        whileHover={{ scale: 1.02, x: 4 }}
                        sx={{
                          p: 3,
                          borderRadius: 2,
                          background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, rgba(217, 119, 6, 0.04) 100%)',
                          border: '1px solid rgba(245, 158, 11, 0.2)',
                          transition: 'all 0.3s ease-in-out',
                          position: 'relative',
                          overflow: 'hidden',
                          height: '100%',
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            bottom: 0,
                            width: 4,
                            background: 'linear-gradient(180deg, #f59e0b 0%, #d97706 100%)',
                          },
                          '&:hover': {
                            background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.12) 0%, rgba(217, 119, 6, 0.08) 100%)',
                            borderColor: 'rgba(245, 158, 11, 0.3)',
                            boxShadow: '0 8px 25px rgba(245, 158, 11, 0.15)',
                          }
                        }}
                      >
                        <Box sx={{ position: 'relative', zIndex: 2, pl: 2 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <EmojiEventsIcon sx={{ color: '#f59e0b', mr: 1, fontSize: 20 }} />
                            <Typography variant="h6" sx={{ fontWeight: 700, color: 'text.primary' }}>
                              {cert.name}
                            </Typography>
                          </Box>
                          <Typography variant="body2" sx={{ color: '#d97706', mb: 2, fontWeight: 600 }}>
                            {cert.issuer} • {cert.year}
                          </Typography>
                          <Chip
                            label={cert.type}
                            size="small"
                            sx={{
                              bgcolor: '#f59e0b',
                              color: 'white',
                              fontWeight: 600,
                              fontSize: '0.75rem'
                            }}
                          />
                        </Box>
                      </Box>
                    </Grid>
                    ))}
                  </Grid>
                </Box>
            </Paper>
          </Grid>

          {/* Platform Experience */}
          <Grid item xs={12}>
            <Paper
              component={motion.div}
              whileHover={{ 
                scale: 1.01,
                y: -3,
                boxShadow: '0 25px 50px -12px rgba(14, 165, 233, 0.15)'
              }}
              elevation={3}
              sx={{
                p: 4,
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(240, 249, 255, 0.9) 100%)',
                backdropFilter: 'blur(20px)',
                borderRadius: 2,
                border: '1px solid rgba(14, 165, 233, 0.2)',
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
                  background: 'linear-gradient(90deg, #0ea5e9 0%, #0284c7 100%)',
                },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, position: 'relative', zIndex: 2 }}>
                <Avatar
                  sx={{
                    bgcolor: '#0ea5e9',
                    width: 64,
                    height: 64,
                    mr: 3,
                    boxShadow: '0 8px 25px rgba(14, 165, 233, 0.3)',
                  }}
                >
                  <BusinessCenterIcon sx={{ fontSize: 32 }} />
                </Avatar>
                <Box>
                  <Typography variant="h4" sx={{ color: '#0284c7', fontWeight: 700, mb: 1 }}>
                    Platform Experience
                  </Typography>
                  <Chip 
                    label="Major Platforms"
                    icon={<StarIcon />}
                    sx={{
                      bgcolor: 'rgba(14, 165, 233, 0.1)',
                      color: '#0284c7',
                      fontWeight: 600,
                      border: '1px solid rgba(14, 165, 233, 0.2)',
                    }}
                  />
                </Box>
              </Box>
              <Box sx={{ flex: 1, position: 'relative', zIndex: 2 }}>
                <Grid container spacing={2}>
                  {platforms.map((platform, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <Box
                        component={motion.div}
                        whileHover={{ scale: 1.02, x: 4 }}
                        sx={{
                          p: 2,
                          borderRadius: 1,
                          background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.08) 0%, rgba(2, 132, 199, 0.04) 100%)',
                          border: '1px solid rgba(14, 165, 233, 0.2)',
                          transition: 'all 0.3s ease-in-out',
                          cursor: 'pointer',
                          position: 'relative',
                          overflow: 'hidden',
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            bottom: 0,
                            width: 3,
                            background: 'linear-gradient(180deg, #0ea5e9 0%, #0284c7 100%)',
                          },
                          '&:hover': {
                            background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.12) 0%, rgba(2, 132, 199, 0.08) 100%)',
                            borderColor: 'rgba(14, 165, 233, 0.3)',
                            boxShadow: '0 4px 12px rgba(14, 165, 233, 0.15)',
                          }
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 2 }}>
                          <StarIcon sx={{ color: '#0ea5e9', mr: 1.5, fontSize: 18 }} />
                          <Typography 
                            variant="body1" 
                            sx={{ 
                              fontWeight: 600,
                              color: 'text.primary',
                              flex: 1
                            }}
                          >
                            {platform}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Paper>
          </Grid>

          {/* Team Leadership */}
          <Grid item xs={12}>
            <Paper
              component={motion.div}
              whileHover={{ 
                scale: 1.005,
                y: -2,
                boxShadow: '0 25px 50px -12px rgba(168, 85, 247, 0.2)'
              }}
              elevation={3}
              sx={{
                p: 6,
                background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.9) 0%, rgba(147, 51, 234, 0.8) 100%)',
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
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 4 }}>
                  <Avatar
                    sx={{
                      bgcolor: 'rgba(255, 255, 255, 0.15)',
                      width: 80,
                      height: 80,
                      mr: 3,
                      backdropFilter: 'blur(10px)',
                      border: '2px solid rgba(255, 255, 255, 0.2)',
                    }}
                  >
                    <GroupsIcon sx={{ fontSize: 40, color: 'white' }} />
                  </Avatar>
                  <Box sx={{ textAlign: 'left' }}>
                    <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                      Leadership Experience
                    </Typography>
                    <Chip 
                      label="Team Management Expert"
                      sx={{
                        bgcolor: 'rgba(255, 255, 255, 0.2)',
                        color: 'white',
                        fontWeight: 600,
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                      }}
                    />
                  </Box>
                </Box>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    mb: 3, 
                    fontWeight: 700,
                    textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}
                >
                  Led teams ranging from 7 to 110 people
                </Typography>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.9)',
                    maxWidth: '900px',
                    mx: 'auto',
                    lineHeight: 1.6,
                    fontWeight: 400
                  }}
                >
                  Experienced in managing diverse teams across different business units, from startup environments 
                  to large enterprise organizations. Specialized in agile project management and technical architecture 
                  leadership, with a proven track record of delivering excellent business and technical goals.
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;