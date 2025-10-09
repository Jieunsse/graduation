import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 28,
  padding: '32px 32px 36px',
  borderRadius: 24,
  background: 'rgba(10, 14, 26, 0.9)',
  border: '1px solid rgba(70, 88, 138, 0.45)',
  boxShadow: '0 26px 52px rgba(6, 10, 22, 0.55)',
  minHeight: 320,
  selectors: {
    ':root.light &': {
      background: 'rgba(247, 249, 255, 0.96)',
      border: '1px solid rgba(132, 150, 212, 0.42)',
      boxShadow: '0 24px 52px rgba(104, 126, 220, 0.2)',
    },
  },
});

export const placeholder = style({
  margin: 0,
  fontSize: 15,
  color: 'rgba(190, 202, 240, 0.72)',
  selectors: {
    ':root.light &': {
      color: 'rgba(46, 58, 104, 0.58)',
    },
  },
});

export const header = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
});

export const label = style({
  fontSize: 12,
  letterSpacing: '0.3em',
  textTransform: 'uppercase',
  color: 'rgba(125, 146, 220, 0.7)',
  selectors: {
    ':root.light &': {
      color: 'rgba(54, 70, 128, 0.65)',
    },
  },
});

export const title = style({
  margin: 0,
  fontSize: 26,
  fontWeight: 700,
  letterSpacing: '-0.01em',
  color: '#f6f8ff',
  selectors: {
    ':root.light &': {
      color: '#121831',
    },
  },
});

export const meta = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 12,
  fontSize: 14,
  color: 'rgba(196, 208, 242, 0.75)',
  selectors: {
    ':root.light &': {
      color: 'rgba(44, 58, 102, 0.7)',
    },
  },
});

export const metaDivider = style({
  opacity: 0.5,
});

export const sectionHeader = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const sectionTitle = style({
  margin: 0,
  fontSize: 18,
  fontWeight: 600,
  color: '#f0f3ff',
  selectors: {
    ':root.light &': {
      color: '#1b243f',
    },
  },
});

export const sessionList = style({
  listStyle: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
});

export const sessionItem = style({
  display: 'grid',
  gridTemplateColumns: '180px minmax(0, 1fr)',
  alignItems: 'center',
  gap: 18,
  padding: '14px 0',
  borderBottom: '1px solid rgba(76, 92, 142, 0.35)',
  selectors: {
    '&:last-child': {
      borderBottom: 'none',
    },
    ':root.light &': {
      borderBottom: '1px solid rgba(142, 158, 210, 0.28)',
    },
  },
});

export const sessionLabel = style({
  fontSize: 15,
  fontWeight: 600,
  color: '#f5f7ff',
  letterSpacing: '-0.01em',
  selectors: {
    ':root.light &': {
      color: '#1a213a',
    },
  },
});

export const sessionTime = style({
  fontSize: 14,
  color: 'rgba(196, 208, 242, 0.78)',
  selectors: {
    ':root.light &': {
      color: 'rgba(54, 66, 110, 0.72)',
    },
  },
});

export const sessionDuration = style({
  fontSize: 12,
  color: 'rgba(160, 178, 228, 0.65)',
  selectors: {
    ':root.light &': {
      color: 'rgba(66, 78, 120, 0.58)',
    },
  },
});
