import React from 'react';
import { Box, Typography } from '@mui/material';
import { useLanguage } from '../i18n/LanguageContext';
import {
  PageShell,
  PageTitle,
  PageLead,
  SectionTitle,
  BodyText,
  NumberedList,
  TextLink,
  ACCENT,
  INK,
  MUTED,
  displaySerif,
} from './editorial';

const Experience = () => {
  const { language } = useLanguage();
  const isZh = language === 'zh';

  const experiences = isZh
    ? [
        {
          year: '2023–至今',
          title: 'CTO',
          company: '光荣智能 (Glorion Intelligence)',
          companyLink: 'https://hz-glory.vercel.app/',
          meta: '主职 · AI 与数字化转型 · FDE · 制造、政务、贸易',
          description:
            '作为光荣智能 CTO，负责公司的技术战略与交付。公司以 FDE（前线部署工程师）模式，用 AI 和软件工程帮助制造、政府和贸易等客户完成数字化转型，把大模型与行业流程接到真实业务里。',
          achievements: [
            '制定技术方向，把 AI 能力落到制造、政务与贸易场景',
            '带领交付团队以 FDE 方式驻场，把方案做成可运行的系统',
            '连接客户业务与工程实现，缩短从需求到上线的路径',
          ],
        },
        {
          year: '2023–至今',
          title: '外部顾问 · CTO',
          company: '飞凡科技 (Feifan Tech)',
          companyLink: 'https://feifan-tech-website.pages.dev/',
          meta: '外部顾问 · 企业软件、客户服务、AI 工程',
          description:
            '以外部顾问身份兼任飞凡科技 CTO，协助企业软件、客户服务与 AI 工程方向的技术决策，推进 LLM、RAG、智能助手与 Agent Tool-use 在真实业务中的落地。',
          achievements: [
            '为企业管理系统与数字化项目提供技术把关',
            '协助客户服务与 AI 相关产品的架构与落地',
            '结合 Prompt Engineering、RAG 与工具调用模式提升交付效率',
          ],
        },
        {
          year: '2023–至今',
          title: '外部顾问 · 研发总经理',
          company: '红熊AI (Redbear AI)',
          meta: '外部顾问 · AI 产品研发与交付',
          description: '以外部顾问身份兼任红熊AI 研发总经理，负责 AI 产品研发方向与交付节奏，协助团队把模型能力做成可交付的产品。',
          achievements: [
            '规划 AI 产品研发路径，对接业务目标',
            '协助团队把模型能力做成可交付的产品',
          ],
        },
        {
          year: '2021–2023',
          title: '资深工程师 / Team Lead',
          company: 'Ant Group, Hangzhou',
          meta: '金融科技集团 · 7 人团队 · 低代码平台、团队管理、产品研发',
          description: '负责低代码平台基础服务团队与产品研发，帮助业务人员更高效地构建应用，并通过平台化与自动化能力支撑蚂蚁集团业务扩张。',
          achievements: [
            '主导云凤蝶低代码平台基础服务研发',
            '通过平台自动化提升业务扩张效率',
            '管理 7 人跨职能工程团队',
            '交付企业级低代码解决方案',
          ],
        },
        {
          year: '2018–2021',
          title: '资深工程师 / Team Lead',
          company: 'Alibaba Cloud DingTalk Division, Hangzhou',
          meta: '云与企业服务 · 20 人团队 · 国际化、平台研发、技术委员会',
          description: '带领钉钉国际化产品研发，推动海外 DAU 从 0 增长到数百万，并主导钉钉运营中台建设。',
          achievements: [
            '推动钉钉国际版 DAU 从 0 增长到数百万',
            '主导钉钉运营中台建设',
            '研发疫情时期企业复工所需的 IDaaS 平台',
            '担任钉钉技术委员会成员',
            '提前达成 FY20 业务目标',
          ],
        },
        {
          year: '2015–2018',
          title: '技术总监',
          company: 'Mogu Street (NYSE: MOGU), Hangzhou',
          meta: '时尚电商 · 110 人团队 · 电商平台、大团队管理、质量保障',
          description: '负责蘑菇街电商中台与质量保障团队日常运作，带领多产品线研发并主持技术委员会工作。',
          achievements: [
            '负责中国头部时尚电商平台中台运营',
            '管理 110 人工程团队',
            '主持技术委员会推动架构演进',
            '保障平台在千万级用户场景下的稳定与扩展性',
            '建立系统化质量保障流程',
          ],
        },
        {
          year: '2007–2015',
          title: '高级工程师 ~ 资深工程师',
          company: 'Alibaba Group Taobao (NYSE: BABA), Hangzhou',
          meta: '电商巨头 · 30 人团队 · 平台架构、技术委员会、创新',
          description: '负责淘宝交易平台与业务支撑平台研发管理，是阿里巴巴业务中台的联合创始人之一。',
          achievements: [
            '阿里巴巴业务中台联合创始人之一',
            '主导淘宝核心交易与业务平台研发',
            '担任阿里交易技术委员会成员',
            '在高速增长阶段管理 30+ 人工程团队',
            '架构服务数亿用户的核心系统',
            '建立平台化电商能力的基础模式',
          ],
        },
        {
          year: '2003–2007',
          title: '项目经理 / 架构师 / 工程师',
          company: 'Huawei Tech & Others, Shenzhen',
          meta: '通信与软件 · 15 人团队 · 通信系统、敏捷管理、系统架构',
          description: '参与通信 OSS 系统研发，推动华为敏捷项目管理实践，并参与在线教育和社区平台建设。',
          achievements: [
            '推动华为团队敏捷转型',
            '参与通信 OSS 产品研发',
            '完成团队敏捷实践落地',
            '研发在线教育软件平台',
            '参与大型互联网社区系统建设',
            '在华为期间获得 PMP 认证',
          ],
        },
        {
          year: '2001–2003',
          title: '工程师 / 项目经理',
          company: 'Early Career - Multiple Companies',
          meta: '软件开发 · 基础积累 · 软件工程、教育科技',
          description: '在深圳开启软件工程职业生涯，参与在线教育软件与社区平台研发，打下企业软件开发基础。',
          achievements: [
            '获得计算机科学与技术学士学位',
            '获得国家高级程序员认证',
            '建立 Java 平台开发基础能力',
            '参与在线教育与社区软件项目',
            '形成企业级软件开发基础方法论',
          ],
        },
      ]
    : [
        {
          year: '2023–Present',
          title: 'CTO',
          company: 'Glorion Intelligence',
          companyLink: 'https://hz-glory.vercel.app/',
          meta: 'Primary role · AI & digital transformation · FDE · manufacturing, government, trade',
          description:
            'As CTO of Glorion Intelligence, I own the technical strategy and delivery. The company helps enterprises with digital transformation through AI and software engineering, serving manufacturing, government, and trade clients in an FDE (Forward Deployed Engineer) model that puts large models into real workflows.',
          achievements: [
            'Set the technical direction for AI in manufacturing, government, and trade',
            'Lead delivery teams that embed with customers and ship working systems',
            'Connect business needs to engineering so ideas reach production faster',
          ],
        },
        {
          year: '2023–Present',
          title: 'External Advisor · CTO',
          company: 'Feifan Tech',
          companyLink: 'https://feifan-tech-website.pages.dev/',
          meta: 'External advisor · enterprise software, customer service, AI engineering',
          description:
            'I also serve as external advisor and CTO at Feifan Tech, supporting technical decisions in enterprise software, customer service, and AI engineering, including practical adoption of LLMs, RAG, copilots, and agent tool-use.',
          achievements: [
            'Advise on enterprise management systems and digital projects',
            'Help shape architecture and delivery for customer-service and AI products',
            'Applied prompt engineering, RAG, and tool-use patterns to improve delivery effectiveness',
          ],
        },
        {
          year: '2023–Present',
          title: 'External Advisor · Head of R&D',
          company: 'Redbear AI',
          meta: 'External advisor · AI product R&D and delivery',
          description:
            'I also serve as external advisor and Head of R&D at Redbear AI, guiding AI product research, development direction, and delivery pace.',
          achievements: [
            'Set the R&D path for AI products against business goals',
            'Help the team turn model capabilities into shippable products',
          ],
        },
        {
          year: '2021–2023',
          title: 'Staff Engineer / Team Lead',
          company: 'Ant Group, Hangzhou',
          meta: 'FinTech · Team of 7 · Low-code platform, team leadership, product development',
          description:
            'Managed the base service team for the low-code platform and led product development, enabling business staff to build applications faster through platformized automation and enterprise integration.',
          achievements: [
            'Led development of Yunfengdie low-code platform base services',
            'Enabled rapid business expansion through platform automation',
            'Managed a cross-functional team of 7 engineers',
            'Delivered enterprise-grade low-code solutions',
          ],
        },
        {
          year: '2018–2021',
          title: 'Staff Engineer / Team Lead',
          company: 'Alibaba Cloud DingTalk Division, Hangzhou',
          meta: 'Cloud & enterprise · Team of 20 · International expansion, platform development, technical committee',
          description:
            'Led R&D for DingTalk international products, growing overseas DAU from 0 to millions while directing development of the DingTalk Operations Middle Platform.',
          achievements: [
            'Grew DingTalk international DAU from 0 to millions',
            'Led development of the DingTalk Operations Middle Platform',
            'Developed the IDaaS platform for enterprise recovery during COVID-19',
            'Served as a DingTalk Technical Committee member',
            'Achieved FY20 business goals ahead of schedule',
          ],
        },
        {
          year: '2015–2018',
          title: 'Staff Director',
          company: 'Mogu Street (NYSE: MOGU), Hangzhou',
          meta: 'Fashion e-commerce · Team of 110 · E-commerce platform, large-team management, quality assurance',
          description:
            "Managed daily operations of Mogu's E-commerce Middle Platform and quality assurance team. Led R&D for e-commerce products and chaired the Technical Committee.",
          achievements: [
            "Managed E-commerce Middle Platform operations for China's top fashion platform",
            'Led a team of 110 engineers across multiple product lines',
            'Chaired the Technical Committee overseeing architecture improvements',
            'Ensured platform scalability for millions of users',
            'Implemented comprehensive quality assurance processes',
          ],
        },
        {
          year: '2007–2015',
          title: 'Senior Engineer ~ Staff Engineer',
          company: 'Alibaba Group Taobao (NYSE: BABA), Hangzhou',
          meta: 'E-commerce · Team of 30 · Platform architecture, technical committee, innovation',
          description:
            "Managed teams for R&D of Taobao's trading platform and business support platform. Co-founder of Alibaba's Business Middle Platform.",
          achievements: [
            "Co-founder of Alibaba's revolutionary Business Middle Platform",
            'Led development of core Taobao trading and business platforms',
            'Member of Alibaba Trading Technical Committee',
            'Managed teams of 30+ engineers during rapid growth',
            'Architected systems serving hundreds of millions of users',
            'Established foundational e-commerce platform patterns',
          ],
        },
        {
          year: '2003–2007',
          title: 'Project Manager / Architect / Engineer',
          company: 'Huawei Tech & Others, Shenzhen',
          meta: 'Telecom & tech · Team of 15 · Telecommunications, agile management, system architecture',
          description:
            'Participated in R&D of telecommunications operation support systems. Pioneered agile project management at Huawei and also worked on online education and community platforms.',
          achievements: [
            'Pioneered agile project management transformation at Huawei',
            'Led development of telecommunications OSS products',
            'Completed team agile transformation initiatives',
            'Developed online education software platforms',
            'Built online community systems for major internet companies',
            'Obtained PMP certification during Huawei tenure',
          ],
        },
        {
          year: '2001–2003',
          title: 'Engineer / Project Manager',
          company: 'Early Career - Multiple Companies',
          meta: 'Software development · Foundation building · Software engineering, education tech',
          description:
            'Started a software engineering career in Shenzhen, working on online education software and community platforms while building a strong foundation in enterprise development.',
          achievements: [
            'Graduated with a Bachelor in Computer Science & Technology',
            'Obtained National Senior Programmer Certification',
            'Built a strong foundation in Java platform development',
            'Contributed to online education and community software projects',
            'Developed core enterprise software engineering fundamentals',
          ],
        },
      ];

  return (
    <PageShell>
      <PageTitle>{isZh ? '职业经历' : 'Professional experience'}</PageTitle>
      <PageLead>
        {isZh
          ? '从华为、阿里、蚂蚁到光荣智能，一条围绕平台、组织与 AI 落地的路径；同时以外部顾问兼任飞凡科技 CTO 与红熊AI 研发总经理。'
          : 'From Huawei, Alibaba, and Ant Group to Glorion Intelligence — a path through platforms, organizations, and practical AI, with concurrent advisor roles at Feifan Tech and Redbear AI.'}
      </PageLead>

      <Box sx={{ display: 'grid', gap: 7.5 }}>
        {experiences.map((exp) => (
          <Box key={`${exp.year}-${exp.company}`}>
            <Typography sx={{ color: ACCENT, letterSpacing: '0.04em', mb: 0.75 }}>{exp.year}</Typography>
            <Typography
              component="h2"
              sx={{
                fontFamily: displaySerif,
                fontSize: { xs: '1.28rem', md: '1.45rem' },
                color: INK,
                mb: 0.75,
                lineHeight: 1.35,
              }}
            >
              {exp.title}
            </Typography>
            <Typography sx={{ color: MUTED, mb: 0.5, fontSize: '1.02rem' }}>
              {exp.companyLink ? <TextLink href={exp.companyLink}>{exp.company}</TextLink> : exp.company}
            </Typography>
            <Typography sx={{ color: MUTED, mb: 2.25, fontSize: '0.92rem', lineHeight: 1.6 }}>{exp.meta}</Typography>
            <BodyText>{exp.description}</BodyText>
            <SectionTitle>{isZh ? '关键成果' : 'Key results'}</SectionTitle>
            <NumberedList items={exp.achievements} />
          </Box>
        ))}
      </Box>
    </PageShell>
  );
};

export default Experience;
