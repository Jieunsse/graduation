import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  padding: '32px',
  borderRadius: 24,
  background: 'rgba(9, 13, 24, 0.9)',
  border: '1px solid rgba(66, 84, 138, 0.45)',
  boxShadow: '0 24px 52px rgba(6, 10, 22, 0.55)',
  selectors: {
    ':root.light &': {
      background: 'rgba(245, 248, 255, 0.96)',
      border: '1px solid rgba(132, 150, 212, 0.4)',
      boxShadow: '0 24px 50px rgba(102, 124, 210, 0.2)',
    },
  },
});

export const header = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
});

export const title = style({
  margin: 0,
  fontSize: 20,
  fontWeight: 700,
  color: '#f3f6ff',
  selectors: {
    ':root.light &': {
      color: '#1a2140',
    },
  },
});

export const subtitle = style({
  margin: 0,
  fontSize: 14,
  color: 'rgba(198, 210, 246, 0.72)',
  selectors: {
    ':root.light &': {
      color: 'rgba(46, 58, 102, 0.6)',
    },
  },
});

export const subtitleSecondary = style({
  margin: 0,
  fontSize: 13,
  color: 'rgba(180, 192, 238, 0.7)',
  selectors: {
    ':root.light &': {
      color: 'rgba(50, 62, 108, 0.58)',
    },
  },
});

export const infoGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
  gap: 18,
  '@media': {
    'screen and (max-width: 1280px)': {
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    },
    'screen and (max-width: 768px)': {
      gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
    },
  },
});

export const infoItem = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
  background: 'rgba(16, 22, 40, 0.78)',
  borderRadius: 16,
  padding: '14px 16px',
  border: '1px solid rgba(76, 94, 150, 0.3)',
  selectors: {
    ':root.light &': {
      background: 'rgba(232, 238, 255, 0.65)',
      border: '1px solid rgba(138, 156, 214, 0.32)',
    },
  },
});

export const infoLabel = style({
  fontSize: 12,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: 'rgba(146, 164, 226, 0.72)',
  selectors: {
    ':root.light &': {
      color: 'rgba(60, 78, 132, 0.7)',
    },
  },
});

export const infoValue = style({
  fontSize: 16,
  fontWeight: 600,
  color: '#f6f8ff',
  selectors: {
    ':root.light &': {
      color: '#1a2140',
    },
  },
});

export const mapSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
});

export const tabList = style({
  display: 'flex',
  gap: 12,
});

export const tabButton = style({
  padding: '8px 16px',
  borderRadius: 999,
  border: '1px solid rgba(90, 112, 180, 0.6)',
  background: 'rgba(28, 36, 64, 0.5)',
  color: '#dfe6ff',
  fontSize: 13,
  fontWeight: 600,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  cursor: 'default',
  selectors: {
    ':root.light &': {
      border: '1px solid rgba(120, 140, 206, 0.6)',
      background: 'rgba(201, 210, 255, 0.35)',
      color: '#1f2850',
    },
  },
});

export const mapContainer = style({
  width: '100%',
  minHeight: 260,
  borderRadius: 20,
  border: '1px dashed rgba(94, 114, 178, 0.45)',
  background: 'rgba(14, 20, 36, 0.8)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  selectors: {
    ':root.light &': {
      border: '1px dashed rgba(126, 146, 206, 0.5)',
      background: 'rgba(228, 234, 255, 0.6)',
    },
  },
});

export const mapImage = style({
  width: '100%',
  height: '100%',
  objectFit: 'contain',
});

export const mapPlaceholder = style({
  fontSize: 14,
  color: 'rgba(180, 196, 240, 0.7)',
  textAlign: 'center',
  padding: '24px',
  selectors: {
    ':root.light &': {
      color: 'rgba(54, 66, 112, 0.7)',
    },
  },
});

export const recordHighlight = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
});

export const recordDriver = style({
  fontSize: 13,
  color: 'rgba(178, 192, 238, 0.75)',
  selectors: {
    ':root.light &': {
      color: 'rgba(60, 76, 126, 0.66)',
    },
  },
});

export const metaStack = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
});

export const metaHelper = style({
  fontSize: 12,
  color: 'rgba(160, 178, 232, 0.7)',
  selectors: {
    ':root.light &': {
      color: 'rgba(70, 86, 138, 0.62)',
    },
  },
});
