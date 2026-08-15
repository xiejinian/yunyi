import React from 'react';
import { Container, Typography, CardContent, Box, Chip, Grid, Button, Avatar, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import BusinessIcon from '@mui/icons-material/Business';
import CodeIcon from '@mui/icons-material/Code';
import PersonIcon from '@mui/icons-material/Person';
import StarIcon from '@mui/icons-material/Star';
import LaunchIcon from '@mui/icons-material/Launch';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SecurityIcon from '@mui/icons-material/Security';
import SettingsIcon from '@mui/icons-material/Settings';
import { useLanguage } from '../i18n/LanguageContext';

const Projects = () => {
  const { language } = useLanguage();
  const isZh = language === 'zh';

  const projects = isZh
    ? [
        { name: '阿里巴巴电商中台', company: 'Alibaba Group Taobao', period: '2007-2015', logoColor: '#ff6a00', icon: TrendingUpIcon, category: '电商平台', description: '阿里巴巴业务中台的联合创始人与核心架构参与者之一。该平台支撑中国最大规模的电商生态，在双 11 等极端峰值场景中承载海量交易与数亿用户访问。', role: '联合创始人兼核心架构负责人，带领淘宝业务团队设计并实现关键平台基础设施。', technologies: ['Java Platform', 'Distributed Systems', 'Microservices', 'High Availability Architecture'], impact: '沉淀了阿里集团跨业务复用的平台化能力，为高速业务增长与大规模电商创新提供底座。', keyFeatures: ['订单处理平台 (buy.taobao.com)', '商品详情系统 (item.taobao.com)', '买家交易平台 (buyertrade.taobao.com)', '购物车系统 (cart.taobao.com)', '搜索平台集成 (s.taobao.com)', '物流平台连接 (cainiao.com)'], links: [{ name: '淘宝主站', url: 'https://www.taobao.com' }, { name: '订单系统', url: 'https://buy.taobao.com' }] },
        { name: '蘑菇街时尚电商平台', company: 'Mogu Street (NYSE: MOGU)', period: '2015-2018', logoColor: '#e91e63', icon: ShoppingCartIcon, category: '时尚电商', description: '负责中国头部时尚电商平台的核心平台研发与组织管理，服务数百万年轻用户，保障多触点体验的一致性与稳定性。', role: '技术总监，负责电商中台日常运转，并带领 110 人工程团队。', technologies: ['Java Platform', 'E-commerce Architecture', 'Fashion Recommendation Engine', 'Mobile Platform'], impact: '支撑平台持续增长与体验升级，提升时尚电商场景下的发现、交易与履约效率。', keyFeatures: ['时尚商品发现 (shop.mogu.com)', '订单管理系统 (order.mogu.com)', '购物车体验 (cart.mogu.com)', '购买流程优化 (buy.mogu.com)', '时尚推荐算法', '社交化购物功能'], links: [{ name: '蘑菇街平台', url: 'https://www.mogu.com' }] },
        { name: '钉钉国际化平台', company: 'Alibaba Cloud DingTalk Division', period: '2018-2021', logoColor: '#1890ff', icon: PhoneAndroidIcon, category: '企业协同', description: '带领钉钉国际版平台与运营中台建设，成功推动海外日活从 0 增长到数百万，为全球企业数字化协作提供基础能力。', role: '资深工程师 / Team Lead，带领 20 人团队负责国际化产品研发。', technologies: ['Java Platform', 'International Localization', 'Real-time Communication', 'Enterprise Integration'], impact: '帮助全球企业采用数字化办公方案，尤其在疫情时期支持远程办公与企业复工。', keyFeatures: ['国际版平台 (dingtalk.com)', 'IDaaS 企业身份平台', '运营中台', '多语言支持系统', '全球企业集成', '疫情复工解决方案'], links: [{ name: '钉钉国际版', url: 'https://www.dingtalk.com/wow/dingtalk/act/en-download' }] },
        { name: '云凤蝶低代码平台', company: 'Ant Group', period: '2021-2023', logoColor: '#1677ff', icon: SecurityIcon, category: '低代码平台', description: '负责蚂蚁集团官方低代码 / 无代码平台基础服务建设，使业务团队能够以更低门槛、更高效率构建企业应用。', role: '资深工程师 / Team Lead，管理 7 人基础服务团队。', technologies: ['Java Platform', 'Low-code Framework', 'Visual Development', 'Enterprise Integration'], impact: '通过平台化与自动化方式降低应用构建门槛，提升集团内业务创新速度。', keyFeatures: ['可视化应用搭建器', '拖拽式界面设计器', '企业系统集成', '自动化部署流水线', '业务流程自动化', '多租户架构'], links: [] },
        { name: '华为 OSS 产品', company: 'Huawei Technologies', period: '2003-2007', logoColor: '#ff0000', icon: SettingsIcon, category: '通信系统', description: '作为核心工程成员参与电信运营支撑系统研发与交付，并推动敏捷项目管理实践落地。', role: '项目经理 / 架构师 / 工程师，聚焦通信基础设施与系统研发。', technologies: ['Java Platform', 'Telecommunications Systems', 'OSS Architecture', 'Agile Methodology'], impact: '支撑华为通信基础设施解决方案建设，同时引入更现代的软件工程与项目管理方法。', keyFeatures: ['电信 OSS 系统', '运营支撑基础设施', '敏捷开发流程', '系统集成方案', '性能监控工具', '企业服务管理'], links: [] },
      ]
    : [
        { name: 'Alibaba E-commerce Middle Platform', company: 'Alibaba Group Taobao', period: '2007-2015', logoColor: '#ff6a00', icon: TrendingUpIcon, category: 'E-commerce Platform', description: "Co-founder and architect of Alibaba's Business Middle Platform, the foundation that powers one of the world's largest digital commerce ecosystems during massive peaks such as Double 11.", role: 'Co-founder and lead architecture contributor for core platform infrastructure.', technologies: ['Java Platform', 'Distributed Systems', 'Microservices', 'High Availability Architecture'], impact: 'Established reusable platform capabilities across Alibaba Group, enabling rapid business growth and large-scale innovation.', keyFeatures: ['Order Processing Platform (buy.taobao.com)', 'Product Detail System (item.taobao.com)', 'Buyer Transaction Platform (buyertrade.taobao.com)', 'Shopping Cart System (cart.taobao.com)', 'Search Platform Integration (s.taobao.com)', 'Logistics Platform Connection (cainiao.com)'], links: [{ name: 'Taobao Main Platform', url: 'https://www.taobao.com' }, { name: 'Order System', url: 'https://buy.taobao.com' }] },
        { name: 'Mogu Street Fashion E-commerce Platform', company: 'Mogu Street (NYSE: MOGU)', period: '2015-2018', logoColor: '#e91e63', icon: ShoppingCartIcon, category: 'Fashion E-commerce', description: 'Led core platform engineering and organizational execution for one of China\'s leading fashion e-commerce platforms, serving millions of users across multiple touchpoints.', role: 'Staff Director managing middle-platform operations and a team of 110 engineers.', technologies: ['Java Platform', 'E-commerce Architecture', 'Fashion Recommendation Engine', 'Mobile Platform'], impact: 'Supported sustained platform growth and experience improvements across discovery, transaction, and fulfillment flows.', keyFeatures: ['Fashion Product Discovery (shop.mogu.com)', 'Order Management System (order.mogu.com)', 'Shopping Cart Experience (cart.mogu.com)', 'Purchase Flow Optimization (buy.mogu.com)', 'Fashion Recommendation Algorithm', 'Social Shopping Features'], links: [{ name: 'Mogu Street Platform', url: 'https://www.mogu.com' }] },
        { name: 'DingTalk International Platform', company: 'Alibaba Cloud DingTalk Division', period: '2018-2021', logoColor: '#1890ff', icon: PhoneAndroidIcon, category: 'Enterprise Communication', description: 'Led DingTalk international platform development and operations middle-platform delivery, helping overseas daily active users grow from zero to millions.', role: 'Staff Engineer / Team Lead leading a 20-engineer international product R&D team.', technologies: ['Java Platform', 'International Localization', 'Real-time Communication', 'Enterprise Integration'], impact: 'Enabled global enterprises to adopt digital workplace solutions, especially during the COVID-19 shift to remote work.', keyFeatures: ['International Version Platform (dingtalk.com)', 'IDaaS Enterprise Identity Platform', 'Operations Middle Platform', 'Multi-language Support System', 'Global Enterprise Integration', 'COVID-19 Work Recovery Solutions'], links: [{ name: 'DingTalk International', url: 'https://www.dingtalk.com/wow/dingtalk/act/en-download' }] },
        { name: 'Yunfengdie Low-code Platform', company: 'Ant Group', period: '2021-2023', logoColor: '#1677ff', icon: SecurityIcon, category: 'Low-code Platform', description: 'Led base-service development for Ant Group\'s official low-code / no-code platform, enabling business teams to build enterprise applications more efficiently.', role: 'Staff Engineer / Team Lead managing a 7-person base service team.', technologies: ['Java Platform', 'Low-code Framework', 'Visual Development', 'Enterprise Integration'], impact: 'Lowered the barrier to application delivery and accelerated internal innovation through platformization and automation.', keyFeatures: ['Visual Application Builder', 'Drag-and-drop Interface Designer', 'Enterprise System Integration', 'Automated Deployment Pipeline', 'Business Process Automation', 'Multi-tenant Architecture'], links: [] },
        { name: 'Huawei OSS Products', company: 'Huawei Technologies', period: '2003-2007', logoColor: '#ff0000', icon: SettingsIcon, category: 'Telecommunications', description: 'Participated as a core engineer in telecom OSS product R&D and delivery while helping introduce agile project management practices.', role: 'Project Manager / Architect / Engineer focused on telecommunications infrastructure and system delivery.', technologies: ['Java Platform', 'Telecommunications Systems', 'OSS Architecture', 'Agile Methodology'], impact: 'Contributed to Huawei telecom infrastructure solutions while bringing modern engineering and project-management practices into delivery.', keyFeatures: ['Telecommunications OSS Systems', 'Operation Support Infrastructure', 'Agile Development Processes', 'System Integration Solutions', 'Performance Monitoring Tools', 'Enterprise Service Management'], links: [] },
      ];

  return (
    <Box component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} sx={{ minHeight: '100vh', pt: { xs: 10, sm: 11, md: 12 }, pb: { xs: 6, sm: 8, md: 12 }, background: '#0e1412' }}>
      <Container>
        <Typography variant="h3" component="h2" gutterBottom sx={{ mb: 6, color: 'primary.main', fontWeight: 700, textAlign: 'center' }}>{isZh ? '代表项目' : 'Notable Projects'}</Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Grid item xs={12} key={index}>
                <Paper component={motion.div} whileHover={{ scale: 1.01, y: -5, boxShadow: `0 25px 50px -12px ${project.logoColor}25` }} transition={{ duration: 0.3 }} sx={{ p: 0, background: '#141c18', backdropFilter: 'blur(20px)', borderRadius: 2, border: `2px solid ${project.logoColor}20`, overflow: 'hidden', position: 'relative', '&::before': { content: '""', position: 'absolute', top: 0, left: 0, right: 0, height: 6, background: `linear-gradient(90deg, ${project.logoColor} 0%, ${project.logoColor}80 100%)` } }}>
                  <CardContent sx={{ p: { xs: 3, sm: 4, md: 5 }, position: 'relative', zIndex: 2 }}>
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: { xs: 'flex-start', sm: 'flex-start' }, gap: { xs: 2, sm: 3 }, mb: 4 }}>
                      <Avatar sx={{ bgcolor: project.logoColor, width: { xs: 64, sm: 80 }, height: { xs: 64, sm: 80 }, boxShadow: `0 8px 25px ${project.logoColor}40` }}><IconComponent sx={{ fontSize: { xs: 32, sm: 40 }, color: 'white' }} /></Avatar>
                      <Box sx={{ flex: 1, minWidth: 0 }}>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: 1, mb: 2 }}>
                          <Typography variant="h4" sx={{ color: project.logoColor, fontWeight: 700, lineHeight: 1.2 }}>{project.name}</Typography>
                          <Chip label={project.period} sx={{ bgcolor: `${project.logoColor}15`, color: project.logoColor, fontWeight: 600, border: `1px solid ${project.logoColor}30`, fontSize: '0.875rem' }} />
                        </Box>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 2, mb: 2 }}>
                          <Typography variant="h6" sx={{ color: 'text.primary', fontWeight: 600 }}>{project.company}</Typography>
                          <Chip label={project.category} size="small" sx={{ bgcolor: 'primary.light', color: 'primary.contrastText', fontWeight: 500 }} />
                        </Box>
                        <Typography variant="body1" sx={{ lineHeight: 1.7, color: 'text.primary', fontSize: { xs: '1rem', sm: '1.1rem' } }}>{project.description}</Typography>
                      </Box>
                    </Box>
                    <Grid container spacing={4}>
                      <Grid item xs={12} md={6}>
                        <Box sx={{ p: 3, borderRadius: 1, background: `linear-gradient(135deg, ${project.logoColor}08 0%, ${project.logoColor}04 100%)`, border: `1px solid ${project.logoColor}15`, mb: 3 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}><PersonIcon sx={{ color: project.logoColor, mr: 1, fontSize: 24 }} /><Typography variant="h6" sx={{ fontWeight: 600, color: project.logoColor }}>{isZh ? '角色与职责' : 'Role & Responsibility'}</Typography></Box>
                          <Typography variant="body1" sx={{ lineHeight: 1.6, color: 'text.primary' }}>{project.role}</Typography>
                        </Box>
                        <Box sx={{ p: 3, borderRadius: 1, background: '#182420', border: '1px solid rgba(201, 168, 76, 0.15)' }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}><CodeIcon sx={{ color: 'primary.main', mr: 1, fontSize: 24 }} /><Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main' }}>{isZh ? '技术栈' : 'Technologies'}</Typography></Box>
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                            {project.technologies.map((tech, techIndex) => (
                              <Chip key={techIndex} label={tech} size="small" sx={{ bgcolor: 'primary.light', color: 'primary.contrastText', fontWeight: 500, '&:hover': { bgcolor: 'primary.main' } }} />
                            ))}
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box sx={{ p: 3, borderRadius: 1, background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.08) 0%, rgba(16, 185, 129, 0.04) 100%)', border: '1px solid rgba(34, 197, 94, 0.15)', mb: 3 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}><StarIcon sx={{ color: '#16a34a', mr: 1, fontSize: 24 }} /><Typography variant="h6" sx={{ fontWeight: 600, color: '#16a34a' }}>{isZh ? '关键功能' : 'Key Features'}</Typography></Box>
                          <Box component="ul" sx={{ pl: 0, ml: 2, m: 0, listStylePosition: 'outside', '& li': { mb: 1, lineHeight: 1.5, textAlign: 'left', display: 'list-item', listStyleType: 'disc', color: 'text.primary', '&::marker': { color: '#16a34a' } } }}>
                            {project.keyFeatures.map((feature, featureIndex) => (
                              <Typography component="li" key={featureIndex} sx={{ fontSize: '0.95rem' }}>{feature}</Typography>
                            ))}
                          </Box>
                        </Box>
                        <Box sx={{ p: 3, borderRadius: 1, background: `linear-gradient(135deg, ${project.logoColor}08 0%, ${project.logoColor}04 100%)`, border: `1px solid ${project.logoColor}15` }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}><BusinessIcon sx={{ color: project.logoColor, mr: 1, fontSize: 24 }} /><Typography variant="h6" sx={{ fontWeight: 600, color: project.logoColor }}>{isZh ? '影响与价值' : 'Impact'}</Typography></Box>
                          <Typography variant="body1" sx={{ lineHeight: 1.6, color: 'text.primary', mb: 2 }}>{project.impact}</Typography>
                          {project.links.length > 0 && <Box sx={{ mt: 2 }}>{project.links.map((link, linkIndex) => (<Button key={linkIndex} variant="outlined" size="small" href={link.url} target="_blank" rel="noopener noreferrer" endIcon={<LaunchIcon />} sx={{ mr: 1, mb: 1, borderColor: project.logoColor, color: project.logoColor, '&:hover': { borderColor: project.logoColor, backgroundColor: `${project.logoColor}10` } }}>{link.name}</Button>))}</Box>}
                        </Box>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
