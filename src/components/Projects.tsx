import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
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
  displaySerif,
} from './editorial';
import { LayerDiagram, alibabaCommerceLayers, dingTalkLayers } from './Trust';

type CaseStudy = {
  name: string;
  meta: string;
  challenge: string;
  role: string;
  changed: string;
  proof: string;
  today: string;
  diagram?: 'alibaba' | 'dingtalk';
  links?: { name: string; url: string }[];
};

const Projects = () => {
  const { language } = useLanguage();
  const isZh = language === 'zh';

  const cases: CaseStudy[] = isZh
    ? [
        {
          name: '制造业知识与维修助手',
          meta: '2023–至今 · 匿名案例 · 光荣智能 FDE',
          challenge: '一线维修与售后知识散落在文档、老师傅和工单系统里。新人上手慢，重复问题反复发生，试用聊天机器人进不了现有流程。',
          role: '以 FDE 方式驻场，与业务和一线一起定义场景、数据边界、引用方式和人工确认节点。',
          changed: '把知识库、工单与大模型连成可检索、可引用、可审核的助手，嵌进维修/售后协作，而不是另开一个聊天窗口。',
          proof: '进入真实工单与知识流程；强调权限、引用和可运维，而不是一次性演示。',
          today: '今天我能帮客户判断哪些现场问题值得做 AI，如何接到现有系统，以及怎样让一线真正用起来。',
        },
        {
          name: '政企内部知识检索与审核',
          meta: '2023–至今 · 匿名案例 · 光荣智能 FDE',
          challenge: '政策、制度和内部文件量大、检索难、权限敏感。直接把文档丢进模型既不安全，也无法通过审核。',
          role: '先设计权限、引用和人工反馈闭环，再做问答与检索，而不是先追求回答的“聪明”。',
          changed: '内部知识检索进入现有办公路径，敏感内容可追溯、可拦截、可复核。',
          proof: '在权限治理和人工审核约束下交付可用检索，而不是无边界的开放问答。',
          today: '对政务和大型组织，我默认先问：谁能看、答案从哪来、错了如何收回。这决定 AI 能不能进生产。',
        },
        {
          name: '阿里巴巴电商中台',
          meta: '2007–2015 · 阿里巴巴淘宝 · 平台架构',
          challenge: '多个业务快速增长，交易、商品、订单等能力若继续烟囱式开发，将无法支撑规模和创新速度。',
          role: '联合创始人与核心架构负责人，带领淘宝业务团队设计并实现关键平台基础设施。',
          changed: '建立共享能力与系统边界，降低重复建设，为大规模业务创新和高峰期稳定性提供基础。',
          proof: '服务超大规模电商业务，并支撑包括大促在内的复杂交易场景；系统面向数亿用户。',
          today: '我能够识别哪些能力应平台化、哪些应保留在业务侧，以及如何让架构演进与组织协作保持一致。',
          diagram: 'alibaba',
          links: [
            { name: '淘宝主站', url: 'https://www.taobao.com' },
          ],
        },
        {
          name: '钉钉国际化',
          meta: '2018–2021 · 阿里云钉钉 · 企业协同',
          challenge: '企业协同产品要进入海外市场：语言、身份、运营和交付节奏都必须同时成立。',
          role: '资深工程师 / Team Lead，带领约 20 人负责国际版研发与运营中台。',
          changed: '把本地化、IDaaS 与运营中台做成可生长的平台能力，而不是一次性出海项目。',
          proof: '海外 DAU 从 0 增长到数百万；疫情期间支持企业远程办公与复工。',
          today: '客户若要把一套核心系统带到新市场或新组织边界，我关注的是文化、权限和运营能否一起交付。',
          diagram: 'dingtalk',
          links: [{ name: '钉钉国际版', url: 'https://www.dingtalk.com/wow/dingtalk/act/en-download' }],
        },
        {
          name: '蚂蚁云凤蝶低代码平台',
          meta: '2021–2023 · 蚂蚁集团 · 企业服务基础设施',
          challenge: '业务需求堆积，专业研发成为瓶颈。低代码若只服务“不会写代码的人”，就会错过真正的效率杠杆。',
          role: '资深工程师 / Team Lead，管理 7 人基础服务团队，负责数据模型、权限、扩展与多租户等看不见的底座。',
          changed: '把专家知识编码进平台能力，让应用构建从点状项目变成可复用的组织能力。',
          proof: '支撑集团内业务以更高速度构建企业应用，降低重复集成与交付成本。',
          today: '面对“我们要做一个平台”的需求，我会先问：谁用、什么重复、哪些边界必须稳定。平台化是组织选择，不只是技术选择。',
        },
        {
          name: '蘑菇街电商中台',
          meta: '2015–2018 · 蘑菇街 · 规模化组织',
          challenge: '时尚电商在高压、高变化中扩张，系统和百人团队必须同时保持稳定。',
          role: '技术总监，负责电商中台与质量保障，带领 110 人工程团队，主持技术委员会。',
          changed: '用中台边界和质量体系约束多产品线并行，避免规模化变成各自为政。',
          proof: '在千万级用户场景下维持平台稳定与扩展；110 人组织可持续交付。',
          today: '当客户的问题其实是组织和质量，而不是再加一套系统时，这段经历决定我如何下手。',
        },
      ]
    : [
        {
          name: 'Manufacturing knowledge and repair assistant',
          meta: '2023–Present · Anonymized · Glorion Intelligence FDE',
          challenge:
            'Front-line repair and after-sales knowledge lived in documents, veteran technicians, and ticket systems. New hires ramped slowly, the same issues repeated, and a chatbot trial never entered the real workflow.',
          role: 'Embedded as a forward-deployed engineer. Defined the scenario, data boundaries, citations, and human-confirmation steps with the business and the line.',
          changed:
            'Connected knowledge, tickets, and the model into a retrievable, citable, reviewable assistant inside repair and after-sales collaboration—not a separate chat window.',
          proof: 'Landed in live ticket and knowledge flows, with permissions, citations, and operability treated as the product.',
          today: 'I can help a client decide which shop-floor problems deserve AI, how to attach it to systems they already have, and how to get the line to actually use it.',
        },
        {
          name: 'Public-sector knowledge retrieval and review',
          meta: '2023–Present · Anonymized · Glorion Intelligence FDE',
          challenge:
            'Policies, internal rules, and documents were large, hard to search, and permission-sensitive. Dumping files into a model was neither safe nor auditable.',
          role: 'Designed permissions, citations, and a human-feedback loop before chasing “smart” answers.',
          changed: 'Internal retrieval entered existing office paths. Sensitive content could be traced, blocked, and reviewed.',
          proof: 'Usable search under access control and human review—not unbounded open Q&A.',
          today: 'For government and large organizations I start with: who can see this, where did the answer come from, and how do we take it back if it is wrong. That decides whether AI can enter production.',
        },
        {
          name: 'Alibaba E-commerce Middle Platform',
          meta: '2007–2015 · Alibaba Taobao · Platform architecture',
          challenge:
            'Multiple businesses were growing fast. Trading, product, and order capabilities could not stay in siloed delivery if the company wanted both scale and speed.',
          role: 'Co-founder and architecture leader for core business-platform capabilities.',
          changed: 'Established shared capabilities and system boundaries, reduced duplicate construction, and created a base for large-scale innovation and peak stability.',
          proof: 'Supported very large-scale commerce, including complex peak-trading scenarios, on systems serving hundreds of millions of users.',
          today: 'I can tell which capabilities should become a platform, which should stay in the business, and how architecture evolution has to match the way teams collaborate.',
          diagram: 'alibaba',
          links: [{ name: 'Taobao', url: 'https://www.taobao.com' }],
        },
        {
          name: 'DingTalk internationalization',
          meta: '2018–2021 · Alibaba Cloud DingTalk · Enterprise collaboration',
          challenge: 'An enterprise collaboration product had to work overseas. Language, identity, operations, and delivery cadence all had to land together.',
          role: 'Staff Engineer / Team Lead. Led ~20 engineers on international R&D and the operations middle platform.',
          changed: 'Turned localization, IDaaS, and operations into a platform that could keep growing—not a one-off launch abroad.',
          proof: 'Overseas DAU grew from 0 to millions. During COVID-19 the work supported remote work and enterprise recovery.',
          today: 'When a client needs a core system to cross a market or organizational boundary, I look at whether culture, permissions, and operations can ship together.',
          diagram: 'dingtalk',
          links: [{ name: 'DingTalk International', url: 'https://www.dingtalk.com/wow/dingtalk/act/en-download' }],
        },
        {
          name: 'Ant Group Yunfengdie low-code platform',
          meta: '2021–2023 · Ant Group · Enterprise service infrastructure',
          challenge:
            'Demand piled up and professional engineering became the bottleneck. Low-code that only serves “people who cannot code” misses the real leverage.',
          role: 'Staff Engineer / Team Lead. Managed a 7-person base-service team for data models, permissions, extension, and multi-tenant isolation—the parts users never see.',
          changed: 'Encoded expert knowledge into platform capability so application building became an organizational ability, not a string of one-off projects.',
          proof: 'Helped internal businesses build enterprise applications faster and cut repeated integration cost.',
          today: 'When someone says “we need a platform,” I ask who uses it, what repeats, and which boundaries must stay stable. Platformization is an organizational choice, not only a technical one.',
        },
        {
          name: 'Mogu Street commerce middle platform',
          meta: '2015–2018 · Mogu Street · Scaled organization',
          challenge: 'A fashion commerce business was expanding under pressure and constant change. The system and a hundred-person team had to stay stable together.',
          role: 'Staff Director. Ran the e-commerce middle platform and quality, led 110 engineers, chaired the Technical Committee.',
          changed: 'Used platform boundaries and a quality system so multiple product lines could ship in parallel without becoming a free-for-all.',
          proof: 'Held stability and scale for millions of users, with a 110-person organization that could keep delivering.',
          today: 'When the real problem is organization and quality—not another system—this is the experience that shapes how I start.',
        },
      ];

  const field = (label: string, value: string) => (
    <Box sx={{ mb: 2 }}>
      <SectionTitle sx={{ mb: 0.75 }}>{label}</SectionTitle>
      <BodyText sx={{ mb: 0 }}>{value}</BodyText>
    </Box>
  );

  return (
    <PageShell>
      <PageTitle>{isZh ? '精选案例' : 'Selected work'}</PageTitle>
      <PageLead>
        {isZh
          ? '每个案例回答同一组问题：挑战是什么、我做什么、什么变了、对今天的客户意味着什么。当前 AI 案例已脱敏。'
          : 'Each case answers the same questions: the challenge, my role, what changed, and what it means for clients now. Current AI work is anonymized.'}
      </PageLead>

      <Box sx={{ display: 'grid', gap: 8 }}>
        {cases.map((item) => (
          <Box key={item.name}>
            <Typography sx={{ color: ACCENT, letterSpacing: '0.04em', mb: 0.75, fontSize: '0.92rem' }}>{item.meta}</Typography>
            <Typography
              component="h2"
              sx={{
                fontFamily: displaySerif,
                fontSize: { xs: '1.28rem', md: '1.48rem' },
                color: INK,
                mb: 2.5,
                lineHeight: 1.35,
              }}
            >
              {item.name}
            </Typography>
            {field(isZh ? '挑战' : 'Challenge', item.challenge)}
            {field(isZh ? '我的角色' : 'My role', item.role)}
            {field(isZh ? '什么变了' : 'What changed', item.changed)}
            {item.diagram === 'alibaba' && (
              <Box sx={{ mb: 2.5 }}>
                <SectionTitle sx={{ mb: 1.25 }}>{isZh ? '架构示意' : 'Architecture'}</SectionTitle>
                <LayerDiagram
                  layers={alibabaCommerceLayers(isZh)}
                  caption={
                    isZh
                      ? '阿里巴巴电商平台能力分层示意，按公开平台能力整理，不是内部机密架构图。'
                      : 'Illustrative Alibaba commerce platform layers from public capabilities, not an internal confidential diagram.'
                  }
                />
              </Box>
            )}
            {item.diagram === 'dingtalk' && (
              <Box sx={{ mb: 2.5 }}>
                <SectionTitle sx={{ mb: 1.25 }}>{isZh ? '架构示意' : 'Architecture'}</SectionTitle>
                <LayerDiagram
                  layers={dingTalkLayers(isZh)}
                  caption={
                    isZh
                      ? '钉钉业务能力分层示意，按公开产品与国际化交付整理，不是内部机密架构图。'
                      : 'Illustrative DingTalk capability layers from public products and international delivery, not an internal confidential diagram.'
                  }
                />
              </Box>
            )}
            {field(isZh ? '规模 / 证据' : 'Scale / proof', item.proof)}
            {field(isZh ? '对今天客户的意义' : 'What this means for clients today', item.today)}
            {item.links && item.links.length > 0 && (
              <Typography sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 1 }}>
                {item.links.map((link) => (
                  <TextLink key={link.url} href={link.url}>
                    {link.name} →
                  </TextLink>
                ))}
              </Typography>
            )}
          </Box>
        ))}
      </Box>

      <Box sx={{ mt: 8 }}>
        <Typography sx={{ color: ACCENT, fontSize: '1.05rem' }}>
          <Box component={RouterLink} to="/contact" sx={{ color: ACCENT, textDecoration: 'none', '&:hover': { color: '#A3472C' } }}>
            {isZh ? '带着一个真实交付问题来谈 →' : 'Bring a real delivery problem →'}
          </Box>
        </Typography>
      </Box>
    </PageShell>
  );
};

export default Projects;
