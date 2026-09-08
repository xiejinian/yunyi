import React from 'react';
import { Box, Typography } from '@mui/material';
import { useLanguage } from '../i18n/LanguageContext';
import { PageShell, PageTitle, PageLead, SectionTitle, NumberedList, BodyText, displaySerif, INK, MUTED } from './editorial';

const Skills = () => {
  const { language } = useLanguage();
  const isZh = language === 'zh';

  const technicalSkills = isZh
    ? [
        'Java 平台',
        '企业架构设计',
        '大规模平台研发',
        '微服务架构',
        '电商平台',
        '低代码 / 无代码平台',
        '云计算',
        '系统集成',
      ]
    : [
        'Java Platform',
        'Enterprise Architecture Design',
        'Large-scale Platform Development',
        'Microservices Architecture',
        'E-commerce Platforms',
        'Low-code / No-code Platforms',
        'Cloud Computing',
        'System Integration',
      ];

  const aiSkills = isZh
    ? [
        'LLM 应用开发',
        'Prompt Engineering / 提示词工程',
        'RAG（检索增强生成）',
        'AI Agent Frameworks',
        'MCP / Tool-use 集成',
        '模型评测与落地优化',
        'Vector Databases / 向量检索',
        'AI 产品策略',
      ]
    : [
        'LLM Application Development',
        'Prompt Engineering',
        'RAG (Retrieval-Augmented Generation)',
        'AI Agent Frameworks',
        'MCP / Tool-use Integration',
        'Model Evaluation & Delivery Optimization',
        'Vector Databases',
        'AI Product Strategy',
      ];

  const managementSkills = isZh
    ? ['敏捷项目管理', '团队领导力', '技术架构', '产品研发', '质量保障', '战略规划']
    : ['Agile Project Management', 'Team Leadership', 'Technical Architecture', 'Product Development', 'Quality Assurance', 'Strategic Planning'];

  const certifications = isZh
    ? [
        'Project Management Professional (PMP) · 华为 · 2005',
        '国家高级程序员认证 · 中国国家认证 · 2001',
      ]
    : [
        'Project Management Professional (PMP) · Huawei · 2005',
        'National Senior Programmer Certification · China · 2001',
      ];

  const languages = isZh
    ? [
        '中文 · 母语 · 普通话 / 中文沟通',
        '英文 · CET-6（读写良好）· 商务沟通、技术写作',
        '技术语言 · Java / JavaScript / SQL',
        '业务沟通 · 跨文化团队协作',
      ]
    : [
        'Chinese · Native · Mandarin',
        'English · CET-6 (reading and writing) · Business and technical writing',
        'Technical languages · Java, JavaScript, SQL',
        'Business communication · Cross-cultural teams',
      ];

  const platforms = isZh
    ? ['淘宝电商平台', '蘑菇街时尚电商平台', '钉钉国际版', '蚂蚁集团低代码平台', '华为 OSS 产品', '阿里巴巴业务中台']
    : ['Taobao E-commerce Platform', 'Mogu Street Fashion Platform', 'DingTalk International', 'Ant Group Low-code Platform', 'Huawei OSS Products', 'Alibaba Middle Platform'];

  return (
    <PageShell>
      <PageTitle>{isZh ? '技能与专长' : 'Skills & expertise'}</PageTitle>
      <PageLead>
        {isZh
          ? '二十年企业级工程积累，当前重点在 AI 应用与技术管理。'
          : 'Twenty years of enterprise engineering, with a present focus on AI applications and technical leadership.'}
      </PageLead>

      <SectionTitle>{isZh ? '核心技术能力' : 'Technical skills'}</SectionTitle>
      <Box sx={{ mb: 6 }}>
        <NumberedList items={technicalSkills} />
      </Box>

      <SectionTitle>{isZh ? 'AI 能力与应用方向' : 'AI skills & application focus'}</SectionTitle>
      <Box sx={{ mb: 6 }}>
        <NumberedList items={aiSkills} />
      </Box>

      <SectionTitle>{isZh ? '管理能力' : 'Management skills'}</SectionTitle>
      <Box sx={{ mb: 6 }}>
        <NumberedList items={managementSkills} />
      </Box>

      <SectionTitle>{isZh ? '语言与沟通' : 'Languages & communication'}</SectionTitle>
      <Box sx={{ mb: 6 }}>
        <NumberedList items={languages} />
      </Box>

      <SectionTitle>{isZh ? '专业认证' : 'Certifications'}</SectionTitle>
      <Box sx={{ mb: 6 }}>
        <NumberedList items={certifications} />
      </Box>

      <SectionTitle>{isZh ? '平台经验' : 'Platform experience'}</SectionTitle>
      <Box sx={{ mb: 7 }}>
        <NumberedList items={platforms} />
      </Box>

      <Box sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto' }}>
        <Typography
          sx={{
            fontFamily: displaySerif,
            fontSize: { xs: '1.2rem', md: '1.35rem' },
            color: INK,
            mb: 2,
            lineHeight: 1.6,
          }}
        >
          {isZh ? '带领过 7 到 110 人规模的团队' : 'Led teams ranging from 7 to 110 people'}
        </Typography>
        <BodyText sx={{ color: MUTED, mb: 0, textAlign: 'center' }}>
          {isZh
            ? '具备从创业团队到大型企业组织的跨场景团队管理经验，长期负责敏捷项目管理、技术架构治理与跨团队协同交付。'
            : 'Experienced in managing diverse teams across startup and large-enterprise environments, with a strong record in agile delivery, technical architecture leadership, and cross-functional execution.'}
        </BodyText>
      </Box>
    </PageShell>
  );
};

export default Skills;
