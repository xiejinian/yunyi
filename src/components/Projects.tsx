import React from 'react';
import { Container, Typography, Card, CardContent, Box, Chip, Grid, Button, Avatar, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import BusinessIcon from '@mui/icons-material/Business';
import CodeIcon from '@mui/icons-material/Code';
import PersonIcon from '@mui/icons-material/Person';
import StarIcon from '@mui/icons-material/Star';
import LaunchIcon from '@mui/icons-material/Launch';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupIcon from '@mui/icons-material/Group';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SecurityIcon from '@mui/icons-material/Security';
import SettingsIcon from '@mui/icons-material/Settings';

const Projects = () => {
  const projects = [
    {
      name: 'Alibaba E-commerce Middle Platform',
      company: 'Alibaba Group Taobao',
      period: '2007-2015',
      logoColor: '#ff6a00',
      icon: TrendingUpIcon,
      category: 'E-commerce Platform',
      description: 'Co-founder and architect of Alibaba\'s revolutionary Business Middle Platform, the foundation that powers China\'s largest e-commerce ecosystem. This platform serves hundreds of millions of users and handles massive transaction volumes during events like Double 11.',
      role: 'Co-founder and Lead Architect - Led the Taobao Business Unit team in architecting and implementing the core platform infrastructure.',
      technologies: ['Java Platform', 'Distributed Systems', 'Microservices', 'High Availability Architecture'],
      impact: 'Established the fundamental e-commerce platform patterns used across Alibaba Group, enabling rapid business growth and serving as the backbone for the world\'s largest online shopping festival.',
      keyFeatures: [
        'Order Processing Platform (buy.taobao.com)',
        'Product Detail System (item.taobao.com)',
        'Buyer Transaction Platform (buyertrade.taobao.com)',
        'Shopping Cart System (cart.taobao.com)',
        'Search Platform Integration (s.taobao.com)',
        'Logistics Platform Connection (cainiao.com)'
      ],
      links: [
        { name: 'Taobao Main Platform', url: 'https://www.taobao.com' },
        { name: 'Order System', url: 'https://buy.taobao.com' }
      ]
    },
    {
      name: 'Mogu Street Fashion E-commerce Platform',
      company: 'Mogu Street (NYSE: MOGU)',
      period: '2015-2018',
      logoColor: '#e91e63',
      icon: ShoppingCartIcon,
      category: 'Fashion E-commerce',
      description: 'Led the development of China\'s top fashion e-commerce platform, serving millions of fashion-conscious users. Managed the core platform team and ensured high-quality user experience across all touchpoints.',
      role: 'Staff Director - Managed daily operations of the E-commerce Middle Platform and led a team of 110 engineers.',
      technologies: ['Java Platform', 'E-commerce Architecture', 'Fashion Recommendation Engine', 'Mobile Platform'],
      impact: 'Built and maintained China\'s leading fashion e-commerce platform, revolutionizing how young consumers discover and purchase fashion items.',
      keyFeatures: [
        'Fashion Product Discovery (shop.mogu.com)',
        'Order Management System (order.mogu.com)',
        'Shopping Cart Experience (cart.mogu.com)',
        'Purchase Flow Optimization (buy.mogu.com)',
        'Fashion Recommendation Algorithm',
        'Social Shopping Features'
      ],
      links: [
        { name: 'Mogu Street Platform', url: 'https://www.mogu.com' }
      ]
    },
    {
      name: 'DingTalk International Platform',
      company: 'Alibaba Cloud DingTalk Division',
      period: '2018-2021',
      logoColor: '#1890ff',
      icon: PhoneAndroidIcon,
      category: 'Enterprise Communication',
      description: 'Led the international expansion of DingTalk, Alibaba\'s all-in-one workplace application. Successfully grew overseas daily active users from 0 to millions while developing the Operations Middle Platform.',
      role: 'Staff Engineer/Team Lead - Led R&D for international products with a team of 20 engineers.',
      technologies: ['Java Platform', 'International Localization', 'Real-time Communication', 'Enterprise Integration'],
      impact: 'Enabled global enterprises to adopt digital workplace solutions, especially crucial during COVID-19 pandemic for remote work enablement.',
      keyFeatures: [
        'International Version Platform (dingtalk.com)',
        'IDaaS Enterprise Identity Platform',
        'Operations Middle Platform',
        'Multi-language Support System',
        'Global Enterprise Integration',
        'COVID-19 Work Recovery Solutions'
      ],
      links: [
        { name: 'DingTalk International', url: 'https://www.dingtalk.com/wow/dingtalk/act/en-download' }
      ]
    },
    {
      name: 'Yunfengdie Low-code Platform',
      company: 'Ant Group',
      period: '2021-2023',
      logoColor: '#1677ff',
      icon: SecurityIcon,
      category: 'Low-code Platform',
      description: 'Led the base service team for Ant Group\'s official low-code and no-code platform, enabling business staff to rapidly develop enterprise applications without extensive coding knowledge.',
      role: 'Staff Engineer/Team Lead - Managed base service team of 7 engineers for platform development.',
      technologies: ['Java Platform', 'Low-code Framework', 'Visual Development', 'Enterprise Integration'],
      impact: 'Accelerated Ant Group\'s business expansion by democratizing application development across business units.',
      keyFeatures: [
        'Visual Application Builder',
        'Drag-and-drop Interface Designer',
        'Enterprise System Integration',
        'Automated Deployment Pipeline',
        'Business Process Automation',
        'Multi-tenant Architecture'
      ],
      links: []
    },
    {
      name: 'Huawei OSS Products',
      company: 'Huawei Technologies',
      period: '2003-2007',
      logoColor: '#ff0000',
      icon: SettingsIcon,
      category: 'Telecommunications',
      description: 'Participated in R&D and delivery of telecommunications operation support systems as core engineer. Pioneered agile project management practices and led successful agile transformations.',
      role: 'Project Manager/Architect/Engineer - Core member of development team focusing on telecommunications infrastructure.',
      technologies: ['Java Platform', 'Telecommunications Systems', 'OSS Architecture', 'Agile Methodology'],
      impact: 'Contributed to Huawei\'s telecommunications infrastructure solutions and introduced modern project management practices.',
      keyFeatures: [
        'Telecommunications OSS Systems',
        'Operation Support Infrastructure',
        'Agile Development Processes',
        'System Integration Solutions',
        'Performance Monitoring Tools',
        'Enterprise Service Management'
      ],
      links: []
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
          Notable Projects
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Grid item xs={12} key={index}>
                <Paper
                  component={motion.div}
                  whileHover={{ 
                    scale: 1.01,
                    y: -5,
                    boxShadow: `0 25px 50px -12px ${project.logoColor}25`
                  }}
                  transition={{ duration: 0.3 }}
                  sx={{
                    p: 0,
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.9) 100%)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: 4,
                    border: `2px solid ${project.logoColor}20`,
                    overflow: 'hidden',
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 6,
                      background: `linear-gradient(90deg, ${project.logoColor} 0%, ${project.logoColor}80 100%)`,
                    },
                  }}
                >
                  <CardContent sx={{ p: 5, position: 'relative', zIndex: 2 }}>
                    {/* Project Header */}
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3, mb: 4 }}>
                      <Avatar
                        sx={{
                          bgcolor: project.logoColor,
                          width: 80,
                          height: 80,
                          boxShadow: `0 8px 25px ${project.logoColor}40`,
                        }}
                      >
                        <IconComponent sx={{ fontSize: 40, color: 'white' }} />
                      </Avatar>
                      <Box sx={{ flex: 1 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                          <Typography 
                            variant="h4" 
                            sx={{ 
                              color: project.logoColor,
                              fontWeight: 700,
                              lineHeight: 1.2
                            }}
                          >
                            {project.name}
                          </Typography>
                          <Chip 
                            label={project.period}
                            sx={{
                              bgcolor: `${project.logoColor}15`,
                              color: project.logoColor,
                              fontWeight: 600,
                              border: `1px solid ${project.logoColor}30`,
                              fontSize: '0.875rem'
                            }}
                          />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                          <Typography variant="h6" sx={{ color: 'text.primary', fontWeight: 600 }}>
                            {project.company}
                          </Typography>
                          <Chip 
                            label={project.category}
                            size="small"
                            sx={{
                              bgcolor: 'primary.light',
                              color: 'primary.contrastText',
                              fontWeight: 500,
                            }}
                          />
                        </Box>
                        <Typography 
                          variant="body1" 
                          sx={{ 
                            lineHeight: 1.7,
                            color: 'text.primary',
                            fontSize: '1.1rem'
                          }}
                        >
                          {project.description}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Project Details Grid */}
                    <Grid container spacing={4}>
                      {/* Role & Technologies */}
                      <Grid item xs={12} md={6}>
                        <Box 
                          sx={{ 
                            p: 3,
                            borderRadius: 3,
                            background: `linear-gradient(135deg, ${project.logoColor}08 0%, ${project.logoColor}04 100%)`,
                            border: `1px solid ${project.logoColor}15`,
                            mb: 3
                          }}
                        >
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <PersonIcon sx={{ color: project.logoColor, mr: 1, fontSize: 24 }} />
                            <Typography variant="h6" sx={{ fontWeight: 600, color: project.logoColor }}>
                              Role & Responsibility
                            </Typography>
                          </Box>
                          <Typography variant="body1" sx={{ lineHeight: 1.6, color: 'text.primary' }}>
                            {project.role}
                          </Typography>
                        </Box>

                        <Box 
                          sx={{ 
                            p: 3,
                            borderRadius: 3,
                            background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.08) 0%, rgba(14, 165, 233, 0.04) 100%)',
                            border: '1px solid rgba(37, 99, 235, 0.15)',
                          }}
                        >
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <CodeIcon sx={{ color: 'primary.main', mr: 1, fontSize: 24 }} />
                            <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main' }}>
                              Technologies
                            </Typography>
                          </Box>
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                            {project.technologies.map((tech, techIndex) => (
                              <Chip
                                key={techIndex}
                                label={tech}
                                size="small"
                                sx={{
                                  bgcolor: 'primary.light',
                                  color: 'primary.contrastText',
                                  fontWeight: 500,
                                  '&:hover': {
                                    bgcolor: 'primary.main'
                                  }
                                }}
                              />
                            ))}
                          </Box>
                        </Box>
                      </Grid>

                      {/* Features & Impact */}
                      <Grid item xs={12} md={6}>
                        <Box 
                          sx={{ 
                            p: 3,
                            borderRadius: 3,
                            background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.08) 0%, rgba(16, 185, 129, 0.04) 100%)',
                            border: '1px solid rgba(34, 197, 94, 0.15)',
                            mb: 3
                          }}
                        >
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <StarIcon sx={{ color: '#16a34a', mr: 1, fontSize: 24 }} />
                            <Typography variant="h6" sx={{ fontWeight: 600, color: '#16a34a' }}>
                              Key Features
                            </Typography>
                          </Box>
                          <Box 
                            component="ul" 
                            sx={{ 
                              pl: 0,
                              ml: 2,
                              m: 0,
                              listStylePosition: 'outside',
                              '& li': {
                                mb: 1,
                                lineHeight: 1.5,
                                textAlign: 'left',
                                display: 'list-item',
                                listStyleType: 'disc',
                                color: 'text.primary',
                                '&::marker': {
                                  color: '#16a34a',
                                }
                              }
                            }}
                          >
                            {project.keyFeatures.map((feature, featureIndex) => (
                              <Typography component="li" key={featureIndex} sx={{ fontSize: '0.95rem' }}>
                                {feature}
                              </Typography>
                            ))}
                          </Box>
                        </Box>

                        <Box 
                          sx={{ 
                            p: 3,
                            borderRadius: 3,
                            background: `linear-gradient(135deg, ${project.logoColor}08 0%, ${project.logoColor}04 100%)`,
                            border: `1px solid ${project.logoColor}15`,
                          }}
                        >
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <BusinessIcon sx={{ color: project.logoColor, mr: 1, fontSize: 24 }} />
                            <Typography variant="h6" sx={{ fontWeight: 600, color: project.logoColor }}>
                              Impact
                            </Typography>
                          </Box>
                          <Typography variant="body1" sx={{ lineHeight: 1.6, color: 'text.primary', mb: 2 }}>
                            {project.impact}
                          </Typography>
                          
                          {project.links && project.links.length > 0 && (
                            <Box sx={{ mt: 2 }}>
                              {project.links.map((link, linkIndex) => (
                                <Button
                                  key={linkIndex}
                                  variant="outlined"
                                  size="small"
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  endIcon={<LaunchIcon />}
                                  sx={{
                                    mr: 1,
                                    mb: 1,
                                    borderColor: project.logoColor,
                                    color: project.logoColor,
                                    '&:hover': {
                                      borderColor: project.logoColor,
                                      backgroundColor: `${project.logoColor}10`
                                    }
                                  }}
                                >
                                  {link.name}
                                </Button>
                              ))}
                            </Box>
                          )}
                        </Box>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
