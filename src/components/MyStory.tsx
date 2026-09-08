import React from 'react';
import { Container, Typography, Paper, Box, Chip, Divider, Button, useMediaQuery, useTheme } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupIcon from '@mui/icons-material/Group';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import BusinessIcon from '@mui/icons-material/Business';
import FlightIcon from '@mui/icons-material/Flight';
import PsychologyIcon from '@mui/icons-material/Psychology';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useLanguage } from '../i18n/LanguageContext';

const MyStory = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { language } = useLanguage();
  const isZh = language === 'zh';

  const storyMilestones = isZh
    ? [
        { id: 'biography-twenty-years', year: '2001–2023', title: '代码人生：一个程序员的二十年', category: '完整传记', icon: MenuBookIcon, type: 'biography', story: '从 VB 到大语言模型，从深圳到杭州，再到更广阔的技术世界——这是一个工程师二十余年关于代码、平台、组织与人生选择的真实记录。', lessons: ['技术改变世界，往往始于持续改进一件件小事', '平台思维能把一次成功变成可复制的能力', '技术领导力本质上是“人与系统”的双重建设'] },
        { id: '2024-entrepreneurship-reflection', year: '2024', title: '创业与人生反思', category: '创业思考', icon: PsychologyIcon, type: 'reflection', story: '在创业与管理过程中，我越来越关注技术如何真正创造价值，以及人在组织、产品与时代变化中的位置。', lessons: ['创业需要耐心与韧性', '技术不只是工具，更是价值创造方式', '个人成长是长期创业中最值得投资的部分'] },
        { id: '2023-cto-journey', year: '2023', title: 'CTO 之路：领导力、产品与 AI 转型', category: '领导力', icon: BusinessIcon, type: 'career', story: '担任 CTO 之后，我的关注点从纯技术决策扩展到团队、产品、客户与 AI 落地，学习如何在复杂约束下推动可执行的创新。', lessons: ['技术负责人必须理解业务与产品', '团队建设往往比技术选型更难也更重要', 'AI 转型需要节奏感，而不是口号'] },
        { id: '2021-ant-group-lowcode', year: '2021-2022', title: '蚂蚁集团：低代码平台的诞生', category: '技术创新', icon: CodeIcon, type: 'achievement', story: '在蚂蚁集团建设低代码平台的经历，让我更深刻地理解“技术民主化”的价值：平台能力越强，业务创新的边界就越广。', lessons: ['低代码是提升组织交付效率的重要抓手', '真正的创新必须深度理解业务需求', '平台化思维优于一次性点状方案'] },
        { id: '2018-dingtalk-internationalization', year: '2018-2020', title: '钉钉国际化：从 0 到数百万用户', category: '全球化', icon: FlightIcon, type: 'growth', story: '带领钉钉国际化团队从零起步，到支撑数百万日活，是一次关于产品、本地化、组织协同与增长节奏的综合训练。', lessons: ['国际化首先是文化理解能力', '技术产品必须做真正的本地化适配', '全球视野是高级技术人才的重要能力'] },
        { id: '2015-mogujie-scaling', year: '2015-2017', title: '蘑菇街：规模化平台挑战', category: '规模化', icon: TrendingUpIcon, type: 'challenge', story: '负责 100 多人团队与电商中台建设，让我学会如何在高压、高变化环境中维持系统稳定与组织效率。', lessons: ['大型系统离不开长期架构治理', '团队协同是规模化成功的关键', '技术债务必须尽早看见、尽快治理'] },
        { id: '2007-taobao-witness', year: '2007-2014', title: '淘宝：见证电商时代', category: '时代见证', icon: GroupIcon, type: 'foundation', story: '在淘宝的多年经历，几乎完整见证了中国电商平台高速演进的关键阶段，也让我深刻理解技术如何推动商业模式升级。', lessons: ['技术发展必须紧跟业务变化', '用户体验始终是产品成功核心', '持续学习是技术人的长期生存能力'] },
        { id: '2003-huawei-agile', year: '2003-2006', title: '华为与敏捷转型启蒙', category: '敏捷启蒙', icon: LightbulbIcon, type: 'transformation', story: '在以瀑布模型为主流的时代接触并推动敏捷实践，深刻影响了我后来对软件工程、团队协作与项目管理的理解。', lessons: ['敏捷不仅是方法，更是一种组织思维', '改变往往需要渐进式推进', '技术人的影响力不应只停留在写代码'] },
        { id: '2001-career-beginning', year: '2001-2002', title: '程序员职业生涯的起点', category: '开始', icon: SchoolIcon, type: 'beginning', story: '毕业后进入软件开发行业的最初几年，充满了对技术的热情与好奇，也在一次次实现与修复中理解了工程的魅力。', lessons: ['编程是一门需要长期练习的手艺', '基础能力永远决定上限', '保持好奇心是成长最持久的驱动力'] },
      ]
    : [
        { id: 'biography-twenty-years', year: '2001–2023', title: "Code Life — A Programmer's 20-Year Journey", category: 'Full Biography', icon: MenuBookIcon, type: 'biography', story: 'From Visual Basic to large language models, from Shenzhen to Hangzhou and beyond—an honest account of more than two decades of code, platforms, organizations, and personal decisions.', lessons: ['Technology changes the world through many concrete improvements', 'Platform thinking turns one success into repeatable capability', 'Technical leadership means building both systems and people'] },
        { id: '2024-entrepreneurship-reflection', year: '2024', title: 'Entrepreneurship & Life Reflection', category: 'Reflection', icon: PsychologyIcon, type: 'reflection', story: 'Entrepreneurship and leadership pushed me to think more deeply about how technology creates value—and about the role people play amid product, organizational, and industry change.', lessons: ['Entrepreneurship requires patience and resilience', 'Technology is not only a tool but a way to create value', 'Personal growth is one of the best long-term investments'] },
        { id: '2023-cto-journey', year: '2023', title: 'The CTO Journey: Leadership, Product & AI Transformation', category: 'Leadership', icon: BusinessIcon, type: 'career', story: 'Serving as CTO expanded my focus from technical decisions to teams, products, customers, and practical AI delivery—learning how to drive executable innovation under real constraints.', lessons: ['Technical leaders need business and product judgment', 'Team building is often harder and more important than technology selection', 'AI transformation requires pacing, not slogans'] },
        { id: '2021-ant-group-lowcode', year: '2021-2022', title: 'Ant Group: Building a Low-code Platform', category: 'Technical Innovation', icon: CodeIcon, type: 'achievement', story: 'Building a low-code platform at Ant Group deepened my understanding of technology democratization: the stronger the platform, the wider the space for business innovation.', lessons: ['Low-code is a meaningful lever for organizational delivery efficiency', 'Real innovation requires deep business understanding', 'Platform thinking matters more than one-off point solutions'] },
        { id: '2018-dingtalk-internationalization', year: '2018-2020', title: 'DingTalk Internationalization: From 0 to Millions', category: 'Globalization', icon: FlightIcon, type: 'growth', story: 'Leading DingTalk internationalization from zero to millions of daily active users became a practical lesson in localization, product strategy, organizational coordination, and growth.', lessons: ['Internationalization begins with cultural understanding', 'Technology products require true localization', 'A global perspective is essential for senior technology leaders'] },
        { id: '2015-mogujie-scaling', year: '2015-2017', title: 'Mogu Street: Scaling Platform Challenges', category: 'Scaling', icon: TrendingUpIcon, type: 'challenge', story: 'Managing a 100+ person team and an e-commerce middle platform taught me how to preserve system stability and organizational effectiveness under constant pressure and change.', lessons: ['Large-scale systems require long-term architectural governance', 'Team collaboration is the key to successful scaling', 'Technical debt must be seen early and handled early'] },
        { id: '2007-taobao-witness', year: '2007-2014', title: 'Taobao: Witness to the E-commerce Era', category: 'Historical Witness', icon: GroupIcon, type: 'foundation', story: 'My Taobao years were a front-row seat to the rapid rise of Chinese e-commerce and a deep lesson in how technology drives business model evolution.', lessons: ['Technology must evolve with the business', 'User experience remains central to product success', 'Continuous learning is a long-term survival skill'] },
        { id: '2003-huawei-agile', year: '2003-2006', title: 'Huawei & Agile Transformation Enlightenment', category: 'Agile Transformation', icon: LightbulbIcon, type: 'transformation', story: 'Encountering and promoting agile thinking in a waterfall-dominated era strongly shaped how I later approached software engineering, collaboration, and project delivery.', lessons: ['Agile is a way of thinking, not only a methodology', 'Meaningful change is often incremental', 'A technologist\'s influence should go beyond writing code'] },
        { id: '2001-career-beginning', year: '2001-2002', title: 'The Beginning of a Programmer Career', category: 'Beginning', icon: SchoolIcon, type: 'beginning', story: 'The first years after graduation were full of curiosity and hands-on learning, discovering the craft and discipline of engineering through each feature and each fix.', lessons: ['Programming is a craft that requires long practice', 'Fundamentals always determine the ceiling', 'Curiosity is the most durable engine of growth'] },
      ];

  const getCategoryColor = (type: string) => {
    switch (type) {
      case 'biography': return '#C45A38';
      case 'reflection': return '#8b5cf6';
      case 'career': return '#ff6b35';
      case 'achievement': return '#1677ff';
      case 'growth': return '#ff6a00';
      case 'challenge': return '#e91e63';
      case 'foundation': return '#ff6a00';
      case 'transformation': return '#ff0000';
      case 'beginning': return '#4caf50';
      default: return '#6b7280';
    }
  };

  return (
    <Box component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} sx={{ minHeight: '100vh', pt: { xs: 10, sm: 11, md: 12 }, pb: { xs: 6, sm: 8, md: 12 }, background: '#F6F1E7' }}>
      <Container>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h3" component="h2" gutterBottom sx={{ mb: 3, color: '#C45A38', fontWeight: 500, letterSpacing: '0.04em' }}>{isZh ? '我的故事' : 'My Story'}</Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto', lineHeight: 1.6, mb: 4 }}>{isZh ? '二十多年技术旅程中的关键节点、思考与经验记录' : 'Chronicles, inflection points, and lessons from more than 20 years in technology'}</Typography>
          <Divider sx={{ width: 100, mx: 'auto', borderColor: 'primary.main', borderWidth: 2 }} />
        </Box>

        <Paper component={motion.div} whileHover={{ scale: 1.005, y: -3, boxShadow: '0 16px 40px -8px rgba(196, 90, 56, 0.2)' }} elevation={3} sx={{ p: { xs: 3, sm: 4, md: 5 }, mb: 6, background: '#F3EDE2', borderRadius: 3, border: '1px solid rgba(196, 90, 56, 0.3)', position: 'relative', overflow: 'hidden', cursor: 'pointer', '&::before': { content: '""', position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'linear-gradient(90deg, #C45A38 0%, #C45A38 100%)' } }} onClick={() => navigate('/mystory/biography-twenty-years')}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, flexWrap: 'wrap' }}>
            <Box sx={{ width: 72, height: 72, borderRadius: '50%', bgcolor: 'rgba(196, 90, 56, 0.16)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '2px solid rgba(196, 90, 56, 0.3)' }}><MenuBookIcon sx={{ fontSize: 36, color: '#C45A38' }} /></Box>
            <Box sx={{ flex: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1, flexWrap: 'wrap' }}>
                <Chip label="2001–2023" size="small" sx={{ bgcolor: 'rgba(196, 90, 56, 0.15)', color: '#C45A38', fontWeight: 700, border: '1px solid rgba(196, 90, 56, 0.3)' }} />
                <Chip label={isZh ? '完整传记' : 'Full Biography'} size="small" sx={{ bgcolor: 'rgba(196, 90, 56, 0.1)', color: '#C45A38', fontWeight: 600 }} />
              </Box>
              <Typography variant="h5" sx={{ fontWeight: 700, color: '#2F2C28', mb: 1 }}>{isZh ? '代码人生：一个程序员的二十年' : "Code Life — A Programmer's 20-Year Journey"}</Typography>
              <Typography variant="body1" sx={{ color: '#6F675E', lineHeight: 1.7, maxWidth: 700 }}>{isZh ? '从 VB 到大语言模型，跨越多家公司、两进阿里。一个工程师关于代码、平台、组织与人生选择的真实记录。' : 'From Visual Basic to LLMs, across multiple companies including Huawei and Alibaba. An engineer\'s honest account of code, growth, and technological transformation.'}</Typography>
            </Box>
            <Button variant="contained" endIcon={<ArrowForwardIcon />} sx={{ flexShrink: 0 }}>{isZh ? '阅读全文' : 'Read Full Story'}</Button>
          </Box>
        </Paper>

        <Timeline position={isMobile ? 'right' : 'alternate'} sx={{ px: { xs: 0, sm: 1 } }}>
          {storyMilestones.map((milestone, index) => {
            const IconComponent = milestone.icon;
            const categoryColor = getCategoryColor(milestone.type);

            return (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot sx={{ backgroundColor: categoryColor, width: 64, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 0 20px ${categoryColor}40` }}>
                    <IconComponent sx={{ color: 'white', fontSize: 28 }} />
                  </TimelineDot>
                  <TimelineConnector sx={{ bgcolor: categoryColor, opacity: 0.3 }} />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper component={motion.div} whileHover={{ scale: 1.02, y: -5, boxShadow: `0 15px 35px -5px ${categoryColor}25` }} elevation={3} sx={{ p: { xs: 3, sm: 4 }, backgroundColor: '#FBF8F2', borderRadius: 2, position: 'relative', overflow: 'hidden', border: `2px solid ${categoryColor}20`, transition: 'all 0.3s ease-in-out', '&::before': { content: '""', position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: `linear-gradient(90deg, ${categoryColor} 0%, ${categoryColor}80 100%)` }, '&:hover': { borderColor: `${categoryColor}40` } }}>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 2, mb: 3 }}>
                      <Typography variant="h5" component="h3" sx={{ color: categoryColor, fontWeight: 700, flex: 1 }}>{milestone.year}</Typography>
                      <Chip label={milestone.category} size="small" sx={{ bgcolor: `${categoryColor}15`, color: categoryColor, fontWeight: 600, border: `1px solid ${categoryColor}30` }} />
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main', mb: 2 }}>{milestone.title}</Typography>
                    <Typography paragraph sx={{ lineHeight: 1.7, color: 'text.primary', fontSize: '1rem', mb: 3 }}>{milestone.story}</Typography>
                    <Box>
                      <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 700, color: categoryColor, display: 'flex', alignItems: 'center', gap: 1 }}><AutoStoriesIcon sx={{ fontSize: 20 }} />{isZh ? '关键体会：' : 'Key Lessons:'}</Typography>
                      <Box component="ul" sx={{ pl: 0, ml: 2, m: 0, listStylePosition: 'outside', '& li': { mb: 1.5, lineHeight: 1.6, textAlign: 'left', display: 'list-item', listStyleType: 'disc', '&::marker': { color: categoryColor, fontSize: '0.8em' } } }}>
                        {milestone.lessons.map((lesson, i) => (<Typography component="li" key={i} sx={{ color: 'text.primary', fontSize: '0.95rem' }}>{lesson}</Typography>))}
                      </Box>
                    </Box>
                    <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
                      <Button variant="outlined" endIcon={<ArrowForwardIcon />} onClick={() => navigate(`/mystory/${milestone.id}`)} sx={{ borderColor: categoryColor, color: categoryColor, '&:hover': { borderColor: categoryColor, backgroundColor: `${categoryColor}10`, transform: 'translateY(-2px)' }, transition: 'all 0.3s ease-in-out' }}>{isZh ? '阅读全文' : 'Read Full Story'}</Button>
                    </Box>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            );
          })}
        </Timeline>

        <Box sx={{ textAlign: 'center', mt: 8, p: 4, backgroundColor: '#FBF8F2', borderRadius: 2, border: '1px solid #E6DCCB' }}>
          <Typography variant="h6" sx={{ color: 'primary.main', mb: 2, fontWeight: 600 }}>{isZh ? '写给未来的自己，也写给同行者' : 'To My Future Self & Fellow Travelers'}</Typography>
          <Typography sx={{ color: 'text.secondary', lineHeight: 1.6, maxWidth: 600, mx: 'auto' }}>{isZh ? '这些记录不仅是个人经历的整理，也希望能为走在相似道路上的朋友提供一些参照与启发。技术旅程很长，但每一段认真走过的路都算数。' : 'These stories are not just personal records. I hope they also offer perspective and encouragement to others walking similar paths. The technology journey is long, and every thoughtfully lived stage matters.'}</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default MyStory;
