import React from 'react';
import { Container, Typography, Box, Grid, Paper, Card, CardContent, Button, Chip, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessIcon from '@mui/icons-material/Business';
import { useLanguage } from '../i18n/LanguageContext';

const Contact = () => {
  const { language } = useLanguage();
  const isZh = language === 'zh';

  const contactInfo = isZh
    ? [
        { icon: EmailIcon, title: '邮箱', content: 'yymhxie@gmail.com', link: 'mailto:yymhxie@gmail.com', description: '欢迎联系业务合作、顾问咨询或技术交流' },
        { icon: LocationOnIcon, title: '所在地', content: '中国浙江杭州', link: 'https://maps.google.com/?q=Hangzhou,Zhejiang,China', description: '常驻中国创新与互联网产业活跃区域' },
        { icon: BusinessIcon, title: '当前职位', content: 'Feifan Tech CTO', link: 'https://feifan-tech-website.pages.dev/', description: '负责技术战略、研发团队与 AI 产品方向' },
      ]
    : [
        { icon: EmailIcon, title: 'Email', content: 'yymhxie@gmail.com', link: 'mailto:yymhxie@gmail.com', description: 'Feel free to reach out for advisory, consulting, or collaboration opportunities' },
        { icon: LocationOnIcon, title: 'Location', content: 'Hangzhou, Zhejiang, China', link: 'https://maps.google.com/?q=Hangzhou,Zhejiang,China', description: "Based in one of China's most active technology and innovation hubs" },
        { icon: BusinessIcon, title: 'Current Position', content: 'CTO at Feifan Tech', link: 'https://feifan-tech-website.pages.dev/', description: 'Leading technology strategy, engineering delivery, and AI product direction' },
      ];

  const services = isZh
    ? [
        { title: '技术与 AI 咨询', description: '面向企业软件、LLM 应用、AI 工程化与平台升级提供咨询支持', areas: ['系统架构', 'LLM 落地', 'AI 产品策略'] },
        { title: '工程管理与组织支持', description: '帮助团队建立敏捷交付、研发管理与跨部门协同机制', areas: ['敏捷方法', '团队领导', '流程优化'] },
        { title: '电商与平台化方案', description: '围绕电商平台、中台能力与可扩展架构提供专项建议', areas: ['电商平台', '中台架构', '扩展性方案'] },
      ]
    : [
        { title: 'Technical & AI Consulting', description: 'Advisory support for enterprise software, LLM applications, AI engineering, and platform modernization', areas: ['System Architecture', 'LLM Delivery', 'AI Product Strategy'] },
        { title: 'Engineering Management Support', description: 'Help teams improve agile execution, engineering management, and cross-functional delivery', areas: ['Agile Methodology', 'Team Leadership', 'Process Optimization'] },
        { title: 'E-commerce & Platform Solutions', description: 'Specialized guidance for e-commerce systems, middle-platform thinking, and scalable architecture', areas: ['E-commerce Platform', 'Middle Platform', 'Scalability Solutions'] },
      ];

  const openTo = isZh
    ? ['技术顾问', '咨询 / Advisory', '工程经理', '技术经理', 'CTO / 技术负责人']
    : ['Technical Advisor', 'Consulting / Advisory', 'Engineering Manager', 'Technical Manager', 'CTO / Tech Leadership'];

  return (
    <Box component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} sx={{ minHeight: '100vh', pt: { xs: 10, sm: 11, md: 12 }, pb: { xs: 6, sm: 8, md: 12 }, background: '#0e1412' }}>
      <Container>
        <Typography variant="h3" component="h2" gutterBottom sx={{ mb: 6, color: 'primary.main' }}>{isZh ? '联系我' : 'Get In Touch'}</Typography>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card component={motion.div} whileHover={{ scale: 1.05 }} sx={{ height: '100%', textAlign: 'center', cursor: info.link ? 'pointer' : 'default' }} onClick={() => info.link && window.open(info.link, '_blank')}>
                  <CardContent sx={{ p: 3 }}>
                    <IconComponent color="primary" sx={{ fontSize: 40, mb: 2 }} />
                    <Typography variant="h6" gutterBottom color="primary.main">{info.title}</Typography>
                    <Typography variant="body1" sx={{ fontWeight: 'medium', mb: 1 }}>{info.content}</Typography>
                    <Typography variant="body2" color="text.secondary">{info.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>

        <Paper elevation={3} sx={{ p: 4, mb: 6, background: '#141c18', border: '1px solid #2a3830', borderRadius: 3 }}>
          <Typography variant="h4" gutterBottom sx={{ mb: 4, color: 'primary.main', textAlign: 'center' }}>{isZh ? '专业服务方向' : 'Professional Services'}</Typography>
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box component={motion.div} whileHover={{ y: -4 }} sx={{ p: 3, borderRadius: 2, background: '#141c18', border: '1px solid #2a3830', height: '100%', transition: 'all 0.2s ease-in-out', '&:hover': { background: '#1e2a24', borderColor: 'rgba(184, 92, 56, 0.35)', boxShadow: '0 8px 24px -4px rgba(184, 92, 56, 0.15)' } }}>
                  <Typography variant="h6" gutterBottom color="primary.main" sx={{ fontWeight: 600 }}>{service.title}</Typography>
                  <Typography variant="body1" paragraph sx={{ lineHeight: 1.7 }}>{service.description}</Typography>
                  <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 2, fontWeight: 500 }}>{isZh ? '重点方向：' : 'Key Areas:'}</Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {service.areas.map((area, i) => (
                      <Typography key={i} variant="body2" sx={{ px: 2, py: 0.5, background: 'rgba(184, 92, 56, 0.12)', color: '#d4795a', borderRadius: 2, fontSize: '0.75rem', fontWeight: 500, border: '1px solid rgba(184, 92, 56, 0.25)' }}>{area}</Typography>
                    ))}
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>

        <Paper elevation={3} sx={{ p: 4, mb: 6, background: '#141c18', border: '1px solid #2a3830', borderRadius: 3 }}>
          <Typography variant="h5" gutterBottom sx={{ mb: 3, color: '#c9a84c', textAlign: 'center', fontWeight: 700 }}>{isZh ? '当前开放机会' : 'Currently Open To'}</Typography>
          <Typography variant="body1" sx={{ textAlign: 'center', color: 'text.secondary', mb: 3, lineHeight: 1.7 }}>
            {isZh
              ? '欢迎联系技术顾问、咨询合作，以及工程 / 技术管理岗位机会，也可交流 AI 产品、平台升级与组织建设相关议题。'
              : 'Open to Technical Advisor, consulting / advisory, and engineering or technical management roles, as well as conversations around AI products, platform evolution, and organizational execution.'}
          </Typography>
          <Stack direction="row" spacing={1.25} useFlexGap flexWrap="wrap" sx={{ justifyContent: 'center' }}>
            {openTo.map((item) => (
              <Chip key={item} label={item} sx={{ bgcolor: 'rgba(201,168,76,0.08)', color: '#c9a84c', border: '1px solid rgba(201,168,76,0.2)', fontWeight: 600 }} />
            ))}
          </Stack>
        </Paper>

        <Paper elevation={3} sx={{ p: { xs: 3, sm: 4, md: 6 }, background: '#182420', borderRadius: 3, textAlign: 'center', border: '1px solid rgba(184, 92, 56, 0.3)', position: 'relative', overflow: 'hidden', '&::before': { content: '""', position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'linear-gradient(90deg, #b85c38 0%, #d4795a 100%)' } }}>
          <Typography variant="h4" gutterBottom sx={{ color: '#e8e0d0' }}>{isZh ? '一起合作' : "Let's Work Together"}</Typography>
          <Typography variant="h6" paragraph sx={{ mb: 4, color: '#9a9080' }}>{isZh ? '欢迎讨论你的下一个项目、AI 转型计划，或技术团队建设需求。' : 'Ready to discuss your next project, AI initiative, or collaboration opportunity?'}</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
            <Button variant="contained" size="large" href="mailto:yymhxie@gmail.com" sx={{ fontWeight: 600, py: 1.75, px: 4 }} startIcon={<EmailIcon />}>{isZh ? '发送邮件' : 'Send Email'}</Button>
          </Box>
        </Paper>

        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Typography variant="body1" color="text.secondary" paragraph>{isZh ? '目前为企业提供软件架构、AI 应用落地、项目管理与技术组织相关咨询服务。' : 'Currently providing consulting services in software architecture, AI application delivery, project management, and engineering leadership.'}</Typography>
          <Typography variant="body2" color="text.secondary">{isZh ? '回复时间：通常 24 小时内 • 时区：GMT+8（中国标准时间）' : 'Response time: Usually within 24 hours • Time zone: GMT+8 (China Standard Time)'}</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
