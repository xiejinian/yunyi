import React from 'react';
import { Box } from '@mui/material';

interface FormattedTextProps {
  /** Raw copy that may contain a small, known subset of markdown syntax
   * (**bold**, "- " bullet lists, "> " blockquotes, ``` fenced code blocks).
   * Renders real HTML instead of leaking the markdown characters into the page. */
  text: string;
  /** Accent color used for blockquote borders and list markers. */
  accentColor?: string;
}

type Block =
  | { kind: 'paragraph'; lines: string[] }
  | { kind: 'list'; items: string[] }
  | { kind: 'quote'; lines: string[] }
  | { kind: 'code'; code: string };

const parseBlocks = (text: string): Block[] => {
  const lines = text.replace(/\r\n/g, '\n').split('\n');
  const blocks: Block[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (trimmed === '') {
      i++;
      continue;
    }

    if (trimmed.startsWith('```')) {
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // skip closing fence
      blocks.push({ kind: 'code', code: codeLines.join('\n') });
      continue;
    }

    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      const items: string[] = [];
      while (i < lines.length && (lines[i].trim().startsWith('- ') || lines[i].trim().startsWith('* '))) {
        items.push(lines[i].trim().slice(2));
        i++;
      }
      blocks.push({ kind: 'list', items });
      continue;
    }

    if (trimmed.startsWith('> ')) {
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith('> ')) {
        quoteLines.push(lines[i].trim().slice(2));
        i++;
      }
      blocks.push({ kind: 'quote', lines: quoteLines });
      continue;
    }

    const paraLines: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() !== '' &&
      !lines[i].trim().startsWith('```') &&
      !lines[i].trim().startsWith('- ') &&
      !lines[i].trim().startsWith('* ') &&
      !lines[i].trim().startsWith('> ')
    ) {
      paraLines.push(lines[i]);
      i++;
    }
    blocks.push({ kind: 'paragraph', lines: paraLines });
  }

  return blocks;
};

/** Splits a line on **bold** markers and renders the bold segments as <strong>. */
const renderInline = (line: string, keyPrefix: string): React.ReactNode[] => {
  const parts = line.split(/(\*\*[^*]+\*\*)/g).filter((p) => p !== '');
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
      return (
        <Box component="strong" key={`${keyPrefix}-b-${i}`} sx={{ fontWeight: 700, color: 'inherit' }}>
          {part.slice(2, -2)}
        </Box>
      );
    }
    return <React.Fragment key={`${keyPrefix}-t-${i}`}>{part}</React.Fragment>;
  });
};

const renderLines = (lines: string[], keyPrefix: string): React.ReactNode[] => {
  const nodes: React.ReactNode[] = [];
  lines.forEach((line, li) => {
    nodes.push(...renderInline(line, `${keyPrefix}-${li}`));
    if (li < lines.length - 1) nodes.push(<br key={`${keyPrefix}-br-${li}`} />);
  });
  return nodes;
};

const FormattedText: React.FC<FormattedTextProps> = ({ text, accentColor = '#b85c38' }) => {
  const blocks = parseBlocks(text);

  return (
    <>
      {blocks.map((block, idx) => {
        const isLast = idx === blocks.length - 1;
        const mb = isLast ? 0 : 2.5;

        if (block.kind === 'code') {
          return (
            <Box
              key={idx}
              component="pre"
              sx={{
                m: 0,
                mb,
                p: 2,
                borderRadius: 1.5,
                overflowX: 'auto',
                fontFamily: '"JetBrains Mono", "Courier Prime", "Courier New", monospace',
                fontSize: '0.85rem',
                lineHeight: 1.6,
                color: '#a8b0a4',
                backgroundColor: 'rgba(0, 0, 0, 0.25)',
                border: '1px solid #2a3830',
              }}
            >
              {block.code}
            </Box>
          );
        }

        if (block.kind === 'list') {
          return (
            <Box
              key={idx}
              component="ul"
              sx={{
                m: 0,
                mb,
                pl: 3,
                '& li': { mb: 0.75, lineHeight: 1.8 },
                '& li::marker': { color: accentColor },
              }}
            >
              {block.items.map((item, li) => (
                <Box component="li" key={li}>
                  {renderInline(item, `${idx}-${li}`)}
                </Box>
              ))}
            </Box>
          );
        }

        if (block.kind === 'quote') {
          return (
            <Box
              key={idx}
              component="blockquote"
              sx={{
                m: 0,
                mb,
                pl: 2.5,
                py: 0.5,
                borderLeft: `3px solid ${accentColor}`,
                fontStyle: 'italic',
                opacity: 0.9,
              }}
            >
              {renderLines(block.lines, `${idx}`)}
            </Box>
          );
        }

        return (
          <Box component="p" key={idx} sx={{ m: 0, mb }}>
            {renderLines(block.lines, `${idx}`)}
          </Box>
        );
      })}
    </>
  );
};

export default FormattedText;
