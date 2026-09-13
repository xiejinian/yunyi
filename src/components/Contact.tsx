import React from 'react';
import { Typography } from '@mui/material';
import { useLanguage } from '../i18n/LanguageContext';
import {
  PageShell,
  PageTitle,
  PageLead,
  BodyText,
  TextLink,
  ACCENT,
  MUTED,
} from './editorial';

const Contact = () => {
  const { language } = useLanguage();
  const isZh = language === 'zh';
  const email = 'yymhxie@gmail.com';

  return (
    <PageShell>
      <PageTitle>{isZh ? '联系' : 'Contact'}</PageTitle>
      <PageLead>
        {isZh ? '先从一个具体问题谈起。' : 'Start with a specific problem.'}
      </PageLead>

      <BodyText>
        {isZh
          ? '如果你正把 AI 从试用往生产推，或在升级一套关键平台，或需要让工程团队真正跑起来，欢迎来信。几句话写清场景和限制就够。'
          : 'If you are moving AI from trial to production, upgrading a critical platform, or getting an engineering team to deliver, write. A few sentences on the situation and the constraints is enough.'}
      </BodyText>

      <Typography sx={{ color: ACCENT, fontSize: '1.15rem', mb: 1.25, mt: 1 }}>
        <TextLink href={`mailto:${email}`}>{email}</TextLink>
      </Typography>
      <Typography sx={{ color: MUTED, lineHeight: 1.7, mb: 5 }}>
        {isZh ? '一般 24 小时内回复 · 杭州 · GMT+8' : 'I usually reply within 24 hours · Hangzhou · GMT+8'}
      </Typography>

      <BodyText sx={{ mb: 4 }}>
        {isZh ? (
          <>
            当前主职是{' '}
            <TextLink href="https://hz-glory.vercel.app/">光荣智能</TextLink>
            {' '}CTO，同时以外顾问身份做飞凡科技 CTO 和红熊 AI 研发总经理。
          </>
        ) : (
          <>
            Primary role: CTO at{' '}
            <TextLink href="https://hz-glory.vercel.app/">Glorion Intelligence</TextLink>
            , with advisor posts at Feifan Tech and Redbear AI.
          </>
        )}
      </BodyText>

      <BodyText sx={{ mb: 0, color: MUTED }}>
        {isZh
          ? '如果要谈全职 CTO 或工程负责人机会，主题请写「领导力机会」。'
          : 'For a full-time CTO or engineering-leadership role, please put “Leadership role” in the subject.'}
      </BodyText>
    </PageShell>
  );
};

export default Contact;
