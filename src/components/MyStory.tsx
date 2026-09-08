import React from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
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

const MyStory = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const isZh = language === 'zh';

  const storyMilestones = isZh
    ? [
        { id: 'biography-twenty-years', year: '2001–2023', title: '代码人生：一个程序员的二十年', category: '完整传记', story: '从 VB 到大语言模型，从深圳到杭州，再到更广阔的技术世界——这是一个工程师二十余年关于代码、平台、组织与人生选择的真实记录。', lessons: ['技术改变世界，往往始于持续改进一件件小事', '平台思维能把一次成功变成可复制的能力', '技术领导力本质上是“人与系统”的双重建设'] },
        { id: '2024-entrepreneurship-reflection', year: '2024', title: '创业与人生反思', category: '创业思考', story: '在创业与管理过程中，我越来越关注技术如何真正创造价值，以及人在组织、产品与时代变化中的位置。', lessons: ['创业需要耐心与韧性', '技术不只是工具，更是价值创造方式', '个人成长是长期创业中最值得投资的部分'] },
        { id: '2023-cto-journey', year: '2023', title: 'CTO 之路：领导力、产品与 AI 转型', category: '领导力', story: '担任 CTO 之后，我的关注点从纯技术决策扩展到团队、产品、客户与 AI 落地，学习如何在复杂约束下推动可执行的创新。', lessons: ['技术负责人必须理解业务与产品', '团队建设往往比技术选型更难也更重要', 'AI 转型需要节奏感，而不是口号'] },
        { id: '2021-ant-group-lowcode', year: '2021-2022', title: '蚂蚁集团：低代码平台的诞生', category: '技术创新', story: '在蚂蚁集团建设低代码平台的经历，让我更深刻地理解“技术民主化”的价值：平台能力越强，业务创新的边界就越广。', lessons: ['低代码是提升组织交付效率的重要抓手', '真正的创新必须深度理解业务需求', '平台化思维优于一次性点状方案'] },
        { id: '2018-dingtalk-internationalization', year: '2018-2020', title: '钉钉国际化：从 0 到数百万用户', category: '全球化', story: '带领钉钉国际化团队从零起步，到支撑数百万日活，是一次关于产品、本地化、组织协同与增长节奏的综合训练。', lessons: ['国际化首先是文化理解能力', '技术产品必须做真正的本地化适配', '全球视野是高级技术人才的重要能力'] },
        { id: '2015-mogujie-scaling', year: '2015-2017', title: '蘑菇街：规模化平台挑战', category: '规模化', story: '负责 100 多人团队与电商中台建设，让我学会如何在高压、高变化环境中维持系统稳定与组织效率。', lessons: ['大型系统离不开长期架构治理', '团队协同是规模化成功的关键', '技术债务必须尽早看见、尽快治理'] },
        { id: '2007-taobao-witness', year: '2007-2014', title: '淘宝：见证电商时代', category: '时代见证', story: '在淘宝的多年经历，几乎完整见证了中国电商平台高速演进的关键阶段，也让我深刻理解技术如何推动商业模式升级。', lessons: ['技术发展必须紧跟业务变化', '用户体验始终是产品成功核心', '持续学习是技术人的长期生存能力'] },
        { id: '2003-huawei-agile', year: '2003-2006', title: '华为与敏捷转型启蒙', category: '敏捷启蒙', story: '在以瀑布模型为主流的时代接触并推动敏捷实践，深刻影响了我后来对软件工程、团队协作与项目管理的理解。', lessons: ['敏捷不仅是方法，更是一种组织思维', '改变往往需要渐进式推进', '技术人的影响力不应只停留在写代码'] },
        { id: '2001-career-beginning', year: '2001-2002', title: '程序员职业生涯的起点', category: '开始', story: '毕业后进入软件开发行业的最初几年，充满了对技术的热情与好奇，也在一次次实现与修复中理解了工程的魅力。', lessons: ['编程是一门需要长期练习的手艺', '基础能力永远决定上限', '保持好奇心是成长最持久的驱动力'] },
      ]
    : [
        { id: 'biography-twenty-years', year: '2001–2023', title: "Code Life — A Programmer's 20-Year Journey", category: 'Full Biography', story: 'From Visual Basic to large language models, from Shenzhen to Hangzhou and beyond—an honest account of more than two decades of code, platforms, organizations, and personal decisions.', lessons: ['Technology changes the world through many concrete improvements', 'Platform thinking turns one success into repeatable capability', 'Technical leadership means building both systems and people'] },
        { id: '2024-entrepreneurship-reflection', year: '2024', title: 'Entrepreneurship & Life Reflection', category: 'Reflection', story: 'Entrepreneurship and leadership pushed me to think more deeply about how technology creates value—and about the role people play amid product, organizational, and industry change.', lessons: ['Entrepreneurship requires patience and resilience', 'Technology is not only a tool but a way to create value', 'Personal growth is one of the best long-term investments'] },
        { id: '2023-cto-journey', year: '2023', title: 'The CTO Journey: Leadership, Product & AI Transformation', category: 'Leadership', story: 'Serving as CTO expanded my focus from technical decisions to teams, products, customers, and practical AI delivery—learning how to drive executable innovation under real constraints.', lessons: ['Technical leaders need business and product judgment', 'Team building is often harder and more important than technology selection', 'AI transformation requires pacing, not slogans'] },
        { id: '2021-ant-group-lowcode', year: '2021-2022', title: 'Ant Group: Building a Low-code Platform', category: 'Technical Innovation', story: 'Building a low-code platform at Ant Group deepened my understanding of technology democratization: the stronger the platform, the wider the space for business innovation.', lessons: ['Low-code is a meaningful lever for organizational delivery efficiency', 'Real innovation requires deep business understanding', 'Platform thinking matters more than one-off point solutions'] },
        { id: '2018-dingtalk-internationalization', year: '2018-2020', title: 'DingTalk Internationalization: From 0 to Millions', category: 'Globalization', story: 'Leading DingTalk internationalization from zero to millions of daily active users became a practical lesson in localization, product strategy, organizational coordination, and growth.', lessons: ['Internationalization begins with cultural understanding', 'Technology products require true localization', 'A global perspective is essential for senior technology leaders'] },
        { id: '2015-mogujie-scaling', year: '2015-2017', title: 'Mogu Street: Scaling Platform Challenges', category: 'Scaling', story: 'Managing a 100+ person team and an e-commerce middle platform taught me how to preserve system stability and organizational effectiveness under constant pressure and change.', lessons: ['Large-scale systems require long-term architectural governance', 'Team collaboration is the key to successful scaling', 'Technical debt must be seen early and handled early'] },
        { id: '2007-taobao-witness', year: '2007-2014', title: 'Taobao: Witness to the E-commerce Era', category: 'Historical Witness', story: 'My Taobao years were a front-row seat to the rapid rise of Chinese e-commerce and a deep lesson in how technology drives business model evolution.', lessons: ['Technology must evolve with the business', 'User experience remains central to product success', 'Continuous learning is a long-term survival skill'] },
        { id: '2003-huawei-agile', year: '2003-2006', title: 'Huawei & Agile Transformation Enlightenment', category: 'Agile Transformation', story: 'Encountering and promoting agile thinking in a waterfall-dominated era strongly shaped how I later approached software engineering, collaboration, and project delivery.', lessons: ['Agile is a way of thinking, not only a methodology', 'Meaningful change is often incremental', "A technologist's influence should go beyond writing code"] },
        { id: '2001-career-beginning', year: '2001-2002', title: 'The Beginning of a Programmer Career', category: 'Beginning', story: 'The first years after graduation were full of curiosity and hands-on learning, discovering the craft and discipline of engineering through each feature and each fix.', lessons: ['Programming is a craft that requires long practice', 'Fundamentals always determine the ceiling', 'Curiosity is the most durable engine of growth'] },
      ];

  const featured = storyMilestones[0];
  const rest = storyMilestones.slice(1);

  return (
    <PageShell>
      <PageTitle>{isZh ? '我的故事' : 'My Story'}</PageTitle>
      <PageLead>
        {isZh
          ? '二十多年技术旅程中的关键节点、思考与经验记录'
          : 'Chronicles, inflection points, and lessons from more than 20 years in technology'}
      </PageLead>

      <Box sx={{ mb: 8, textAlign: 'center' }}>
        <Typography sx={{ color: ACCENT, mb: 1, letterSpacing: '0.04em' }}>
          {featured.year} · {featured.category}
        </Typography>
        <Typography
          sx={{
            fontFamily: displaySerif,
            fontSize: { xs: '1.35rem', md: '1.55rem' },
            color: INK,
            mb: 2,
            lineHeight: 1.4,
          }}
        >
          {featured.title}
        </Typography>
        <BodyText sx={{ mb: 2.5 }}>{featured.story}</BodyText>
        <TextLink onClick={() => navigate(`/mystory/${featured.id}`)}>
          {isZh ? '阅读全文 →' : 'Read full story →'}
        </TextLink>
      </Box>

      <Box sx={{ display: 'grid', gap: 7 }}>
        {rest.map((milestone) => (
          <Box key={milestone.id}>
            <Typography sx={{ color: ACCENT, mb: 0.75, letterSpacing: '0.04em' }}>
              {milestone.year}
            </Typography>
            <Typography
              sx={{
                fontFamily: displaySerif,
                fontSize: '1.28rem',
                color: INK,
                mb: 0.5,
                lineHeight: 1.4,
              }}
            >
              {milestone.title}
            </Typography>
            <Typography sx={{ color: MUTED, fontSize: '0.92rem', mb: 2 }}>{milestone.category}</Typography>
            <BodyText>{milestone.story}</BodyText>
            <SectionTitle>{isZh ? '关键体会' : 'Key lessons'}</SectionTitle>
            <NumberedList items={milestone.lessons} />
            <Box sx={{ mt: 2 }}>
              <TextLink onClick={() => navigate(`/mystory/${milestone.id}`)}>
                {isZh ? '阅读全文 →' : 'Read full story →'}
              </TextLink>
            </Box>
          </Box>
        ))}
      </Box>

      <Box sx={{ mt: 10, textAlign: 'center', maxWidth: 560, mx: 'auto' }}>
        <SectionTitle sx={{ textAlign: 'center' }}>
          {isZh ? '写给未来的自己，也写给同行者' : 'To my future self & fellow travelers'}
        </SectionTitle>
        <Typography sx={{ color: MUTED, lineHeight: 1.8 }}>
          {isZh
            ? '这些记录不仅是个人经历的整理，也希望能为走在相似道路上的朋友提供一些参照与启发。技术旅程很长，但每一段认真走过的路都算数。'
            : 'These stories are not just personal records. I hope they also offer perspective and encouragement to others walking similar paths. The technology journey is long, and every thoughtfully lived stage matters.'}
        </Typography>
      </Box>
    </PageShell>
  );
};

export default MyStory;
