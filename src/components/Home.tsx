import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

const Home = () => {
  const { language } = useLanguage();
  const isZh = language === 'zh';

  const whoAmI = isZh
    ? [
        '非凡科技 CTO，关注 AI 产品与平台工程',
        '前华为、阿里巴巴 / 蚂蚁集团资深技术专家',
        '阿里巴巴电商中台联合创始人之一',
        '20+ 年企业级工程、架构与团队管理经验',
      ]
    : [
        'CTO at Feifan Tech, focused on AI products and platform engineering',
        'Former staff engineer at Huawei and Alibaba / Ant Group',
        "Co-founder of Alibaba's E-commerce Middle Platform",
        '20+ years in enterprise engineering, architecture, and team leadership',
      ];

  const services = isZh
    ? [
        '企业软件与 AI / LLM 产品落地',
        '技术顾问、咨询 / Advisory',
        '工程管理与技术团队建设',
        '中台、电商与可扩展架构',
      ]
    : [
        'Enterprise software and AI / LLM product delivery',
        'Technical advisory and consulting',
        'Engineering management and team building',
        'Middle-platform, commerce, and scalable architecture',
      ];

  const jumpLinks = [
    { label: isZh ? '关于我' : 'About', path: '/about' },
    { label: isZh ? '职业经历' : 'Experience', path: '/experience' },
    { label: isZh ? '我的故事' : 'My Story', path: '/mystory' },
    { label: isZh ? '代表项目' : 'Projects', path: '/projects' },
    { label: isZh ? '联系方式' : 'Contact', path: '/contact' },
  ];

  const sectionTitleSx = {
    fontFamily: '"Playfair Display", "Noto Serif SC", Georgia, serif',
    fontSize: '1.05rem',
    fontWeight: 500,
    color: '#C45A38',
    mb: 1.75,
    letterSpacing: '0.04em',
  } as const;

  return (
    <Box
      sx={{
        minHeight: '100vh',
        pt: { xs: 9, md: 10 },
        pb: { xs: 6, md: 8 },
        px: { xs: 2.5, sm: 4, md: 6 },
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 1180,
          mx: 'auto',
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '0.9fr 1.15fr' },
          gap: { xs: 5, md: 8, lg: 10 },
          alignItems: 'center',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Box
            sx={{
              maxWidth: { xs: 420, md: 'none' },
              mx: { xs: 'auto', md: 0 },
            }}
          >
            <Box
              component="img"
              src="/hero.jpg"
              alt={isZh ? '克劳德·莫奈《印象·日出》' : 'Claude Monet, Impression, Sunrise'}
              sx={{
                display: 'block',
                width: '100%',
                height: { xs: 420, sm: 480, md: 'min(72vh, 640px)' },
                objectFit: 'cover',
                objectPosition: 'center 42%',
              }}
            />
            <Typography
              sx={{
                mt: 1.25,
                fontSize: '0.78rem',
                color: '#8A8278',
                letterSpacing: '0.02em',
                lineHeight: 1.6,
              }}
            >
              {isZh
                ? '克劳德·莫奈《印象·日出》，1872。光落在水面上，像工程落在真实业务里。'
                : 'Claude Monet, Impression, Sunrise, 1872. Light on water — the way engineering should land in real work.'}
            </Typography>
          </Box>
        </motion.div>

        <Box
          sx={{
            textAlign: 'center',
            maxWidth: 520,
            mx: 'auto',
            width: '100%',
          }}
        >
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.12 }}>
            <Typography
              component="h1"
              sx={{
                fontFamily: '"Playfair Display", "Noto Serif SC", Georgia, serif',
                fontWeight: 500,
                fontSize: { xs: '2.6rem', sm: '3.2rem', md: '3.6rem' },
                lineHeight: 1.15,
                letterSpacing: '0.01em',
                color: '#2F2C28',
                mb: 0.5,
              }}
            >
              Xie{' '}
              <Box component="span" sx={{ color: '#C45A38' }}>
                Jinian
              </Box>
            </Typography>
            <Typography
              sx={{
                fontFamily: '"Noto Serif SC", "Playfair Display", serif',
                fontSize: '1.15rem',
                color: '#6F675E',
                letterSpacing: '0.28em',
                mb: 5,
              }}
            >
              谢记年
            </Typography>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.22 }}>
            <Typography sx={sectionTitleSx}>{isZh ? '我是谁' : 'Who I am'}</Typography>
            <Box
              component="ul"
              sx={{
                listStyle: 'none',
                m: 0,
                mb: 4.5,
                p: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 0.85,
              }}
            >
              {whoAmI.map((item) => (
                <Box
                  component="li"
                  key={item}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    gap: 1,
                    color: '#3A3632',
                    fontSize: { xs: '0.95rem', md: '1.02rem' },
                    lineHeight: 1.7,
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      mt: '0.62em',
                      width: 5,
                      height: 5,
                      borderRadius: '50%',
                      bgcolor: '#C45A38',
                      flexShrink: 0,
                      opacity: 0.85,
                    }}
                  />
                  <Box component="span" sx={{ textAlign: 'left', maxWidth: 420 }}>
                    {item}
                  </Box>
                </Box>
              ))}
            </Box>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.32 }}>
            <Typography sx={sectionTitleSx}>{isZh ? '主要业务' : 'Main work'}</Typography>
            <Stack spacing={1.1} sx={{ mb: 4.5, alignItems: 'center' }}>
              {services.map((item, index) => (
                <Typography
                  key={item}
                  sx={{
                    color: '#C45A38',
                    fontSize: { xs: '0.98rem', md: '1.05rem' },
                    lineHeight: 1.6,
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 0.75,
                  }}
                >
                  <Box
                    component="sup"
                    sx={{
                      fontSize: '0.7rem',
                      top: '-0.35em',
                      fontFamily: '"Playfair Display", serif',
                      minWidth: 14,
                      textAlign: 'right',
                    }}
                  >
                    {index + 1}
                  </Box>
                  {item}
                </Typography>
              ))}
            </Stack>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.42 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1.5, mb: 1.25 }}>
              <Typography sx={{ ...sectionTitleSx, mb: 0 }}>{isZh ? '往下' : 'Continue'}</Typography>
              <Typography sx={{ color: '#C45A38', fontSize: '1.05rem', lineHeight: 1.4 }}>↓</Typography>
            </Box>
            <Stack spacing={0.7} alignItems="center">
              {jumpLinks.map((link) => (
                <Typography
                  key={link.path}
                  component={RouterLink}
                  to={link.path}
                  sx={{
                    color: '#C45A38',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    lineHeight: 1.7,
                    '&:hover': { color: '#A3472C' },
                  }}
                >
                  {link.label}
                </Typography>
              ))}
            </Stack>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
