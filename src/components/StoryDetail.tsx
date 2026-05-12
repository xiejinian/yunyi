import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Button, Container, Divider, Paper, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const sectionTitleSx = { mt: 5, mb: 2, fontWeight: 700 } as const;

const StoryDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  if (id !== 'biography-2001-2023') {
    return (
      <Container sx={{ py: 10 }}>
        <Button startIcon={<ArrowBackIcon />} onClick={() => navigate('/story')}>返回故事</Button>
        <Typography variant="h5" sx={{ mt: 3 }}>未找到对应故事</Typography>
      </Container>
    );
  }

  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="md">
        <Button startIcon={<ArrowBackIcon />} onClick={() => navigate('/story')} sx={{ mb: 3 }}>
          返回故事
        </Button>
        <Paper sx={{ p: { xs: 3, md: 6 }, borderRadius: 3 }}>
          <Typography variant="overline" sx={{ letterSpacing: 2 }}>2001 — 2023</Typography>
          <Typography variant="h3" sx={{ fontWeight: 800, mb: 1 }}>代码人生 · 云翼回忆录</Typography>
          <Typography variant="subtitle1" sx={{ color: 'text.secondary', mb: 4 }}>
            一个程序员的二十年流浪记 · VB → VC → J2EE → Spring → 中台 → AI
          </Typography>
          <Divider sx={{ mb: 4 }} />

          <Typography variant="h5" sx={{ mb: 2 }}>写在二十年之后</Typography>
          <Typography paragraph>我第一次意识到自己是个“老程序员”，是在某次代码评审会上，一个刚入行的小伙子问我：“谢哥，VB 是什么语言？”</Typography>
          <Typography paragraph>那一刻，我突然明白：那些用拨号猫上网、用 EJB 写 CRUD、在 Weblogic 上死活部署不上的岁月，对 2010 年以后出生的程序员来说，已经是古代史了。</Typography>
          <Typography paragraph>这不是成功学演讲稿，只是一个程序员诚实的流水账：关于用青春换来的 Bug、出差途中吃过的盒饭、架构评审上吵过的架，以及每隔几年就要重学“世界上最好的技术栈”的荒诞轮回。</Typography>

          <Typography variant="h5" sx={sectionTitleSx}>职业时间线</Typography>
          <Typography paragraph><strong>2001 · 初出茅庐，VB 闯深圳</strong><br />加入教育软件公司，从播放器、Office 插件到 HTML 播放器，第一次在屏幕上看见自己写的功能“活过来”。</Typography>
          <Typography paragraph><strong>2002 · 第一次叛逃，拥抱 Java</strong><br />进入 J2EE/EJB 世界，经历配置地狱与性能问题，学会第一条架构铁律：技术不是越复杂越好，而是越合适越好。</Typography>
          <Typography paragraph><strong>2003–2005 · 华为：大项目与高压节奏</strong><br />参与 BOSS/eMip 等运营商系统建设，在企业级项目中推广 Spring，开始系统性理解架构、性能与稳定性。</Typography>
          <Typography paragraph><strong>2006 · 逃离流水线，再战在线教育</strong><br />回到 Spring/Hibernate/MySQL 体系，第一次真正从“面向系统”转向“面向用户体验”。</Typography>
          <Typography paragraph><strong>2007–2015 · 淘宝八年：从小兵到老兵</strong><br />从物流、CMS/TMS 到交易与中台，从分布式事务到大促保障，从单点技术到跨团队协同，技术视野被强制拉宽。</Typography>
          <Typography paragraph><strong>2015–2018 · 蘑菇街：中台深水区</strong><br />主导电商基础平台，见证“中台”从方法论走向行业化实践，也亲历战略与市场变化对技术边界的重塑。</Typography>
          <Typography paragraph><strong>2018–2023 · 再回阿里/蚂蚁：企业软件与低代码</strong><br />在钉钉做业务平台，在支付宝做低代码基础服务，经历企业数字化复杂场景与组织协同挑战。</Typography>
          <Typography paragraph><strong>2023 至今 · 开始新的生活</strong><br />转向创业与顾问角色，聚焦 AI（LLM、RAG、Agent）在真实业务场景里的可落地价值。</Typography>

          <Typography variant="h5" sx={sectionTitleSx}>一些被时间验证的认识</Typography>
          <Typography paragraph>• 好的框架不是让你少写代码，而是让你写的代码更值得存在。</Typography>
          <Typography paragraph>• 技术是业务的放大器：它能放大正确方向，也会放大错误方向。</Typography>
          <Typography paragraph>• 中台不是目的，组织敏捷性才是目的；中台只是手段。</Typography>
          <Typography paragraph>• 技术领导力不是“代码能力 + 资历”，而是方向判断、目标拆解与协作组织能力。</Typography>
          <Typography paragraph>• AI 不是替代工程师，而是重写工程协作的接口与效率边界。</Typography>

          <Typography variant="h5" sx={sectionTitleSx}>后记</Typography>
          <Typography paragraph>如果代码可以注释，我希望给自己的人生加一行：注释：这段逻辑写得很乱，但它跑通了。</Typography>
          <Typography paragraph>从 VB 到大语言模型，从单机软件到分布式中台，这个循环我还在跑：learn(); build(); fail(); reflect(); repeat();</Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default StoryDetail;
