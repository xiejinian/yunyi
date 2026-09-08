import React from 'react';
import { Box, Typography } from '@mui/material';
import { useLanguage } from '../i18n/LanguageContext';
import {
  PageShell,
  PageTitle,
  PageLead,
  SectionTitle,
  BodyText,
  DotList,
  TextLink,
  ACCENT,
  INK,
  MUTED,
} from './editorial';

const Contact = () => {
  const { language } = useLanguage();
  const isZh = language === 'zh';

  const contactInfo = isZh
    ? [
        {
          title: '邮箱',
          content: 'yymhxie@gmail.com',
          href: 'mailto:yymhxie@gmail.com',
          description: '欢迎联系业务合作、顾问咨询或技术交流',
        },
        {
          title: '所在地',
          content: '中国浙江杭州',
          href: 'https://maps.google.com/?q=Hangzhou,Zhejiang,China',
          description: '常驻中国创新与互联网产业活跃区域',
        },
        {
          title: '当前职位',
          content: '光荣智能 CTO',
          href: 'https://hz-glory.vercel.app/',
          description: '主职负责技术战略、研发交付与 AI 产品方向；同时以外部顾问兼任飞凡科技 CTO、红熊AI 研发总经理',
        },
      ]
    : [
        {
          title: 'Email',
          content: 'yymhxie@gmail.com',
          href: 'mailto:yymhxie@gmail.com',
          description: 'Feel free to reach out for advisory, consulting, or collaboration opportunities',
        },
        {
          title: 'Location',
          content: 'Hangzhou, Zhejiang, China',
          href: 'https://maps.google.com/?q=Hangzhou,Zhejiang,China',
          description: "Based in one of China's most active technology and innovation hubs",
        },
        {
          title: 'Current Position',
          content: 'CTO at Glorion Intelligence',
          href: 'https://hz-glory.vercel.app/',
          description:
            'Primary role in technology strategy, engineering delivery, and AI. Also external advisor as CTO at Feifan Tech and Head of R&D at Redbear AI',
        },
      ];

  const services = isZh
    ? [
        {
          title: '技术与 AI 咨询',
          description: '面向企业软件、LLM 应用、AI 工程化与平台升级提供咨询支持',
          areas: ['系统架构', 'LLM 落地', 'AI 产品策略'],
        },
        {
          title: '工程管理与组织支持',
          description: '帮助团队建立敏捷交付、研发管理与跨部门协同机制',
          areas: ['敏捷方法', '团队领导', '流程优化'],
        },
        {
          title: '电商与平台化方案',
          description: '围绕电商平台、中台能力与可扩展架构提供专项建议',
          areas: ['电商平台', '中台架构', '扩展性方案'],
        },
      ]
    : [
        {
          title: 'Technical & AI Consulting',
          description: 'Advisory support for enterprise software, LLM applications, AI engineering, and platform modernization',
          areas: ['System Architecture', 'LLM Delivery', 'AI Product Strategy'],
        },
        {
          title: 'Engineering Management Support',
          description: 'Help teams improve agile execution, engineering management, and cross-functional delivery',
          areas: ['Agile Methodology', 'Team Leadership', 'Process Optimization'],
        },
        {
          title: 'E-commerce & Platform Solutions',
          description: 'Specialized guidance for e-commerce systems, middle-platform thinking, and scalable architecture',
          areas: ['E-commerce Platform', 'Middle Platform', 'Scalability Solutions'],
        },
      ];

  const openTo = isZh
    ? ['技术顾问', '咨询 / Advisory', '工程经理', '技术经理', 'CTO / 技术负责人']
    : ['Technical Advisor', 'Consulting / Advisory', 'Engineering Manager', 'Technical Manager', 'CTO / Tech Leadership'];

  return (
    <PageShell>
      <PageTitle>{isZh ? '联系我' : 'Get in touch'}</PageTitle>
      <PageLead>
        {isZh
          ? '欢迎讨论下一个项目、AI 转型计划，或技术团队建设需求。'
          : 'Ready to discuss your next project, AI initiative, or collaboration opportunity.'}
      </PageLead>

      <Box sx={{ display: 'grid', gap: 4.5, mb: 7 }}>
        {contactInfo.map((info) => (
          <Box key={info.title}>
            <SectionTitle>{info.title}</SectionTitle>
            <Typography sx={{ color: ACCENT, fontSize: '1.08rem', mb: 0.5 }}>
              <TextLink href={info.href}>{info.content}</TextLink>
            </Typography>
            <Typography sx={{ color: MUTED, lineHeight: 1.7 }}>{info.description}</Typography>
          </Box>
        ))}
      </Box>

      <SectionTitle>{isZh ? '专业服务方向' : 'Professional services'}</SectionTitle>
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
            <Typography sx={{ color: MUTED, fontSize: '0.95rem' }}>{service.areas.join('  ·  ')}</Typography>
          </Box>
        ))}
      </Box>

      <SectionTitle>{isZh ? '当前开放机会' : 'Currently open to'}</SectionTitle>
      <BodyText sx={{ mb: 2 }}>
        {isZh
          ? '欢迎联系技术顾问、咨询合作，以及工程 / 技术管理岗位机会，也可交流 AI 产品、平台升级与组织建设相关议题。'
          : 'Open to Technical Advisor, consulting / advisory, and engineering or technical management roles, as well as conversations around AI products, platform evolution, and organizational execution.'}
      </BodyText>
      <DotList items={openTo} />

      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <SectionTitle sx={{ textAlign: 'center' }}>{isZh ? '一起合作' : "Let's work together"}</SectionTitle>
        <Typography sx={{ mb: 2 }}>
          <TextLink href="mailto:yymhxie@gmail.com">{isZh ? '发送邮件 →' : 'Send an email →'}</TextLink>
        </Typography>
        <Typography sx={{ color: MUTED, fontSize: '0.92rem', lineHeight: 1.8 }}>
          {isZh
            ? '回复时间：通常 24 小时内 · 时区 GMT+8'
            : 'Response time: usually within 24 hours · Time zone GMT+8'}
        </Typography>
      </Box>
    </PageShell>
  );
};

export default Contact;
