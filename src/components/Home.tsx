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
        '阿里巴巴业务中台联合创始人之一',
        '带领钉钉国际化从 0 到数百万日活跃用户',
        '带领过 7 至 110 人规模的工程组织',
      ]
    : [
        'Co-founded Alibaba’s Business Middle Platform',
        'Led DingTalk international growth from 0 to millions of daily active users',
        'Led engineering organizations of 7–110 people',
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

        <Box sx={{ maxWidth: 540, mx: { xs: 'auto', md: 0 }, width: '100%', order: { xs: 1, md: 2 } }}>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.08 }}>
            <Typography
              sx={{
                fontFamily: displaySerif,
                fontSize: '0.92rem',
                fontWeight: 500,
                color: ACCENT,
                letterSpacing: '0.04em',
                mb: 1.75,
              }}
            >
              {isZh ? '光荣智能 CTO' : 'CTO, Glorion Intelligence'}
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
            <Typography sx={{ color: MUTED, fontSize: '1.02rem', mb: 0.5, letterSpacing: '0.04em' }}>
              Xie Jinian · 谢记年
            </Typography>
            <Typography sx={{ color: FAINT, fontSize: '0.88rem', mb: 2.75, lineHeight: 1.6 }}>
              {isZh ? '阿里花名：云翼 · 蘑菇街花名：慕韩' : 'Known at Alibaba as Yunyi · known at Mogujie as Muhan'}
            </Typography>
            <Typography sx={{ color: INK, fontSize: { xs: '1.02rem', md: '1.08rem' }, lineHeight: 1.85, mb: 3.5 }}>
              {isZh
                ? '我是谢记年，光荣智能 CTO，同时以外顾问身份做飞凡科技 CTO 和红熊 AI 研发总经理。过去二十多年在华为、阿里巴巴、蚂蚁集团，也在成长很快的产品公司做过。'
                : 'I am Xie Jinian, CTO at Glorion Intelligence, and an external advisor as CTO at Feifan Tech and Head of R&D at Redbear AI. I have spent more than twenty years at Huawei, Alibaba, Ant Group, and fast-growing product companies.'}
            </Typography>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.18 }}>
            <Stack spacing={1.15} sx={{ mb: 4, pb: 3.5, borderBottom: '1px solid #E6DCCB' }}>
              {proofs.map((text) => (
                <Typography key={text} sx={{ color: INK, fontSize: '1.02rem', lineHeight: 1.7 }}>
                  {text}
                </Typography>
              ))}
            </Stack>

            <Stack spacing={1} sx={{ mb: 1 }}>
              <Typography component={RouterLink} to="/contact" sx={ctaSx}>
                {isZh ? '来信' : 'Write'}
              </Typography>
              <Typography component={RouterLink} to="/projects" sx={ctaSx}>
                {isZh ? '案例' : 'Selected work'}
              </Typography>
            </Stack>
          </motion.div>
        </Box>
      </Box>
    </Box>

      <Box
        sx={{
          px: { xs: 2.5, sm: 4, md: 6 },
          pb: { xs: 4, md: 6 },
        }}
      >
        <Box sx={{ maxWidth: 760, mx: 'auto', width: '100%' }}>
          <Box sx={{ pt: { xs: 1, md: 2 } }}>
            <TrustLogos isZh={isZh} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
