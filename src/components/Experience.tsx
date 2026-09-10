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
  context: string;
  scope: string;
  result: string;
  capability: string;
  emphasize?: boolean;
};

const Experience = () => {
  const { language } = useLanguage();
  const isZh = language === 'zh';

  const featured = isZh
    ? {
        kicker: '核心品牌资产',
        title: '阿里巴巴业务中台联合创始人之一',
        detail: '把交易、商品、订单等能力从烟囱式开发，转化为可复用的平台能力；系统服务数亿用户，并支撑包括大促在内的复杂交易场景。',
      }
    : {
        kicker: 'Brand asset',
        title: 'Co-founder of Alibaba’s Business Middle Platform',
        detail:
          'Turned trading, product, and order capabilities from siloed delivery into reusable platform services. Systems serving hundreds of millions of users, including peak commerce events.',
      };

  const roles: Role[] = isZh
    ? [
        {
          year: '2023–至今',
          title: 'CTO',
          company: '光荣智能 (Glorion Intelligence)',
          companyLink: 'https://hz-glory.vercel.app/',
          context: '制造、政务与贸易客户需要把大模型用进真实业务，而不是停留在试用。',
          scope: '主职负责技术战略与交付；同时以外部顾问兼任飞凡科技 CTO、红熊AI 研发总经理。',
          result: '以 FDE 方式驻场，把 LLM、RAG 与 Agent 接到现有流程、权限和系统里。',
          capability: '企业 AI 从试点走到生产，并把平台能力与组织交付连在一起。',
        },
        {
          year: '2021–2023',
          title: '资深工程师 / Team Lead',
          company: 'Ant Group, Hangzhou',
          context: '业务团队需要更快地构建应用，平台必须把复杂能力变成可复用服务。',
          scope: '负责云凤蝶低代码平台基础服务，管理 7 人跨职能团队。',
          result: '用平台化与自动化支撑业务扩张，降低应用交付门槛。',
          capability: '把专家知识编码进平台，让组织交付效率可复制。',
        },
        {
          year: '2018–2021',
          title: '资深工程师 / Team Lead',
          company: 'Alibaba Cloud DingTalk Division, Hangzhou',
          context: '企业协同产品要走向海外，本地化、身份与运营中台必须同时成立。',
          scope: '带领约 20 人研发国际化产品，并主导运营中台；钉钉技术委员会成员。',
          result: '海外 DAU 从 0 增长到数百万；交付疫情时期企业复工所需的 IDaaS。',
          capability: '在增长约束下同时做产品、本地化与组织协同。',
        },
        {
          year: '2007–2015',
          title: '高级工程师 ~ 资深工程师',
          company: 'Alibaba Group Taobao (NYSE: BABA), Hangzhou',
          emphasize: true,
          context: '多个业务高速增长，交易与商品能力若继续烟囱式开发，将无法支撑规模。',
          scope: '负责淘宝交易平台与业务支撑平台研发管理，带领 30+ 人团队；阿里交易技术委员会成员。',
          result: '联合创建阿里巴巴业务中台，架构服务数亿用户的核心交易系统。',
          capability: '判断哪些能力应平台化，并让架构演进与组织协作保持一致。',
        },
        {
          year: '2003–2007',
          title: '项目经理 / 架构师 / 工程师',
          company: 'Huawei Tech, Shenzhen',
          context: '通信 OSS 交付仍以瀑布为主，复杂系统需要更可预测的工程方法。',
          scope: '参与电信运营支撑系统研发，推动团队敏捷实践，管理约 15 人。',
          result: '完成 OSS 产品交付，并在华为期间获得 PMP 认证。',
          capability: '在传统工程环境里引入可落地的敏捷与架构约束。',
        },
      ]
    : [
        {
          year: '2023–Present',
          title: 'CTO',
          company: 'Glorion Intelligence',
          companyLink: 'https://hz-glory.vercel.app/',
          context: 'Manufacturing, government, and trade clients need large models inside real work—not another trial.',
          scope:
            'Own technical strategy and delivery as primary CTO; concurrently advise as CTO at Feifan Tech and Head of R&D at Redbear AI.',
          result: 'Embed with customers in an FDE model so LLMs, RAG, and agents enter existing workflows, permissions, and systems.',
          capability: 'Move enterprise AI from pilot to production, and connect platform capability with organizational delivery.',
        },
        {
          year: '2021–2023',
          title: 'Staff Engineer / Team Lead',
          company: 'Ant Group, Hangzhou',
          context: 'Business teams needed to build applications faster; the platform had to turn complexity into reusable services.',
          scope: 'Led Yunfengdie low-code platform base services and a cross-functional team of 7.',
          result: 'Lowered the cost of application delivery and supported business expansion through platform automation.',
          capability: 'Encode expert knowledge into a platform so delivery speed becomes repeatable.',
        },
        {
          year: '2018–2021',
          title: 'Staff Engineer / Team Lead',
          company: 'Alibaba Cloud DingTalk Division, Hangzhou',
          context: 'An enterprise collaboration product had to work overseas; localization, identity, and operations had to land together.',
          scope: 'Led ~20 engineers on international R&D and the operations middle platform; DingTalk Technical Committee member.',
          result: 'Grew overseas DAU from 0 to millions and shipped the IDaaS platform for enterprise recovery during COVID-19.',
          capability: 'Hold product, localization, and organizational coordination under growth constraints.',
        },
        {
          year: '2007–2015',
          title: 'Senior Engineer ~ Staff Engineer',
          company: 'Alibaba Group Taobao (NYSE: BABA), Hangzhou',
          emphasize: true,
          context: 'Multiple businesses were growing too fast for siloed trading and product systems to keep up.',
          scope:
            'Managed R&D for Taobao’s trading and business-support platforms, 30+ engineers; Alibaba Trading Technical Committee member.',
          result: 'Co-founded Alibaba’s Business Middle Platform and architected core trading systems serving hundreds of millions of users.',
          capability: 'Decide what should become platform capability, and keep architecture evolution aligned with how teams work.',
        },
        {
          year: '2003–2007',
          title: 'Project Manager / Architect / Engineer',
          company: 'Huawei Tech, Shenzhen',
          context: 'Telecom OSS delivery was still waterfall-heavy; complex systems needed a more predictable engineering method.',
          scope: 'Contributed to OSS product R&D, introduced agile practices, and led a team of about 15.',
          result: 'Delivered OSS products and earned PMP certification during the Huawei years.',
          capability: 'Bring workable agile and architectural constraints into a traditional engineering environment.',
        },
      ];

  const earlier = isZh
    ? [
        {
          year: '2015–2018',
          title: '蘑菇街技术总监',
          detail: '带领 110 人工程团队，负责时尚电商中台与质量保障，主持技术委员会。',
        },
        {
          year: '2001–2003',
          title: '深圳起步',
          detail: '企业软件、在线教育与社区平台；计算机科学学士、国家高级程序员。',
        },
      ]
    : [
        {
          year: '2015–2018',
          title: 'Staff Director, Mogu Street',
          detail: 'Led 110 engineers on the fashion e-commerce middle platform and quality, and chaired the Technical Committee.',
        },
        {
          year: '2001–2003',
          title: 'Shenzhen, early career',
          detail: 'Enterprise software, online education, and community platforms; B.Tech in Computer Science; National Senior Programmer.',
        },
      ];

  const field = (label: string, value: string) => (
    <Box sx={{ mb: 1.75 }}>
      <Typography sx={{ color: ACCENT, fontSize: '0.82rem', letterSpacing: '0.04em', mb: 0.4 }}>{label}</Typography>
      <Typography sx={{ color: INK, fontSize: '1.02rem', lineHeight: 1.75 }}>{value}</Typography>
    </Box>
  );

  return (
    <PageShell>
      <PageTitle>{isZh ? '职业经历' : 'Experience'}</PageTitle>
      <PageLead>
        {isZh
          ? '一条从基础工程、平台架构、规模化管理到企业 AI 交付的路径。重点看规模、职责和结果。'
          : 'A path from foundational engineering and platform architecture through scaled organizations to enterprise AI delivery. Scan for scope, responsibility, and results.'}
      </PageLead>

      <Box sx={{ mb: 7, pb: 4, borderBottom: '1px solid #E6DCCB' }}>
        <Typography sx={{ color: ACCENT, letterSpacing: '0.06em', mb: 1, fontSize: '0.88rem' }}>{featured.kicker}</Typography>
        <Typography sx={{ fontFamily: displaySerif, fontSize: { xs: '1.25rem', md: '1.4rem' }, color: INK, mb: 1.25, lineHeight: 1.4 }}>
          {featured.title}
        </Typography>
        <BodyText sx={{ mb: 0 }}>{featured.detail}</BodyText>
      </Box>

      <Box sx={{ display: 'grid', gap: 7 }}>
        {roles.map((exp) => (
          <Box
            key={`${exp.year}-${exp.company}`}
            sx={exp.emphasize ? { pl: { xs: 0, md: 2 }, borderLeft: { md: `2px solid ${ACCENT}` } } : undefined}
          >
            <Typography sx={{ color: ACCENT, letterSpacing: '0.04em', mb: 0.75 }}>{exp.year}</Typography>
            <Typography
              component="h2"
              sx={{
                fontFamily: displaySerif,
                fontSize: { xs: '1.22rem', md: '1.38rem' },
                color: INK,
                mb: 0.5,
                lineHeight: 1.35,
              }}
            >
              {exp.title}
            </Typography>
            <Typography sx={{ color: MUTED, mb: 2.25, fontSize: '1.02rem' }}>
              {exp.companyLink ? <TextLink href={exp.companyLink}>{exp.company}</TextLink> : exp.company}
            </Typography>
            {field(isZh ? '场景' : 'Context', exp.context)}
            {field(isZh ? '范围' : 'Scope', exp.scope)}
            {field(isZh ? '结果' : 'Result', exp.result)}
            {field(isZh ? '代表性能力' : 'Capability', exp.capability)}
          </Box>
        ))}
      </Box>

      <Box sx={{ mt: 8 }}>
        <SectionTitle>{isZh ? '更早的领导经历' : 'Earlier leadership experience'}</SectionTitle>
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
