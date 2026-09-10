import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import {
  PageShell,
  PageTitle,
  SectionTitle,
  BodyText,
  NumberedList,
  TextLink,
  ACCENT,
  INK,
  MUTED,
  FAINT,
  displaySerif,
} from './editorial';
import { TrustLogos } from './Trust';

const About = () => {
  const { language } = useLanguage();
  const isZh = language === 'zh';

  const whatIDo = isZh
    ? [
        '企业 AI：把大模型、RAG 与 Agent 接到真实业务流程，而不是停在演示。',
        '平台现代化：识别哪些能力应共享、哪些应留在业务侧，并治理长期演进。',
        '工程组织与交付：让技术方案变成团队能持续交付的工作方式。',
      ]
    : [
        'Enterprise AI: connect LLMs, RAG, and agents to real business workflows—not demos.',
        'Platform modernization: decide what should be shared, what stays in the business, and how the architecture can evolve.',
        'Engineering organization and delivery: turn a technical plan into a way of working a team can sustain.',
      ];

  const howIWork = isZh
    ? [
        '先识别业务流程和可量化目标，而不是先选模型或框架。',
        '再设计系统边界、数据、权限与人工审核，让 AI 能进现有系统。',
        '最后建立评估、反馈、运维和团队机制，使试点能够变成生产能力。',
      ]
    : [
        'Start with the business workflow and a measurable outcome—not with a model or framework.',
        'Then design system boundaries, data, permissions, and human review so AI can enter the existing stack.',
        'Finally establish evaluation, feedback, operations, and team mechanisms so a pilot can become production capacity.',
      ];

  return (
    <PageShell maxWidth={920}>
      <PageTitle>{isZh ? '关于我' : 'About'}</PageTitle>
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
              {isZh ? '阿里花名：云翼 · 蘑菇街花名：慕韩' : 'Known at Alibaba as Yunyi · known at Mogujie as Muhan'}
            </Box>
            <Box component="span" sx={{ display: 'block' }}>
              {isZh ? '企业 AI 与平台技术负责人' : 'Enterprise AI & Platform CTO'}
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
          <Typography sx={{ color: MUTED, letterSpacing: '0.22em', mb: 0.75 }}>谢记年</Typography>
          <Typography sx={{ color: FAINT, fontSize: '0.92rem', mb: 4, lineHeight: 1.7 }}>
            {isZh ? '阿里花名：云翼 · 蘑菇街花名：慕韩' : 'Known at Alibaba as Yunyi · known at Mogujie as Muhan'}
          </Typography>

          <BodyText>
            {isZh ? (
              <>
                目前担任{' '}
                <TextLink href="https://hz-glory.vercel.app/">光荣智能</TextLink>
                {' '}CTO，并以外部顾问身份兼任{' '}
                <TextLink href="https://feifan-tech-website.pages.dev/">飞凡科技</TextLink>
                {' '}CTO 与红熊 AI 研发总经理。我把人工智能、平台架构和工程组织连成一体，使技术方案能够进入生产并持续运行。
              </>
            ) : (
              <>
                I currently serve as CTO at{' '}
                <TextLink href="https://hz-glory.vercel.app/">Glorion Intelligence</TextLink>
                , and as an external advisor — CTO at{' '}
                <TextLink href="https://feifan-tech-website.pages.dev/">Feifan Tech</TextLink>
                {' '}and Head of R&D at Redbear AI. I connect AI, platform architecture, and engineering organization so that technical plans can enter production and keep running.
              </>
            )}
          </BodyText>
        </Box>
      </Box>

      <Box sx={{ mt: { xs: 7, md: 9 } }}>
        <SectionTitle>{isZh ? '我做什么' : 'What I do'}</SectionTitle>
        <BodyText>
          {isZh
            ? '我帮助企业把复杂业务流程，落地为可靠的 AI 系统、可扩展的平台能力和高效的工程组织。'
            : 'I help companies turn complex business workflows into reliable AI-enabled systems, scalable platforms, and high-performing engineering teams.'}
        </BodyText>
        <NumberedList items={whatIDo} />
      </Box>

      <Box sx={{ mt: { xs: 7, md: 8 } }}>
        <SectionTitle>{isZh ? '怎么合作' : 'How I work'}</SectionTitle>
        <BodyText>
          {isZh
            ? '合作通常从一件真实的交付问题开始，而不是从技术清单开始。'
            : 'Engagements usually begin with a specific delivery problem, not a catalog of tools.'}
        </BodyText>
        <NumberedList items={howIWork} />
      </Box>

      <Box sx={{ mt: { xs: 7, md: 8 } }}>
        <SectionTitle>{isZh ? '为什么重要' : 'Why it matters'}</SectionTitle>
        <BodyText>
          {isZh
            ? 'AI 不是一个聊天入口。它要嵌入流程、系统与组织，才能成为生产能力。演示可以很快，但生产级 AI 需要权限、数据边界、评估、人工反馈，以及一支知道如何持续迭代的团队。'
            : 'AI is not a chat window. It has to live inside workflows, systems, and organizations before it becomes a production capability. Demos can be fast. Production AI needs permissions, data boundaries, evaluation, human feedback, and a team that knows how to keep iterating.'}
        </BodyText>
        <BodyText sx={{ mb: 0 }}>
          {isZh
            ? '这也是大厂平台经历仍然有用的原因：我见过系统如何在高并发、复杂组织和长期演进中稳定运行，也见过架构图无法变成交付的情况。'
            : 'That is why large-scale platform experience still matters: I have seen systems hold under high concurrency, complex organizations, and long evolution—and I have seen architecture diagrams that never became delivery.'}
        </BodyText>
      </Box>

      <Box sx={{ mt: { xs: 7, md: 9 } }}>
        <TrustLogos isZh={isZh} />
      </Box>

      <Box sx={{ mt: { xs: 7, md: 9 }, display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: { xs: 5, sm: 8 } }}>
        <Box>
          <SectionTitle>{isZh ? '教育' : 'Education'}</SectionTitle>
          <BodyText sx={{ mb: 0.5 }}>{isZh ? '工学学士 · 计算机科学与技术' : 'Bachelor of Engineering · Computer Science and Technology'}</BodyText>
          <Typography sx={{ color: MUTED, lineHeight: 1.7 }}>
            {isZh ? '中国华侨大学 · 2001' : 'Huaqiao University, China · 2001'}
          </Typography>
        </Box>
        <Box>
          <SectionTitle>{isZh ? '认证' : 'Certifications'}</SectionTitle>
          <BodyText sx={{ mb: 0.5 }}>{isZh ? 'PMP 项目管理认证 · 2005 · 华为' : 'PMP Certification · 2005 · Huawei'}</BodyText>
          <Typography sx={{ color: MUTED, lineHeight: 1.7 }}>
            {isZh ? '国家高级程序员 · 2001 · 中国' : 'National Senior Programmer · 2001 · China'}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ mt: { xs: 7, md: 10 } }}>
        <Typography sx={{ color: ACCENT, fontSize: '1.05rem' }}>
          <Box component={RouterLink} to="/contact" sx={{ color: ACCENT, textDecoration: 'none', '&:hover': { color: '#A3472C' } }}>
            {isZh ? '如果这听起来像你正在面对的问题，欢迎联系 →' : 'If this sounds like the problem in front of you, get in touch →'}
          </Box>
        </Typography>
      </Box>
    </PageShell>
  );
};

export default About;
