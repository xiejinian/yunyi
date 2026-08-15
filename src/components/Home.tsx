import React from 'react';
import { Box, Typography, Container, Button, Stack, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EmailIcon from '@mui/icons-material/Email';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupIcon from '@mui/icons-material/Group';
import BusinessIcon from '@mui/icons-material/Business';
import { useLanguage } from '../i18n/LanguageContext';

const Home = () => {
  const { language } = useLanguage();
  const isZh = language === 'zh';

  const badges = [
    { icon: BusinessIcon, label: 'CTO', sub: 'Feifan Tech', link: 'https://feifan-tech-website.pages.dev/' },
    { icon: TrendingUpIcon, label: isZh ? '20+ 年' : '20+ YRS', sub: isZh ? '经验' : 'Experience' },
    { icon: GroupIcon, label: '110+', sub: isZh ? '带队规模' : 'People Led' },
  ];

  const roleTags = isZh
    ? ['CTO', '技术顾问', '咨询 / Advisory', '工程 / 技术管理']
    : ['CTO', 'Technical Advisor', 'Consulting', 'Engineering Manager'];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        background: '#0e1412',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(42,56,48,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(42,56,48,0.35) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          zIndex: 0,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 75% 70% at 50% 50%, transparent 40%, rgba(14,20,18,0.85) 100%)',
          zIndex: 1,
        },
      }}
    >
      <Container sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.3 }}>
            <Typography
              sx={{
                fontFamily: '"JetBrains Mono", "Courier Prime", monospace',
                fontSize: '0.72rem',
                letterSpacing: '0.08em',
                color: '#4a8c60',
                textAlign: 'center',
                mb: 4,
                '&::before': { content: '"[  OK  ] "', color: '#4a8c60' },
              }}
            >
              {isZh
                ? '已加载 20+ 年企业级工程、平台架构与 AI 产品经验'
                : '20+ years of enterprise engineering, platform architecture, and AI product experience loaded'}
            </Typography>
          </motion.div>

          <Stack direction="row" sx={{ mb: 5, justifyContent: 'center', flexWrap: 'wrap', gap: 1.5 }}>
            {badges.map((badge, index) => {
              const Icon = badge.icon;
              const inner = (
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.25,
                    px: 2.5,
                    py: 1.25,
                    border: '1px solid #2a3830',
                    borderRadius: '2px',
                    background: 'rgba(20,28,24,0.8)',
                    cursor: badge.link ? 'pointer' : 'default',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': badge.link
                      ? { borderColor: 'rgba(201,168,76,0.45)', background: 'rgba(201,168,76,0.06)' }
                      : {},
                  }}
                >
                  <Icon sx={{ fontSize: '1rem', color: '#c9a84c', opacity: 0.85 }} />
                  <Box>
                    <Typography sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.08em', color: '#c9a84c', lineHeight: 1.2 }}>
                      {badge.label}
                    </Typography>
                    <Typography sx={{ fontSize: '0.7rem', letterSpacing: '0.04em', color: '#9a9080', lineHeight: 1.2 }}>
                      {badge.sub}
                    </Typography>
                  </Box>
                </Box>
              );

              return (
                <motion.div key={index} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.45 + index * 0.1 }}>
                  {badge.link ? (
                    <Box component="a" href={badge.link} target="_blank" rel="noopener noreferrer" sx={{ textDecoration: 'none', display: 'block' }}>
                      {inner}
                    </Box>
                  ) : (
                    inner
                  )}
                </motion.div>
              );
            })}
          </Stack>

          <Box sx={{ textAlign: 'center' }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }}>
              <Typography variant="h1" component="h1" sx={{ mb: 1, fontFamily: '"JetBrains Mono", "Courier Prime", "Noto Serif SC", monospace', fontWeight: 700, color: '#e8e0d0', letterSpacing: '0.04em' }}>
                Xie Jinian
              </Typography>
              <Typography sx={{ fontFamily: '"Noto Serif SC", serif', fontSize: '1.5rem', fontWeight: 600, color: 'rgba(201,168,76,0.75)', letterSpacing: '0.2em', mb: 3 }}>
                谢记年
              </Typography>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9 }}>
              <Typography variant="h3" sx={{ color: '#9a9080', mb: 3, fontWeight: 400, fontSize: '1.35rem', letterSpacing: '0.02em' }}>
                {isZh ? '非凡科技 CTO · AI 产品与平台技术负责人' : 'CTO at Feifan Tech · AI Product & Platform Leader'}
              </Typography>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.1 }}>
              <Typography sx={{ color: '#9a9080', maxWidth: '820px', mx: 'auto', mb: 3, lineHeight: 1.85, fontSize: '1rem', fontWeight: 400 }}>
                {isZh ? (
                  <>
                    曾任华为、阿里巴巴 / 蚂蚁集团资深技术专家，阿里电商中台联合创始人之一。<br />
                    目前聚焦大语言模型应用、AI 工程化落地与 AI 驱动产品，帮助企业把既有平台能力与 LLM、RAG、Agent Tool-use 结合，交付真正可用的业务系统。
                  </>
                ) : (
                  <>
                    Former Staff Engineer at Huawei and Alibaba/Ant Group. Co-founder of Alibaba&apos;s E-commerce Middle Platform.
                    <br />
                    Now focused on LLM applications, AI engineering, and AI-driven products—integrating platform experience with RAG, agent workflows, and practical enterprise delivery.
                  </>
                )}
              </Typography>
              <Typography sx={{ color: '#c9a84c', maxWidth: '820px', mx: 'auto', mb: 4, lineHeight: 1.8, fontSize: '0.95rem', letterSpacing: '0.02em' }}>
                {isZh
                  ? '目前也开放 CTO、技术顾问、咨询 / Advisory，以及工程 / 技术管理岗位机会。'
                  : 'Open to CTO, Technical Advisor, consulting / advisory, and engineering or technical management opportunities.'}
              </Typography>
              <Stack direction="row" spacing={1.25} useFlexGap flexWrap="wrap" sx={{ justifyContent: 'center', mb: 6 }}>
                {roleTags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    sx={{ borderRadius: '2px', border: '1px solid rgba(201,168,76,0.25)', background: 'rgba(201,168,76,0.06)', color: '#c9a84c', fontWeight: 600 }}
                  />
                ))}
              </Stack>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.3 }}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2.5} sx={{ justifyContent: 'center' }}>
                <Button
                  variant="contained"
                  size="large"
                  component={RouterLink}
                  to="/projects"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    py: 1.5,
                    px: 4,
                    fontSize: '0.9rem',
                    letterSpacing: '0.06em',
                    fontWeight: 700,
                    textDecoration: 'none',
                    borderRadius: '2px',
                    background: '#c9a84c',
                    color: '#0e1412',
                    '&:hover': { background: '#dbbf6e', boxShadow: '0 4px 20px rgba(201,168,76,0.2)' },
                  }}
                >
                  {isZh ? '查看项目与成果' : 'View My Work'}
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  component={RouterLink}
                  to="/contact"
                  startIcon={<EmailIcon />}
                  sx={{
                    py: 1.5,
                    px: 4,
                    fontSize: '0.9rem',
                    letterSpacing: '0.06em',
                    textDecoration: 'none',
                    borderRadius: '2px',
                    borderColor: '#2a3830',
                    color: '#c9a84c',
                    '&:hover': { borderColor: '#c9a84c', backgroundColor: 'rgba(201,168,76,0.06)' },
                  }}
                >
                  {isZh ? '联系我' : 'Contact Me'}
                </Button>
              </Stack>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Home;
