import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 18,
  padding: '28px 24px',
  borderRadius: 24,
  background: 'rgba(9, 13, 24, 0.88)',
  border: '1px solid rgba(64, 82, 132, 0.4)',
  boxShadow: '0 26px 48px rgba(6, 10, 22, 0.55)',
  minWidth: 0,
  selectors: {
    ':root.light &': {
      background: 'rgba(245, 248, 255, 0.95)',
      border: '1px solid rgba(138, 154, 220, 0.42)',
      boxShadow: '0 22px 48px rgba(100, 122, 210, 0.18)',
    },
  },
});

export const header = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const title = style({
  margin: 0,
  fontSize: 20,
  fontWeight: 700,
  color: '#f2f5ff',
  letterSpacing: '-0.01em',
  selectors: {
    ':root.light &': {
      color: '#141b34',
    },
  },
});

export const subtitle = style({
  margin: 0,
  fontSize: 13,
  color: 'rgba(194, 206, 245, 0.75)',
  selectors: {
    ':root.light &': {
      color: 'rgba(38, 52, 92, 0.6)',
    },
  },
});

export const list = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 14,
  maxHeight: 'calc(100vh - 280px)',
  overflowY: 'auto',
  paddingRight: 6,
});

export const empty = style({
  padding: '48px 0',
  textAlign: 'center',
  fontSize: 14,
  color: 'rgba(180, 194, 240, 0.68)',
  selectors: {
    ':root.light &': {
      color: 'rgba(38, 52, 92, 0.5)',
    },
  },
});

export const stickyCount = style({
  fontSize: 12,
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color: 'rgba(125, 144, 210, 0.75)',
  selectors: {
    ':root.light &': {
      color: 'rgba(60, 78, 138, 0.75)',
    },
  },
});
