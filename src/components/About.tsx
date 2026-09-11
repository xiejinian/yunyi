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
        '企业 AI：把大模型接到真实业务流程里，而不是只做演示。',
        '平台：分清哪些能力该共享、哪些留在业务，并管好后面怎么演进。',
        '工程团队：让技术方案变成团队能持续做下去的方式。',
      ]
    : [
        'Enterprise AI: connect LLMs, RAG, and agents to real business workflows—not demos.',
        'Platform modernization: decide what should be shared, what stays in the business, and how the architecture can evolve.',
        'Engineering organization and delivery: turn a technical plan into a way of working a team can sustain.',
      ];

  const howIWork = isZh
    ? [
        '先看业务流程和能衡量的目标，而不是先选模型或框架。',
        '再把系统边界、数据、权限和人工审核设计好，让 AI 能进现有系统。',
        '最后把评估、反馈、运维和团队习惯立起来，让试点能变成日常能力。',
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
                {' '}CTO 与红熊 AI 研发总经理。我把 AI、平台和工程团队放在一起做，让方案能上线，也能一直跑下去。
              </>
            ) : (
              <>
                I currently serve as CTO at{' '}
                <TextLink href="https://hz-glory.vercel.app/">Glorion Intelligence</TextLink>
                , and as an external advisor — CTO at{' '}
                <TextLink href="https://feifan-tech-website.pages.dev/">Feifan Tech</TextLink>
                {' '}and Head of R&D at Redbear AI. I work on AI, the platform, and the engineering team together, so plans can ship and keep running.
              </>
            )}
          </BodyText>
        </Box>
      </Box>

      <Box sx={{ mt: { xs: 7, md: 9 } }}>
        <SectionTitle>{isZh ? '我做什么' : 'What I do'}</SectionTitle>
        <BodyText>
          {isZh
            ? '我帮企业把 AI 用进真实业务，把平台做稳，把工程团队带起来。'
            : 'I help companies put AI into real work, steady the platform, and build engineering teams that can keep delivering.'}
        </BodyText>
        <NumberedList items={whatIDo} />
      </Box>

      <Box sx={{ mt: { xs: 7, md: 8 } }}>
        <SectionTitle>{isZh ? '怎么合作' : 'How I work'}</SectionTitle>
        <BodyText>
          {isZh
            ? '合作一般从一件手头的问题开始，而不是从技术清单开始。'
            : 'Engagements usually begin with a specific delivery problem, not a catalog of tools.'}
        </BodyText>
        <NumberedList items={howIWork} />
      </Box>

      <Box sx={{ mt: { xs: 7, md: 8 } }}>
        <SectionTitle>{isZh ? '为什么重要' : 'Why it matters'}</SectionTitle>
        <BodyText>
          {isZh
            ? 'AI 不是一个聊天窗口。它得进到流程、系统和团队里，才能真正创造价值。演示可以很快；要上生产，权限、数据边界、评估、人工反馈和团队迭代都得跟上。'
            : 'AI is not a chat window. It has to live inside workflows, systems, and organizations before it becomes a production capability. Demos can be fast. Production AI needs permissions, data boundaries, evaluation, human feedback, and a team that knows how to keep iterating.'}
        </BodyText>
        <BodyText sx={{ mb: 0 }}>
          {isZh
            ? '这也是大厂平台经历仍然有用的原因：我见过系统在高并发、复杂组织和长期演进里怎么稳住，也见过架构图画完却交不出去的情况。'
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
            {isZh ? '如果这就是你手头的问题，欢迎联系 →' : 'If this is the problem in front of you, get in touch →'}
          </Box>
        </Typography>
      </Box>
    </PageShell>
  );
};

export default About;
