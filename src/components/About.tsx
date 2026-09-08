import React from 'react';
import { Container, Typography, Box, Grid, Paper, Chip, Avatar, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PersonIcon from '@mui/icons-material/Person';
import StarIcon from '@mui/icons-material/Star';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CodeIcon from '@mui/icons-material/Code';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { useLanguage } from '../i18n/LanguageContext';

const About = () => {
  const { language } = useLanguage();
  const isZh = language === 'zh';

  const achievements = isZh
    ? [
        '阿里巴巴电商中台联合创始人之一',
        '带领钉钉国际化从 0 到数百万 DAU',
        '曾任华为、阿里巴巴 / 蚂蚁集团资深技术专家',
        '主导企业级 AI / LLM 产品集成与落地实践',
        '推动内部 AI Copilot、知识助手与 Agent 工作流建设',
        '管理过 7 至 110 人规模的技术团队',
      ]
    : [
        "Co-founder of Alibaba's E-commerce Middle Platform",
        'Led DingTalk international expansion from 0 to millions DAU',
        'Former Staff Engineer at Huawei, Alibaba/Ant Group',
        'Leading enterprise AI / LLM product integration initiatives',
        'Built AI copilots, knowledge assistants, and agent workflows',
        'Led teams ranging from 7 to 110 people',
      ];

  const roleTags = isZh
    ? ['CTO', '技术顾问', '咨询 / Advisory', '工程经理', '技术经理']
    : ['CTO', 'Technical Advisor', 'Consulting', 'Engineering Manager', 'Technical Manager'];

  const certifications = isZh
    ? [
        { name: 'PMP 项目管理认证', year: '2005', org: '华为' },
        { name: '国家高级程序员', year: '2001', org: '中国' },
      ]
    : [
        { name: 'PMP Certification', year: '2005', org: 'Huawei' },
        { name: 'National Senior Programmer', year: '2001', org: 'China' },
      ];

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      sx={{
        minHeight: '100vh',
        pt: { xs: 10, sm: 11, md: 12 },
        pb: { xs: 6, sm: 8, md: 12 },
        background: '#F6F1E7',
      }}
    >
      <Container>
        <Typography variant="h3" component="h2" gutterBottom sx={{ mb: 7, color: '#C45A38', fontWeight: 500, textAlign: 'center', letterSpacing: '0.04em' }}>
          {isZh ? '关于我' : 'About Me'}
        </Typography>

        <Grid container spacing={4} sx={{ alignItems: 'stretch' }}>
          <Grid item xs={12} md={3} lg={3}>
            <Paper
              component={motion.div}
              whileHover={{ scale: 1.02, y: -3, boxShadow: '0 16px 40px -8px rgba(196, 90, 56, 0.12)' }}
              elevation={3}
              sx={{
                p: 4,
                background: '#FBF8F2',
                borderRadius: 3,
                border: '1px solid #E6DCCB',
                transition: 'all 0.2s ease-in-out',
                height: '100%',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 4,
                  background: 'linear-gradient(90deg, #C45A38 0%, #C45A38 100%)',
                },
              }}
            >
              <Box sx={{ position: 'relative', zIndex: 2, width: '100%' }}>
                <Box
                  component="img"
                  src="/image.png"
                  alt="Xie Jinian (谢记年) - CTO at Feifan Tech"
                  sx={{
                    width: '100%',
                    maxWidth: 200,
                    height: 'auto',
                    borderRadius: 0,
                    boxShadow: 'none',
                    mb: 3,
                    border: 'none',
                  }}
                />
                <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 700, mb: 1 }}>
                  Xie Jinian (谢记年)
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500, mb: 2 }}>
                  {isZh ? 'CTO · AI 与软件架构' : 'CTO & AI / Software Architect'}
                </Typography>
                <Chip
                  label="Feifan Tech"
                  icon={<BusinessCenterIcon />}
                  component="a"
                  href="https://feifan-tech-website.pages.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  clickable
                  sx={{
                    bgcolor: 'primary.light',
                    color: 'primary.contrastText',
                    fontWeight: 600,
                    fontSize: '0.75rem',
                    textDecoration: 'none',
                    '&:hover': { bgcolor: 'primary.main', transform: 'scale(1.05)' },
                    '&:focus': { bgcolor: 'primary.main' },
                  }}
                />
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <Paper
              component={motion.div}
              whileHover={{ scale: 1.01, y: -3, boxShadow: '0 16px 40px -8px rgba(196, 90, 56, 0.12)' }}
              elevation={3}
              sx={{
                p: 4,
                background: '#FBF8F2',
                borderRadius: 3,
                border: '1px solid #E6DCCB',
                transition: 'all 0.2s ease-in-out',
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
                  background: 'linear-gradient(90deg, #C45A38 0%, #C45A38 100%)',
                },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, position: 'relative', zIndex: 2 }}>
                <Avatar sx={{ bgcolor: 'primary.main', width: 64, height: 64, mr: 3, boxShadow: '0 4px 16px rgba(196, 90, 56, 0.25)' }}>
                  <PersonIcon sx={{ fontSize: 32 }} />
                </Avatar>
                <Box>
                  <Typography variant="h4" color="primary.main" sx={{ fontWeight: 700, mb: 1 }}>
                    {isZh ? '职业背景' : 'Professional Background'}
                  </Typography>
                  <Chip
                    label={isZh ? 'CTO · AI 产品与软件架构' : 'CTO · AI Product & Software Architecture'}
                    icon={<BusinessCenterIcon />}
                    sx={{ bgcolor: 'rgba(196, 90, 56, 0.1)', color: '#C45A38', fontWeight: 600, border: '1px solid rgba(196, 90, 56, 0.2)' }}
                  />
                </Box>
              </Box>
              <Box sx={{ position: 'relative', zIndex: 2 }}>
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, mb: 3, fontSize: '1.1rem', color: 'text.primary' }}>
                  {isZh ? (
                    <>
                      目前担任 <strong><a href="https://feifan-tech-website.pages.dev/" target="_blank" rel="noopener noreferrer" style={{ color: '#C45A38', textDecoration: 'none', borderBottom: '1px solid #C45A38' }}>非凡科技 CTO</a></strong>，
                      带领 10 人研发团队交付企业软件与 AI 驱动产品。我当前的核心关注点是将大语言模型、RAG、Agent Tool-use 与既有业务系统结合，帮助客户真正把 AI 用到流程、知识与产品中。
                    </>
                  ) : (
                    <>
                      Currently serving as <strong>CTO at <a href="https://feifan-tech-website.pages.dev/" target="_blank" rel="noopener noreferrer" style={{ color: '#C45A38', textDecoration: 'none', borderBottom: '1px solid #C45A38' }}>Feifan Tech</a></strong>,
                      leading a 10-person development team delivering enterprise software and AI-enabled products. My present focus is applying LLMs, RAG, and agent tool-use patterns to real business systems, workflows, and internal knowledge operations.
                    </>
                  )}
                </Typography>
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, mb: 3, fontSize: '1.1rem', color: 'text.primary' }}>
                  {isZh
                    ? '过去 20 多年里，我长期深耕企业级软件架构、大规模平台建设与稳定性治理，曾在华为、阿里巴巴、蚂蚁集团等中国领先科技公司承担核心技术角色。'
                    : 'Over 20+ years, I have specialized in enterprise software architecture, large-scale platform engineering, and high-availability delivery across leading Chinese technology companies including Huawei, Alibaba, and Ant Group.'}
                </Typography>
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, fontSize: '1.1rem', color: 'text.primary' }}>
                  {isZh
                    ? '作为阿里巴巴电商中台联合创始人之一，我参与建立了支撑超大规模电商生态的核心平台能力。今天，我希望把这类平台化方法论继续延伸到 AI 产品、智能助手与企业智能化转型中。'
                    : "As a co-founder of Alibaba's E-commerce Middle Platform, I helped establish foundational platform capabilities for one of the world's largest digital commerce ecosystems. Today, I apply that same platform mindset to AI products, copilots, and enterprise AI transformation."}
                </Typography>
                <Box sx={{ mt: 3 }}>
                  <Typography variant="subtitle2" sx={{ color: '#C45A38', fontWeight: 700, mb: 1.5 }}>
                    {isZh ? '当前关注的角色方向' : 'Roles I am open to'}
                  </Typography>
                  <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                    {roleTags.map((tag) => (
                      <Chip key={tag} label={tag} sx={{ bgcolor: 'rgba(196, 90, 56, 0.1)', color: '#C45A38', border: '1px solid rgba(196, 90, 56, 0.2)', fontWeight: 600 }} />
                    ))}
                  </Stack>
                </Box>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={3} lg={3}>
            <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Paper
                component={motion.div}
                whileHover={{ scale: 1.02, y: -2, boxShadow: '0 12px 32px -4px rgba(196, 90, 56, 0.12)' }}
                elevation={3}
                sx={{ p: 4, background: '#FBF8F2', borderRadius: 3, border: '1px solid #E6DCCB', transition: 'all 0.2s ease-in-out', flex: 1, position: 'relative', overflow: 'hidden', '&::before': { content: '""', position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'linear-gradient(90deg, #5B7A62 0%, #5B7A62 100%)' } }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, position: 'relative', zIndex: 2 }}>
                  <Avatar sx={{ bgcolor: '#5B7A62', width: 56, height: 56, mr: 2, boxShadow: '0 4px 12px rgba(74, 140, 96, 0.2)' }}>
                    <SchoolIcon sx={{ fontSize: 28 }} />
                  </Avatar>
                  <Typography variant="h5" sx={{ color: '#5B7A62', fontWeight: 600 }}>{isZh ? '教育背景' : 'Education'}</Typography>
                </Box>
                <Box sx={{ position: 'relative', zIndex: 2 }}>
                  <Chip label={isZh ? '2001 届毕业' : '2001 Graduate'} size="small" sx={{ bgcolor: 'rgba(74, 140, 96, 0.08)', color: '#5B7A62', mb: 2, fontWeight: 600 }} />
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 700, color: 'text.primary' }}>{isZh ? '工学学士' : 'Bachelor of Technology'}</Typography>
                  <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6, fontWeight: 500 }}>{isZh ? '计算机科学与技术' : 'Computer Science and Technology'}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.5 }}>{isZh ? '中国华侨大学' : 'National Huaqiao University, China'}</Typography>
                </Box>
              </Paper>

              <Paper
                component={motion.div}
                whileHover={{ scale: 1.02, y: -2, boxShadow: '0 12px 32px -4px rgba(196, 90, 56, 0.12)' }}
                elevation={3}
                sx={{ p: 4, background: '#FBF8F2', borderRadius: 3, border: '1px solid #E6DCCB', transition: 'all 0.2s ease-in-out', flex: 1, position: 'relative', overflow: 'hidden', '&::before': { content: '""', position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'linear-gradient(90deg, #C45A38 0%, #C45A38 100%)' } }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, position: 'relative', zIndex: 2 }}>
                  <Avatar sx={{ bgcolor: '#C45A38', width: 56, height: 56, mr: 2, boxShadow: '0 4px 12px rgba(196, 90, 56, 0.2)' }}>
                    <EmojiEventsIcon sx={{ fontSize: 28 }} />
                  </Avatar>
                  <Typography variant="h5" sx={{ color: '#C45A38', fontWeight: 600 }}>{isZh ? '认证' : 'Certifications'}</Typography>
                </Box>
                <Box sx={{ position: 'relative', zIndex: 2 }}>
                  {certifications.map((cert, index) => (
                    <Box key={index} sx={{ mb: index < certifications.length - 1 ? 3 : 0, p: 2, borderRadius: 2, background: '#F3EDE2', border: '1px solid rgba(196, 90, 56, 0.1)' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <StarIcon sx={{ color: '#C45A38', mr: 1, fontSize: 18 }} />
                        <Typography variant="body1" sx={{ fontWeight: 700, lineHeight: 1.5, color: 'text.primary' }}>{cert.name}</Typography>
                      </Box>
                      <Typography variant="body2" sx={{ color: '#C45A38', fontWeight: 600 }}>{cert.year} • {cert.org}</Typography>
                    </Box>
                  ))}
                </Box>
              </Paper>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Paper
              component={motion.div}
              whileHover={{ scale: 1.005, y: -2, boxShadow: '0 16px 40px -8px rgba(196, 90, 56, 0.12)' }}
              elevation={3}
              sx={{ p: 4, background: '#FBF8F2', borderRadius: 3, border: '1px solid #E6DCCB', position: 'relative', overflow: 'hidden', '&::before': { content: '""', position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'linear-gradient(90deg, #C45A38 0%, #C45A38 100%)' } }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, position: 'relative', zIndex: 2 }}>
                <Avatar sx={{ bgcolor: '#C45A38', width: 64, height: 64, mr: 3, boxShadow: '0 4px 16px rgba(196, 90, 56, 0.25)' }}>
                  <WorkIcon sx={{ fontSize: 32 }} />
                </Avatar>
                <Box>
                  <Typography variant="h4" sx={{ color: '#C45A38', fontWeight: 700, mb: 1 }}>{isZh ? '关键亮点' : 'Key Achievements'}</Typography>
                  <Chip label={isZh ? '20+ 年经验' : '20+ Years Experience'} icon={<TrendingUpIcon />} sx={{ bgcolor: 'rgba(196, 90, 56, 0.1)', color: '#C45A38', fontWeight: 600, border: '1px solid rgba(196, 90, 56, 0.2)' }} />
                </Box>
              </Box>
              <Grid container spacing={3} sx={{ position: 'relative', zIndex: 2 }}>
                {achievements.map((achievement, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Box
                      component={motion.div}
                      whileHover={{ scale: 1.02 }}
                      sx={{
                        p: 3,
                        borderRadius: 3,
                        background: '#F3EDE2',
                        border: '1px solid rgba(196, 90, 56, 0.15)',
                        backdropFilter: 'blur(10px)',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        transition: 'all 0.3s ease-in-out',
                        position: 'relative',
                        overflow: 'hidden',
                        '&::before': { content: '""', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(135deg, rgba(196, 90, 56, 0.08) 0%, rgba(196, 90, 56, 0.04) 100%)', zIndex: 1 },
                        '&:hover': { transform: 'translateY(-2px)', background: 'rgba(196, 90, 56, 0.08)', borderColor: 'rgba(196, 90, 56, 0.25)', boxShadow: '0 8px 24px -4px rgba(196, 90, 56, 0.12)' },
                        '& > *': { position: 'relative', zIndex: 2 },
                      }}
                    >
                      <Typography variant="body1" sx={{ fontWeight: 500, color: 'primary.main', lineHeight: 1.6 }}>
                        {achievement}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper
              component={motion.div}
              whileHover={{ scale: 1.005, y: -3, boxShadow: '0 12px 32px -8px rgba(196, 90, 56, 0.15)' }}
              elevation={3}
              sx={{ p: { xs: 3, sm: 4, md: 6 }, background: '#F3EDE2', borderRadius: 3, textAlign: 'center', position: 'relative', overflow: 'hidden', border: '1px solid rgba(196, 90, 56, 0.2)', '&::before': { content: '""', position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'linear-gradient(90deg, #C45A38 0%, #C45A38 100%)' } }}
            >
              <Box>
                <Avatar sx={{ bgcolor: 'rgba(196, 90, 56, 0.1)', width: 80, height: 80, mx: 'auto', mb: 3, border: '2px solid rgba(196, 90, 56, 0.2)' }}>
                  <CodeIcon sx={{ fontSize: 40, color: '#C45A38' }} />
                </Avatar>
                <Typography variant="h4" sx={{ mb: 3, fontStyle: 'italic', fontWeight: 600, lineHeight: 1.4, color: '#2F2C28' }}>
                  {isZh
                    ? '“以企业级架构、敏捷协作与 AI 工程化能力，带领团队达成业务与技术目标。”'
                    : '"Leading teams to deliver business and technical results through enterprise architecture, agile execution, and practical AI engineering."'}
                </Typography>
                <Typography variant="h6" sx={{ color: '#6F675E', maxWidth: '800px', mx: 'auto', lineHeight: 1.6, fontWeight: 400 }}>
                  {isZh
                    ? '我热衷于打造稳健、可扩展、真正被业务使用的系统，也乐于帮助团队与企业把平台能力、组织能力和 AI 能力结合起来，形成长期竞争力。'
                    : 'My passion is building robust, scalable systems that are genuinely useful to the business—and helping teams combine platform capability, organizational discipline, and AI to create durable competitive advantage.'}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
