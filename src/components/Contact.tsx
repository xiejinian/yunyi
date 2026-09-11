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
        {isZh ? '先从一个具体问题谈起。' : 'Start with a specific problem.'}
      </PageLead>

      <BodyText>
        {isZh
          ? '我比较适合和这样的负责人合作：你们正把 AI 从试用往生产推，或在升级一套关键平台，或需要让工程团队真正跑起来。'
          : 'I work best with leaders who are moving AI from trials into production, upgrading a critical platform, or getting an engineering team to actually deliver.'}
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
              <TextLink href={mailto(service.subject)}>{isZh ? '用这个主题发邮件 →' : 'Email with this subject →'}</TextLink>
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
            ? '请用几句话写清场景、限制，以及你希望半小时聊完带走什么。一般 24 小时内回复 · 时区 GMT+8'
            : 'A few sentences on the scenario, the constraints, and what you want from a 30-minute conversation is enough. I usually reply within 24 hours · GMT+8'}
        </Typography>
      </Box>
      <BodyText sx={{ mb: 6 }}>
        {isZh ? (
          <>
            常驻杭州。当前主职是{' '}
            <TextLink href="https://hz-glory.vercel.app/">光荣智能</TextLink>
            {' '}CTO，并以外部顾问身份兼任飞凡科技 CTO 与红熊 AI 研发总经理。
          </>
        ) : (
          <>
            Based in Hangzhou. Primary role: CTO at{' '}
            <TextLink href="https://hz-glory.vercel.app/">Glorion Intelligence</TextLink>
            , with concurrent advisor roles at Feifan Tech and Redbear AI.
          </>
        )}
      </BodyText>

      <SectionTitle>{isZh ? '全职技术领导机会' : 'Full-time leadership roles'}</SectionTitle>
      <BodyText sx={{ mb: 1.5 }}>
        {isZh
          ? '如果要谈全职 CTO、工程副总裁或资深技术负责人，也可以写信，主题请写「领导力机会」。'
          : 'If you are hiring a CTO, VP of Engineering, or a senior technology leader, you are welcome to write. Please put “Leadership role” in the subject.'}
      </BodyText>
      <Typography sx={{ mb: 2 }}>
        <TextLink href={mailto(isZh ? '领导力机会' : 'Leadership role')}>
          {isZh ? '谈全职机会 →' : 'Discuss a leadership role →'}
        </TextLink>
      </Typography>
    </PageShell>
  );
};

export default Contact;
