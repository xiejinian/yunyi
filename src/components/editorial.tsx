import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

export const ACCENT = '#C45A38';
export const ACCENT_DARK = '#A3472C';
export const INK = '#2F2C28';
export const MUTED = '#6F675E';
export const FAINT = '#8A8278';

export const displaySerif = '"Playfair Display", "Noto Serif SC", Georgia, serif';
export const bodySerif = '"Source Serif 4", "Noto Serif SC", Georgia, serif';

export const pageWrapSx = {
  minHeight: '100vh',
  pt: { xs: 10, md: 12 },
  pb: { xs: 8, md: 14 },
  px: { xs: 2.5, sm: 4, md: 6 },
};

export const PageShell: React.FC<{ children: React.ReactNode; maxWidth?: number | string }> = ({
  children,
  maxWidth = 760,
}) => (
  <Box
    component={motion.div}
    initial={{ opacity: 0, y: 14 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.55 }}
    sx={pageWrapSx}
  >
    <Box sx={{ maxWidth, mx: 'auto', width: '100%' }}>{children}</Box>
  </Box>
);

export const PageTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Typography
    component="h1"
    sx={{
      fontFamily: displaySerif,
      fontWeight: 500,
      fontSize: { xs: '2rem', md: '2.35rem' },
      color: ACCENT,
      textAlign: 'center',
      letterSpacing: '0.04em',
      mb: 1.5,
    }}
  >
    {children}
  </Typography>
);

export const PageLead: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Typography
    sx={{
      color: MUTED,
      textAlign: 'center',
      maxWidth: 640,
      mx: 'auto',
      mb: 6,
      lineHeight: 1.75,
      fontSize: '1.05rem',
    }}
  >
    {children}
  </Typography>
);

export const SectionTitle: React.FC<{ children: React.ReactNode; sx?: object }> = ({ children, sx }) => (
  <Typography
    component="h2"
    sx={{
      fontFamily: displaySerif,
      fontSize: '1.05rem',
      fontWeight: 500,
      color: ACCENT,
      letterSpacing: '0.04em',
      mb: 1.75,
      ...sx,
    }}
  >
    {children}
  </Typography>
);

export const BodyText: React.FC<{ children: React.ReactNode; sx?: object }> = ({ children, sx }) => (
  <Typography
    sx={{
      color: INK,
      fontSize: '1.05rem',
      lineHeight: 1.9,
      mb: 2.25,
      ...sx,
    }}
  >
    {children}
  </Typography>
);

export const TextLink: React.FC<{
  href?: string;
  children: React.ReactNode;
  onClick?: () => void;
}> = ({ href, children, onClick }) => (
  <Box
    component={href ? 'a' : 'button'}
    href={href}
    onClick={onClick}
    target={href?.startsWith('http') ? '_blank' : undefined}
    rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    type={href ? undefined : 'button'}
    sx={{
      color: ACCENT,
      textDecoration: 'none',
      background: 'none',
      border: 'none',
      padding: 0,
      font: 'inherit',
      cursor: 'pointer',
      '&:hover': { color: ACCENT_DARK },
    }}
  >
    {children}
  </Box>
);

export const NumberedList: React.FC<{ items: React.ReactNode[]; color?: string }> = ({
  items,
  color = ACCENT,
}) => (
  <Box component="ol" sx={{ listStyle: 'none', m: 0, p: 0 }}>
    {items.map((item, index) => (
      <Box
        component="li"
        key={index}
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: 1,
          mb: 1.1,
          color,
          fontSize: '1.02rem',
          lineHeight: 1.7,
        }}
      >
        <Box
          component="sup"
          sx={{
            fontFamily: displaySerif,
            fontSize: '0.7rem',
            top: '-0.2em',
            minWidth: 14,
            textAlign: 'right',
            flexShrink: 0,
          }}
        >
          {index + 1}
        </Box>
        <Box component="span" sx={{ color: INK }}>
          {item}
        </Box>
      </Box>
    ))}
  </Box>
);

export const DotList: React.FC<{ items: React.ReactNode[] }> = ({ items }) => (
  <Box component="ul" sx={{ listStyle: 'none', m: 0, p: 0 }}>
    {items.map((item, index) => (
      <Box
        component="li"
        key={index}
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: 1.1,
          mb: 1,
          color: INK,
          fontSize: '1.02rem',
          lineHeight: 1.7,
        }}
      >
        <Box
          component="span"
          sx={{
            mt: '0.62em',
            width: 5,
            height: 5,
            borderRadius: '50%',
            bgcolor: ACCENT,
            flexShrink: 0,
            opacity: 0.85,
          }}
        />
        <Box component="span">{item}</Box>
      </Box>
    ))}
  </Box>
);
