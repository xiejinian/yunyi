import React from 'react';
import { Box, Typography } from '@mui/material';
import { ACCENT, INK, FAINT, displaySerif } from './editorial';

export const companies = [
  { zh: '华为', en: 'Huawei' },
  { zh: '阿里巴巴', en: 'Alibaba' },
  { zh: '淘宝', en: 'Taobao' },
  { zh: '钉钉', en: 'DingTalk' },
  { zh: '蚂蚁集团', en: 'Ant Group' },
  { zh: '支付宝', en: 'Alipay' },
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
      {isZh ? '曾任职的组织' : 'Organizations served'}
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
        { name: 'Business front office', items: ['Taobao', 'Tmall', 'Buyer / seller'] },
        { name: 'Shared business capabilities', items: ['Member', 'Product', 'Trade', 'Marketing', 'Settlement'] },
        { name: 'Core transaction and fulfillment', items: ['Cart', 'Order', 'Inventory', 'Payment', 'Logistics'] },
        { name: 'Platform and stability', items: ['Middle-platform boundary', 'Middleware', 'Data', 'High availability'] },
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
        { name: 'Collaboration products', items: ['Messaging', 'Organization and directory', 'Documents and apps'] },
        { name: 'Business platform', items: ['IDaaS', 'Operations middle platform', 'Open integration'] },
        { name: 'Global and governance', items: ['Languages', 'Multi-tenant', 'Compliance and localization'] },
      ];
