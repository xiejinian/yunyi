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
} from './editorial';

const Contact = () => {
  const { language } = useLanguage();
  const isZh = language === 'zh';

  const email = 'yymhxie@gmail.com';

  const services = isZh
    ? [
        {
          title: 'AI 交付评估',
          description: '判断一个 AI 场景是否值得做，如何接到现有流程，以及怎样上线、评估和运维。',
          subject: 'AI 交付评估',
        },
        {
          title: '平台与架构评审',
          description: '梳理复杂系统、平台边界、集成与演进风险，明确哪些该共享、哪些该留在业务侧。',
          subject: '平台与架构评审',
        },
        {
          title: '工程组织顾问',
          description: '解决研发结构、交付节奏、质量和跨团队协作，让技术方案变成可执行的组织能力。',
          subject: '工程组织顾问',
        },
      ]
    : [
        {
          title: 'AI Delivery Assessment',
          description: 'Decide whether an AI scenario is worth doing, how it enters existing workflows, and how to ship, evaluate, and operate it.',
          subject: 'AI Delivery Assessment',
        },
        {
          title: 'Platform & Architecture Review',
          description: 'Map a complex system, platform boundaries, integration, and evolution risk—what should be shared, what should stay in the business.',
          subject: 'Platform & Architecture Review',
        },
        {
          title: 'Engineering Leadership Advisory',
          description: 'Work on structure, delivery cadence, quality, and cross-team collaboration so a technical plan becomes an organizational capability.',
          subject: 'Engineering Leadership Advisory',
        },
      ];

  const mailto = (subject: string) =>
    `mailto:${email}?subject=${encodeURIComponent(subject)}`;

  return (
    <PageShell>
      <PageTitle>{isZh ? '联系我' : 'Contact'}</PageTitle>
      <PageLead>
        {isZh ? '先谈一个真实的交付问题。' : 'Let’s discuss a real delivery problem.'}
      </PageLead>

      <BodyText>
        {isZh
          ? '我最适合与这样的负责人合作：你们正从 AI 试验走向生产工作流，正在现代化一套关键平台，或需要让工程组织真正跑起来。'
          : 'I work best with leaders who are moving from AI experimentation to production workflows, modernizing a critical platform, or scaling an engineering organization that has to actually deliver.'}
      </BodyText>

      <SectionTitle>{isZh ? '可以从这里开始' : 'Start here'}</SectionTitle>
      <Box sx={{ display: 'grid', gap: 4, mb: 7 }}>
        {services.map((service, index) => (
          <Box key={service.title}>
            <Typography sx={{ color: INK, fontSize: '1.08rem', mb: 0.75, display: 'flex', gap: 1 }}>
              <Box component="sup" sx={{ color: ACCENT, fontSize: '0.7rem', minWidth: 14, textAlign: 'right' }}>
                {index + 1}
              </Box>
              {service.title}
            </Typography>
            <BodyText sx={{ mb: 1 }}>{service.description}</BodyText>
            <Typography sx={{ fontSize: '1rem' }}>
              <TextLink href={mailto(service.subject)}>{isZh ? '用这个主题写信 →' : 'Email with this subject →'}</TextLink>
            </Typography>
          </Box>
        ))}
      </Box>

      <SectionTitle>{isZh ? '直接联系' : 'Reach me'}</SectionTitle>
      <Box sx={{ mb: 2 }}>
        <Typography sx={{ color: ACCENT, fontSize: '1.08rem', mb: 0.5 }}>
          <TextLink href={`mailto:${email}`}>{email}</TextLink>
        </Typography>
        <Typography sx={{ color: MUTED, lineHeight: 1.7 }}>
          {isZh
            ? '请用几句话说明场景、约束和你希望 30 分钟沟通后带走什么。通常 24 小时内回复 · 时区 GMT+8'
            : 'A few sentences on the scenario, the constraints, and what you want from a 30-minute conversation is enough. I usually reply within 24 hours · GMT+8'}
        </Typography>
      </Box>
      <BodyText sx={{ mb: 6 }}>
        {isZh ? (
          <>
            常驻杭州。当前主职是{' '}
            <TextLink href="https://hz-glory.vercel.app/">光荣智能</TextLink>
            {' '}CTO，并以外部顾问身份兼任飞凡科技 CTO 与红熊AI 研发总经理。
          </>
        ) : (
          <>
            Based in Hangzhou. Primary role: CTO at{' '}
            <TextLink href="https://hz-glory.vercel.app/">Glorion Intelligence</TextLink>
            , with concurrent advisor roles at Feifan Tech and Redbear AI.
          </>
        )}
      </BodyText>

      <SectionTitle>{isZh ? '次级入口：全职技术领导机会' : 'Secondary path: full-time leadership'}</SectionTitle>
      <BodyText sx={{ mb: 1.5 }}>
        {isZh
          ? '网站的第一目标是企业 AI 与技术顾问合作。如果你在寻找 CTO / VP Engineering / Staff+ 技术负责人，也可以来信，请在主题里写明“领导力机会”。'
          : 'The primary aim of this site is enterprise AI and technology advisory work. If you are hiring a CTO, VP Engineering, or Staff+ technology leader, write anyway—put “leadership role” in the subject.'}
      </BodyText>
      <Typography sx={{ mb: 2 }}>
        <TextLink href={mailto(isZh ? '领导力机会' : 'Leadership role')}>
          {isZh ? '讨论领导力机会 →' : 'Discuss a leadership role →'}
        </TextLink>
      </Typography>
    </PageShell>
  );
};

export default Contact;
