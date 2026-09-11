import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { PageShell, PageTitle, PageLead, SectionTitle, BodyText, NumberedList, ACCENT, INK, MUTED } from './editorial';

const Skills = () => {
  const { language } = useLanguage();
  const isZh = language === 'zh';

  const modules = isZh
    ? [
        {
          title: '从 AI 策略到生产',
          items: [
            '识别值得做的业务场景，而不是先绑定某一个模型',
            'RAG、Agent、工具调用与人工审核如何进入现有系统',
            '评测、成本、可靠性与权限治理，让试点能停在生产里',
          ],
        },
        {
          title: '平台与架构',
          items: [
            '复杂系统拆分、服务边界和长期演进',
            '平台化：哪些能力共享，哪些留在业务侧',
            '集成、高可用，以及高峰与组织变化下的稳定性',
          ],
        },
        {
          title: '交付与组织',
          items: [
            '团队结构、技术委员会和跨职能协作',
            '敏捷交付、研发效能与质量体系',
            '把架构图变成团队能持续执行的工作方式',
          ],
        },
        {
          title: '产品与业务对齐',
          items: [
            '把需求澄清成可量化的结果和边界',
            '路线图、ROI 与从试点到推广的节奏',
            '与客户共创，用 FDE 方式缩短从想法到上线的路径',
          ],
        },
      ]
    : [
        {
          title: 'AI strategy to production',
          items: [
            'Choose business scenarios that deserve AI, instead of locking onto a model first',
            'Get RAG, agents, tool-use, and human review into the systems you already run',
            'Evaluation, cost, reliability, and permission governance so a pilot can stay in production',
          ],
        },
        {
          title: 'Platform & architecture',
          items: [
            'Split complex systems, set service boundaries, and govern long evolution',
            'Platformize: what should be shared, what should stay in the business',
            'Integration, high availability, and stability under peaks and organizational change',
          ],
        },
        {
          title: 'Delivery & organization',
          items: [
            'Team structure, technical committees, and cross-functional work',
            'Agile delivery, engineering effectiveness, and quality systems',
            'Turn an architecture diagram into a way of working a team can keep executing',
          ],
        },
        {
          title: 'Product & business alignment',
          items: [
            'Turn requests into measurable outcomes and explicit boundaries',
            'Roadmaps, ROI, and the pace from pilot to wider adoption',
            'Co-create with the customer; use an FDE posture to shorten idea-to-production',
          ],
        },
      ];

  const method = isZh
    ? [
        '业务流程和可量化目标',
        '系统边界、数据与权限',
        '评估、反馈、运维与团队机制',
      ]
    : [
        'Business workflow and a measurable outcome',
        'System boundaries, data, and permissions',
        'Evaluation, feedback, operations, and team mechanisms',
      ];

  return (
    <PageShell>
      <PageTitle>{isZh ? '能力与方法' : 'Capabilities'}</PageTitle>
      <PageLead>
        {isZh
          ? '客户需要的不是某一门语言或某一个框架，而是把人工智能、平台和工程组织连成闭环、降低交付风险的能力。'
          : 'What matters is not a language or a framework. It is the ability to close the loop across AI, platform, and engineering organization—and to lower delivery risk.'}
      </PageLead>

      <Box sx={{ display: 'grid', gap: 6, mb: 7 }}>
        {modules.map((mod, index) => (
          <Box key={mod.title}>
            <Typography sx={{ color: INK, fontSize: '1.12rem', mb: 1.5, display: 'flex', gap: 1 }}>
              <Box component="sup" sx={{ color: ACCENT, fontSize: '0.7rem', minWidth: 14, textAlign: 'right' }}>
                {index + 1}
              </Box>
              {mod.title}
            </Typography>
            <NumberedList items={mod.items} />
          </Box>
        ))}
      </Box>

      <SectionTitle>{isZh ? '交付方法' : 'How delivery works'}</SectionTitle>
      <BodyText>
        {isZh
          ? '先看流程和结果，再看系统和权限，最后才是模型与工具。顺序反了，就容易停在演示。'
          : 'Workflow and outcome first, then systems and permissions, and only then the model and tools. Reverse that order and work tends to stop at the demo.'}
      </BodyText>
      <Box sx={{ mb: 6 }}>
        <NumberedList items={method} />
      </Box>

      <SectionTitle>{isZh ? '技术基础' : 'Technical foundation'}</SectionTitle>
      <Typography sx={{ color: MUTED, lineHeight: 1.8, mb: 7 }}>
        {isZh
          ? 'Java · JavaScript · SQL · 企业级服务与集成。语言是工具；关键是系统能否在复杂组织里长期运行。'
          : 'Java · JavaScript · SQL · enterprise services and integration. Languages are tools. The question is whether the system can keep running inside a complex organization.'}
      </Typography>

      <Typography sx={{ color: ACCENT, fontSize: '1.05rem' }}>
        <Box component={RouterLink} to="/projects" sx={{ color: ACCENT, textDecoration: 'none', '&:hover': { color: '#A3472C' } }}>
          {isZh ? '看这些能力如何出现在案例里 →' : 'See how this shows up in the work →'}
        </Box>
      </Typography>
    </PageShell>
  );
};

export default Skills;
