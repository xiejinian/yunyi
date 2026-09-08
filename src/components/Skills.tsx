import React from 'react';
import { Container, Typography, Box, Grid, Paper, Chip, LinearProgress, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LanguageIcon from '@mui/icons-material/Language';
import VerifiedIcon from '@mui/icons-material/Verified';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import GroupsIcon from '@mui/icons-material/Groups';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import StarIcon from '@mui/icons-material/Star';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import { useLanguage } from '../i18n/LanguageContext';

const Skills = () => {
  const { language } = useLanguage();
  const isZh = language === 'zh';

  const technicalSkills = isZh
    ? [
        { name: 'Java 平台', level: 95, category: '核心技术' },
        { name: '企业架构设计', level: 95, category: '架构' },
        { name: '大规模平台研发', level: 90, category: '平台' },
        { name: '微服务架构', level: 90, category: '架构' },
        { name: '电商平台', level: 95, category: '行业领域' },
        { name: '低代码 / 无代码平台', level: 85, category: '平台' },
        { name: '云计算', level: 85, category: '基础设施' },
        { name: '系统集成', level: 90, category: '集成' },
      ]
    : [
        { name: 'Java Platform', level: 95, category: 'Core Technology' },
        { name: 'Enterprise Architecture Design', level: 95, category: 'Architecture' },
        { name: 'Large-scale Platform Development', level: 90, category: 'Platform' },
        { name: 'Microservices Architecture', level: 90, category: 'Architecture' },
        { name: 'E-commerce Platforms', level: 95, category: 'Domain' },
        { name: 'Low-code/No-code Platforms', level: 85, category: 'Platform' },
        { name: 'Cloud Computing', level: 85, category: 'Infrastructure' },
        { name: 'System Integration', level: 90, category: 'Integration' },
      ];

  const aiSkills = isZh
    ? [
        { name: 'LLM 应用开发', level: 88, category: '应用层' },
        { name: 'Prompt Engineering / 提示词工程', level: 86, category: '工程方法' },
        { name: 'RAG（检索增强生成）', level: 84, category: '知识系统' },
        { name: 'AI Agent Frameworks', level: 82, category: 'Agent' },
        { name: 'MCP / Tool-use 集成', level: 85, category: '集成能力' },
        { name: '模型评测与落地优化', level: 80, category: '评估' },
        { name: 'Vector Databases / 向量检索', level: 78, category: '数据层' },
        { name: 'AI 产品策略', level: 87, category: '产品与业务' },
      ]
    : [
        { name: 'LLM Application Development', level: 88, category: 'Application' },
        { name: 'Prompt Engineering', level: 86, category: 'Engineering' },
        { name: 'RAG (Retrieval-Augmented Generation)', level: 84, category: 'Knowledge Systems' },
        { name: 'AI Agent Frameworks', level: 82, category: 'Agent' },
        { name: 'MCP / Tool-use Integration', level: 85, category: 'Integration' },
        { name: 'Model Evaluation & Delivery Optimization', level: 80, category: 'Evaluation' },
        { name: 'Vector Databases', level: 78, category: 'Data Layer' },
        { name: 'AI Product Strategy', level: 87, category: 'Product' },
      ];

  const managementSkills = isZh
    ? [
        { name: '敏捷项目管理', level: 95 },
        { name: '团队领导力', level: 95 },
        { name: '技术架构', level: 95 },
        { name: '产品研发', level: 90 },
        { name: '质量保障', level: 90 },
        { name: '战略规划', level: 85 },
      ]
    : [
        { name: 'Agile Project Management', level: 95 },
        { name: 'Team Leadership', level: 95 },
        { name: 'Technical Architecture', level: 95 },
        { name: 'Product Development', level: 90 },
        { name: 'Quality Assurance', level: 90 },
        { name: 'Strategic Planning', level: 85 },
      ];

  const certifications = isZh
    ? [
        { name: 'Project Management Professional (PMP)', issuer: '华为', year: '2005', type: '管理' },
        { name: '国家高级程序员认证', issuer: '中国国家认证', year: '2001', type: '技术' },
      ]
    : [
        { name: 'Project Management Professional (PMP)', issuer: 'Huawei', year: '2005', type: 'Management' },
        { name: 'National Senior Programmer Certification', issuer: 'China National Certification', year: '2001', type: 'Technical' },
      ];

  const languages = isZh
    ? [
        { name: '中文', level: '母语', proficiency: 100, description: '普通话 / 中文沟通' },
        { name: '英文', level: 'CET-6（读写良好）', proficiency: 80, description: '商务沟通、技术写作' },
        { name: '技术语言', level: 'Java / JavaScript / SQL', proficiency: 95, description: '编程语言能力' },
        { name: '业务沟通', level: '跨文化团队', proficiency: 85, description: '国际化团队协作' },
      ]
    : [
        { name: 'Chinese', level: 'Native', proficiency: 100, description: 'Mandarin (Native Speaker)' },
        { name: 'English', level: 'CET-6 (Good at Reading and Writing)', proficiency: 80, description: 'Business English, Technical Writing' },
        { name: 'Technical Languages', level: 'Java, JavaScript, SQL', proficiency: 95, description: 'Programming Languages Proficiency' },
        { name: 'Business Communication', level: 'Cross-cultural Teams', proficiency: 85, description: 'International Team Leadership' },
      ];

  const platforms = isZh
    ? ['淘宝电商平台', '蘑菇街时尚电商平台', '钉钉国际版', '蚂蚁集团低代码平台', '华为 OSS 产品', '阿里巴巴业务中台']
    : ['Taobao E-commerce Platform', 'Mogu Street Fashion Platform', 'DingTalk International', 'Ant Group Low-code Platform', 'Huawei OSS Products', 'Alibaba Middle Platform'];

  return (
    <Box component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} sx={{ minHeight: '100vh', pt: { xs: 10, sm: 11, md: 12 }, pb: { xs: 6, sm: 8, md: 12 }, background: '#F6F1E7' }}>
      <Container>
        <Typography variant="h3" component="h2" gutterBottom sx={{ mb: 7, color: '#C45A38', fontWeight: 500, textAlign: 'center', letterSpacing: '0.04em' }}>
          {isZh ? '技能与专长' : 'Skills & Expertise'}
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Paper component={motion.div} whileHover={{ scale: 1.01, y: -3, boxShadow: '0 25px 50px -12px rgba(196, 90, 56, 0.15)' }} elevation={3} sx={{ p: 4, background: '#FBF8F2', backdropFilter: 'blur(20px)', borderRadius: 2, border: '1px solid rgba(196, 90, 56, 0.1)', position: 'relative', overflow: 'hidden', '&::before': { content: '""', position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'linear-gradient(90deg, #C45A38 0%, #C45A38 100%)' } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, position: 'relative', zIndex: 2 }}>
                <Avatar sx={{ bgcolor: 'primary.main', width: 64, height: 64, mr: 3, boxShadow: '0 8px 25px rgba(196, 90, 56, 0.3)' }}><CodeIcon sx={{ fontSize: 32 }} /></Avatar>
                <Box>
                  <Typography variant="h4" sx={{ color: 'primary.main', fontWeight: 700, mb: 1 }}>{isZh ? '核心技术能力' : 'Technical Skills'}</Typography>
                  <Chip label={isZh ? '20+ 年经验' : '20+ Years Experience'} icon={<TrendingUpIcon />} sx={{ bgcolor: 'primary.light', color: 'primary.contrastText', fontWeight: 600 }} />
                </Box>
              </Box>
              <Grid container spacing={3} sx={{ position: 'relative', zIndex: 2 }}>
                {technicalSkills.map((skill, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Box component={motion.div} whileHover={{ scale: 1.02 }} sx={{ p: 2, borderRadius: 1, background: '#F6F1E7', border: '1px solid rgba(196, 90, 56, 0.1)', transition: 'all 0.3s ease-in-out', '&:hover': { background: '#F3EDE2', borderColor: 'rgba(196, 90, 56, 0.2)' } }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                        <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary' }}>{skill.name}</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}><StarIcon sx={{ color: 'primary.main', fontSize: 16 }} /><Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 600 }}>{skill.level}%</Typography></Box>
                      </Box>
                      <LinearProgress variant="determinate" value={skill.level} sx={{ height: 10, borderRadius: 5, backgroundColor: 'rgba(196, 90, 56, 0.1)', mb: 1, '& .MuiLinearProgress-bar': { borderRadius: 5, background: 'linear-gradient(90deg, #C45A38 0%, #C45A38 100%)' } }} />
                      <Chip label={skill.category} size="small" sx={{ bgcolor: 'primary.light', color: 'primary.contrastText', fontWeight: 500, fontSize: '0.75rem' }} />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper component={motion.div} whileHover={{ scale: 1.01, y: -3, boxShadow: '0 25px 50px -12px rgba(196, 90, 56, 0.15)' }} elevation={3} sx={{ p: 4, background: '#FBF8F2', backdropFilter: 'blur(20px)', borderRadius: 2, border: '1px solid rgba(196, 90, 56, 0.18)', position: 'relative', overflow: 'hidden', '&::before': { content: '""', position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'linear-gradient(90deg, #C45A38 0%, #C45A38 100%)' } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, position: 'relative', zIndex: 2 }}>
                <Avatar sx={{ bgcolor: '#C45A38', width: 64, height: 64, mr: 3, boxShadow: '0 8px 25px rgba(196, 90, 56, 0.3)' }}><SmartToyIcon sx={{ fontSize: 32 }} /></Avatar>
                <Box>
                  <Typography variant="h4" sx={{ color: '#C45A38', fontWeight: 700, mb: 1 }}>{isZh ? 'AI 能力与应用方向' : 'AI Skills & Application Focus'}</Typography>
                  <Chip label={isZh ? '当前重点方向' : 'Current Focus'} icon={<TrendingUpIcon />} sx={{ bgcolor: 'rgba(196, 90, 56, 0.1)', color: '#C45A38', fontWeight: 600, border: '1px solid rgba(212, 121, 90, 0.25)' }} />
                </Box>
              </Box>
              <Grid container spacing={3} sx={{ position: 'relative', zIndex: 2 }}>
                {aiSkills.map((skill, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Box component={motion.div} whileHover={{ scale: 1.02 }} sx={{ p: 2, borderRadius: 1, background: 'rgba(196, 90, 56, 0.05)', border: '1px solid rgba(212, 121, 90, 0.15)', transition: 'all 0.3s ease-in-out', '&:hover': { background: 'rgba(196, 90, 56, 0.1)', borderColor: 'rgba(212, 121, 90, 0.25)' } }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                        <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary' }}>{skill.name}</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}><StarIcon sx={{ color: '#C45A38', fontSize: 16 }} /><Typography variant="body2" sx={{ color: '#C45A38', fontWeight: 600 }}>{skill.level}%</Typography></Box>
                      </Box>
                      <LinearProgress variant="determinate" value={skill.level} sx={{ height: 10, borderRadius: 5, backgroundColor: 'rgba(196, 90, 56, 0.1)', mb: 1, '& .MuiLinearProgress-bar': { borderRadius: 5, background: 'linear-gradient(90deg, #C45A38 0%, #C45A38 100%)' } }} />
                      <Chip label={skill.category} size="small" sx={{ bgcolor: 'rgba(196, 90, 56, 0.12)', color: '#C45A38', fontWeight: 600, border: '1px solid rgba(212, 121, 90, 0.25)' }} />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper component={motion.div} whileHover={{ scale: 1.02, y: -2, boxShadow: '0 20px 40px rgba(74, 140, 96, 0.15)' }} elevation={3} sx={{ p: 4, background: '#FBF8F2', backdropFilter: 'blur(20px)', borderRadius: 2, border: '1px solid rgba(74, 140, 96, 0.1)', position: 'relative', overflow: 'hidden', '&::before': { content: '""', position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'linear-gradient(90deg, #5B7A62 0%, #3E5644 100%)' } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, position: 'relative', zIndex: 2 }}>
                <Avatar sx={{ bgcolor: '#5B7A62', width: 64, height: 64, mr: 3, boxShadow: '0 8px 25px rgba(74, 140, 96, 0.3)' }}><ManageAccountsIcon sx={{ fontSize: 32 }} /></Avatar>
                <Box>
                  <Typography variant="h4" sx={{ color: '#5B7A62', fontWeight: 700, mb: 1 }}>{isZh ? '管理能力' : 'Management Skills'}</Typography>
                  <Chip label={isZh ? '领导力专长' : 'Leadership Expert'} icon={<EmojiEventsIcon />} sx={{ bgcolor: 'rgba(74, 140, 96, 0.1)', color: '#5B7A62', fontWeight: 600, border: '1px solid rgba(74, 140, 96, 0.2)' }} />
                </Box>
              </Box>
              <Grid container spacing={3} sx={{ position: 'relative', zIndex: 2 }}>
                {managementSkills.map((skill, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Box component={motion.div} whileHover={{ x: 4 }} sx={{ p: 2, borderRadius: 1, background: 'rgba(74, 140, 96, 0.05)', border: '1px solid rgba(74, 140, 96, 0.1)', transition: 'all 0.3s ease-in-out', height: '100%', '&:hover': { background: 'rgba(74, 140, 96, 0.1)', borderColor: 'rgba(74, 140, 96, 0.2)' } }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                        <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary' }}>{skill.name}</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}><EmojiEventsIcon sx={{ color: '#5B7A62', fontSize: 16 }} /><Typography variant="body2" sx={{ color: '#5B7A62', fontWeight: 600 }}>{skill.level}%</Typography></Box>
                      </Box>
                      <LinearProgress variant="determinate" value={skill.level} sx={{ height: 8, borderRadius: 4, backgroundColor: 'rgba(74, 140, 96, 0.1)', '& .MuiLinearProgress-bar': { borderRadius: 4, background: 'linear-gradient(90deg, #5B7A62 0%, #3E5644 100%)' } }} />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper component={motion.div} whileHover={{ scale: 1.02, y: -2, boxShadow: '0 20px 40px rgba(160, 124, 46, 0.15)' }} elevation={3} sx={{ p: 4, background: '#FBF8F2', backdropFilter: 'blur(20px)', borderRadius: 2, border: '1px solid rgba(160, 124, 46, 0.2)', position: 'relative', overflow: 'hidden', '&::before': { content: '""', position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'linear-gradient(90deg, #A3472C 0%, #A3472C 100%)' } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, position: 'relative', zIndex: 2 }}>
                <Avatar sx={{ bgcolor: '#A3472C', width: 64, height: 64, mr: 3, boxShadow: '0 8px 25px rgba(160, 124, 46, 0.3)' }}><LanguageIcon sx={{ fontSize: 32 }} /></Avatar>
                <Box>
                  <Typography variant="h4" sx={{ color: '#A3472C', fontWeight: 700, mb: 1 }}>{isZh ? '语言与沟通' : 'Languages & Communication'}</Typography>
                  <Chip label={isZh ? '多语言职业沟通' : 'Multilingual Professional'} icon={<TrendingUpIcon />} sx={{ bgcolor: 'rgba(160, 124, 46, 0.1)', color: '#A3472C', fontWeight: 600, border: '1px solid rgba(160, 124, 46, 0.2)' }} />
                </Box>
              </Box>
              <Grid container spacing={3} sx={{ position: 'relative', zIndex: 2 }}>
                {languages.map((lang, index) => (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <Box component={motion.div} whileHover={{ scale: 1.02 }} sx={{ p: 2, borderRadius: 1, background: 'rgba(160, 124, 46, 0.05)', border: '1px solid rgba(160, 124, 46, 0.1)', transition: 'all 0.3s ease-in-out', height: '100%', '&:hover': { background: 'rgba(160, 124, 46, 0.1)', borderColor: 'rgba(160, 124, 46, 0.2)' } }}>
                      <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary', mb: 0.5 }}>{lang.name}</Typography>
                      <Typography variant="body2" sx={{ color: '#A3472C', mb: 0.5, fontWeight: 500 }}>{lang.level}</Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary', mb: 1, display: 'block', fontStyle: 'italic' }}>{lang.description}</Typography>
                      <LinearProgress variant="determinate" value={lang.proficiency} sx={{ height: 8, borderRadius: 4, backgroundColor: 'rgba(160, 124, 46, 0.1)', '& .MuiLinearProgress-bar': { borderRadius: 4, background: 'linear-gradient(90deg, #A3472C 0%, #A3472C 100%)' } }} />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper component={motion.div} whileHover={{ scale: 1.01, y: -3, boxShadow: '0 25px 50px -12px rgba(140, 62, 34, 0.15)' }} elevation={3} sx={{ p: 4, background: '#FBF8F2', backdropFilter: 'blur(20px)', borderRadius: 2, border: '1px solid rgba(140, 62, 34, 0.2)', height: '100%', position: 'relative', overflow: 'hidden', '&::before': { content: '""', position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'linear-gradient(90deg, #A3472C 0%, #6e2f19 100%)' } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, position: 'relative', zIndex: 2 }}>
                <Avatar sx={{ bgcolor: '#A3472C', width: 64, height: 64, mr: 3, boxShadow: '0 8px 25px rgba(140, 62, 34, 0.3)' }}><VerifiedIcon sx={{ fontSize: 32 }} /></Avatar>
                <Box>
                  <Typography variant="h4" sx={{ color: '#C45A38', fontWeight: 700, mb: 1 }}>{isZh ? '专业认证' : 'Certifications'}</Typography>
                  <Chip label={isZh ? '专业认证背景' : 'Professional Certified'} icon={<WorkspacePremiumIcon />} sx={{ bgcolor: 'rgba(140, 62, 34, 0.1)', color: '#C45A38', fontWeight: 600, border: '1px solid rgba(140, 62, 34, 0.2)' }} />
                </Box>
              </Box>
              <Box sx={{ position: 'relative', zIndex: 2, flex: 1 }}>
                <Grid container spacing={3}>
                  {certifications.map((cert, index) => (
                    <Grid item xs={12} md={6} key={index}>
                      <Box component={motion.div} whileHover={{ scale: 1.02, x: 4 }} sx={{ p: 3, borderRadius: 2, background: 'linear-gradient(135deg, rgba(140, 62, 34, 0.08) 0%, rgba(110, 47, 25, 0.04) 100%)', border: '1px solid rgba(140, 62, 34, 0.2)', transition: 'all 0.3s ease-in-out', position: 'relative', overflow: 'hidden', height: '100%', '&::before': { content: '""', position: 'absolute', top: 0, left: 0, bottom: 0, width: 4, background: 'linear-gradient(180deg, #A3472C 0%, #6e2f19 100%)' }, '&:hover': { background: 'linear-gradient(135deg, rgba(140, 62, 34, 0.12) 0%, rgba(110, 47, 25, 0.08) 100%)', borderColor: 'rgba(140, 62, 34, 0.3)', boxShadow: '0 8px 25px rgba(140, 62, 34, 0.15)' } }}>
                        <Box sx={{ position: 'relative', zIndex: 2, pl: 2 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}><EmojiEventsIcon sx={{ color: '#A3472C', mr: 1, fontSize: 20 }} /><Typography variant="h6" sx={{ fontWeight: 700, color: 'text.primary' }}>{cert.name}</Typography></Box>
                          <Typography variant="body2" sx={{ color: '#C45A38', mb: 2, fontWeight: 600 }}>{cert.issuer} • {cert.year}</Typography>
                          <Chip label={cert.type} size="small" sx={{ bgcolor: '#A3472C', color: 'white', fontWeight: 600, fontSize: '0.75rem' }} />
                        </Box>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper component={motion.div} whileHover={{ scale: 1.01, y: -3, boxShadow: '0 25px 50px -12px rgba(196, 90, 56, 0.15)' }} elevation={3} sx={{ p: 4, background: '#FBF8F2', backdropFilter: 'blur(20px)', borderRadius: 2, border: '1px solid rgba(196, 90, 56, 0.2)', height: '100%', position: 'relative', overflow: 'hidden', '&::before': { content: '""', position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'linear-gradient(90deg, #C45A38 0%, #C45A38 100%)' } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, position: 'relative', zIndex: 2 }}>
                <Avatar sx={{ bgcolor: '#C45A38', width: 64, height: 64, mr: 3, boxShadow: '0 8px 25px rgba(196, 90, 56, 0.3)' }}><BusinessCenterIcon sx={{ fontSize: 32 }} /></Avatar>
                <Box>
                  <Typography variant="h4" sx={{ color: '#C45A38', fontWeight: 700, mb: 1 }}>{isZh ? '平台经验' : 'Platform Experience'}</Typography>
                  <Chip label={isZh ? '核心平台经历' : 'Major Platforms'} icon={<StarIcon />} sx={{ bgcolor: 'rgba(196, 90, 56, 0.1)', color: '#C45A38', fontWeight: 600, border: '1px solid rgba(196, 90, 56, 0.2)' }} />
                </Box>
              </Box>
              <Box sx={{ flex: 1, position: 'relative', zIndex: 2 }}>
                <Grid container spacing={2}>
                  {platforms.map((platform, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <Box component={motion.div} whileHover={{ scale: 1.02, x: 4 }} sx={{ p: 2, borderRadius: 1, background: 'linear-gradient(135deg, rgba(196, 90, 56, 0.08) 0%, rgba(212, 121, 90, 0.04) 100%)', border: '1px solid rgba(196, 90, 56, 0.2)', transition: 'all 0.3s ease-in-out', cursor: 'pointer', position: 'relative', overflow: 'hidden', '&::before': { content: '""', position: 'absolute', top: 0, left: 0, bottom: 0, width: 3, background: 'linear-gradient(180deg, #C45A38 0%, #C45A38 100%)' }, '&:hover': { background: 'linear-gradient(135deg, rgba(196, 90, 56, 0.12) 0%, rgba(212, 121, 90, 0.08) 100%)', borderColor: 'rgba(196, 90, 56, 0.3)', boxShadow: '0 4px 12px rgba(196, 90, 56, 0.15)' } }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 2 }}><StarIcon sx={{ color: '#C45A38', mr: 1.5, fontSize: 18 }} /><Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary', flex: 1 }}>{platform}</Typography></Box>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper component={motion.div} elevation={0} sx={{ p: { xs: 3, sm: 4, md: 6 }, background: '#FBF8F2', color: '#2F2C28', borderRadius: 2, textAlign: 'center', position: 'relative', overflow: 'hidden', border: '1px solid #E6DCCB' }}>
              <Box sx={{ position: 'relative', zIndex: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 4 }}>
                  <Avatar sx={{ bgcolor: 'rgba(196, 90, 56, 0.08)', width: 80, height: 80, mr: 3, border: '1px solid #E6DCCB' }}><GroupsIcon sx={{ fontSize: 40, color: '#C45A38' }} /></Avatar>
                  <Box sx={{ textAlign: 'left' }}>
                    <Typography variant="h4" sx={{ fontWeight: 500, mb: 1, color: '#C45A38' }}>{isZh ? '团队领导经验' : 'Leadership Experience'}</Typography>
                    <Chip label={isZh ? '团队管理专家' : 'Team Management Expert'} sx={{ bgcolor: 'transparent', color: '#C45A38', fontWeight: 500, border: '1px solid #E6DCCB' }} />
                  </Box>
                </Box>
                <Typography variant="h4" sx={{ mb: 3, fontWeight: 500, color: '#2F2C28' }}>{isZh ? '带领过 7 到 110 人规模的团队' : 'Led teams ranging from 7 to 110 people'}</Typography>
                <Typography variant="h6" sx={{ color: '#6F675E', maxWidth: '900px', mx: 'auto', lineHeight: 1.6, fontWeight: 400 }}>
                  {isZh
                    ? '具备从创业团队到大型企业组织的跨场景团队管理经验，长期负责敏捷项目管理、技术架构治理与跨团队协同交付。'
                    : 'Experienced in managing diverse teams across startup and large-enterprise environments, with a strong record in agile delivery, technical architecture leadership, and cross-functional execution.'}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
