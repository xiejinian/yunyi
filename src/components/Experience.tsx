import React from 'react';
import { Container, Typography, Paper, Box, Chip, Avatar, Stack } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { motion } from 'framer-motion';
import BusinessIcon from '@mui/icons-material/Business';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import CodeIcon from '@mui/icons-material/Code';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupIcon from '@mui/icons-material/Group';
import StarIcon from '@mui/icons-material/Star';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import SecurityIcon from '@mui/icons-material/Security';


const Experience = () => {
  const experiences = [
    {
      year: '2023-Present',
      title: 'CTO',
      company: 'Feifan Tech, Hangzhou',
      companyLink: 'https://feifan-tech-website.pages.dev/',
      teamSize: '10',
      companyType: 'Startup',
      logoColor: '#ff6b35',
      icon: BusinessIcon,
      workNature: ['Leadership', 'Architecture', 'Consulting'],
      description: 'Leading our development team to deliver software products to clients. Providing technical support for e-commerce startups and consulting services on software architecture and project management.',
      achievements: [
        'Led development team of 10 people to deliver innovative software solutions',
        'Provided technical support for two e-commerce startup companies',
        'Established consulting services for enterprise software architecture',
        'Drove technology strategy and platform development initiatives'
      ]
    },
    {
      year: '2021-2023',
      title: 'Staff Engineer/Team Lead',
      company: 'Ant Group, Hangzhou',
      teamSize: '7',
      companyType: 'FinTech Giant',
      logoColor: '#1677ff',
      icon: SecurityIcon,
      workNature: ['Low-code Platform', 'Team Leadership', 'Product Development'],
      description: 'Managed the base service team for the low-code platform and led product development. Enabled business staff to accelerate Ant Group\'s business expansion.',
      achievements: [
        'Led development of Yunfengdie low-code platform base services',
        'Enabled rapid business expansion through platform automation',
        'Managed cross-functional team of 7 engineers',
        'Delivered enterprise-grade low-code solutions'
      ]
    },
    {
      year: '2018-2021',
      title: 'Staff Engineer/Team Lead',
      company: 'Alibaba Cloud DingTalk Division, Hangzhou',
      teamSize: '20',
      companyType: 'Cloud & Enterprise',
      logoColor: '#ff6a00',
      icon: PhoneAndroidIcon,
      workNature: ['International Expansion', 'Platform Development', 'Technical Committee'],
      description: 'Led R&D for DingTalk international products, growing overseas DAU from 0 to millions. Directed development of DingTalk Operations Middle Platform.',
      achievements: [
        'Grew DingTalk international DAU from 0 to millions',
        'Led development of DingTalk Operations Middle Platform',
        'Developed IDaaS platform for COVID-19 enterprise recovery',
        'Member of DingTalk Technical Committee',
        'Achieved FY20 business goals ahead of schedule'
      ]
    },
    {
      year: '2015-2018',
      title: 'Staff Director',
      company: 'Mogu Street (NYSE: MOGU), Hangzhou',
      teamSize: '110',
      companyType: 'Fashion E-commerce',
      logoColor: '#e91e63',
      icon: ShoppingCartIcon,
      workNature: ['E-commerce Platform', 'Large Team Management', 'Quality Assurance'],
      description: 'Managed daily operations of Mogu\'s E-commerce Middle Platform and quality assurance team. Led R&D for e-commerce products and chaired Technical Committee.',
      achievements: [
        'Managed E-commerce Middle Platform operations for China\'s top fashion platform',
        'Led team of 110 engineers across multiple product lines',
        'Chaired Technical Committee overseeing architecture improvements',
        'Ensured platform scalability for millions of fashion-conscious users',
        'Implemented comprehensive quality assurance processes'
      ]
    },
    {
      year: '2007-2015',
      title: 'Senior Engineer ~ Staff Engineer',
      company: 'Alibaba Group Taobao (NYSE: BABA), Hangzhou',
      teamSize: '30',
      companyType: 'E-commerce Giant',
      logoColor: '#ff6a00',
      icon: TrendingUpIcon,
      workNature: ['Platform Architecture', 'Technical Committee', 'Innovation'],
      description: 'Managed teams for R&D of Taobao\'s trading platform and business support platform. Co-founder of Alibaba\'s Business Middle Platform.',
      achievements: [
        'Co-founder of Alibaba\'s revolutionary Business Middle Platform',
        'Led development of core Taobao trading and business platforms',
        'Member of Alibaba Trading Technical Committee',
        'Managed teams of 30+ engineers during rapid growth phase',
        'Architected systems serving hundreds of millions of users',
        'Established fundamental e-commerce platform patterns'
      ]
    },
    {
      year: '2003-2007',
      title: 'Project Manager/Architect/Engineer',
      company: 'Huawei Tech & Others, Shenzhen',
      teamSize: '15',
      companyType: 'Telecom & Tech',
      logoColor: '#ff0000',
      icon: SettingsIcon,
      workNature: ['Telecommunications', 'Agile Management', 'System Architecture'],
      description: 'Participated in R&D of telecommunications operation support systems. Pioneered agile project management at Huawei. Also worked on online education and community platforms.',
      achievements: [
        'Pioneered agile project management transformation at Huawei',
        'Led development of telecommunications OSS products',
        'Completed team agile transformation initiatives',
        'Developed online education software platforms',
        'Built online community systems for major internet companies',
        'Obtained PMP certification during Huawei tenure'
      ]
    },
    {
      year: '2001-2003',
      title: 'Engineer/Project Manager',
      company: 'Early Career - Multiple Companies',
      teamSize: 'Various',
      companyType: 'Software Development',
      logoColor: '#4caf50',
      icon: CodeIcon,
      workNature: ['Software Engineering', 'Education Tech', 'Foundation Building'],
      description: 'Started career in software engineering, working on online education software and community platforms across different companies in Shenzhen.',
      achievements: [
        'Graduated with Bachelor in Computer Science & Technology',
        'Obtained National Senior Programmer Certification',
        'Developed foundational skills in Java platform development',
        'Contributed to online education and community software projects',
        'Built strong foundation in enterprise software development'
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
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      }}
    >
      <Container>
        <Typography variant="h3" component="h2" gutterBottom sx={{ mb: 6, color: 'primary.main' }}>
          Professional Experience
        </Typography>

        <Timeline position="alternate">
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            return (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot 
                    sx={{ 
                      backgroundColor: exp.logoColor,
                      width: 60,
                      height: 60,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: `0 0 20px ${exp.logoColor}40`,
                    }}
                  >
                    <IconComponent sx={{ color: 'white', fontSize: 28 }} />
                  </TimelineDot>
                  <TimelineConnector sx={{ bgcolor: exp.logoColor, opacity: 0.3 }} />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper
                    component={motion.div}
                    whileHover={{ 
                      scale: 1.02,
                      y: -5,
                      boxShadow: `0 15px 35px -5px ${exp.logoColor}25`
                    }}
                    elevation={3}
                    sx={{
                      p: 4,
                      backgroundColor: 'white',
                      borderRadius: 2,
                      position: 'relative',
                      overflow: 'hidden',
                      border: `2px solid ${exp.logoColor}20`,
                      transition: 'all 0.3s ease-in-out',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 4,
                        background: `linear-gradient(90deg, ${exp.logoColor} 0%, ${exp.logoColor}80 100%)`,
                      },
                      '&:hover': {
                        borderColor: `${exp.logoColor}40`,
                      }
                    }}
                  >
                    {/* Company Logo/Avatar */}
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3, mb: 3 }}>
                      {/* Company Logo */}
                      {exp.company.includes('Ant Group') ? (
                        <Box 
                          sx={{ 
                            width: 72,
                            height: 56,
                            borderRadius: '4px',
                            background: 'linear-gradient(135deg, #1677ff 0%, #0958d9 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: `0 4px 12px ${exp.logoColor}40`,
                            position: 'relative',
                            overflow: 'hidden',
                            p: 1
                          }}
                        >
                          <img 
                            src="https://gw.alipayobjects.com/mdn/rms_27e257/afts/img/A*CEPTSaeqMqUAAAAAAAAAAAAAARQnAQ"
                            alt="Ant Group Logo"
                            style={{
                              width: '100%',
                              height: 'auto',
                              maxWidth: '60px',
                              objectFit: 'contain',
                              filter: 'brightness(0) invert(1)'
                            }}
                          />
                        </Box>
                      ) : exp.company.includes('Alibaba') || exp.company.includes('Taobao') || exp.company.includes('DingTalk') ? (
                        <Box 
                          sx={{ 
                            width: 72,
                            height: 56,
                            borderRadius: '4px',
                            background: 'linear-gradient(135deg, #ff6a00 0%, #ff4d00 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: `0 4px 12px ${exp.logoColor}40`,
                            position: 'relative',
                            overflow: 'hidden',
                            p: 1
                          }}
                        >
                          <img 
                            src="https://img.alicdn.com/imgextra/i1/O1CN01VqEqIZ1gxJbsTpgfG_!!6000000004208-2-tps-296-46.png"
                            alt="Alibaba Group Logo"
                            style={{
                              width: '100%',
                              height: 'auto',
                              maxWidth: '60px',
                              objectFit: 'contain',
                              filter: 'brightness(0) invert(1)'
                            }}
                          />
                        </Box>
                      ) : exp.company.includes('Mogu') ? (
                        <Box 
                          sx={{ 
                            width: 72,
                            height: 56,
                            borderRadius: '4px',
                            background: 'linear-gradient(135deg, #e91e63 0%, #c2185b 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: `0 4px 12px ${exp.logoColor}40`,
                            position: 'relative',
                            overflow: 'hidden',
                            p: 1
                          }}
                        >
                          <img 
                            src="https://s10.mogucdn.com/mlcdn/c45406/220221_3a7fk34bdehdbk3c76j24j18l4g23_192x60.png"
                            alt="Mogu Street Logo"
                            style={{
                              width: '100%',
                              height: 'auto',
                              maxWidth: '60px',
                              objectFit: 'contain',
                              filter: 'brightness(0) invert(1)'
                            }}
                          />
                        </Box>
                      ) : exp.company.includes('Huawei') ? (
                        <Box 
                          sx={{ 
                            width: 72,
                            height: 56,
                            borderRadius: '4px',
                            background: 'linear-gradient(135deg, #ff0000 0%, #cc0000 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: `0 4px 12px ${exp.logoColor}40`,
                            position: 'relative',
                            overflow: 'hidden',
                            p: 1
                          }}
                        >
                          <img 
                            src="https://www.huawei.com/-/media/hcomponent-header/1.0.1.20250724165002/component/img/huawei_logo.png"
                            alt="Huawei Logo"
                            style={{
                              width: '100%',
                              height: 'auto',
                              maxWidth: '60px',
                              objectFit: 'contain',
                              filter: 'brightness(0) invert(1)'
                            }}
                          />
                        </Box>
                      ) : (
                        <Avatar 
                          sx={{ 
                            bgcolor: exp.logoColor,
                            width: 56,
                            height: 56,
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                            boxShadow: `0 4px 12px ${exp.logoColor}40`
                          }}
                        >
                          {exp.company.split(' ')[0][0]}
                          {exp.company.split(' ')[1] ? exp.company.split(' ')[1][0] : ''}
                        </Avatar>
                      )}
                      <Box sx={{ flex: 1 }}>
                        <Typography 
                          variant="h6" 
                          component="h3" 
                          sx={{ 
                            color: exp.logoColor,
                            fontWeight: 600,
                            mb: 0.5
                          }}
                        >
                          {exp.year}
                        </Typography>
                        <Typography 
                          variant="h5" 
                          component="h3" 
                          sx={{ 
                            fontWeight: 700,
                            color: 'primary.main',
                            mb: 1
                          }}
                        >
                          {exp.title}
                        </Typography>
                        <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
                          {exp.companyLink ? (
                            <Typography 
                              component="a"
                              href={exp.companyLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              color="text.secondary" 
                              sx={{ 
                                fontWeight: 500,
                                fontSize: '1.1rem',
                                textDecoration: 'none',
                                borderBottom: '1px solid transparent',
                                transition: 'all 0.3s ease-in-out',
                                '&:hover': {
                                  color: 'primary.main',
                                  borderBottomColor: 'primary.main',
                                }
                              }}
                            >
                              {exp.company}
                            </Typography>
                          ) : (
                            <Typography 
                              color="text.secondary" 
                              sx={{ 
                                fontWeight: 500,
                                fontSize: '1.1rem'
                              }}
                            >
                              {exp.company}
                            </Typography>
                          )}
                          <Chip 
                            label={exp.companyType}
                            size="small"
                            sx={{
                              bgcolor: `${exp.logoColor}15`,
                              color: exp.logoColor,
                              fontWeight: 600,
                              border: `1px solid ${exp.logoColor}30`
                            }}
                          />
                        </Stack>
                      </Box>
                    </Box>

                    {/* Work Nature Tags */}
                    <Box sx={{ mb: 3 }}>
                      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                        <GroupIcon sx={{ color: 'primary.main', mr: 1, fontSize: 20 }} />
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            fontWeight: 600,
                            color: 'primary.main',
                            mr: 2
                          }}
                        >
                          Team: {exp.teamSize} people
                        </Typography>
                        {exp.workNature.map((nature, i) => (
                          <Chip 
                            key={i}
                            label={nature}
                            size="small"
                            icon={<StarIcon sx={{ fontSize: 16 }} />}
                            sx={{
                              bgcolor: 'primary.light',
                              color: 'primary.contrastText',
                              fontWeight: 500,
                              '& .MuiChip-icon': {
                                color: 'primary.contrastText'
                              }
                            }}
                          />
                        ))}
                      </Stack>
                    </Box>

                    {/* Description */}
                    <Typography 
                      paragraph 
                      sx={{ 
                        lineHeight: 1.7,
                        color: 'text.primary',
                        fontSize: '1rem',
                        mb: 3
                      }}
                    >
                      {exp.description}
                    </Typography>

                    {/* Achievements */}
                    <Box>
                      <Typography 
                        variant="subtitle2" 
                        sx={{ 
                          mb: 2, 
                          fontWeight: 700, 
                          color: exp.logoColor,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1
                        }}
                      >
                        <ArchitectureIcon sx={{ fontSize: 20 }} />
                        Key Achievements:
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
                              color: exp.logoColor,
                              fontSize: '0.8em'
                            }
                          }
                        }}
                      >
                        {exp.achievements.map((achievement, i) => (
                          <Typography 
                            component="li" 
                            key={i}
                            sx={{ 
                              color: 'text.primary',
                              fontSize: '0.95rem'
                            }}
                          >
                            {achievement}
                          </Typography>
                        ))}
                      </Box>
                    </Box>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            );
          })}
        </Timeline>
      </Container>
    </Box>
  );
};

export default Experience;
