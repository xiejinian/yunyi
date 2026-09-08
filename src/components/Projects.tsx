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

type Project = {
  name: string;
  company: string;
  period: string;
  category: string;
  description: string;
  role: string;
  technologies: string[];
  impact: string;
  keyFeatures: string[];
  links: { name: string; url: string }[];
};

const Projects = () => {
  const { language } = useLanguage();
  const isZh = language === 'zh';

  const projects: Project[] = isZh
    ? [
        {
          name: '阿里巴巴电商中台',
          company: 'Alibaba Group Taobao',
          period: '2007–2015',
          category: '电商平台',
          description: '阿里巴巴业务中台的联合创始人与核心架构参与者之一。该平台支撑中国最大规模的电商生态，在双 11 等极端峰值场景中承载海量交易与数亿用户访问。',
          role: '联合创始人兼核心架构负责人，带领淘宝业务团队设计并实现关键平台基础设施。',
          technologies: ['Java Platform', 'Distributed Systems', 'Microservices', 'High Availability Architecture'],
          impact: '沉淀了阿里集团跨业务复用的平台化能力，为高速业务增长与大规模电商创新提供底座。',
          keyFeatures: ['订单处理平台 (buy.taobao.com)', '商品详情系统 (item.taobao.com)', '买家交易平台 (buyertrade.taobao.com)', '购物车系统 (cart.taobao.com)', '搜索平台集成 (s.taobao.com)', '物流平台连接 (cainiao.com)'],
          links: [
            { name: '淘宝主站', url: 'https://www.taobao.com' },
            { name: '订单系统', url: 'https://buy.taobao.com' },
          ],
        },
        {
          name: '蘑菇街时尚电商平台',
          company: 'Mogu Street (NYSE: MOGU)',
          period: '2015–2018',
          category: '时尚电商',
          description: '负责中国头部时尚电商平台的核心平台研发与组织管理，服务数百万年轻用户，保障多触点体验的一致性与稳定性。',
          role: '技术总监，负责电商中台日常运转，并带领 110 人工程团队。',
          technologies: ['Java Platform', 'E-commerce Architecture', 'Fashion Recommendation Engine', 'Mobile Platform'],
          impact: '支撑平台持续增长与体验升级，提升时尚电商场景下的发现、交易与履约效率。',
          keyFeatures: ['时尚商品发现 (shop.mogu.com)', '订单管理系统 (order.mogu.com)', '购物车体验 (cart.mogu.com)', '购买流程优化 (buy.mogu.com)', '时尚推荐算法', '社交化购物功能'],
          links: [{ name: '蘑菇街平台', url: 'https://www.mogu.com' }],
        },
        {
          name: '钉钉国际化平台',
          company: 'Alibaba Cloud DingTalk Division',
          period: '2018–2021',
          category: '企业协同',
          description: '带领钉钉国际版平台与运营中台建设，成功推动海外日活从 0 增长到数百万，为全球企业数字化协作提供基础能力。',
          role: '资深工程师 / Team Lead，带领 20 人团队负责国际化产品研发。',
          technologies: ['Java Platform', 'International Localization', 'Real-time Communication', 'Enterprise Integration'],
          impact: '帮助全球企业采用数字化办公方案，尤其在疫情时期支持远程办公与企业复工。',
          keyFeatures: ['国际版平台 (dingtalk.com)', 'IDaaS 企业身份平台', '运营中台', '多语言支持系统', '全球企业集成', '疫情复工解决方案'],
          links: [{ name: '钉钉国际版', url: 'https://www.dingtalk.com/wow/dingtalk/act/en-download' }],
        },
        {
          name: '云凤蝶低代码平台',
          company: 'Ant Group',
          period: '2021–2023',
          category: '低代码平台',
          description: '负责蚂蚁集团官方低代码 / 无代码平台基础服务建设，使业务团队能够以更低门槛、更高效率构建企业应用。',
          role: '资深工程师 / Team Lead，管理 7 人基础服务团队。',
          technologies: ['Java Platform', 'Low-code Framework', 'Visual Development', 'Enterprise Integration'],
          impact: '通过平台化与自动化方式降低应用构建门槛，提升集团内业务创新速度。',
          keyFeatures: ['可视化应用搭建器', '拖拽式界面设计器', '企业系统集成', '自动化部署流水线', '业务流程自动化', '多租户架构'],
          links: [],
        },
        {
          name: '华为 OSS 产品',
          company: 'Huawei Technologies',
          period: '2003–2007',
          category: '通信系统',
          description: '作为核心工程成员参与电信运营支撑系统研发与交付，并推动敏捷项目管理实践落地。',
          role: '项目经理 / 架构师 / 工程师，聚焦通信基础设施与系统研发。',
          technologies: ['Java Platform', 'Telecommunications Systems', 'OSS Architecture', 'Agile Methodology'],
          impact: '支撑华为通信基础设施解决方案建设，同时引入更现代的软件工程与项目管理方法。',
          keyFeatures: ['电信 OSS 系统', '运营支撑基础设施', '敏捷开发流程', '系统集成方案', '性能监控工具', '企业服务管理'],
          links: [],
        },
      ]
    : [
        {
          name: 'Alibaba E-commerce Middle Platform',
          company: 'Alibaba Group Taobao',
          period: '2007–2015',
          category: 'E-commerce Platform',
          description: "Co-founder and architect of Alibaba's Business Middle Platform, the foundation that powers one of the world's largest digital commerce ecosystems during massive peaks such as Double 11.",
          role: 'Co-founder and lead architecture contributor for core platform infrastructure.',
          technologies: ['Java Platform', 'Distributed Systems', 'Microservices', 'High Availability Architecture'],
          impact: 'Established reusable platform capabilities across Alibaba Group, enabling rapid business growth and large-scale innovation.',
          keyFeatures: ['Order Processing Platform (buy.taobao.com)', 'Product Detail System (item.taobao.com)', 'Buyer Transaction Platform (buyertrade.taobao.com)', 'Shopping Cart System (cart.taobao.com)', 'Search Platform Integration (s.taobao.com)', 'Logistics Platform Connection (cainiao.com)'],
          links: [
            { name: 'Taobao Main Platform', url: 'https://www.taobao.com' },
            { name: 'Order System', url: 'https://buy.taobao.com' },
          ],
        },
        {
          name: 'Mogu Street Fashion E-commerce Platform',
          company: 'Mogu Street (NYSE: MOGU)',
          period: '2015–2018',
          category: 'Fashion E-commerce',
          description: "Led core platform engineering and organizational execution for one of China's leading fashion e-commerce platforms, serving millions of users across multiple touchpoints.",
          role: 'Staff Director managing middle-platform operations and a team of 110 engineers.',
          technologies: ['Java Platform', 'E-commerce Architecture', 'Fashion Recommendation Engine', 'Mobile Platform'],
          impact: 'Supported sustained platform growth and experience improvements across discovery, transaction, and fulfillment flows.',
          keyFeatures: ['Fashion Product Discovery (shop.mogu.com)', 'Order Management System (order.mogu.com)', 'Shopping Cart Experience (cart.mogu.com)', 'Purchase Flow Optimization (buy.mogu.com)', 'Fashion Recommendation Algorithm', 'Social Shopping Features'],
          links: [{ name: 'Mogu Street Platform', url: 'https://www.mogu.com' }],
        },
        {
          name: 'DingTalk International Platform',
          company: 'Alibaba Cloud DingTalk Division',
          period: '2018–2021',
          category: 'Enterprise Communication',
          description: 'Led DingTalk international platform development and operations middle-platform delivery, helping overseas daily active users grow from zero to millions.',
          role: 'Staff Engineer / Team Lead leading a 20-engineer international product R&D team.',
          technologies: ['Java Platform', 'International Localization', 'Real-time Communication', 'Enterprise Integration'],
          impact: 'Enabled global enterprises to adopt digital workplace solutions, especially during the COVID-19 shift to remote work.',
          keyFeatures: ['International Version Platform (dingtalk.com)', 'IDaaS Enterprise Identity Platform', 'Operations Middle Platform', 'Multi-language Support System', 'Global Enterprise Integration', 'COVID-19 Work Recovery Solutions'],
          links: [{ name: 'DingTalk International', url: 'https://www.dingtalk.com/wow/dingtalk/act/en-download' }],
        },
        {
          name: 'Yunfengdie Low-code Platform',
          company: 'Ant Group',
          period: '2021–2023',
          category: 'Low-code Platform',
          description: "Led base-service development for Ant Group's official low-code / no-code platform, enabling business teams to build enterprise applications more efficiently.",
          role: 'Staff Engineer / Team Lead managing a 7-person base service team.',
          technologies: ['Java Platform', 'Low-code Framework', 'Visual Development', 'Enterprise Integration'],
          impact: 'Lowered the barrier to application delivery and accelerated internal innovation through platformization and automation.',
          keyFeatures: ['Visual Application Builder', 'Drag-and-drop Interface Designer', 'Enterprise System Integration', 'Automated Deployment Pipeline', 'Business Process Automation', 'Multi-tenant Architecture'],
          links: [],
        },
        {
          name: 'Huawei OSS Products',
          company: 'Huawei Technologies',
          period: '2003–2007',
          category: 'Telecommunications',
          description: 'Participated as a core engineer in telecom OSS product R&D and delivery while helping introduce agile project management practices.',
          role: 'Project Manager / Architect / Engineer focused on telecommunications infrastructure and system delivery.',
          technologies: ['Java Platform', 'Telecommunications Systems', 'OSS Architecture', 'Agile Methodology'],
          impact: 'Contributed to Huawei telecom infrastructure solutions while bringing modern engineering and project-management practices into delivery.',
          keyFeatures: ['Telecommunications OSS Systems', 'Operation Support Infrastructure', 'Agile Development Processes', 'System Integration Solutions', 'Performance Monitoring Tools', 'Enterprise Service Management'],
          links: [],
        },
      ];

  return (
    <PageShell>
      <PageTitle>{isZh ? '代表项目' : 'Notable projects'}</PageTitle>
      <PageLead>
        {isZh
          ? '从电商中台到企业协同与低代码，几段真正进过生产的工作。'
          : 'From commerce platforms to enterprise collaboration and low-code — work that shipped in production.'}
      </PageLead>

      <Box sx={{ display: 'grid', gap: 8 }}>
        {projects.map((project) => (
          <Box key={project.name}>
            <Typography sx={{ color: ACCENT, letterSpacing: '0.04em', mb: 0.75 }}>
              {project.period} · {project.category}
            </Typography>
            <Typography
              component="h2"
              sx={{
                fontFamily: displaySerif,
                fontSize: { xs: '1.3rem', md: '1.5rem' },
                color: INK,
                mb: 0.5,
                lineHeight: 1.35,
              }}
            >
              {project.name}
            </Typography>
            <Typography sx={{ color: MUTED, mb: 2.25 }}>{project.company}</Typography>
            <BodyText>{project.description}</BodyText>

            <SectionTitle>{isZh ? '角色与职责' : 'Role'}</SectionTitle>
            <BodyText>{project.role}</BodyText>

            <SectionTitle>{isZh ? '技术栈' : 'Technologies'}</SectionTitle>
            <Typography sx={{ color: MUTED, mb: 2.5, lineHeight: 1.7 }}>{project.technologies.join('  ·  ')}</Typography>

            <SectionTitle>{isZh ? '关键功能' : 'Key features'}</SectionTitle>
            <NumberedList items={project.keyFeatures} />

            <SectionTitle sx={{ mt: 2.5 }}>{isZh ? '影响与价值' : 'Impact'}</SectionTitle>
            <BodyText sx={{ mb: project.links.length ? 1.5 : 0 }}>{project.impact}</BodyText>
            {project.links.length > 0 && (
              <Typography sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                {project.links.map((link) => (
                  <TextLink key={link.url} href={link.url}>
                    {link.name} →
                  </TextLink>
                ))}
              </Typography>
            )}
          </Box>
        ))}
      </Box>
    </PageShell>
  );
};

export default Projects;
