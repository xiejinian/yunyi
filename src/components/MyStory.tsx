import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import {
  PageShell,
  PageTitle,
  PageLead,
  BodyText,
  ACCENT,
  INK,
  MUTED,
  displaySerif,
} from './editorial';

const MyStory = () => {
  const { language } = useLanguage();
  const isZh = language === 'zh';

  const principles = isZh
    ? [
        {
          id: '2007-taobao-witness',
          year: '2007–2015',
          title: '能复用的能力，才是能力',
          body: '淘宝阶段最重要的判断，不是又做了一个交易功能，而是承认烟囱式成功无法被复制。中台的意义是：把交易、商品、订单里真正稳定的部分抽成组织可共享的能力，同时把变化留给业务。平台化是边界选择，不是把所有东西收进一个大系统。',
        },
        {
          id: '2015-mogujie-scaling',
          year: '2015–2018',
          title: '技术债必须尽早被看见',
          body: '带 110 人团队做时尚电商中台时，压力来自变化速度，而不是某一张架构图是否漂亮。规模化失败通常不是因为缺少微服务，而是因为债没有被命名、没有负责人、没有进入迭代。看见债，是治理的开始。',
        },
        {
          id: '2015-mogujie-scaling',
          year: '组织',
          title: '团队扩张往往比技术选型更难',
          body: '7 人、20 人、30 人、110 人，每一档换的不是工具，而是沟通、质量和决策方式。技术委员会、跨团队边界和“谁对结果负责”，决定架构能不能活下来。领导力是把人与系统一起建好。',
        },
        {
          id: '2018-dingtalk-internationalization',
          year: '2018–2021',
          title: '国际化首先是文化理解',
          body: '钉钉出海不是把中文界面换成英文。身份、运营、本地习惯和交付节奏必须一起成立，产品才能在另一个市场里被当成自己的工具。把系统带到新边界时，我先问：谁在用，以及他们如何信任这个系统。',
        },
        {
          id: '2023-cto-journey',
          year: '2023–至今',
          title: 'AI 要进入流程，而不是停在聊天窗口',
          body: '模型会过时，工作流、权限和团队习惯不会。企业 AI 的关键不是提示词写得多巧，而是场景是否值得做、数据能否引用、错误如何收回、一线是否真的改了工作方式。没有组织机制的 AI，只是一次演示。',
        },
      ]
    : [
        {
          id: '2007-taobao-witness',
          year: '2007–2015',
          title: 'Only reusable capability is capability',
          body: 'The important judgment at Taobao was not another trading feature. It was admitting that siloed success does not copy. A middle platform means extracting what is stable in trading, product, and orders into something the organization can share—and leaving change with the business. Platformization is a boundary choice, not a bid to absorb everything into one system.',
        },
        {
          id: '2015-mogujie-scaling',
          year: '2015–2018',
          title: 'Technical debt has to be seen early',
          body: 'Leading 110 engineers on a fashion-commerce platform, the pressure was the rate of change, not whether an architecture diagram looked elegant. Scaling usually fails because debt is unnamed, unowned, and never enters the iteration—not because a team lacked microservices. Seeing the debt is the start of governing it.',
        },
        {
          id: '2015-mogujie-scaling',
          year: 'Organization',
          title: 'Growing a team is harder than choosing a stack',
          body: 'Seven, twenty, thirty, one hundred and ten people: each step changes communication, quality, and decision-making, not the tools. Technical committees, cross-team boundaries, and who owns the outcome decide whether an architecture survives. Leadership is building people and systems together.',
        },
        {
          id: '2018-dingtalk-internationalization',
          year: '2018–2021',
          title: 'Internationalization begins as cultural understanding',
          body: 'Taking DingTalk overseas was not swapping a Chinese UI for English. Identity, operations, local habit, and delivery cadence had to land together before the product felt native. When a system crosses a new boundary, I ask who is using it and how they will trust it.',
        },
        {
          id: '2023-cto-journey',
          year: '2023–Present',
          title: 'AI has to enter the workflow, not stop at the chat box',
          body: 'Models age. Workflows, permissions, and team habits last longer. Enterprise AI is less about clever prompts than whether the scenario is worth doing, whether answers can be cited, how errors are taken back, and whether the line actually changed how it works. AI without an organizational mechanism is a demo.',
        },
      ];

  return (
    <PageShell>
      <PageTitle>{isZh ? '判断原则' : 'Leadership principles'}</PageTitle>
      <PageLead>
        {isZh
          ? '客户不需要完整年表，需要理解我如何做判断：平台化、技术债、团队扩张、国际化和 AI 落地。'
          : 'Clients do not need a full chronology. They need to see how I judge: platformization, debt, team growth, internationalization, and AI in production.'}
      </PageLead>

      <Box sx={{ display: 'grid', gap: 7 }}>
        {principles.map((item, index) => (
          <Box key={`${item.title}-${index}`}>
            <Typography sx={{ color: ACCENT, mb: 0.75, letterSpacing: '0.04em' }}>
              {String(index + 1).padStart(2, '0')} · {item.year}
            </Typography>
            <Typography
              component="h2"
              sx={{
                fontFamily: displaySerif,
                fontSize: { xs: '1.22rem', md: '1.38rem' },
                color: INK,
                mb: 1.5,
                lineHeight: 1.4,
              }}
            >
              {item.title}
            </Typography>
            <BodyText sx={{ mb: 1.5 }}>{item.body}</BodyText>
            <Typography>
              <Box
                component={RouterLink}
                to={`/mystory/${item.id}`}
                sx={{ color: ACCENT, textDecoration: 'none', '&:hover': { color: '#A3472C' } }}
              >
                {isZh ? '相关记录 →' : 'Related chronicle →'}
              </Box>
            </Typography>
          </Box>
        ))}
      </Box>

      <Box sx={{ mt: 10, pt: 4, borderTop: '1px solid #E6DCCB' }}>
        <BodyText sx={{ mb: 1.5 }}>
          {isZh
            ? '如果需要完整职业叙事，二十年的长文仍在。'
            : 'If you want the full narrative, the twenty-year chronicle is still here.'}
        </BodyText>
        <Typography>
          <Box
            component={RouterLink}
            to="/mystory/biography-twenty-years"
            sx={{ color: ACCENT, textDecoration: 'none', '&:hover': { color: '#A3472C' } }}
          >
            {isZh ? '阅读《代码人生》 →' : 'Read the 20-year chronicle →'}
          </Box>
        </Typography>
      </Box>
    </PageShell>
  );
};

export default MyStory;
