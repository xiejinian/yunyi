import React from 'react';
import { Container, Typography, Paper, Box, Chip, Avatar, Stack, useMediaQuery, useTheme } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { motion } from 'framer-motion';
import BusinessIcon from '@mui/icons-material/Business';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import CodeIcon from '@mui/icons-material/Code';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupIcon from '@mui/icons-material/Group';
import StarIcon from '@mui/icons-material/Star';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import SecurityIcon from '@mui/icons-material/Security';
import { useLanguage } from '../i18n/LanguageContext';

const Experience = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { language } = useLanguage();
  const isZh = language === 'zh';

  const experiences = isZh
    ? [
        {
          year: '2023-至今',
          title: 'CTO',
          company: 'Feifan Tech, Hangzhou',
          companyLink: 'https://feifan-tech-website.pages.dev/',
          teamSize: '10',
          companyType: '创业公司',
          logoColor: '#ff6b35',
          icon: BusinessIcon,
          workNature: ['领导力', '架构设计', 'AI / LLM 产品', '咨询'],
          description:
            '带领研发团队为客户交付企业软件与 AI 驱动产品，推进 LLM、RAG、智能助手与 Agent Tool-use 在真实业务中的落地，同时持续提供软件架构、项目管理与技术战略咨询。',
          achievements: [
            '带领 10 人团队交付企业级软件解决方案与 AI 能力升级项目',
            '主导客户产品与内部流程中的 AI / LLM 集成方案设计',
            '建设面向知识库、流程自动化与协同场景的 AI Copilot / 助手能力',
            '结合 Prompt Engineering、RAG 与工具调用模式提升交付效率',
            '持续支持电商创业公司与成长型企业完成技术架构升级',
          ],
        },
        {
          year: '2021-2023',
          title: '资深工程师 / Team Lead',
          company: 'Ant Group, Hangzhou',
          teamSize: '7',
          companyType: '金融科技集团',
          logoColor: '#1677ff',
          icon: SecurityIcon,
          workNature: ['低代码平台', '团队管理', '产品研发'],
          description:
            '负责低代码平台基础服务团队与产品研发，帮助业务人员更高效地构建应用，并通过平台化与自动化能力支撑蚂蚁集团业务扩张。',
          achievements: [
            '主导云凤蝶低代码平台基础服务研发',
            '通过平台自动化提升业务扩张效率',
            '管理 7 人跨职能工程团队',
            '交付企业级低代码解决方案',
          ],
        },
        {
          year: '2018-2021',
          title: '资深工程师 / Team Lead',
          company: 'Alibaba Cloud DingTalk Division, Hangzhou',
          teamSize: '20',
          companyType: '云与企业服务',
          logoColor: '#ff6a00',
          icon: PhoneAndroidIcon,
          workNature: ['国际化', '平台研发', '技术委员会'],
          description:
            '带领钉钉国际化产品研发，推动海外 DAU 从 0 增长到数百万，并主导钉钉运营中台建设。',
          achievements: [
            '推动钉钉国际版 DAU 从 0 增长到数百万',
            '主导钉钉运营中台建设',
            '研发疫情时期企业复工所需的 IDaaS 平台',
            '担任钉钉技术委员会成员',
            '提前达成 FY20 业务目标',
          ],
        },
        {
          year: '2015-2018',
          title: '技术总监',
          company: 'Mogu Street (NYSE: MOGU), Hangzhou',
          teamSize: '110',
          companyType: '时尚电商',
          logoColor: '#e91e63',
          icon: ShoppingCartIcon,
          workNature: ['电商平台', '大团队管理', '质量保障'],
          description:
            '负责蘑菇街电商中台与质量保障团队日常运作，带领多产品线研发并主持技术委员会工作。',
          achievements: [
            '负责中国头部时尚电商平台中台运营',
            '管理 110 人工程团队',
            '主持技术委员会推动架构演进',
            '保障平台在千万级用户场景下的稳定与扩展性',
            '建立系统化质量保障流程',
          ],
        },
        {
          year: '2007-2015',
          title: '高级工程师 ~ 资深工程师',
          company: 'Alibaba Group Taobao (NYSE: BABA), Hangzhou',
          teamSize: '30',
          companyType: '电商巨头',
          logoColor: '#ff6a00',
          icon: TrendingUpIcon,
          workNature: ['平台架构', '技术委员会', '创新'],
          description:
            '负责淘宝交易平台与业务支撑平台研发管理，是阿里巴巴业务中台的联合创始人之一。',
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
          year: '2003-2007',
          title: '项目经理 / 架构师 / 工程师',
          company: 'Huawei Tech & Others, Shenzhen',
          teamSize: '15',
          companyType: '通信与软件',
          logoColor: '#ff0000',
          icon: SettingsIcon,
          workNature: ['通信系统', '敏捷管理', '系统架构'],
          description:
            '参与通信 OSS 系统研发，推动华为敏捷项目管理实践，并参与在线教育和社区平台建设。',
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
          year: '2001-2003',
          title: '工程师 / 项目经理',
          company: 'Early Career - Multiple Companies',
          teamSize: 'Various',
          companyType: '软件开发',
          logoColor: '#4caf50',
          icon: CodeIcon,
          workNature: ['软件工程', '教育科技', '基础积累'],
          description:
            '在深圳开启软件工程职业生涯，参与在线教育软件与社区平台研发，打下企业软件开发基础。',
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
          year: '2023-Present',
          title: 'CTO',
          company: 'Feifan Tech, Hangzhou',
          companyLink: 'https://feifan-tech-website.pages.dev/',
          teamSize: '10',
          companyType: 'Startup',
          logoColor: '#ff6b35',
          icon: BusinessIcon,
          workNature: ['Leadership', 'Architecture', 'AI / LLM Products', 'Consulting'],
          description:
            'Leading the development team to deliver enterprise software and AI-enabled products. Driving practical adoption of LLMs, RAG, copilots, and agent tool-use patterns while continuing architecture, project management, and technology strategy consulting.',
          achievements: [
            'Led a 10-person team delivering enterprise software solutions and AI capability upgrades',
            'Directed AI / LLM integration initiatives for client products and internal workflows',
            'Built AI copilots and assistants for knowledge, automation, and collaboration scenarios',
            'Applied prompt engineering, RAG, and tool-use patterns to improve delivery effectiveness',
            'Continued to support e-commerce startups and growth-stage companies on technical transformation',
          ],
        },
        {
          year: '2021-2023',
          title: 'Staff Engineer/Team Lead',
          company: 'Ant Group, Hangzhou',
          teamSize: '7',
          companyType: 'FinTech Giant',
          logoColor: '#1677ff',
          icon: SecurityIcon,
          workNature: ['Low-code Platform', 'Team Leadership', 'Product Development'],
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
          year: '2018-2021',
          title: 'Staff Engineer/Team Lead',
          company: 'Alibaba Cloud DingTalk Division, Hangzhou',
          teamSize: '20',
          companyType: 'Cloud & Enterprise',
          logoColor: '#ff6a00',
          icon: PhoneAndroidIcon,
          workNature: ['International Expansion', 'Platform Development', 'Technical Committee'],
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
          year: '2015-2018',
          title: 'Staff Director',
          company: 'Mogu Street (NYSE: MOGU), Hangzhou',
          teamSize: '110',
          companyType: 'Fashion E-commerce',
          logoColor: '#e91e63',
          icon: ShoppingCartIcon,
          workNature: ['E-commerce Platform', 'Large Team Management', 'Quality Assurance'],
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
          year: '2007-2015',
          title: 'Senior Engineer ~ Staff Engineer',
          company: 'Alibaba Group Taobao (NYSE: BABA), Hangzhou',
          teamSize: '30',
          companyType: 'E-commerce Giant',
          logoColor: '#ff6a00',
          icon: TrendingUpIcon,
          workNature: ['Platform Architecture', 'Technical Committee', 'Innovation'],
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
          year: '2003-2007',
          title: 'Project Manager/Architect/Engineer',
          company: 'Huawei Tech & Others, Shenzhen',
          teamSize: '15',
          companyType: 'Telecom & Tech',
          logoColor: '#ff0000',
          icon: SettingsIcon,
          workNature: ['Telecommunications', 'Agile Management', 'System Architecture'],
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
          year: '2001-2003',
          title: 'Engineer/Project Manager',
          company: 'Early Career - Multiple Companies',
          teamSize: 'Various',
          companyType: 'Software Development',
          logoColor: '#4caf50',
          icon: CodeIcon,
          workNature: ['Software Engineering', 'Education Tech', 'Foundation Building'],
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
    <Box component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} sx={{ minHeight: '100vh', pt: { xs: 10, sm: 11, md: 12 }, pb: { xs: 6, sm: 8, md: 12 }, background: '#0e1412' }}>
      <Container>
        <Typography variant="h3" component="h2" gutterBottom sx={{ mb: 6, color: 'primary.main' }}>{isZh ? '职业经历' : 'Professional Experience'}</Typography>

        <Timeline position={isMobile ? 'right' : 'alternate'} sx={{ px: { xs: 0, sm: 1 } }}>
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            return (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot sx={{ backgroundColor: exp.logoColor, width: 60, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 0 20px ${exp.logoColor}40` }}>
                    <IconComponent sx={{ color: 'white', fontSize: 28 }} />
                  </TimelineDot>
                  <TimelineConnector sx={{ bgcolor: exp.logoColor, opacity: 0.3 }} />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper
                    component={motion.div}
                    whileHover={{ scale: 1.02, y: -5, boxShadow: `0 15px 35px -5px ${exp.logoColor}25` }}
                    elevation={3}
                    sx={{ p: { xs: 3, sm: 4 }, backgroundColor: '#141c18', borderRadius: 2, position: 'relative', overflow: 'hidden', border: `2px solid ${exp.logoColor}20`, transition: 'all 0.3s ease-in-out', '&::before': { content: '""', position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: `linear-gradient(90deg, ${exp.logoColor} 0%, ${exp.logoColor}80 100%)` }, '&:hover': { borderColor: `${exp.logoColor}40` } }}
                  >
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: { xs: 2, sm: 3 }, mb: 3 }}>
                      {exp.company.includes('Ant Group') ? (
                        <Box sx={{ width: 72, height: 56, borderRadius: '4px', background: 'linear-gradient(135deg, #1677ff 0%, #0958d9 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 4px 12px ${exp.logoColor}40`, position: 'relative', overflow: 'hidden', p: 1 }}>
                          <img src="https://gw.alipayobjects.com/mdn/rms_27e257/afts/img/A*CEPTSaeqMqUAAAAAAAAAAAAAARQnAQ" alt="Ant Group Logo" style={{ width: '100%', height: 'auto', maxWidth: '60px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
                        </Box>
                      ) : exp.company.includes('Alibaba') || exp.company.includes('Taobao') || exp.company.includes('DingTalk') ? (
                        <Box sx={{ width: 72, height: 56, borderRadius: '4px', background: 'linear-gradient(135deg, #ff6a00 0%, #ff4d00 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 4px 12px ${exp.logoColor}40`, position: 'relative', overflow: 'hidden', p: 1 }}>
                          <img src="https://img.alicdn.com/imgextra/i1/O1CN01VqEqIZ1gxJbsTpgfG_!!6000000004208-2-tps-296-46.png" alt="Alibaba Group Logo" style={{ width: '100%', height: 'auto', maxWidth: '60px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
                        </Box>
                      ) : exp.company.includes('Mogu') ? (
                        <Box sx={{ width: 72, height: 56, borderRadius: '4px', background: 'linear-gradient(135deg, #e91e63 0%, #c2185b 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 4px 12px ${exp.logoColor}40`, position: 'relative', overflow: 'hidden', p: 1 }}>
                          <img src="https://s10.mogucdn.com/mlcdn/c45406/220221_3a7fk34bdehdbk3c76j24j18l4g23_192x60.png" alt="Mogu Street Logo" style={{ width: '100%', height: 'auto', maxWidth: '60px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
                        </Box>
                      ) : exp.company.includes('Huawei') ? (
                        <Box sx={{ width: 72, height: 56, borderRadius: '4px', background: 'linear-gradient(135deg, #ff0000 0%, #cc0000 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 4px 12px ${exp.logoColor}40`, position: 'relative', overflow: 'hidden', p: 1 }}>
                          <img src="https://www.huawei.com/-/media/hcomponent-header/1.0.1.20250724165002/component/img/huawei_logo.png" alt="Huawei Logo" style={{ width: '100%', height: 'auto', maxWidth: '60px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
                        </Box>
                      ) : (
                        <Avatar sx={{ bgcolor: exp.logoColor, width: 56, height: 56, fontSize: '1.2rem', fontWeight: 'bold', boxShadow: `0 4px 12px ${exp.logoColor}40` }}>
                          {exp.company.split(' ')[0][0]}
                          {exp.company.split(' ')[1] ? exp.company.split(' ')[1][0] : ''}
                        </Avatar>
                      )}
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="h6" component="h3" sx={{ color: exp.logoColor, fontWeight: 600, mb: 0.5 }}>{exp.year}</Typography>
                        <Typography variant="h5" component="h3" sx={{ fontWeight: 700, color: 'primary.main', mb: 1 }}>{exp.title}</Typography>
                        <Stack direction="row" flexWrap="wrap" useFlexGap alignItems="center" spacing={2} sx={{ mb: 2, rowGap: 1 }}>
                          {exp.companyLink ? (
                            <Typography component="a" href={exp.companyLink} target="_blank" rel="noopener noreferrer" color="text.secondary" sx={{ fontWeight: 500, fontSize: '1.1rem', textDecoration: 'none', borderBottom: '1px solid transparent', transition: 'all 0.3s ease-in-out', '&:hover': { color: 'primary.main', borderBottomColor: 'primary.main' } }}>
                              {exp.company}
                            </Typography>
                          ) : (
                            <Typography color="text.secondary" sx={{ fontWeight: 500, fontSize: '1.1rem' }}>{exp.company}</Typography>
                          )}
                          <Chip label={exp.companyType} size="small" sx={{ bgcolor: `${exp.logoColor}15`, color: exp.logoColor, fontWeight: 600, border: `1px solid ${exp.logoColor}30` }} />
                        </Stack>
                      </Box>
                    </Box>

                    <Box sx={{ mb: 3 }}>
                      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                        <GroupIcon sx={{ color: 'primary.main', mr: 1, fontSize: 20 }} />
                        <Typography variant="body2" sx={{ fontWeight: 600, color: 'primary.main', mr: 2 }}>
                          {isZh ? `团队：${exp.teamSize} 人` : `Team: ${exp.teamSize} people`}
                        </Typography>
                        {exp.workNature.map((nature, i) => (
                          <Chip key={i} label={nature} size="small" icon={<StarIcon sx={{ fontSize: 16 }} />} sx={{ bgcolor: 'primary.light', color: 'primary.contrastText', fontWeight: 500, '& .MuiChip-icon': { color: 'primary.contrastText' } }} />
                        ))}
                      </Stack>
                    </Box>

                    <Typography paragraph sx={{ lineHeight: 1.7, color: 'text.primary', fontSize: '1rem', mb: 3 }}>
                      {exp.description}
                    </Typography>

                    <Box>
                      <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 700, color: exp.logoColor, display: 'flex', alignItems: 'center', gap: 1 }}>
                        <ArchitectureIcon sx={{ fontSize: 20 }} />
                        {isZh ? '关键成果：' : 'Key Achievements:'}
                      </Typography>
                      <Box component="ul" sx={{ pl: 0, ml: 2, m: 0, listStylePosition: 'outside', '& li': { mb: 1.5, lineHeight: 1.6, textAlign: 'left', display: 'list-item', listStyleType: 'disc', '&::marker': { color: exp.logoColor, fontSize: '0.8em' } } }}>
                        {exp.achievements.map((achievement, i) => (
                          <Typography component="li" key={i} sx={{ color: 'text.primary', fontSize: '0.95rem' }}>{achievement}</Typography>
                        ))}
                      </Box>
                    </Box>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            );
          })}
        </Timeline>
      </Container>
    </Box>
  );
};

export default Experience;
