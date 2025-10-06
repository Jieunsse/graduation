import { style, styleVariants } from '@vanilla-extract/css';

export const card = style({
  display: 'grid',
  gridTemplateColumns: '80px minmax(0, 1fr) auto',
  gap: 20,
  alignItems: 'center',
  padding: '18px 24px',
  borderRadius: 20,
  background: 'rgba(13, 19, 35, 0.9)',
  border: '1px solid rgba(72, 96, 156, 0.36)',
  color: '#e7ecff',
  cursor: 'pointer',
  transition:
    'background 0.3s ease, border-color 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease',
  selectors: {
    '&:hover': {
      borderColor: 'rgba(110, 140, 220, 0.6)',
      boxShadow: '0 18px 38px rgba(12, 18, 32, 0.45)',
      transform: 'translateY(-2px)',
    },
    ':root.light &': {
      background: 'rgba(247, 249, 255, 0.95)',
      border: '1px solid rgba(145, 164, 228, 0.35)',
      color: '#17203d',
      boxShadow: '0 14px 32px rgba(106, 126, 210, 0.18)',
    },
    ':root.light &:hover': {
      borderColor: 'rgba(107, 132, 210, 0.65)',
      boxShadow: '0 20px 44px rgba(120, 145, 230, 0.24)',
    },
  },
});

export const selected = style({
  background: 'linear-gradient(135deg, rgba(69, 102, 235, 0.85), rgba(32, 56, 150, 0.9))',
  borderColor: 'rgba(123, 153, 255, 0.9)',
  boxShadow: '0 24px 40px rgba(46, 78, 198, 0.55)',
  selectors: {
    ':root.light &': {
      background: 'linear-gradient(135deg, rgba(125, 150, 255, 0.92), rgba(77, 111, 240, 0.9))',
      color: '#ffffff',
      boxShadow: '0 24px 48px rgba(104, 132, 245, 0.36)',
    },
  },
});

export const round = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  gap: 6,
});

export const roundLabel = style({
  fontSize: 12,
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  opacity: 0.7,
});

export const roundNumber = style({
  fontSize: 28,
  fontWeight: 700,
  letterSpacing: '-0.02em',
});

export const info = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
  minWidth: 0,
});

export const locationRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  fontSize: 14,
  color: 'rgba(216, 224, 255, 0.78)',
  selectors: {
    ':root.light &': {
      color: 'rgba(38, 52, 92, 0.75)',
    },
  },
});

export const title = style({
  margin: 0,
  fontSize: 18,
  fontWeight: 700,
  letterSpacing: '-0.01em',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const circuit = style({
  margin: 0,
  fontSize: 13,
  color: 'rgba(183, 196, 240, 0.72)',
  selectors: {
    ':root.light &': {
      color: 'rgba(38, 52, 92, 0.6)',
    },
  },
});

export const trailing = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  gap: 8,
});

export const statusBadge = styleVariants({
  upcoming: {
    padding: '6px 12px',
    borderRadius: 999,
    background: 'rgba(56, 178, 89, 0.18)',
    color: '#74f0a6',
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    selectors: {
      ':root.light &': {
        background: 'rgba(63, 178, 110, 0.18)',
        color: '#1c6d3a',
      },
    },
  },
  live: {
    padding: '6px 12px',
    borderRadius: 999,
    background: 'rgba(58, 132, 247, 0.22)',
    color: '#99beff',
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    selectors: {
      ':root.light &': {
        background: 'rgba(74, 116, 242, 0.18)',
        color: '#2040a3',
      },
    },
  },
  completed: {
    padding: '6px 12px',
    borderRadius: 999,
    background: 'rgba(120, 132, 162, 0.22)',
    color: 'rgba(210, 216, 236, 0.78)',
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    selectors: {
      ':root.light &': {
        background: 'rgba(146, 155, 185, 0.22)',
        color: '#39425f',
      },
    },
  },
});

export const dateText = style({
  fontSize: 13,
  color: 'rgba(186, 198, 240, 0.72)',
  selectors: {
    ':root.light &': {
      color: 'rgba(38, 52, 92, 0.6)',
    },
  },
});

export const flag = style({
  fontSize: 18,
});
