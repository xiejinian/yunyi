import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import PsychologyIcon from '@mui/icons-material/Psychology';
import BusinessIcon from '@mui/icons-material/Business';
import CodeIcon from '@mui/icons-material/Code';
import FlightIcon from '@mui/icons-material/Flight';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupIcon from '@mui/icons-material/Group';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import FormattedText from './FormattedText';
import {
  PageShell,
  PageTitle,
  SectionTitle,
  NumberedList,
  TextLink,
  ACCENT,
  INK,
  MUTED,
  displaySerif,
} from './editorial';

interface StoryMilestone {
  id: string;
  year: string;
  title: string;
  category: string;
  icon: React.ElementType;
  color: string;
  type: string;
  story: string;
  lessons: string[];
  challenges: string[];
  impact: string;
  isBiography?: boolean;
}

const StoryDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [langTab, setLangTab] = useState(0);

  const biographyChapters = [
    {
      title: '前言：写在二十年之后 · Preface: After Twenty Years',
      zh: `我第一次意识到自己是个"老程序员"，是在某次代码评审会上，一个刚入行的小伙子问我："谢哥，VB是什么语言？"

我沉默了三秒钟。

那一刻，我突然明白：那些用拨号猫上网、用EJB写CRUD、在Weblogic上死活部署不上去而抓狂的岁月，对于2010年以后出生的程序员来说，已经是古代史了。而我，亲历了从 Visual Basic 6.0 到大语言模型的全过程，跨越了五家公司、两进阿里、从深圳到杭州再到武汉，写下了无数行终将被删除、或已经在生产环境默默支撑业务的代码。

这本小册子不是技术教材，也不是成功学演讲稿。它只是一个程序员诚实的流水账——关于那些用青春换来的Bug、出差途中吃过的盒饭、架构评审上吵过的架、以及每隔几年就要重新学习"世界上最好的技术栈"的荒诞轮回。

> 如果代码可以注释，我希望给自己的人生加一行：// 这段逻辑写得很乱，但它跑通了。`,
      en: `I first realized I was an "old programmer" during a code review when a junior colleague asked me: "Brother Xie, what language is VB?"

I stayed silent for three seconds.

In that moment, I understood: the days of dialing up to the internet, writing CRUD with EJB, and going mad trying to deploy to Weblogic — these were ancient history to anyone born after 2010. Yet I had witnessed it all firsthand — from Visual Basic 6.0 to large language models, spanning five companies, two stints at Alibaba, from Shenzhen to Hangzhou to Wuhan — writing countless lines of code that would either be deleted someday or silently keep the business running in production.

This isn't a technical textbook, nor a motivational success story. It's simply an honest log from a programmer — about the bugs that cost youth, the takeout boxes consumed on business trips, the arguments at architecture reviews, and the absurd cycle of having to "learn the world's best tech stack" every few years.

> If code could have comments, I'd add one line to my life: // This logic is a mess, but it runs.`
    },
    {
      title: '2001 · 初出茅庐，VB闯深圳 · First Steps in Shenzhen',
      zh: `2001年，我从学校毕业，揣着一本《Visual Basic 程序设计》和对深圳特区的无限幻想，挤上了去南方的火车。那年中国刚刚加入WTO，互联网泡沫刚破，但深圳依然是一个相信奇迹的地方。

技术栈：Visual Basic 6 · VC++ · COM/ActiveX · Windows GDI

我加入了尊科信息，做教育软件开发。工作内容用一句话概括：**把教材塞进电脑里**。这话说起来轻巧，实现起来可是相当折腾——你得写一个自有格式的播放器，让各种多媒体内容能够自定义播放；还要做一个Office插件（FlexNotes），让老师可以在Word里直接做课件；最后还要搞一个HTML播放器。

我记得第一次把自己写的自定义播放器跑通的那个下午。屏幕上出现了一段视频，配上我手写的进度条，我盯着看了整整五分钟，觉得自己简直是微软最大的威胁。

后来我才明白，那个播放器的代码，大概是我职业生涯里写过的最"干净"的——因为那时候我还不知道什么叫技术债，什么叫"先上线再说"。无知者无畏，无畏者无债。`,
      en: `In 2001, I graduated with a copy of "Visual Basic Programming" and limitless fantasies about Shenzhen's Special Economic Zone, cramming onto a southbound train. China had just joined the WTO, the dot-com bubble had just burst, but Shenzhen still believed in miracles.

**Tech stack**: Visual Basic 6 · VC++ · COM/ActiveX · Windows GDI

I joined Zunke Tech to develop educational software. The work could be summarized in one line: **stuffing textbooks into computers**. Simple to say, but complex to implement — you had to write a custom media player for various multimedia content, build an Office plugin (FlexNotes) so teachers could create courseware directly in Word, and build an HTML player because "web-based knowledge presentation sounds very high-tech."

I remember the afternoon I first got my custom media player running. A video appeared on screen with a hand-coded progress bar, and I stared at it for a full five minutes, convinced I was Microsoft's biggest threat.

Later I realized those were probably the "cleanest" lines of code I'd ever write — because I still didn't know what technical debt was, or what "ship first, fix later" meant. Ignorance is fearlessness; fearlessness means no debt.`
    },
    {
      title: '2002 · 第一次叛逃，拥抱Java · Embracing Java',
      zh: `2002年，我做了第一次跳槽，加入了风林火山。这个公司做的事情分两头——一头是华为的光网络客户端，用VC和ACE框架做后台管理系统；另一头是深圳的社区网站，用J2EE全家桶做网上商城。

技术栈：VC++ · ACE框架 · Java EJB · PostgreSQL · JBoss · J2EE

2002年的J2EE是什么感觉？你得先理解EJB。EJB是Enterprise JavaBeans，翻译成大白话就是：用一千行代码实现一个本来五十行就能搞定的功能，然后还要配置一个XML文件，长度堪比一篇硕士论文，配置错了会报一个你完全看不懂的异常，然后你对着JBoss的控制台发呆三个小时。

那时候没有Google，Stack Overflow更是不知道几年后才会诞生。遇到问题，你只能翻《J2EE核心模式》，或者去CSDN发帖等三天。

深圳社区那个网上商城，上线的时候我们整个团队守到凌晨两点。网站打开那一刻，一片欢呼。第二天，服务器挂了——并发量超标了，JBoss撑不住。

这是我职业生涯里第一次学到的最重要的架构课：**技术选型不是越复杂越好，而是越合适越好。**

也正是在风林火山，我开始认真研究Spring——Rod Johnson的《Expert One-on-One J2EE Design and Development》刚刚出版。我把Spring从头到尾跑了一遍，豁然开朗：原来不用EJB照样能做企业级开发，而且代码写起来顺手多了。`,
      en: `In 2002 I made my first job switch, joining Fenglinhuoshan. The company did two things: Huawei optical network client management systems using VC++ and the ACE framework, and a Shenzhen community shopping site using the full J2EE stack.

**Tech stack**: VC++ · ACE framework · Java EJB · PostgreSQL · JBoss · J2EE

What was J2EE in 2002 like? First, understand EJB (Enterprise JavaBeans): implement something that takes 50 lines in 1,000 lines of code, then configure an XML file the length of a master's thesis. Make one mistake and you get an incomprehensible exception, staring at the JBoss console for three hours.

No Google then, and Stack Overflow wouldn't exist for years. You'd consult "J2EE Core Patterns" or post on CSDN and wait three days for a reply.

When our Shenzhen community shopping site launched, the whole team stayed until 2 AM. When the site came up — cheers everywhere. Next day, the server crashed: too much concurrent traffic, JBoss couldn't handle it.

That was my first important architecture lesson: **the best technology choice is not the most complex one, but the most appropriate one.**

At Fenglinhuoshan I also seriously started studying Spring — Rod Johnson's "Expert One-on-One J2EE Design and Development" had just been published. I ran through Spring from start to finish and had an epiphany: you could do enterprise development without EJB and the code was far more elegant.`
    },
    {
      title: '2003–2005 · 进了华为，感觉上了贼船 · Huawei: The Enterprise World',
      zh: `2003年，我加入华为。那一刻我觉得自己终于找到了组织——华为嘛，世界级的公司，管理精细，待遇不错，写到简历上三个字，走到哪儿都响当当。

技术栈：Java EJB · Oracle · Weblogic · Spring（推广期）· Webwork · BOSS/RMS

然而上班第一天，我就隐约感觉不对。华为的节奏不是快，是**极快**。我进来做的是BOSS系统（运营支撑系统），客户是电信运营商，系统要管账单、管用户、管套餐，一个字段错了，可能影响几百万用户的话费。

项目版图包括：**江苏通信的BOSS、和记电信的BOSS、广东移动的eMip**。

有意思的是，进了华为之后，反而是**我把Spring推广给了周围的同事**。那种感觉挺奇妙的：外面世界已经觉得是常识的东西，在一个大组织里推广，阻力比你想象的大得多。

2004年是我出差最密集的一年。南京、广州、来来回回。出差这件事在华为是有仪式感的——白天在客户现场排查问题，晚上回到酒店继续写代码，客户方的需求经常在凌晨以短信形式传过来。

出差也有出差的好处——你能真正理解"生产环境"是什么意思。每一次生产环境爆炸，都是比任何教材都生动的技术课。

2005年，我转到了广东移动的eMip项目——系统涉及移动营业厅前台、后台计费、业务开通全流程。在这里因为多个大型电信项目上的表现，我被评选进入**华为业务与软件产品线专家池**。`,
      en: `In 2003, I joined Huawei. I felt I'd finally found my tribe — Huawei, a world-class company, refined management, good compensation, and three words that command respect anywhere on a resume.

**Tech stack**: Java EJB · Oracle · Weblogic · Spring (evangelism phase) · Webwork · BOSS/RMS

Yet on my first day, something felt off. Huawei's pace wasn't fast — it was *extreme*. I worked on BOSS systems (Business and Operations Support Systems) for telecom operators: billing, user management, service packages. One wrong field could affect millions of users' phone bills.

My project scope included: **BOSS for Jiangsu Telecom, BOSS for Hutchison Telecom, eMip for Guangdong Mobile**.

Interestingly, at Huawei I ended up **evangelizing Spring to my colleagues**. The sensation was strange: something already common knowledge outside felt like a revolutionary idea inside a large organization. People said "can this really work? It hasn't been validated on large projects." My answer: "your current project is the validation — let's try."

2004 was my year of most intense travel: Nanjing, Guangzhou, back and forth. Daytime at customer sites debugging issues, evenings back at the hotel writing code, with customer requirements arriving as SMS in the middle of the night.

But business trips had their benefits — you truly understand what "production environment" means. Every production incident was a more vivid lesson than any textbook.

In 2005, I transferred to the Guangdong Mobile eMip project. Based on my performance across multiple large telecom projects, I was selected for the **Huawei Business & Software Product Line Expert Pool**.`
    },
    {
      title: '2006 · 逃离华为，再战在线教育 · Leaving Huawei',
      zh: `离开华为的那天，我没有恋恋不舍，只有一种轻松。

技术栈：Spring · Hibernate · MySQL · JBoss · Webwork

那种轻松不是对工作的不满，而是一个程序员对"流水线式开发"的本能抗拒。我更渴望的是：**从头设计一个东西，看着它从无到有地诞生。**

于是我去了瑞特技术，做南方电网的在线教育平台。这次的技术栈是当年最流行的"SSH组合"——Spring、Hibernate、MySQL，外加JBoss部署，用Webwork做MVC。

Hibernate的懒加载（Lazy Loading）让我吃了不少苦头。你以为你在查一个对象，其实你在走一个地雷阵。你随手访问一个关联属性，如果Session已经关闭，就会抛出一个LazyInitializationException——它不在你以为会出问题的地方爆炸，而是在你完全没想到的地方，比如你已经下班准备关电脑的时候。

在线教育平台的业务逻辑比电信系统简单，但对用户体验的要求更高。这是我第一次认真思考"面向用户"而不是"面向运营商"的系统设计。用户不会看你的架构图，他们只看：**课程能不能打开，视频卡不卡，证书能不能打印。**

这一年，我开始认识到技术和业务之间的张力——技术是手段，业务是目的；技术人最容易犯的错误，是把手段当成了目的。`,
      en: `The day I left Huawei, there was no reluctance — only relief.

**Tech stack**: Spring · Hibernate · MySQL · JBoss · Webwork

That relief wasn't dissatisfaction with work, but a programmer's instinctive resistance to "assembly-line development." What I craved was: **designing something from scratch and watching it come into existence.**

So I joined Ruitu Tech to build an online education platform for the Southern Power Grid. The tech stack was the year's most popular "SSH combination" — Spring, Hibernate, MySQL, JBoss, Webwork for MVC.

Hibernate's Lazy Loading tripped me up often. You think you're querying an object, but you're actually walking through a minefield. Access an associated property after the Session has closed and you get a LazyInitializationException — not where you expected trouble, but somewhere completely unexpected, like when you're about to close your laptop and head home.

The online education platform's business logic was simpler than telecom systems, but the user experience requirements were higher. This was my first serious thought about designing "for users" rather than "for operators." Users don't look at architecture diagrams. They only care: **can the course open, is the video smooth, can the certificate print.**

That year I began understanding the tension between technology and business — technology is means, business is purpose. The most common mistake technical people make is treating the means as the end.`
    },
    {
      title: '2007 · 进淘宝，开始八年江湖 · Joining Taobao',
      zh: `2007年加入阿里，是我职业生涯的真正分水岭。

技术栈：Java · HSF（高速服务框架）· TDDL · Tair缓存 · OceanBase前身 · Linux

把我招进淘宝的，是**三丰和行癫**。那时候阿里的招人还没有现在这么工业化，靠的是圈子和口碑——你的人被人信任，才有机会进来。我非常感激这个机会，也从那时候开始明白：一个人的成长，离不开愿意给他机会的伯乐。

面试的时候，我自信满满，觉得自己Spring用得溜、Hibernate配置贼熟、Oracle调优也做过，怎么着也是一员猛将。进去之后才发现：淘宝的技术体系是一个完全不同的宇宙。

首先是规模。你在任何中小公司遇到的"高并发"，跟淘宝的高并发比，就好像你在院子里放了一盆水，然后有人跟你说"大海长这样"。2007年的淘宝已经有一套自研的技术基础设施：**HSF（高速服务框架）、TDDL（分布式数据库访问层）、Tair缓存、消息中间件……**

刚入职的那段时间，我每天的状态是：听到一个词，不认识；查一查，原来是内部系统；搞明白怎么用，又冒出来一个新词。这个过程大概持续了三个月，我才算真正能独立上手做事情。

第一个项目是物流平台。那时候淘宝的物流处于相当原始的状态——买家付款、卖家发货、买家确认收货，中间的物流信息是一个黑箱。我们要做的，就是把这个黑箱变成一个可追踪、可管理、可扩展的平台。

**在淘宝，技术不是你选择的，是系统演化出来的——每一个架构决策背后，都有一段踩坑的血泪史。**`,
      en: `Joining Alibaba in 2007 was the true turning point of my career.

**Tech stack**: Java · HSF (High-Speed Service Framework) · TDDL · Tair Cache · OceanBase predecessor · Linux

I was brought into Taobao by **Sanfeng and Xingdian**. Alibaba's hiring back then wasn't as industrialized as today — it relied on networks and reputation. You had to be trusted by someone before you had a chance to get in. I'm deeply grateful for that opportunity, and from then on I understood: growth depends on having people willing to give you chances.

In the interview, I was confident — Spring, Hibernate configuration, Oracle tuning, I thought I was a top-tier candidate. Once inside, I discovered Taobao's technology was a completely different universe.

First, the scale. The "high concurrency" at any mid-sized company compared to Taobao is like a bucket of water compared to the ocean. Taobao in 2007 already had self-built infrastructure: **HSF (High-Speed Service Framework), TDDL (Distributed Database Access Layer), Tair Cache, message middleware...**

My first months: encounter a term, don't recognize it; look it up, find it's an internal system; figure out how to use it, and another new term appears. This cycle lasted about three months before I could truly work independently.

My first project was the logistics platform. Taobao's logistics then was quite primitive — buyer pays, seller ships, buyer confirms receipt — with logistics information in between being a black box. Our job: turn that black box into a trackable, manageable, extensible platform.

**At Taobao, technology isn't chosen by you — it's evolved by the system. Behind every architectural decision is a story of hard-won lessons.**`
    },
    {
      title: '2008–2015 · 从物流到交易，从小兵到老兵 · Eight Years at Alibaba',
      zh: `八年，在任何地方都是一段很长的时间。在阿里，这八年浓缩了我在外面二十年都未必能遇到的技术密度。

架构进化：SOA架构 · 分布式事务 · 消息中间件 · 中台思想 · 移动端API

在淘宝的几年里，我先后在**行癫、范禹、五福、伯雷和河神**的团队里做事。这几个人，放在今天的互联网圈子里都是响当当的名字。我也认识了一批技术上的同路人和朋友：**毕玄、多隆、雷卷、华黎、伯雷、一粟、无招、玉伯、西夷**……这简直是一份阿里技术史上的名人录。但当时我们只是在同一栋楼里上班的同事，一起吃饭、一起改Bug、一起在架构评审会上争论到面红耳赤。

**主要工作线索：**

- **物流平台与CMS/TMS**：管理"页面长什么样"和"运营内容怎么发布"的基础设施
- **评论中台、试用中心**：阿里最早期的"中台"实践——把各个业务线共用的能力抽象成统一服务层
- **交易平台**：商品系统、交易系统、收藏夹、消费者保障系统——淘宝最核心也是技术复杂度最高的系统
- **一淘网**：跨平台比价搜索引擎，聚合淘宝、天猫及外部电商平台的商品信息，也是我第一次认真思考"移动端API设计"

**分布式事务**是这个时期我研究最深的课题。两阶段提交、最终一致性、补偿机制、幂等设计……我把这些概念从论文层面打磨成了生产可用的实现，然后在每次大促之前反复测试，生怕哪个角落藏着一个定时炸弹。

大约从2013年开始，我从一个纯粹的技术执行者，转变成了团队负责人，带起了淘宝的**基础业务平台**团队。这是职业生涯里另一个重要的分水岭——之前，我对自己负责；从这里开始，我对一群人负责。

带团队最考验人的不是技术，而是判断力和耐心。技术问题有标准答案，人的问题没有。`,
      en: `Eight years is a long time anywhere. At Alibaba, those eight years compressed a technical density I might never have encountered in twenty years elsewhere.

**Architecture evolution**: SOA · Distributed transactions · Message middleware · Middle platform thinking · Mobile API design

I worked under **Xingdian, Fanyu, Wufu, Bolei, and Heshen** over those years — names that resonate throughout China's internet industry. I also met technical peers who would become lasting friends: **Bixuan, Duolong, Leijuan, Huali, Yisu, Wuzhao, Yube, Xiyi** — practically a who's who of Alibaba's technical history. At the time, we were just colleagues sharing a building: eating together, fixing bugs together, arguing furiously in architecture reviews.

**Key work threads**:
- **Logistics Platform & CMS/TMS**: infrastructure for "what pages look like" and "how operational content gets published"
- **Review Middle Platform, Trial Center**: among Alibaba's earliest "middle platform" practices — abstracting shared capabilities across business lines into unified service layers
- **Trading Platform**: product, transaction, favorites, consumer protection systems — Taobao's most core and technically complex systems
- **Yitao (one-search)**: cross-platform price comparison search engine aggregating Taobao, Tmall, and external e-commerce platforms — where I first seriously thought about "mobile API design"

**Distributed transactions** were my deepest area of study during this period: two-phase commit, eventual consistency, compensation mechanisms, idempotency design — I refined these from academic concepts to production-grade implementations, testing relentlessly before each major sale event, afraid a time bomb was lurking somewhere.

Around 2013, I transitioned from pure technical executor to team leader, managing Taobao's **Basic Business Platform** team. Another career inflection point — before, I was responsible for myself; from here, I was responsible for a group of people.

The hardest part of leading teams isn't technology — it's judgment and patience. Technical problems have standard answers; people problems don't.`
    },
    {
      title: '2015 · 蘑菇街，美丽与悲壮并存 · Mogu Street',
      zh: `2015年，我从阿里跳到了蘑菇街，担任电商基础平台负责人，直接向**顶天**汇报。

技术栈：微服务 · Dubbo · Redis集群 · Kafka · Docker（早期）· 中台架构

离开阿里的决定不是轻率的。蘑菇街不同——它在快速成长，它需要建一套从零到一的技术体系，它给了我机会从整体视角来主导一个中台。这是我第一次真正意义上从0到1主导一套完整的中台架构设计。

**成功的部分**：从技术层面说，我们的中台建设是成功的。在我主导下，蘑菇街建立起了一套完整的电商基础服务体系：商品域、交易域、用户域、内容域，每个域独立演进，通过定义清晰的服务接口协作。这套体系支撑了蘑菇街和美丽说合并后多个子公司的快速业务扩张，也为蘑菇街2018年在纽约证券交易所上市奠定了技术基础。

**失败的部分**：电商的竞争格局在2016年到2018年急剧变化——拼多多横空出世，以一种所有人都没预料到的方式重写了电商的规则。当外部环境发生根本性的变化，再好的技术中台也救不了一个在战略层面陷入困境的公司。

**我在蘑菇街学到了最重要的一课：技术是业务的放大器——它能让好的业务更好，但它无法把一个错误的方向变成正确的方向。**

关于中台，我有一肚子话要说。当初我们在阿里讨论中台思想的时候，设想的是**可分可合的小中台模式**：共享服务是一个弹性的能力层，跟着业务走，而不是业务跟着它转。但是，后来在整个行业大规模推广的，是另一种版本：**大中台模式**。中台变成了巨型权力中心，前台的任何创新都需要排期等待，整个组织的敏捷性被中台活生生卡死。

**中台不是大中台，正如敏捷不等于不写文档。被误用的方法论，不应该为错误的实践背锅。**`,
      en: `In 2015, I jumped from Alibaba to Mogu Street as E-commerce Platform Lead, reporting directly to **Dingtian**.

**Tech stack**: Microservices · Dubbo · Redis Cluster · Kafka · Docker (early) · Middle platform architecture

Leaving Alibaba wasn't impulsive. Mogu Street was different — it was growing rapidly, needed to build a technical system from scratch, and gave me the opportunity to lead a middle platform from the whole-system perspective. This was my first true 0-to-1 complete middle platform architecture design.

**The success**: From a technical standpoint, our middle platform was successful. Under my leadership, Mogu Street built a complete e-commerce infrastructure: product domain, transaction domain, user domain, content domain — each evolving independently, collaborating through clearly defined service interfaces. This system supported rapid business expansion after the Mogu-Meilishuo merger and laid the technical foundation for Mogu Street's 2018 NYSE listing.

**The failure**: The competitive landscape for e-commerce shifted dramatically from 2016 to 2018 — Pinduoduo appeared and rewrote e-commerce rules in ways nobody anticipated. When the external environment changes fundamentally, even the best technical middle platform can't save a company that's struggling strategically.

**My most important lesson from Mogu Street: technology is a business amplifier — it can make good businesses better, but it cannot turn a wrong direction into a right one.**

I have a lot to say about middle platforms. When we at Alibaba discussed the middle platform concept, we envisioned a **small, flexible middle platform model** — shared services as an elastic capability layer that follows the business rather than forcing business to follow it. But what spread industry-wide was a different version: the **Big Middle Platform model**. The middle platform became a giant power center. Any innovation in the front end required waiting in a queue, the organization's agility slowly killed by the middle platform itself.

**Middle platform ≠ Big Middle Platform, just as agile ≠ no documentation. Misused methodology should not be blamed for wrong practices.**`
    },
    {
      title: '2018 · 再回阿里：钉钉战场 · Return to Alibaba: DingTalk',
      zh: `2018年，我回到了阿里，落脚点是钉钉。

方向：企业协同 · 国际化 · 组织数字化 · 云原生 · Serverless

钉钉在2018年已经成长为一个覆盖企业沟通、审批、考勤、业务应用的综合平台，并且正在向"企业数字化操作系统"的方向全力冲刺。

我在钉钉负责的是**业务平台**团队，主要方向包括：国际化平台、企业通讯录、营销平台、服务中心。先后在**一粟、西夷和和仲**的带领下做事。

国际化平台是个硬骨头——不同国家的企业组织形态、合规要求、甚至对"组织架构"这个概念的理解都不一样，你得在一套统一的技术架构下，把这些差异优雅地屏蔽掉。

在钉钉的工作让我真正理解了"企业级产品"和"消费级产品"的区别——消费级产品，你要让用户爱上它；企业级产品，你要让管理员能管它、让员工愿意用它、让老板能看数据。三个视角，三套逻辑，经常互相打架。而且企业里还有一个消费市场没有的角色：**采购方不等于使用方**。

2020年疫情爆发，钉钉瞬间从"公司强制安装的软件"变成了全国最受关注的协同工具，用户量在短短几周内暴增。我们的系统经历了一次真正意义上的"极限压测"——不是在测试环境里模拟的，而是真实的几千万用户同时涌入。那段时间，技术团队几乎是以天为单位在扩容和优化，能撑过来，是整个团队的荣耀。

**钉钉让我明白：好的企业软件，不是功能最多的那个，而是让人在不得不用的时候，不那么想骂娘的那个。这话听起来是降维打击，做到其实很难。**`,
      en: `In 2018, I returned to Alibaba — this time to DingTalk.

**Focus areas**: Enterprise collaboration · Internationalization · Organizational digitalization · Cloud-native · Serverless

By 2018, DingTalk had evolved from a simple enterprise communication tool into a comprehensive platform covering enterprise communication, approvals, attendance, and business applications — sprinting toward becoming an "enterprise digital operating system."

I led the **Business Platform** team, covering: internationalization platform, enterprise directory, marketing platform, and service center. I worked under **Yisu, Xiyi, and Hezhong** — three very different management styles that gave me three different observation samples.

Internationalization was tough — different countries have different enterprise org structures, compliance requirements, and even different understandings of what "org chart" means. The technical challenge was elegantly shielding these differences behind a unified architecture.

DingTalk work gave me a genuine understanding of the difference between enterprise and consumer products. Consumer products: make users love them. Enterprise products: let admins manage them, make employees willing to use them, let executives see data. Three perspectives, three logics, often in conflict. Plus enterprise has a role consumer markets don't: **the buyer ≠ the user**.

When COVID-19 hit in 2020, DingTalk instantly became the nation's most-watched collaboration tool, with users surging in weeks. Our systems went through a true "extreme stress test" — not simulated in a test environment, but tens of millions of real users flooding in simultaneously. The team was expanding capacity and optimizing daily. Surviving it was the entire team's honor.

**DingTalk taught me: great enterprise software isn't the one with the most features — it's the one where people, forced to use it, at least don't feel like cursing it. That sounds like lowering the bar. Actually doing it is incredibly hard.**`
    },
    {
      title: '2019–2023 · 企业级软件研发之路 · Enterprise Software Journey',
      zh: `2019年到2023年，横跨钉钉和支付宝两段旅程，也是整个技术行业风云最为激荡的五年。

技术栈：低代码引擎 · DSL设计 · 元数据驱动 · 微前端 · LLM（2022-）

**2021：从钉钉转岗支付宝**

2021年，我从钉钉转岗到了支付宝（蚂蚁集团），带**低代码平台基础服务组**。这是一次从"企业协同"到"企业服务基础设施"的跨越。

低代码平台的基础服务组做的是整个平台的地基：数据模型、权限体系、扩展机制、多租户隔离……这些东西用户永远看不见，但如果你做错了，上层的每一个功能都会出问题。这是一种"无名英雄"式的工作——做好了没人说你好，出问题了所有人都来找你。

**低代码平台：让代码消失的野心**

大家普遍的认知是：低代码是给不会写代码的人用的。但实际上，真正懒得写代码的从来都不是业务人员，是那些接了一百个需求的开发——他们才是低代码最大的潜在用户。

低代码平台的核心挑战，是一个哲学问题：**代码的本质是什么？** 代码是逻辑的表达，是业务规则的形式化描述。低代码平台要做的，是让这种表达更简单、更直观。

**2022：一切都变了**

2022年底，ChatGPT发布了。我第一次试用的时候，沉默了很久——不是因为它有多完美，而是因为它让我意识到：我过去二十年里做的很多事情，底层逻辑要被重写了。

低代码平台的逻辑是：把专业知识编码成平台能力，让非专家也能使用。而大语言模型的逻辑是：直接把专业知识本身压缩进模型权重里，用自然语言作为接口。两者都是在解决"降低技术门槛"的问题，但方向和路径完全不同。

这是一种奇特的感觉：你花了几年时间精心构建的东西，突然面临一个可能让它变得不那么重要的技术范式。但与其说是威胁，不如说是召唤——去理解这个新的范式，去想清楚它真正改变了什么、没有改变什么。

**技术领导力，不是技术能力的简单延伸，而是另一种完全不同的能力。这个道理，我花了将近十年才真正明白。**`,
      en: `From 2019 to 2023, spanning DingTalk and Alipay — five years that were the most turbulent in the entire tech industry.

**Tech stack**: Low-code engine · DSL design · Metadata-driven · Micro-frontend · LLM (2022-)

**2021: Transferring from DingTalk to Alipay**

In 2021, I transferred from DingTalk to Alipay (Ant Group) to lead the **Low-code Platform Base Services team**. A transition from "enterprise collaboration" to "enterprise service infrastructure."

The base services team built the entire platform's foundation: data models, permission systems, extension mechanisms, multi-tenant isolation... Things users never see, but if you get them wrong, every feature above will have problems. It's "unsung hero" work — do it right and no one praises you; something goes wrong and everyone comes looking for you.

**Low-code Platform: The Ambition to Make Code Disappear**

Popular perception: low-code is for people who can't code. Reality: the people who most want to avoid writing code aren't business staff — they're the developers with a hundred requirements piled up. They're low-code's biggest potential users.

The core challenge of a low-code platform is a philosophical question: **What is the essence of code?** Code is expression of logic, formal description of business rules. Low-code platforms aim to make that expression simpler and more intuitive.

**2022: Everything Changed**

Late 2022, ChatGPT launched. When I first tried it, I stayed silent for a long time — not because it was perfect (it confidently said nonsense), but because I realized the underlying logic of much of what I'd spent twenty years building needed rewriting.

Low-code's logic: encode expert knowledge into platform capabilities, making them accessible to non-experts. LLMs' logic: compress expert knowledge directly into model weights, using natural language as the interface. Both solve "lowering technical barriers," but with completely different approaches and paths.

A strange feeling: something you'd carefully built over years suddenly faces a paradigm that might make it less important. But rather than a threat, it felt like a summons — to understand the new paradigm, to think clearly about what it really changes and what it doesn't.

**Technical leadership is not a simple extension of technical ability — it's a completely different capability. It took me nearly ten years to truly understand this.**`
    },
    {
      title: '2023 · 开始新的生活 · A New Beginning',
      zh: `2023年，我离开了阿里，开始了新的生活。

"新的生活"这四个字，说起来轻巧，背后是一个四十多岁的技术人对自己的重新定位。

从一家超大型平台公司的资深专家，变成一个创业者、一个技术合伙人、一个顾问——这不只是工作内容的变化，更是思维方式的根本转变。在阿里，你有无数资源，你的每一个技术决策都有充分的数据支撑和团队背书；在创业环境里，你有的是一张白纸、一个想法、和永远不够用的时间。

我同时参与了几个不同方向的项目：
- **飞凡科技**：负责智能客服、AI工程方向的系统建设
- **红熊AI和光荣智能**：探索不同的AI产品形态  
- **大头科技**：做AI硬件的技术架构

每一个都在用完全不同的方式回答同一个问题：**AI到底能为真实的业务场景创造什么价值？**

技术栈：大语言模型 · RAG · AI Agent · Dify/FastGPT · 企业AI落地

二十年前，我拖着一箱VB代码到深圳，相信技术可以改变世界。二十年后，我依然相信这一点，只是我对"改变世界"的理解，从宏大的叙事变成了具体的：帮助一个客服团队减少50%的重复工作量，让一个中小企业的信息系统运转得更顺畅，或者用AI帮一个工程师团队把需求评审的效率提升三倍。

**技术改变世界，是通过无数个具体的"改变一件小事"积累起来的。这是我花了二十年才真正理解的事情。**`,
      en: `In 2023, I left Alibaba and began a new life.

Those words sound light, but behind them is a forty-something technologist redefining themselves.

Transitioning from a senior expert at a massive platform company to entrepreneur, technical co-founder, and consultant — this isn't just a change in work content, it's a fundamental shift in mindset. At Alibaba, you have unlimited resources; every technical decision is backed by data and team consensus. In a startup environment, you have a blank page, an idea, and time that's never enough.

I simultaneously participated in several projects:
- **Feifan Tech**: Intelligent customer service and AI engineering systems
- **Hongxiong AI and Guangrong Intelligence**: Exploring different AI product forms
- **Daitou Tech**: AI hardware technical architecture

Each answering the same question in completely different ways: **What value can AI actually create for real business scenarios?**

**Tech stack**: Large language models · RAG · AI Agent · Dify/FastGPT · Enterprise AI deployment

Twenty years ago, I dragged a suitcase of VB code to Shenzhen, believing technology could change the world. Twenty years later, I still believe this — but my understanding of "changing the world" has shifted from grand narrative to the concrete: helping a customer service team reduce repetitive work by 50%, making a mid-sized company's information systems run more smoothly, or using AI to triple the efficiency of an engineering team's requirements review.

**Technology changes the world through countless small, concrete improvements accumulated over time. That's what took me twenty years to truly understand.**`
    },
    {
      title: '后记：二十年，一个程序员的自白 · Epilogue',
      zh: `从VB到大语言模型，从单机软件到分布式中台，从一个对EJB一知半解的新手到多家公司的技术负责人——这二十年的跨度，如果要用一行代码来总结：

\`\`\`javascript
// 2001–2023
while (true) {
  learn();
  build();
  fail();
  reflect();
  repeat();
}
\`\`\`

这个循环，我还在跑。

如果你是一个刚入行的工程师，正在被某个Bug折磨到深夜，我想告诉你：那个Bug会被解决的，而解决它的过程，比Bug本身更有价值。

如果你是一个中年技术人，正在考虑要不要在AI浪潮里再赌一把，我想告诉你：你所有的技术积累，在新的范式里都不会浪费，因为技术范式会变，但解决问题的思维方式不会。

——写于2024年，武汉 / 杭州 / 深圳的某个夜晚

**云翼**`,
      en: `From Visual Basic to large language models, from standalone software to distributed middle platforms, from a novice barely understanding EJB to technical leader at multiple companies — if these twenty years could be summarized in one line of code:

\`\`\`javascript
// 2001–2023
while (true) {
  learn();
  build();
  fail();
  reflect();
  repeat();
}
\`\`\`

This loop is still running.

If you're a newly-minted engineer, being tormented by a bug late at night: that bug will be resolved. The process of solving it is more valuable than the bug itself.

If you're a middle-aged technologist wondering whether to bet on the AI wave: everything you've accumulated technically won't be wasted in the new paradigm, because technology paradigms change but problem-solving thinking doesn't.

— Written in 2024, on a night in Wuhan / Hangzhou / Shenzhen

**Yunyi (云翼)**`
    }
  ];

  const storyMilestones = [
    {
      id: 'biography-twenty-years',
      year: '2001–2023',
      title: '代码人生 · Code Life — A Programmer\'s 20-Year Journey',
      category: '传记 · Full Biography',
      icon: MenuBookIcon,
      color: '#C45A38',
      type: 'biography',
      isBiography: true,
      story: '',
      lessons: [],
      challenges: [],
      impact: ''
    },
    {
      id: '2024-entrepreneurship-reflection',
      year: '2024',
      title: 'Entrepreneurship & Life Reflection',
      category: 'Entrepreneurship & Reflection',
      icon: PsychologyIcon,
      color: '#8b5cf6',
      type: 'reflection',
      story: `On the entrepreneurial journey, I began contemplating the meaning of life. Technology is not just a tool, but a bridge connecting people and creating value. I started documenting these insights, hoping to share this journey with more people.

      Looking back at the past 20+ years, I realize that entrepreneurship is not just about starting a business, but about finding meaning in the process. Every challenge, every failure, every small success has shaped my understanding of life and work.

      Technology entrepreneurship in today's world requires us to think deeper about the relationship between technology and humanity. We need to consider not only how to create valuable products, but also how to ensure that technology serves humanity in a positive way.

      This reflection has led me to think more about sustainable development, ethical technology, and the long-term impact of our work. I hope to share these thoughts with more people and contribute to building a better technological future.`,
      lessons: [
        'Technology entrepreneurship requires patience and perseverance',
        'Entrepreneurship is not just about making money, but creating value',
        'Personal growth is the most important investment in entrepreneurship',
        'Sustainable development should be a core consideration for technology companies',
        'Ethical technology practices are essential for long-term success'
      ],
      challenges: [
        'Balancing business goals with personal values',
        'Maintaining team motivation during uncertain times',
        'Finding the right balance between innovation and stability'
      ],
      impact: 'This period of reflection has significantly influenced my approach to leadership and business strategy, leading to more thoughtful decision-making and sustainable business practices.'
    },
    {
      id: '2023-cto-journey',
      year: '2023',
      title: 'The CTO Journey: Leadership & Innovation',
      category: 'Leadership',
      icon: BusinessIcon,
      color: '#ff6b35',
      type: 'career',
      story: `Serving as CTO of a startup has given me a deep understanding of the importance of leadership. From technical decisions to team management, from product planning to business development, every aspect is filled with challenges and opportunities.

      In this role, I learned that technical leadership goes far beyond writing code or making technical decisions. It involves understanding business needs, managing team dynamics, fostering innovation culture, and aligning technical strategy with business objectives.

      One of the biggest challenges was building a high-performing engineering team from scratch. This required not only technical expertise but also people management skills, strategic thinking, and the ability to inspire and motivate others.

      The experience taught me that successful technology leadership requires a delicate balance between technical excellence and business acumen, between innovation and pragmatism, and between individual contribution and team collaboration.`,
      lessons: [
        'Technical leaders need business acumen',
        'Team building is more important than technology selection',
        'Innovation requires a balance of courage and wisdom',
        'Leadership is about serving and empowering others',
        'Strategic thinking is crucial for technical leaders'
      ],
      challenges: [
        'Building and scaling engineering teams',
        'Balancing innovation with business constraints',
        'Managing technical debt while moving fast',
        'Communicating technical concepts to non-technical stakeholders'
      ],
      impact: 'This experience transformed my understanding of leadership and equipped me with the skills to lead larger and more complex technology organizations.'
    },
    {
      id: '2021-ant-group-lowcode',
      year: '2021-2022',
      title: 'Ant Group: The Birth of Low-Code Platform',
      category: 'Technical Innovation',
      icon: CodeIcon,
      color: '#1677ff',
      type: 'achievement',
      story: `My experience developing low-code platforms at Ant Group showed me how technology can transform business processes. We built the platform from scratch to help business staff quickly build applications, realizing the vision of technology empowering business.

      This project was particularly meaningful because it demonstrated how technology could democratize application development. By providing intuitive visual tools and pre-built components, we enabled business users to create applications without extensive coding knowledge.

      The project involved complex challenges including designing an extensible component system, building a robust visual editor, implementing real-time collaboration features, and ensuring enterprise-grade security and performance.

      The success of this platform validated the concept that low-code development could significantly accelerate digital transformation and empower more people to participate in technology creation.`,
      lessons: [
        'Low-code platforms are important tools for technology democratization',
        'Technical innovation requires deep understanding of business needs',
        'Platform thinking is more important than point solutions',
        'User experience design is crucial for developer tools',
        'Scalability and extensibility are key architectural considerations'
      ],
      challenges: [
        'Designing intuitive visual interfaces for complex functionality',
        'Ensuring platform security and governance',
        'Managing performance at scale',
        'Balancing ease of use with powerful capabilities'
      ],
      impact: 'This project influenced the direction of low-code development industry and demonstrated the potential of visual programming for enterprise applications.'
    },
    {
      id: '2018-dingtalk-internationalization',
      year: '2018-2020',
      title: 'DingTalk Internationalization: From 0 to Millions of Users',
      category: 'Globalization',
      icon: FlightIcon,
      color: '#ff6a00',
      type: 'growth',
      story: `Leading the DingTalk internationalization team from zero users to millions of daily active users was a journey full of challenges and surprises. Cultural differences, technical challenges, and market competition all became opportunities for growth.

      This experience taught me the complexities of global product development. We had to consider not only technical implementation but also cultural adaptation, regulatory compliance, and market-specific requirements.

      Key achievements included adapting the product for different languages, time zones, and cultural contexts; building infrastructure for global scale; and establishing local teams and partnerships.

      The most valuable lesson was understanding that successful internationalization requires both technical excellence and cultural intelligence. Products need to be not just translated, but truly adapted to local needs and preferences.`,
      lessons: [
        'Internationalization requires deep understanding of local culture',
        'Technology products need localization adaptation',
        'Global perspective is essential for technology professionals',
        'Building local teams is crucial for market penetration',
        'Regulatory compliance varies significantly across regions'
      ],
      challenges: [
        'Managing distributed teams across time zones',
        'Adapting products for diverse cultural contexts',
        'Navigating different regulatory environments',
        'Maintaining product consistency across markets'
      ],
      impact: 'This experience fundamentally changed my approach to product development and gave me a truly global perspective on technology and business.'
    },
    {
      id: '2015-mogujie-scaling',
      year: '2015-2017',
      title: 'Mogu Street: E-commerce Platform Scaling Challenges',
      category: 'Scaling',
      icon: TrendingUpIcon,
      color: '#e91e63',
      type: 'challenge',
      story: `At Mogu Street, I led a team of 100 engineers responsible for e-commerce middleware development and operations. Facing increasingly complex business scenarios and technical challenges, I learned how to maintain system stability and scalability under high pressure.

      This role involved managing large-scale distributed systems, optimizing performance for millions of users, and ensuring high availability during peak shopping seasons. We had to balance rapid business growth with system reliability and technical excellence.

      Key initiatives included refactoring monolithic systems into microservices, implementing advanced caching strategies, building real-time monitoring and alerting systems, and establishing robust disaster recovery procedures.

      The experience taught me that scaling is not just about handling more traffic, but about building resilient, maintainable, and evolvable systems that can adapt to changing business needs.`,
      lessons: [
        'Large-scale systems require good architecture design',
        'Team collaboration is key to successful scaling',
        'Technical debt must be addressed early',
        'Monitoring and observability are crucial for large systems',
        'Disaster recovery planning is essential'
      ],
      challenges: [
        'Refactoring legacy systems without breaking functionality',
        'Managing performance during peak traffic periods',
        'Coordinating large engineering teams',
        'Balancing innovation with system stability'
      ],
      impact: 'This experience built my expertise in large-scale system architecture and gave me the confidence to tackle complex technical challenges.'
    },
    {
      id: '2007-taobao-witness',
      year: '2007-2014',
      title: 'Taobao: Witness to the E-commerce Era',
      category: 'Historical Witness',
      icon: GroupIcon,
      color: '#ff6a00',
      type: 'foundation',
      story: `My early years at Taobao witnessed the rapid development of Chinese e-commerce. From the initial C2C platform to today's commercial empire, I participated in the development of multiple key systems and personally experienced how technology drives business transformation.

      During this period, I worked on various projects including the trading system, payment integration, search functionality, and recommendation engines. Each project presented unique technical challenges and business opportunities.

      The most significant learning was understanding how technology can create and capture market opportunities. Taobao's success demonstrated the power of technology in transforming traditional industries and creating new business models.

      This experience also taught me the importance of timing, execution, and the ability to scale rapidly in response to market opportunities.`,
      lessons: [
        'Technology development must keep pace with business needs',
        'User experience is the core of product success',
        'Continuous learning is the survival skill for technology professionals',
        'Timing and execution are crucial for success',
        'Technology can fundamentally transform industries'
      ],
      challenges: [
        'Building systems that scale to millions of users',
        'Managing rapid business growth',
        'Adapting to changing market conditions',
        'Balancing innovation with operational stability'
      ],
      impact: 'This foundational experience shaped my entire career and gave me a deep understanding of how technology drives business success.'
    },
    {
      id: '2003-huawei-agile',
      year: '2003-2006',
      title: 'Huawei & Agile Transformation Enlightenment',
      category: 'Agile Enlightenment',
      icon: LightbulbIcon,
      color: '#ff0000',
      type: 'transformation',
      story: `My experience at Huawei was my first exposure to agile development concepts. In an era dominated by waterfall models, introducing agile concepts was revolutionary. This experience shaped my understanding of software engineering.

      At Huawei, I worked on telecommunications operation support systems and was involved in one of the company's early agile transformation initiatives. This involved changing not just development processes, but also organizational culture and mindset.

      The transformation was challenging because it required overcoming resistance to change, training teams in new methodologies, and demonstrating the benefits of agile practices. However, the results were transformative in terms of team productivity and product quality.

      This experience taught me that methodology changes are not just about processes, but about fundamental changes in how people think and work together.`,
      lessons: [
        'Agile is not just a methodology, but a way of thinking',
        'Change requires gradual progress',
        'The influence of technology professionals goes beyond writing code',
        'Cultural transformation is harder than process change',
        'Demonstrating value is key to successful transformation'
      ],
      challenges: [
        'Overcoming organizational resistance to change',
        'Training large teams in new methodologies',
        'Measuring and demonstrating the benefits of agile',
        'Maintaining momentum during transformation'
      ],
      impact: 'This experience fundamentally changed my approach to software development and team management, influencing all my subsequent work.'
    },
    {
      id: '2001-career-beginning',
      year: '2001-2002',
      title: 'The Beginning of a Programmer Career',
      category: 'Beginning',
      icon: SchoolIcon,
      color: '#4caf50',
      type: 'beginning',
      story: `My first step into the workforce after graduation was software development. At that time, I was full of enthusiasm and curiosity about technology. Every bug fix and every feature implementation made me feel the charm and challenges of programming.

      Starting my career in the early 2000s, I worked on various projects including online education software and community platforms. The technology landscape was very different then - no cloud computing, no mobile apps, no social media as we know it today.

      What struck me most was the creative aspect of programming. Each problem had multiple solutions, and finding the elegant one was both challenging and rewarding. I also learned the importance of collaboration, as even individual projects benefited from code reviews and pair programming.

      This period built my foundational skills and sparked my lifelong passion for technology and software development.`,
      lessons: [
        'Programming is a craft that requires constant practice',
        'Fundamental knowledge is always the most important',
        'Maintaining curiosity is the driving force for growth',
        'Code quality matters even for small projects',
        'Learning from others is essential for growth'
      ],
      challenges: [
        'Learning new technologies and frameworks',
        'Debugging complex issues with limited tools',
        'Understanding business requirements',
        'Working with legacy code and systems'
      ],
      impact: 'This foundational period established my technical skills and work ethic, setting the stage for my entire career in technology.'
    }
  ];

  const story = storyMilestones.find(s => s.id === id) as StoryMilestone | undefined;

  if (!story) {
    return (
      <PageShell>
        <PageTitle>Story not found</PageTitle>
        <Box sx={{ textAlign: 'center' }}>
          <TextLink onClick={() => navigate('/mystory')}>Back to My Story</TextLink>
        </Box>
      </PageShell>
    );
  }

  const langLabels = ['中文', 'English', '双语 Bilingual'];

  if (story.isBiography) {
    return (
      <PageShell maxWidth={720}>
        <Box sx={{ mb: 4 }}>
          <TextLink onClick={() => navigate('/mystory')}>← Back to My Story</TextLink>
        </Box>
        <Typography sx={{ color: ACCENT, textAlign: 'center', letterSpacing: '0.04em', mb: 1.5 }}>
          2001–2023 · Full Biography
        </Typography>
        <Typography
          component="h1"
          sx={{
            fontFamily: displaySerif,
            fontWeight: 500,
            fontSize: { xs: '2rem', md: '2.5rem' },
            color: INK,
            textAlign: 'center',
            mb: 0.75,
          }}
        >
          代码人生
        </Typography>
        <Typography sx={{ color: MUTED, textAlign: 'center', mb: 2, fontSize: '1.1rem' }}>
          Code Life — A Programmer's 20-Year Journey
        </Typography>
        <Typography sx={{ color: MUTED, textAlign: 'center', maxWidth: 520, mx: 'auto', mb: 5, lineHeight: 1.8 }}>
          一个程序员关于代码、人生与技术变迁的诚实流水账
          <Box component="span" sx={{ display: 'block', fontStyle: 'italic', mt: 0.5 }}>
            An engineer's honest account spanning Huawei, Alibaba, and beyond
          </Box>
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2.5, mb: 7 }}>
          {langLabels.map((label, index) => (
            <Box
              key={label}
              component="button"
              onClick={() => setLangTab(index)}
              sx={{
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                font: 'inherit',
                color: langTab === index ? ACCENT : MUTED,
                '&:hover': { color: ACCENT },
              }}
            >
              {label}
            </Box>
          ))}
        </Box>

        {biographyChapters.map((chapter, idx) => (
          <Box key={chapter.title} sx={{ mb: 7 }}>
            <Typography sx={{ color: ACCENT, mb: 1.5, letterSpacing: '0.04em' }}>
              <Box component="sup" sx={{ fontFamily: displaySerif, fontSize: '0.75rem', mr: 0.75 }}>
                {idx + 1}
              </Box>
              {chapter.title}
            </Typography>
            {(langTab === 0 || langTab === 2) && (
              <Box sx={{ mb: langTab === 2 ? 3 : 0 }}>
                {langTab === 2 && (
                  <Typography sx={{ color: ACCENT, mb: 1.5, fontSize: '0.9rem' }}>中文</Typography>
                )}
                <Box sx={{ lineHeight: 1.95, color: INK, fontSize: '1.05rem' }}>
                  <FormattedText text={chapter.zh} accentColor={ACCENT} />
                </Box>
              </Box>
            )}
            {(langTab === 1 || langTab === 2) && (
              <Box>
                {langTab === 2 && (
                  <Typography sx={{ color: ACCENT, mb: 1.5, fontSize: '0.9rem' }}>English</Typography>
                )}
                <Box sx={{ lineHeight: 1.95, color: INK, fontSize: '1.05rem' }}>
                  <FormattedText text={chapter.en} accentColor={ACCENT} />
                </Box>
              </Box>
            )}
          </Box>
        ))}

        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <TextLink onClick={() => navigate('/mystory')}>← Back to My Story</TextLink>
        </Box>
      </PageShell>
    );
  }

  return (
    <PageShell maxWidth={720}>
      <Box sx={{ mb: 4 }}>
        <TextLink onClick={() => navigate('/mystory')}>← Back to My Story</TextLink>
      </Box>
      <Typography sx={{ color: ACCENT, textAlign: 'center', letterSpacing: '0.04em', mb: 1.5 }}>
        {story.year}
      </Typography>
      <Typography
        component="h1"
        sx={{
          fontFamily: displaySerif,
          fontWeight: 500,
          fontSize: { xs: '1.6rem', md: '2rem' },
          color: INK,
          textAlign: 'center',
          mb: 1,
          lineHeight: 1.35,
        }}
      >
        {story.title}
      </Typography>
      <Typography sx={{ color: MUTED, textAlign: 'center', mb: 5 }}>{story.category}</Typography>

      <Box sx={{ mb: 5, lineHeight: 1.95, fontSize: '1.05rem', color: INK }}>
        <FormattedText text={story.story} accentColor={ACCENT} />
      </Box>

      <SectionTitle>Key Lessons Learned</SectionTitle>
      <Box sx={{ mb: 5 }}>
        <NumberedList items={story.lessons} />
      </Box>

      <SectionTitle>Challenges Faced</SectionTitle>
      <Box sx={{ mb: 5 }}>
        <NumberedList items={story.challenges} />
      </Box>

      <SectionTitle>Long-term Impact</SectionTitle>
      <Box sx={{ mb: 6, lineHeight: 1.9, color: INK }}>
        <FormattedText text={story.impact} accentColor={ACCENT} />
      </Box>
    </PageShell>
  );
};

export default StoryDetail;
