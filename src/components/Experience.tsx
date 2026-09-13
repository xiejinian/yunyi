import React from 'react';
import { Box, Typography } from '@mui/material';
import { useLanguage } from '../i18n/LanguageContext';
import {
  PageShell,
  PageTitle,
  PageLead,
  SectionTitle,
  BodyText,
  TextLink,
  ACCENT,
  INK,
  MUTED,
  displaySerif,
} from './editorial';

type Role = {
  year: string;
  title: string;
  company: string;
  companyLink?: string;
  body: string;
  emphasize?: boolean;
};

const Experience = () => {
  const { language } = useLanguage();
  const isZh = language === 'zh';

  const featured = isZh
    ? {
        kicker: '关键经历',
        title: '阿里巴巴业务中台联合创始人之一',
        detail: '把交易、商品、订单从各做各的，收成可以共用的平台能力。系统服务数亿用户，也撑过包括大促在内的复杂交易。',
      }
    : {
        kicker: 'Key work',
        title: 'Co-founded Alibaba’s Business Middle Platform',
        detail:
          'Turned trading, product, and order work from siloed delivery into shared platform services. The systems served hundreds of millions of users, including peak commerce events.',
      };

  const roles: Role[] = isZh
    ? [
        {
          year: '2023–至今',
          title: 'CTO',
          company: '光荣智能 (Glorion Intelligence)',
          companyLink: 'https://hz-glory.vercel.app/',
          body: '面向制造、政务和贸易客户。主职负责技术战略与交付，同时以外顾问做飞凡科技 CTO、红熊 AI 研发总经理。以前线交付的方式驻场，把大模型接到现有流程、权限和系统里，让试点能走到生产。',
        },
        {
          year: '2021–2023',
          title: '资深工程师 / 团队负责人',
          company: '蚂蚁集团，杭州',
          body: '负责云凤蝶低代码平台基础服务，带 7 人跨职能团队。把数据模型、权限和多租户做成可复用能力，让业务方能更快地构建应用。',
        },
        {
          year: '2018–2021',
          title: '资深工程师 / 团队负责人',
          company: '阿里云钉钉事业部，杭州',
          body: '带约 20 人做国际版和运营中台，并参与钉钉技术委员会。海外日活跃用户从 0 到数百万，并交付疫情时期企业复工所需的身份平台。',
        },
        {
          year: '2007–2015',
          title: '高级工程师至资深工程师',
          company: '阿里巴巴集团淘宝，杭州',
          emphasize: true,
          body: '负责淘宝交易平台与业务支撑平台，带 30 余人，并参与阿里交易技术委员会。联合创建阿里巴巴业务中台，核心交易系统服务数亿用户。',
        },
        {
          year: '2003–2007',
          title: '项目经理 / 架构师 / 工程师',
          company: '华为技术，深圳',
          body: '参与电信运营支撑系统研发，带约 15 人，推动更可落地的工程方法，并在此期间获得 PMP 认证。',
        },
      ]
    : [
        {
          year: '2023–Present',
          title: 'CTO',
          company: 'Glorion Intelligence',
          companyLink: 'https://hz-glory.vercel.app/',
          body: 'Primary CTO for manufacturing, government, and trade clients; also an external advisor as CTO at Feifan Tech and Head of R&D at Redbear AI. I work on site so models enter existing workflows, permissions, and systems—and so a pilot can become production.',
        },
        {
          year: '2021–2023',
          title: 'Staff Engineer / Team Lead',
          company: 'Ant Group, Hangzhou',
          body: 'Led Yunfengdie low-code platform base services and a team of 7. Encoded data models, permissions, and multi-tenant isolation so business teams could build applications faster.',
        },
        {
          year: '2018–2021',
          title: 'Staff Engineer / Team Lead',
          company: 'Alibaba Cloud DingTalk Division, Hangzhou',
          body: 'Led about 20 engineers on the international product and operations middle platform; DingTalk Technical Committee member. Overseas daily active users grew from 0 to millions. We also shipped the identity platform used for enterprise recovery during COVID-19.',
        },
        {
          year: '2007–2015',
          title: 'Senior Engineer to Staff Engineer',
          company: 'Alibaba Group, Taobao, Hangzhou',
          emphasize: true,
          body: 'Managed R&D for Taobao’s trading and business-support platforms, 30+ engineers; Alibaba Trading Technical Committee member. Co-founded the Business Middle Platform. Core trading systems served hundreds of millions of users.',
        },
        {
          year: '2003–2007',
          title: 'Project Manager / Architect / Engineer',
          company: 'Huawei Technologies, Shenzhen',
          body: 'Worked on telecommunications operations-support systems, led about 15 people, introduced more workable engineering methods, and earned PMP certification.',
        },
      ];

  const earlier = isZh
    ? [
        {
          year: '2015–2018',
          title: '技术总监，蘑菇街',
          detail: '带领 110 人工程团队，负责时尚电商中台与质量保障，主持技术委员会。',
        },
        {
          year: '2001–2003',
          title: '深圳起步',
          detail: '企业软件、在线教育与社区平台；工学学士、国家高级程序员。',
        },
      ]
    : [
        {
          year: '2015–2018',
          title: 'Technical Director, Mogujie',
          detail: 'Led 110 engineers on the fashion e-commerce middle platform and quality, and chaired the Technical Committee.',
        },
        {
          year: '2001–2003',
          title: 'Shenzhen, early career',
          detail: 'Enterprise software, online education, and community platforms; B.Eng. in Computer Science and Technology; National Senior Programmer.',
        },
      ];

  return (
    <PageShell>
      <PageTitle>{isZh ? '经历' : 'Experience'}</PageTitle>
      <PageLead>
        {isZh
          ? '从工程、平台、带团队，到把企业 AI 真正交出去。'
          : 'Engineering, platforms, leading teams, and shipping enterprise AI.'}
      </PageLead>

      <Box sx={{ mb: 7, pb: 4, borderBottom: '1px solid #E6DCCB' }}>
        <Typography sx={{ color: ACCENT, letterSpacing: '0.04em', mb: 1, fontSize: '0.88rem' }}>{featured.kicker}</Typography>
        <Typography sx={{ fontFamily: displaySerif, fontSize: { xs: '1.25rem', md: '1.4rem' }, color: INK, mb: 1.25, lineHeight: 1.4 }}>
          {featured.title}
        </Typography>
        <BodyText sx={{ mb: 0 }}>{featured.detail}</BodyText>
      </Box>

      <Box sx={{ display: 'grid', gap: 6 }}>
        {roles.map((exp) => (
          <Box
            key={`${exp.year}-${exp.company}`}
            sx={exp.emphasize ? { pl: { xs: 0, md: 2 }, borderLeft: { md: `1px solid ${ACCENT}` } } : undefined}
          >
            <Typography sx={{ color: ACCENT, letterSpacing: '0.04em', mb: 0.75 }}>{exp.year}</Typography>
            <Typography
              component="h2"
              sx={{
                fontFamily: displaySerif,
                fontSize: { xs: '1.18rem', md: '1.32rem' },
                color: INK,
                mb: 0.4,
                lineHeight: 1.35,
              }}
            >
              {exp.title}
            </Typography>
            <Typography sx={{ color: MUTED, mb: 1.75, fontSize: '1.02rem' }}>
              {exp.companyLink ? <TextLink href={exp.companyLink}>{exp.company}</TextLink> : exp.company}
            </Typography>
            <BodyText sx={{ mb: 0 }}>{exp.body}</BodyText>
          </Box>
        ))}
      </Box>

      <Box sx={{ mt: 8 }}>
        <SectionTitle>{isZh ? '更早' : 'Earlier'}</SectionTitle>
        <Box sx={{ display: 'grid', gap: 3.5, mt: 1 }}>
          {earlier.map((item) => (
            <Box key={item.year}>
              <Typography sx={{ color: ACCENT, mb: 0.4 }}>{item.year}</Typography>
              <Typography sx={{ fontFamily: displaySerif, color: INK, fontSize: '1.12rem', mb: 0.5 }}>{item.title}</Typography>
              <Typography sx={{ color: MUTED, lineHeight: 1.7 }}>{item.detail}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </PageShell>
  );
};

export default Experience;
