// card.css.ts
import { style, styleVariants } from '@vanilla-extract/css';

export const card = style({
  backgroundColor: '#0f111a',
  borderRadius: '16px',
  padding: '20px',
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  width: '100%',
  maxWidth: '360px',
  border: '1px solid #1c1f2a',
  fontFamily: 'Paperlogy, sans-serif',
  marginBottom: '12px',
  boxShadow: '0 18px 32px rgba(8, 12, 24, 0.38)',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  selectors: {
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 26px 42px rgba(10, 16, 32, 0.55)',
    },
    ':root.light &': {
      backgroundColor: '#ffffff',
      color: '#1C1C1C',
      border: '1px solid rgba(0, 0, 0, 0.08)',
      boxShadow: '0 20px 46px rgba(78, 92, 168, 0.14)',
    },
    ':root.light &:hover': {
      boxShadow: '0 26px 52px rgba(106, 122, 210, 0.22)',
    },
  },
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: '14px',
  color: '#a3a3a3',
  selectors: {
    ':root.light &': {
      color: 'rgba(84, 94, 154, 0.78)',
    },
  },
});

export const title = style({
  fontWeight: 700,
  fontSize: '18px',
  letterSpacing: '-0.01em',
  selectors: {
    ':root.light &': {
      color: '#1C1C1C',
    },
  },
});

export const date = style({
  fontSize: '12px',
  color: '#888',
  selectors: {
    ':root.light &': {
      color: 'rgba(90, 100, 160, 0.7)',
    },
  },
});

export const body = style({
  fontSize: '16px',
  fontWeight: 500,
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

export const description = style({
  color: '#ffffff',
  selectors: {
    ':root.light &': {
      color: '#2c2f4a',
    },
  },
});

export const colon = style({
  marginLeft: '4px',
  marginRight: '4px',
  color: 'rgba(255, 255, 255, 0.6)',
  selectors: {
    ':root.light &': {
      color: 'rgba(60, 64, 92, 0.45)',
    },
  },
});

export const footer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const tag = style({
  borderRadius: '8px',
  padding: '0.25rem',
  color: '#fff',
  fontSize: '12px',
  fontWeight: 600,
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
});

// 카테고리별 색상 한 번에 관리
export const category = styleVariants({
  PIT: { backgroundColor: '#1876fb' },
  SC: { backgroundColor: '#ffd700', color: '#000' },
  VSC: { backgroundColor: '#ff8c00' },
  RET: { backgroundColor: '#9B1112' },
  PEN: { backgroundColor: '#800080' },
  FLAG: { backgroundColor: '#ff4d4f' },
  FINISH: { backgroundColor: '#2e8b57' },
});

export const driver = style({
  fontSize: '12px',
  marginTop: 0,
  marginLeft: '4px',
  color: 'rgba(202, 210, 240, 0.85)',
  selectors: {
    ':root.light &': {
      color: 'rgba(68, 74, 120, 0.76)',
    },
  },
});

export const button = style({
  selectors: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
});
