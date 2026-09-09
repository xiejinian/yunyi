import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { ACCENT, ACCENT_DARK, INK, MUTED, FAINT, displaySerif } from './editorial';

const Home = () => {
  const { language } = useLanguage();
  const isZh = language === 'zh';

  const proofs = isZh
    ? [
        { kicker: '01', text: '阿里巴巴电商中台联合创始人之一' },
        { kicker: '02', text: '带领钉钉国际化从 0 到数百万 DAU' },
        { kicker: '03', text: '带领过 7 至 110 人规模的工程组织' },
      ]
    : [
        { kicker: '01', text: "Co-founded Alibaba’s E-commerce Middle Platform" },
        { kicker: '02', text: 'Led DingTalk international growth from 0 to millions of DAU' },
        { kicker: '03', text: 'Led engineering organizations of 7–110 people' },
      ];

  const stats = isZh
    ? [
        { value: '20+', label: '年企业工程' },
        { value: '0→百万', label: '海外日活' },
        { value: '7–110', label: '人团队' },
      ]
    : [
        { value: '20+', label: 'years in enterprise engineering' },
        { value: '0→millions', label: 'international DAU' },
        { value: '7–110', label: 'engineers led' },
      ];

  const ctaSx = {
    color: ACCENT,
    textDecoration: 'none',
    fontSize: { xs: '1.02rem', md: '1.08rem' },
    lineHeight: 1.6,
    '&:hover': { color: ACCENT_DARK },
  } as const;

  return (
    <Box
      sx={{
        minHeight: '100vh',
        pt: { xs: 10, md: 12 },
        pb: { xs: 8, md: 10 },
        px: { xs: 2.5, sm: 4, md: 6 },
        display: 'flex',
        alignItems: { xs: 'flex-start', md: 'center' },
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 1180,
          mx: 'auto',
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '0.85fr 1.15fr' },
          gap: { xs: 5, md: 8, lg: 10 },
          alignItems: 'center',
        }}
      >
        <Box sx={{ order: { xs: 2, md: 1 } }}>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
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
                height: { xs: 280, sm: 340, md: 'min(64vh, 560px)' },
                objectFit: 'cover',
                objectPosition: 'center 42%',
              }}
            />
            <Typography sx={{ mt: 1.25, fontSize: '0.78rem', color: FAINT, letterSpacing: '0.02em', lineHeight: 1.6 }}>
              {isZh
                ? '克劳德·莫奈《印象·日出》，1872。光落在水面上，像工程落在真实业务里。'
                : 'Claude Monet, Impression, Sunrise, 1872. Light on water — the way engineering should land in real work.'}
            </Typography>
          </Box>
          </motion.div>
        </Box>

        <Box sx={{ maxWidth: 560, mx: { xs: 'auto', md: 0 }, width: '100%', order: { xs: 1, md: 2 } }}>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.08 }}>
            <Typography
              sx={{
                fontFamily: displaySerif,
                fontSize: '0.92rem',
                fontWeight: 500,
                color: ACCENT,
                letterSpacing: '0.06em',
                mb: 1.75,
              }}
            >
              {isZh ? '企业 AI · 平台 · 工程组织' : 'Enterprise AI · Platforms · Engineering Leadership'}
            </Typography>
            <Typography
              component="h1"
              sx={{
                fontFamily: displaySerif,
                fontWeight: 500,
                fontSize: { xs: '1.85rem', sm: '2.25rem', md: '2.55rem' },
                lineHeight: 1.22,
                color: INK,
                mb: 1.5,
              }}
            >
              {isZh ? '把 AI 雄心，落成可靠的业务系统。' : 'Turn AI ambition into dependable business systems.'}
            </Typography>
            <Typography sx={{ color: MUTED, fontSize: '1.02rem', mb: 2.5, letterSpacing: '0.04em' }}>
              Xie Jinian · 谢记年
            </Typography>
            <Typography sx={{ color: INK, fontSize: { xs: '1.02rem', md: '1.08rem' }, lineHeight: 1.8, mb: 2 }}>
              {isZh
                ? '企业 AI 与平台技术负责人：帮助企业把复杂业务流程，落地为可靠的 AI 系统、可扩展的平台能力和高效的工程组织。'
                : 'Enterprise AI & Platform CTO — I help companies turn complex business workflows into reliable AI-enabled systems, scalable platforms, and high-performing engineering teams.'}
            </Typography>
            <Typography sx={{ color: MUTED, fontSize: '1.02rem', lineHeight: 1.8, mb: 3.5 }}>
              {isZh
                ? '我是谢记年，光荣智能 CTO，并以外顾问身份兼任飞凡科技 CTO 与红熊AI 研发总经理。过去 20 多年在华为、阿里巴巴、蚂蚁集团和高速成长的产品组织工作。我帮助管理层把 AI 嵌入真实工作流，现代化关键平台，并建设能够持续交付的工程团队。'
                : 'I’m Xie Jinian, CTO at Glorion Intelligence, and an external advisor as CTO at Feifan Tech and Head of R&D at Redbear AI. I have 20+ years across Huawei, Alibaba, Ant Group, and high-growth product organizations. I help leadership teams deploy AI into real workflows, modernize critical platforms, and build engineering organizations that deliver.'}
            </Typography>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.18 }}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
                gap: { xs: 2, sm: 3 },
                mb: 3.5,
                pb: 3.5,
                borderBottom: '1px solid #E6DCCB',
              }}
            >
              {stats.map((stat) => (
                <Box key={stat.label}>
                  <Typography sx={{ fontFamily: displaySerif, color: ACCENT, fontSize: { xs: '1.35rem', md: '1.5rem' }, lineHeight: 1.2 }}>
                    {stat.value}
                  </Typography>
                  <Typography sx={{ color: MUTED, fontSize: '0.88rem', mt: 0.5, lineHeight: 1.5 }}>{stat.label}</Typography>
                </Box>
              ))}
            </Box>

            <Stack spacing={1.1} sx={{ mb: 4 }}>
              {proofs.map((item) => (
                <Typography key={item.kicker} sx={{ color: INK, fontSize: '1.02rem', lineHeight: 1.65, display: 'flex', gap: 1.1 }}>
                  <Box component="sup" sx={{ color: ACCENT, fontFamily: displaySerif, fontSize: '0.7rem', minWidth: 16, textAlign: 'right', top: '-0.2em' }}>
                    {item.kicker}
                  </Box>
                  {item.text}
                </Typography>
              ))}
            </Stack>

            <Stack spacing={1.1} sx={{ mb: 1 }}>
              <Typography component={RouterLink} to="/contact" sx={ctaSx}>
                {isZh ? '讨论一个 AI 或平台问题 →' : 'Discuss an AI or platform challenge →'}
              </Typography>
              <Typography component={RouterLink} to="/projects" sx={ctaSx}>
                {isZh ? '查看精选案例 →' : 'View selected work →'}
              </Typography>
            </Stack>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
