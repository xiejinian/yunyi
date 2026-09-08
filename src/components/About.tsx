import React from 'react';
import { Box, Typography } from '@mui/material';
import { useLanguage } from '../i18n/LanguageContext';
import {
  PageShell,
  PageTitle,
  SectionTitle,
  BodyText,
  DotList,
  NumberedList,
  TextLink,
  ACCENT,
  INK,
  MUTED,
  FAINT,
  displaySerif,
} from './editorial';

const About = () => {
  const { language } = useLanguage();
  const isZh = language === 'zh';

  const achievements = isZh
    ? [
        '阿里巴巴电商中台联合创始人之一',
        '带领钉钉国际化从 0 到数百万 DAU',
        '曾任华为、阿里巴巴 / 蚂蚁集团资深技术专家',
        '主导企业级 AI / LLM 产品集成与落地实践',
        '推动内部 AI Copilot、知识助手与 Agent 工作流建设',
        '管理过 7 至 110 人规模的技术团队',
      ]
    : [
        "Co-founder of Alibaba's E-commerce Middle Platform",
        'Led DingTalk international expansion from 0 to millions DAU',
        'Former Staff Engineer at Huawei, Alibaba/Ant Group',
        'Leading enterprise AI / LLM product integration initiatives',
        'Built AI copilots, knowledge assistants, and agent workflows',
        'Led teams ranging from 7 to 110 people',
      ];

  const roleTags = isZh
    ? ['CTO', '技术顾问', '咨询 / Advisory', '工程经理', '技术经理']
    : ['CTO', 'Technical Advisor', 'Consulting', 'Engineering Manager', 'Technical Manager'];

  const certifications = isZh
    ? [
        'PMP 项目管理认证 · 2005 · 华为',
        '国家高级程序员 · 2001 · 中国',
      ]
    : [
        'PMP Certification · 2005 · Huawei',
        'National Senior Programmer · 2001 · China',
      ];

  return (
    <PageShell maxWidth={920}>
      <PageTitle>{isZh ? '关于我' : 'About Me'}</PageTitle>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '0.72fr 1.28fr' },
          gap: { xs: 5, md: 8 },
          alignItems: 'start',
          mt: 2,
        }}
      >
        <Box sx={{ maxWidth: { xs: 320, md: 'none' }, mx: { xs: 'auto', md: 0 }, width: '100%' }}>
          <Box
            component="img"
            src="/image.png"
            alt="Xie Jinian (谢记年)"
            sx={{
              display: 'block',
              width: '100%',
              height: { xs: 360, md: 440 },
              objectFit: 'cover',
              objectPosition: 'center 18%',
            }}
          />
          <Typography sx={{ mt: 1.25, fontSize: '0.78rem', color: FAINT, lineHeight: 1.6 }}>
            Xie Jinian / 谢记年
            <Box component="span" sx={{ display: 'block' }}>
              {isZh ? '非凡科技 CTO · AI 与软件架构' : 'CTO at Feifan Tech · AI & software architecture'}
            </Box>
          </Typography>
        </Box>

        <Box>
          <Typography
            sx={{
              fontFamily: displaySerif,
              fontSize: { xs: '1.8rem', md: '2.1rem' },
              fontWeight: 500,
              color: INK,
              mb: 0.5,
            }}
          >
            Xie <Box component="span" sx={{ color: ACCENT }}>Jinian</Box>
          </Typography>
          <Typography sx={{ color: MUTED, letterSpacing: '0.22em', mb: 4 }}>谢记年</Typography>

          <SectionTitle>{isZh ? '职业背景' : 'Background'}</SectionTitle>
          <BodyText>
            {isZh ? (
              <>
                目前担任{' '}
                <TextLink href="https://feifan-tech-website.pages.dev/">非凡科技 CTO</TextLink>
                ，带领 10 人研发团队交付企业软件与 AI 驱动产品。我当前的核心关注点是将大语言模型、RAG、Agent Tool-use 与既有业务系统结合，帮助客户真正把 AI 用到流程、知识与产品中。
              </>
            ) : (
              <>
                Currently serving as CTO at{' '}
                <TextLink href="https://feifan-tech-website.pages.dev/">Feifan Tech</TextLink>
                , leading a 10-person development team delivering enterprise software and AI-enabled products. My present focus is applying LLMs, RAG, and agent tool-use patterns to real business systems, workflows, and internal knowledge operations.
              </>
            )}
          </BodyText>
          <BodyText>
            {isZh
              ? '过去 20 多年里，我长期深耕企业级软件架构、大规模平台建设与稳定性治理，曾在华为、阿里巴巴、蚂蚁集团等中国领先科技公司承担核心技术角色。'
              : 'Over 20+ years, I have specialized in enterprise software architecture, large-scale platform engineering, and high-availability delivery across leading Chinese technology companies including Huawei, Alibaba, and Ant Group.'}
          </BodyText>
          <BodyText sx={{ mb: 4 }}>
            {isZh
              ? '作为阿里巴巴电商中台联合创始人之一，我参与建立了支撑超大规模电商生态的核心平台能力。今天，我希望把这类平台化方法论继续延伸到 AI 产品、智能助手与企业智能化转型中。'
              : "As a co-founder of Alibaba's E-commerce Middle Platform, I helped establish foundational platform capabilities for one of the world's largest digital commerce ecosystems. Today, I apply that same platform mindset to AI products, copilots, and enterprise AI transformation."}
          </BodyText>

          <SectionTitle>{isZh ? '当前关注的角色方向' : 'Roles I am open to'}</SectionTitle>
          <DotList items={roleTags} />
        </Box>
      </Box>

      <Box sx={{ mt: { xs: 7, md: 9 }, display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: { xs: 5, sm: 8 } }}>
        <Box>
          <SectionTitle>{isZh ? '教育' : 'Education'}</SectionTitle>
          <BodyText sx={{ mb: 0.5 }}>{isZh ? '工学学士 · 计算机科学与技术' : 'Bachelor of Technology · Computer Science'}</BodyText>
          <Typography sx={{ color: MUTED, lineHeight: 1.7 }}>
            {isZh ? '中国华侨大学 · 2001' : 'Huaqiao University, China · 2001'}
          </Typography>
        </Box>
        <Box>
          <SectionTitle>{isZh ? '认证' : 'Certifications'}</SectionTitle>
          <NumberedList items={certifications} />
        </Box>
      </Box>

      <Box sx={{ mt: { xs: 7, md: 9 } }}>
        <SectionTitle>{isZh ? '关键亮点' : 'Key achievements'}</SectionTitle>
        <NumberedList items={achievements} />
      </Box>

      <Box sx={{ mt: { xs: 7, md: 10 }, textAlign: 'center', maxWidth: 680, mx: 'auto' }}>
        <Typography
          sx={{
            fontFamily: displaySerif,
            fontStyle: 'italic',
            fontSize: { xs: '1.15rem', md: '1.3rem' },
            lineHeight: 1.7,
            color: INK,
            mb: 2.5,
          }}
        >
          {isZh
            ? '“以企业级架构、敏捷协作与 AI 工程化能力，带领团队达成业务与技术目标。”'
            : '"Leading teams to deliver business and technical results through enterprise architecture, agile execution, and practical AI engineering."'}
        </Typography>
        <Typography sx={{ color: MUTED, lineHeight: 1.8 }}>
          {isZh
            ? '我热衷于打造稳健、可扩展、真正被业务使用的系统，也乐于帮助团队与企业把平台能力、组织能力和 AI 能力结合起来，形成长期竞争力。'
            : 'My passion is building robust, scalable systems that are genuinely useful to the business—and helping teams combine platform capability, organizational discipline, and AI to create durable competitive advantage.'}
        </Typography>
      </Box>
    </PageShell>
  );
};

export default About;
