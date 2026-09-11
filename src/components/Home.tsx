import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { ACCENT, ACCENT_DARK, INK, MUTED, FAINT, displaySerif } from './editorial';
import { TrustLogos } from './Trust';

const Home = () => {
  const { language } = useLanguage();
  const isZh = language === 'zh';

  const proofs = isZh
    ? [
        { kicker: '01', text: '阿里巴巴业务中台联合创始人之一' },
        { kicker: '02', text: '带领钉钉国际化从 0 到数百万日活跃用户' },
        { kicker: '03', text: '带领过 7 至 110 人规模的工程组织' },
      ]
    : [
        { kicker: '01', text: "Co-founded Alibaba’s Business Middle Platform" },
        { kicker: '02', text: 'Led DingTalk international growth from 0 to millions of daily active users' },
        { kicker: '03', text: 'Led engineering organizations of 7–110 people' },
      ];

  const stats = isZh
    ? [
        { value: '20+', label: '年企业工程' },
        { value: '0→百万', label: '海外日活跃用户' },
        { value: '7–110', label: '人团队' },
      ]
    : [
        { value: '20+', label: 'years in enterprise engineering' },
        { value: '0→millions', label: 'international daily active users' },
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
    <Box>
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
              {isZh ? '克劳德·莫奈《印象·日出》，1872 年。' : 'Claude Monet, Impression, Sunrise, 1872.'}
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
              {isZh ? '把 AI 带进实际业务。' : 'Bring AI into real work.'}
            </Typography>
            <Typography sx={{ color: MUTED, fontSize: '1.02rem', mb: 0.6, letterSpacing: '0.04em' }}>
              Xie Jinian · 谢记年
            </Typography>
            <Typography sx={{ color: FAINT, fontSize: '0.88rem', mb: 2.5, lineHeight: 1.6 }}>
              {isZh ? '阿里花名：云翼 · 蘑菇街花名：慕韩' : 'Known at Alibaba as Yunyi · known at Mogujie as Muhan'}
            </Typography>
            <Typography sx={{ color: INK, fontSize: { xs: '1.02rem', md: '1.08rem' }, lineHeight: 1.8, mb: 2 }}>
              {isZh
                ? '我帮企业把 AI 用进真实业务，把平台做稳，把工程团队带起来。'
                : 'I help companies put AI into real work, steady the platform, and build engineering teams that can keep delivering.'}
            </Typography>
            <Typography sx={{ color: MUTED, fontSize: '1.02rem', lineHeight: 1.8, mb: 3.5 }}>
              {isZh
                ? '我是谢记年，光荣智能 CTO，同时以外顾问身份做飞凡科技 CTO 和红熊 AI 研发总经理。过去二十多年在华为、阿里巴巴、蚂蚁集团，也在成长很快的产品公司做过。我帮管理层把 AI 用进现有流程，把关键平台理顺，把能持续交付的工程团队建起来。'
                : 'I am Xie Jinian, CTO at Glorion Intelligence, and an external advisor serving as CTO at Feifan Tech and Head of R&D at Redbear AI. I have more than twenty years at Huawei, Alibaba, Ant Group, and fast-growing product companies. I help leadership teams put AI into existing workflows, get critical platforms in order, and build engineering teams that can keep delivering.'}
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
                {isZh ? '谈一个 AI 或平台问题 →' : 'Talk about an AI or platform problem →'}
              </Typography>
              <Typography component={RouterLink} to="/projects" sx={ctaSx}>
                {isZh ? '查看精选案例 →' : 'View selected work →'}
              </Typography>
            </Stack>
          </motion.div>
        </Box>
      </Box>
    </Box>

      <Box
        sx={{
          px: { xs: 2.5, sm: 4, md: 6 },
          pb: { xs: 8, md: 12 },
        }}
      >
        <Box sx={{ maxWidth: 760, mx: 'auto', width: '100%' }}>
          <Box sx={{ pt: { xs: 2, md: 4 }, borderTop: '1px solid #E6DCCB' }}>
            <TrustLogos isZh={isZh} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
