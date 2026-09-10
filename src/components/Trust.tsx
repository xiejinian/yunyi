import React from 'react';
import { Box, Typography } from '@mui/material';
import { ACCENT, INK, MUTED, FAINT, displaySerif } from './editorial';

export const companies = [
  { zh: '华为', en: 'Huawei' },
  { zh: '阿里巴巴', en: 'Alibaba' },
  { zh: '淘宝', en: 'Taobao' },
  { zh: '钉钉', en: 'DingTalk' },
  { zh: '蚂蚁集团', en: 'Ant Group' },
  { zh: '支付宝', en: 'Alipay' },
];

export const getTestimonials = (isZh: boolean) =>
  isZh
    ? [
        {
          quote:
            '记年在淘宝最关键的几年里，做的不是再堆一个功能，而是把交易和商品从烟囱里抽成能共用的能力。大促能扛住，业务能长，靠的是这种判断，不是口号。',
          name: '范禹（吴泽明）',
          title: '阿里巴巴集团 CTO · 淘宝电商早期主管',
        },
        {
          quote:
            '和他共事，能感觉到他把平台当成组织问题来解。哪些能力该沉下去、哪些该留给业务，他分得很清楚。中台能成，是因为有人愿意为边界负责。',
          name: '小邪（蒋江伟）',
          title: '阿里巴巴合伙人 · 淘宝电商时期同事',
        },
        {
          quote:
            '后期淘宝已经不是从零搭系统，而是在规模里治理复杂度和团队。记年能把架构演进和质量体系按住，带大团队也不散。这种人到任何电商组织里都稀缺。',
          name: '伯雷（陈国成）',
          title: '快手电商负责人 · 淘宝电商后期主管',
        },
      ]
    : [
        {
          quote:
            'In Taobao’s hardest years, Jinian was not piling on another feature. He pulled trading and product out of silos into capabilities the business could share. Peak events held, and the business could grow, because of that judgment—not slogans.',
          name: 'Fan Yu (Wu Zeming)',
          title: 'CTO, Alibaba Group · early Taobao engineering lead',
        },
        {
          quote:
            'Working with him, you felt he treated the platform as an organizational problem. He was clear about what should sink into shared capability and what should stay with the business. A middle platform works when someone will own the boundary.',
          name: 'Xiao Xie (Jiang Jiangwei)',
          title: 'Alibaba Partner · Taobao-era colleague',
        },
        {
          quote:
            'Later Taobao was no longer about building from zero. It was governing complexity and teams at scale. Jinian could hold architecture evolution and quality, and a large team still delivered. That combination is scarce in any commerce organization.',
          name: 'Bolei (Chen Guocheng)',
          title: 'Head of E-commerce, Kuaishou · later Taobao engineering lead',
        },
      ];

export const TrustLogos: React.FC<{ isZh: boolean }> = ({ isZh }) => (
  <Box>
    <Typography
      sx={{
        fontFamily: displaySerif,
        fontSize: '0.92rem',
        fontWeight: 500,
        color: ACCENT,
        letterSpacing: '0.06em',
        mb: 2.5,
        textAlign: { xs: 'left', md: 'center' },
      }}
    >
      {isZh ? '曾服务的组织' : 'Organizations'}
    </Typography>
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(6, 1fr)' },
        gap: { xs: 2.5, md: 2 },
        alignItems: 'end',
      }}
    >
      {companies.map((company) => (
        <Box key={company.en} sx={{ textAlign: { xs: 'left', md: 'center' } }}>
          <Typography
            sx={{
              fontFamily: displaySerif,
              fontSize: { xs: '1.05rem', md: '1.12rem' },
              color: INK,
              letterSpacing: '0.04em',
              lineHeight: 1.3,
            }}
          >
            {isZh ? company.zh : company.en}
          </Typography>
          <Typography sx={{ color: FAINT, fontSize: '0.72rem', mt: 0.4, letterSpacing: '0.08em' }}>
            {isZh ? company.en : company.zh}
          </Typography>
        </Box>
      ))}
    </Box>
  </Box>
);

export const TrustQuotes: React.FC<{ isZh: boolean }> = ({ isZh }) => {
  const items = getTestimonials(isZh);
  return (
    <Box>
      <Typography
        sx={{
          fontFamily: displaySerif,
          fontSize: '0.92rem',
          fontWeight: 500,
          color: ACCENT,
          letterSpacing: '0.06em',
          mb: 1.25,
        }}
      >
        {isZh ? '共事印象' : 'From colleagues'}
      </Typography>
      <Typography sx={{ color: FAINT, fontSize: '0.88rem', lineHeight: 1.7, mb: 3.5, maxWidth: 640 }}>
        {isZh
          ? '根据淘宝共事经历整理的推荐语，用他们当时的角色和口吻写成，不是公开采访原文。'
          : 'Written in the voice of people Jinian worked with at Taobao, based on those years. Not published interview quotes.'}
      </Typography>
      <Box sx={{ display: 'grid', gap: 4.5 }}>
        {items.map((item) => (
          <Box key={item.name} component="figure" sx={{ m: 0 }}>
            <Typography
              component="blockquote"
              sx={{
                fontFamily: displaySerif,
                fontStyle: 'italic',
                fontSize: { xs: '1.08rem', md: '1.18rem' },
                lineHeight: 1.7,
                color: INK,
                m: 0,
                mb: 1.5,
              }}
            >
              “{item.quote}”
            </Typography>
            <Typography component="figcaption" sx={{ color: MUTED, fontSize: '0.92rem', lineHeight: 1.6 }}>
              {item.name}
              <Box component="span" sx={{ display: 'block', color: FAINT, fontSize: '0.82rem', mt: 0.25 }}>
                {item.title}
              </Box>
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

type ArchLayer = { name: string; items: string[] };

export const LayerDiagram: React.FC<{
  caption: string;
  layers: ArchLayer[];
}> = ({ caption, layers }) => (
  <Box
    component="figure"
    sx={{
      m: 0,
      mb: 3,
      p: { xs: 2, md: 2.5 },
      border: '1px solid #E6DCCB',
      background: '#FBF8F2',
    }}
    aria-label={caption}
  >
    <Box sx={{ display: 'grid', gap: 1.25 }}>
      {layers.map((layer, index) => (
        <Box key={layer.name}>
          <Box
            sx={{
              border: '1px solid #E6DCCB',
              px: 1.75,
              py: 1.4,
              background: index === 0 ? 'rgba(196, 90, 56, 0.06)' : '#F6F1E7',
            }}
          >
            <Typography sx={{ color: ACCENT, fontSize: '0.78rem', letterSpacing: '0.04em', mb: 0.6 }}>
              {String(index + 1).padStart(2, '0')} · {layer.name}
            </Typography>
            <Typography sx={{ color: INK, fontSize: '0.95rem', lineHeight: 1.65 }}>{layer.items.join('  ·  ')}</Typography>
          </Box>
          {index < layers.length - 1 && (
            <Typography sx={{ color: ACCENT, textAlign: 'center', fontSize: '0.85rem', lineHeight: 1, my: 0.15 }} aria-hidden>
              ↓
            </Typography>
          )}
        </Box>
      ))}
    </Box>
    <Typography component="figcaption" sx={{ color: FAINT, fontSize: '0.78rem', mt: 1.5, lineHeight: 1.6 }}>
      {caption}
    </Typography>
  </Box>
);

export const alibabaCommerceLayers = (isZh: boolean): ArchLayer[] =>
  isZh
    ? [
        { name: '业务前台', items: ['淘宝', '天猫', '买家 / 卖家'] },
        { name: '共享业务能力', items: ['会员', '商品', '交易', '营销', '结算'] },
        { name: '核心交易履约', items: ['购物车', '订单', '库存', '支付', '物流'] },
        { name: '平台与稳定性', items: ['中台边界', '中间件', '数据', '高可用'] },
      ]
    : [
        { name: 'Business front', items: ['Taobao', 'Tmall', 'Buyer / seller'] },
        { name: 'Shared business capabilities', items: ['Member', 'Product', 'Trade', 'Marketing', 'Settlement'] },
        { name: 'Core transaction & fulfillment', items: ['Cart', 'Order', 'Inventory', 'Payment', 'Logistics'] },
        { name: 'Platform & stability', items: ['Middle-platform boundary', 'Middleware', 'Data', 'High availability'] },
      ];

export const dingTalkLayers = (isZh: boolean): ArchLayer[] =>
  isZh
    ? [
        { name: '客户端', items: ['国内版', '国际版'] },
        { name: '协同产品', items: ['即时通讯', '组织与通讯录', '文档与应用'] },
        { name: '业务中台', items: ['IDaaS 身份', '运营中台', '开放集成'] },
        { name: '全球化与治理', items: ['多语言', '多租户', '合规与本地化'] },
      ]
    : [
        { name: 'Clients', items: ['Domestic', 'International'] },
        { name: 'Collaboration products', items: ['IM', 'Org & directory', 'Docs & apps'] },
        { name: 'Business platform', items: ['IDaaS', 'Operations middle platform', 'Open integration'] },
        { name: 'Global & governance', items: ['Languages', 'Multi-tenant', 'Compliance & localization'] },
      ];
