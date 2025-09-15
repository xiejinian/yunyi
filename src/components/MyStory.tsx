import React from 'react';
import { Container, Typography, Paper, Box, Chip, Divider, Button } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupIcon from '@mui/icons-material/Group';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import BusinessIcon from '@mui/icons-material/Business';
import FlightIcon from '@mui/icons-material/Flight';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const MyStory = () => {
  const navigate = useNavigate();

  const storyMilestones = [
    {
      id: '2024-entrepreneurship-reflection',
      year: '2024',
      title: 'Entrepreneurship & Life Reflection',
      category: 'Entrepreneurship & Reflection',
      icon: PsychologyIcon,
      color: '#8b5cf6',
      type: 'reflection',
      story: 'On the entrepreneurial journey, I began contemplating the meaning of life. Technology is not just a tool, but a bridge connecting people and creating value. I started documenting these insights, hoping to share this journey with more people.',
      lessons: [
        'Technology entrepreneurship requires patience and perseverance',
        'Entrepreneurship is not just about making money, but creating value',
        'Personal growth is the most important investment in entrepreneurship'
      ]
    },
    {
      id: '2023-cto-journey',
      year: '2023',
      title: 'The CTO Journey: Leadership & Innovation',
      category: 'Leadership',
      icon: BusinessIcon,
      color: '#ff6b35',
      type: 'career',
      story: 'Serving as CTO of a startup has given me a deep understanding of the importance of leadership. From technical decisions to team management, from product planning to business development, every aspect is filled with challenges and opportunities.',
      lessons: [
        'Technical leaders need business acumen',
        'Team building is more important than technology selection',
        'Innovation requires a balance of courage and wisdom'
      ]
    },
    {
      id: '2021-ant-group-lowcode',
      year: '2021-2022',
      title: 'Ant Group: The Birth of Low-Code Platform',
      category: 'Technical Innovation',
      icon: CodeIcon,
      color: '#1677ff',
      type: 'achievement',
      story: 'My experience developing low-code platforms at Ant Group showed me how technology can transform business processes. We built the platform from scratch to help business staff quickly build applications, realizing the vision of technology empowering business.',
      lessons: [
        'Low-code platforms are important tools for technology democratization',
        'Technical innovation requires deep understanding of business needs',
        'Platform thinking is more important than point solutions'
      ]
    },
    {
      id: '2018-dingtalk-internationalization',
      year: '2018-2020',
      title: 'DingTalk Internationalization: From 0 to Millions of Users',
      category: 'Globalization',
      icon: FlightIcon,
      color: '#ff6a00',
      type: 'growth',
      story: 'Leading the DingTalk internationalization team from zero users to millions of daily active users was a journey full of challenges and surprises. Cultural differences, technical challenges, and market competition all became opportunities for growth.',
      lessons: [
        'Internationalization requires deep understanding of local culture',
        'Technology products need localization adaptation',
        'Global perspective is essential for technology professionals'
      ]
    },
    {
      id: '2015-mogujie-scaling',
      year: '2015-2017',
      title: 'Mogu Street: E-commerce Platform Scaling Challenges',
      category: 'Scaling',
      icon: TrendingUpIcon,
      color: '#e91e63',
      type: 'challenge',
      story: 'At Mogu Street, I led a team of 100 engineers responsible for e-commerce middleware development and operations. Facing increasingly complex business scenarios and technical challenges, I learned how to maintain system stability and scalability under high pressure.',
      lessons: [
        'Large-scale systems require good architecture design',
        'Team collaboration is key to successful scaling',
        'Technical debt must be addressed early'
      ]
    },
    {
      id: '2007-taobao-witness',
      year: '2007-2014',
      title: 'Taobao: Witness to the E-commerce Era',
      category: 'Historical Witness',
      icon: GroupIcon,
      color: '#ff6a00',
      type: 'foundation',
      story: 'My early years at Taobao witnessed the rapid development of Chinese e-commerce. From the initial C2C platform to today\'s commercial empire, I participated in the development of multiple key systems and personally experienced how technology drives business transformation.',
      lessons: [
        'Technology development must keep pace with business needs',
        'User experience is the core of product success',
        'Continuous learning is the survival skill for technology professionals'
      ]
    },
    {
      id: '2003-huawei-agile',
      year: '2003-2006',
      title: 'Huawei & Agile Transformation Enlightenment',
      category: 'Agile Enlightenment',
      icon: LightbulbIcon,
      color: '#ff0000',
      type: 'transformation',
      story: 'My experience at Huawei was my first exposure to agile development concepts. In an era dominated by waterfall models, introducing agile concepts was revolutionary. This experience shaped my understanding of software engineering.',
      lessons: [
        'Agile is not just a methodology, but a way of thinking',
        'Change requires gradual progress',
        'The influence of technology professionals goes beyond writing code'
      ]
    },
    {
      id: '2001-career-beginning',
      year: '2001-2002',
      title: 'The Beginning of a Programmer Career',
      category: 'Beginning',
      icon: SchoolIcon,
      color: '#4caf50',
      type: 'beginning',
      story: 'My first step into the workforce after graduation was software development. At that time, I was full of enthusiasm and curiosity about technology. Every bug fix and every feature implementation made me feel the charm and challenges of programming.',
      lessons: [
        'Programming is a craft that requires constant practice',
        'Fundamental knowledge is always the most important',
        'Maintaining curiosity is the driving force for growth'
      ]
    }
  ];

  const getCategoryColor = (type: string) => {
    switch (type) {
      case 'reflection': return '#8b5cf6';
      case 'career': return '#ff6b35';
      case 'achievement': return '#1677ff';
      case 'growth': return '#ff6a00';
      case 'challenge': return '#e91e63';
      case 'foundation': return '#ff6a00';
      case 'transformation': return '#ff0000';
      case 'beginning': return '#4caf50';
      default: return '#6b7280';
    }
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
        background: 'linear-gradient(135deg, #fef7ff 0%, #f3e8ff 100%)',
      }}
    >
      <Container>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{
              mb: 3,
              color: 'primary.main',
              fontWeight: 700,
              background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            My Story
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: 600,
              mx: 'auto',
              lineHeight: 1.6,
              mb: 4
            }}
          >
            Chronicles of 20+ years in technology, sharing insights and experiences from the journey
          </Typography>
          <Divider sx={{
            width: 100,
            mx: 'auto',
            borderColor: 'primary.main',
            borderWidth: 2,
            borderRadius: 1
          }} />
        </Box>

        <Timeline position="alternate">
          {storyMilestones.map((milestone, index) => {
            const IconComponent = milestone.icon;
            const categoryColor = getCategoryColor(milestone.type);

            return (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot
                    sx={{
                      backgroundColor: categoryColor,
                      width: 64,
                      height: 64,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: `0 0 20px ${categoryColor}40`,
                    }}
                  >
                    <IconComponent sx={{ color: 'white', fontSize: 28 }} />
                  </TimelineDot>
                  <TimelineConnector sx={{ bgcolor: categoryColor, opacity: 0.3 }} />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper
                    component={motion.div}
                    whileHover={{
                      scale: 1.02,
                      y: -5,
                      boxShadow: `0 15px 35px -5px ${categoryColor}25`
                    }}
                    elevation={3}
                    sx={{
                      p: 4,
                      backgroundColor: 'white',
                      borderRadius: 2,
                      position: 'relative',
                      overflow: 'hidden',
                      border: `2px solid ${categoryColor}20`,
                      transition: 'all 0.3s ease-in-out',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 4,
                        background: `linear-gradient(90deg, ${categoryColor} 0%, ${categoryColor}80 100%)`,
                      },
                      '&:hover': {
                        borderColor: `${categoryColor}40`,
                      }
                    }}
                  >
                    {/* Header */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                      <Typography
                        variant="h5"
                        component="h3"
                        sx={{
                          color: categoryColor,
                          fontWeight: 700,
                          flex: 1
                        }}
                      >
                        {milestone.year}
                      </Typography>
                      <Chip
                        label={milestone.category}
                        size="small"
                        sx={{
                          bgcolor: `${categoryColor}15`,
                          color: categoryColor,
                          fontWeight: 600,
                          border: `1px solid ${categoryColor}30`
                        }}
                      />
                    </Box>

                    {/* Title */}
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        color: 'primary.main',
                        mb: 2
                      }}
                    >
                      {milestone.title}
                    </Typography>

                    {/* Story */}
                    <Typography
                      paragraph
                      sx={{
                        lineHeight: 1.7,
                        color: 'text.primary',
                        fontSize: '1rem',
                        mb: 3
                      }}
                    >
                      {milestone.story}
                    </Typography>

                    {/* Lessons Learned */}
                    <Box>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          mb: 2,
                          fontWeight: 700,
                          color: categoryColor,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1
                        }}
                      >
                        <AutoStoriesIcon sx={{ fontSize: 20 }} />
                        Key Lessons:
                      </Typography>
                      <Box
                        component="ul"
                        sx={{
                          pl: 0,
                          ml: 2,
                          m: 0,
                          listStylePosition: 'outside',
                          '& li': {
                            mb: 1.5,
                            lineHeight: 1.6,
                            textAlign: 'left',
                            display: 'list-item',
                            listStyleType: 'disc',
                            '&::marker': {
                              color: categoryColor,
                              fontSize: '0.8em'
                            }
                          }
                        }}
                      >
                        {milestone.lessons.map((lesson, i) => (
                          <Typography
                            component="li"
                            key={i}
                            sx={{
                              color: 'text.primary',
                              fontSize: '0.95rem'
                            }}
                          >
                            {lesson}
                          </Typography>
                        ))}
                      </Box>
                    </Box>

                    {/* Read More Button */}
                    <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
                      <Button
                        variant="outlined"
                        endIcon={<ArrowForwardIcon />}
                        onClick={() => navigate(`/mystory/${milestone.id}`)}
                        sx={{
                          borderColor: categoryColor,
                          color: categoryColor,
                          '&:hover': {
                            borderColor: categoryColor,
                            backgroundColor: `${categoryColor}10`,
                            transform: 'translateY(-2px)',
                          },
                          transition: 'all 0.3s ease-in-out',
                        }}
                      >
                        Read Full Story
                      </Button>
                    </Box>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            );
          })}
        </Timeline>

        {/* Footer Message */}
        <Box sx={{ textAlign: 'center', mt: 8, p: 4, backgroundColor: 'rgba(255,255,255,0.8)', borderRadius: 1 }}>
          <Typography
            variant="h6"
            sx={{
              color: 'primary.main',
              mb: 2,
              fontWeight: 600
            }}
          >
            To My Future Self & Fellow Travelers
          </Typography>
          <Typography
            sx={{
              color: 'text.secondary',
              lineHeight: 1.6,
              maxWidth: 600,
              mx: 'auto'
            }}
          >
            This is not just a record of personal experiences, but also hopes to provide some reference and inspiration for friends on similar paths.
            The technology journey is long and wonderful, and every experience is a precious treasure. Let us continue forward and create more wonderful stories.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default MyStory;
