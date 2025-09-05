import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, Paper, Box, Chip, Stack, Button, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PsychologyIcon from '@mui/icons-material/Psychology';
import BusinessIcon from '@mui/icons-material/Business';
import CodeIcon from '@mui/icons-material/Code';
import FlightIcon from '@mui/icons-material/Flight';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupIcon from '@mui/icons-material/Group';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import SchoolIcon from '@mui/icons-material/School';

const StoryDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const storyMilestones = [
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

  const story = storyMilestones.find(s => s.id === id);

  if (!story) {
    return (
      <Container>
        <Typography variant="h4">Story not found</Typography>
        <Button onClick={() => navigate('/mystory')}>Back to My Story</Button>
      </Container>
    );
  }

  const IconComponent = story.icon;

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      sx={{
        minHeight: '100vh',
        py: 12,
        background: 'linear-gradient(135deg, #fef7ff 0%, #f3e8ff 100%)',
      }}
    >
      <Container maxWidth="md">
        {/* Back Button */}
        <Box sx={{ mb: 4 }}>
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate('/mystory')}
            sx={{
              color: 'primary.main',
              '&:hover': {
                backgroundColor: 'rgba(37, 99, 235, 0.1)',
              }
            }}
          >
            Back to My Story
          </Button>
        </Box>

        {/* Story Header */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              mb: 2,
              background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 700,
            }}
          >
            {story.year}
          </Typography>
          <Typography variant="h4" sx={{ mb: 2, color: 'primary.main', fontWeight: 600 }}>
            {story.title}
          </Typography>
          <Chip
            label={story.category}
            size="medium"
            sx={{
              bgcolor: `${story.color}15`,
              color: story.color,
              fontWeight: 600,
              fontSize: '1rem',
              px: 2,
              py: 1
            }}
          />
        </Box>

        {/* Story Icon */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
          <Box
            sx={{
              width: 80,
              height: 80,
              borderRadius: '50%',
              backgroundColor: story.color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: `0 0 30px ${story.color}40`,
            }}
          >
            <IconComponent sx={{ color: 'white', fontSize: 40 }} />
          </Box>
        </Box>

        {/* Main Story Content */}
        <Paper
          component={motion.div}
          whileHover={{ y: -5, boxShadow: `0 20px 40px -5px ${story.color}25` }}
          elevation={3}
          sx={{
            p: 6,
            backgroundColor: 'white',
            borderRadius: 4,
            mb: 4,
            border: `2px solid ${story.color}20`,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.8,
              color: 'text.primary',
              fontSize: '1.1rem',
              whiteSpace: 'pre-line',
              mb: 4
            }}
          >
            {story.story}
          </Typography>
        </Paper>

        {/* Lessons Learned */}
        <Paper
          elevation={2}
          sx={{
            p: 4,
            backgroundColor: 'white',
            borderRadius: 3,
            mb: 4,
            border: `1px solid ${story.color}15`,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              mb: 3,
              fontWeight: 600,
              color: story.color,
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}
          >
            <AutoStoriesIcon sx={{ fontSize: 24 }} />
            Key Lessons Learned
          </Typography>
          <Box
            component="ul"
            sx={{
              pl: 0,
              ml: 2,
              m: 0,
              listStylePosition: 'outside',
              '& li': {
                mb: 2,
                lineHeight: 1.6,
                textAlign: 'left',
                display: 'list-item',
                listStyleType: 'disc',
                '&::marker': {
                  color: story.color,
                  fontSize: '0.8em'
                }
              }
            }}
          >
            {story.lessons.map((lesson, i) => (
              <Typography
                component="li"
                key={i}
                sx={{
                  color: 'text.primary',
                  fontSize: '1rem'
                }}
              >
                {lesson}
              </Typography>
            ))}
          </Box>
        </Paper>

        {/* Challenges */}
        <Paper
          elevation={2}
          sx={{
            p: 4,
            backgroundColor: 'white',
            borderRadius: 3,
            mb: 4,
            border: `1px solid ${story.color}15`,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              mb: 3,
              fontWeight: 600,
              color: story.color,
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}
          >
            <LightbulbIcon sx={{ fontSize: 24 }} />
            Challenges Faced
          </Typography>
          <Box
            component="ul"
            sx={{
              pl: 0,
              ml: 2,
              m: 0,
              listStylePosition: 'outside',
              '& li': {
                mb: 2,
                lineHeight: 1.6,
                textAlign: 'left',
                display: 'list-item',
                listStyleType: 'disc',
                '&::marker': {
                  color: story.color,
                  fontSize: '0.8em'
                }
              }
            }}
          >
            {story.challenges.map((challenge, i) => (
              <Typography
                component="li"
                key={i}
                sx={{
                  color: 'text.primary',
                  fontSize: '1rem'
                }}
              >
                {challenge}
              </Typography>
            ))}
          </Box>
        </Paper>

        {/* Impact */}
        <Paper
          elevation={2}
          sx={{
            p: 4,
            backgroundColor: 'white',
            borderRadius: 3,
            mb: 6,
            border: `1px solid ${story.color}15`,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              mb: 3,
              fontWeight: 600,
              color: story.color,
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}
          >
            <TrendingUpIcon sx={{ fontSize: 24 }} />
            Long-term Impact
          </Typography>
          <Typography
            sx={{
              lineHeight: 1.7,
              color: 'text.primary',
              fontSize: '1rem'
            }}
          >
            {story.impact}
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default StoryDetail;
