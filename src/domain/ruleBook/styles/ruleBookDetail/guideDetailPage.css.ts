import { style } from '@vanilla-extract/css';

export const page = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: 40,
  paddingTop: 104,
  paddingBottom: 120,
});

export const hero = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 18,
  padding: '48px 52px',
  borderRadius: 28,
  background: 'linear-gradient(135deg, rgba(14, 20, 36, 0.95), rgba(45, 65, 152, 0.85))',
  border: '1px solid rgba(96, 118, 210, 0.48)',
  boxShadow: '0 32px 52px rgba(6, 10, 24, 0.58)',
  color: 'rgba(223, 229, 255, 0.94)',
  selectors: {
    ':root.light &': {
      background: 'linear-gradient(135deg, #f2f4ff 0%, #eef2ff 58%, #e8ebff 100%)',
      border: '1px solid rgba(140, 152, 255, 0.4)',
      boxShadow: '0 24px 44px rgba(105, 122, 245, 0.16)',
      color: '#1C1C1C',
    },
  },
});

export const heroHeading = style({
  margin: 0,
  fontSize: 40,
  fontWeight: 700,
  letterSpacing: '-0.015em',
});

export const heroTagline = style({
  margin: 0,
  fontSize: 18,
  lineHeight: 1.7,
  maxWidth: 720,
  color: 'rgba(224, 232, 255, 0.82)',
  selectors: {
    ':root.light &': {
      color: 'rgba(28, 28, 28, 0.72)',
    },
  },
});

export const heroMeta = style({
  display: 'flex',
  gap: 16,
  flexWrap: 'wrap',
  fontSize: 14,
  color: 'rgba(203, 214, 255, 0.75)',
  selectors: {
    ':root.light &': {
      color: 'rgba(72, 84, 142, 0.75)',
    },
  },
});

export const contentLayout = style({
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)',
  gap: 28,
  '@media': {
    'screen and (max-width: 1024px)': {
      gridTemplateColumns: '1fr',
    },
  },
});

export const overview = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  padding: '32px 36px',
  borderRadius: 24,
  background: 'rgba(12, 17, 32, 0.85)',
  border: '1px solid rgba(86, 104, 176, 0.48)',
  boxShadow: '0 24px 36px rgba(8, 12, 28, 0.45)',
  selectors: {
    ':root.light &': {
      background: '#ffffff',
      border: '1px solid rgba(0, 0, 0, 0.08)',
      boxShadow: '0 18px 40px rgba(26, 38, 90, 0.14)',
    },
  },
});

export const overviewTitle = style({
  margin: 0,
  fontSize: 22,
  fontWeight: 600,
  color: '#dde3ff',
  selectors: {
    ':root.light &': {
      color: '#1C1C1C',
    },
  },
});

export const description = style({
  margin: 0,
  fontSize: 16,
  lineHeight: 1.7,
  color: 'rgba(224, 232, 255, 0.85)',
  selectors: {
    ':root.light &': {
      color: 'rgba(35, 35, 35, 0.8)',
    },
  },
});

export const keyPointList = style({
  margin: 0,
  paddingLeft: 20,
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  fontSize: 15,
  color: 'rgba(224, 232, 255, 0.85)',
  selectors: {
    ':root.light &': {
      color: 'rgba(40, 44, 76, 0.78)',
    },
  },
});

export const sidebarPanel = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
});

export const quickFactsImageCard = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 20,
  padding: '28px 32px',
  background: 'rgba(12, 17, 34, 0.9)',
  border: '1px solid rgba(84, 106, 184, 0.48)',
  boxShadow: '0 20px 32px rgba(6, 10, 24, 0.48)',
  overflow: 'hidden',
  selectors: {
    ':root.light &': {
      background: '#f7f8ff',
      border: '1px solid rgba(102, 118, 212, 0.28)',
      boxShadow: '0 18px 32px rgba(82, 102, 206, 0.12)',
    },
  },
});

export const quickFactsImage = style({
  width: '100%',
  height: '100%',
  objectFit: 'contain',
});

export const quickFacts = style({
  borderRadius: 20,
  padding: '28px 32px',
  background: 'rgba(12, 17, 34, 0.9)',
  border: '1px solid rgba(84, 106, 184, 0.48)',
  boxShadow: '0 20px 32px rgba(6, 10, 24, 0.48)',
  selectors: {
    ':root.light &': {
      background: '#f7f8ff',
      border: '1px solid rgba(102, 118, 212, 0.28)',
      boxShadow: '0 18px 32px rgba(82, 102, 206, 0.12)',
    },
  },
});

export const quickFactsTitle = style({
  margin: 0,
  marginBottom: 16,
  fontSize: 18,
  fontWeight: 600,
  color: '#e4eaff',
  selectors: {
    ':root.light &': {
      color: '#1C1C1C',
    },
  },
});

export const quickFactItem = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  paddingBlock: 10,
  borderBottom: '1px solid rgba(118, 136, 210, 0.24)',
  selectors: {
    '&:last-child': { borderBottom: 'none', paddingBottom: 0 },
    ':root.light &:last-child': { borderBottom: 'none', paddingBottom: 0 },
    ':root.light &': {
      borderBottom: '1px solid rgba(112, 126, 220, 0.22)',
    },
  },
});

export const quickFactLabel = style({
  fontSize: 13,
  fontWeight: 600,
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
  color: 'rgba(180, 196, 255, 0.7)',
  selectors: {
    ':root.light &': {
      color: 'rgba(84, 94, 154, 0.75)',
    },
  },
});

export const quickFactValue = style({
  fontSize: 15,
  color: 'rgba(224, 232, 255, 0.9)',
  selectors: {
    ':root.light &': {
      color: 'rgba(36, 40, 68, 0.85)',
    },
  },
});

export const section = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
});

export const sectionHeading = style({
  margin: 0,
  fontSize: 20,
  fontWeight: 600,
  color: '#dde3ff',
  selectors: {
    ':root.light &': {
      color: '#1C1C1C',
    },
  },
});

export const sectionParagraph = style({
  margin: 0,
  fontSize: 15,
  lineHeight: 1.7,
  color: 'rgba(224, 232, 255, 0.78)',
  selectors: {
    ':root.light &': {
      color: 'rgba(40, 44, 74, 0.78)',
    },
  },
});

export const backButton = style({
  alignSelf: 'flex-start',
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  padding: '10px 16px',
  borderRadius: 999,
  border: '1px solid rgba(108, 132, 230, 0.5)',
  background: 'rgba(16, 24, 44, 0.65)',
  color: 'rgba(212, 220, 255, 0.9)',
  fontSize: 14,
  fontWeight: 500,
  cursor: 'pointer',
  transition: 'background 0.2s ease, transform 0.2s ease',
  selectors: {
    '&:hover': {
      background: 'rgba(35, 48, 108, 0.72)',
      transform: 'translateY(-1px)',
    },
    ':root.light &': {
      border: '1px solid rgba(116, 132, 220, 0.36)',
      background: '#ffffff',
      color: 'rgba(46, 56, 102, 0.88)',
    },
    ':root.light &:hover': {
      background: '#f4f6ff',
    },
  },
});

export const emptyState = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  padding: '48px',
  borderRadius: 24,
  background: 'rgba(12, 17, 34, 0.88)',
  border: '1px solid rgba(96, 116, 198, 0.4)',
  color: 'rgba(220, 228, 255, 0.9)',
  selectors: {
    ':root.light &': {
      background: '#ffffff',
      border: '1px solid rgba(0, 0, 0, 0.06)',
      boxShadow: '0 18px 36px rgba(32, 46, 108, 0.12)',
      color: 'rgba(36, 40, 68, 0.85)',
    },
  },
});

export const emptyTitle = style({
  margin: 0,
  fontSize: 24,
  fontWeight: 600,
});

export const emptyMessage = style({
  margin: 0,
  fontSize: 16,
  lineHeight: 1.6,
  color: 'rgba(204, 214, 255, 0.8)',
  selectors: {
    ':root.light &': {
      color: 'rgba(50, 58, 104, 0.7)',
    },
  },
});
