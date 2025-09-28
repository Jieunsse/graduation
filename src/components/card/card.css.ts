// card.css.ts
import { style, styleVariants } from '@vanilla-extract/css';

export const card = style({
  backgroundColor: '#0f111a',
  borderRadius: '8px',
  padding: '16px',
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  width: '320px',
  border: '1px solid #1c1f2a',
  fontFamily: 'Paperlogy, sans-serif',
  marginBottom: '12px',
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: '14px',
  color: '#a3a3a3',
});

export const title = style({
  fontWeight: 600,
});

export const date = style({
  fontSize: '12px',
  color: '#888',
});

export const body = style({
  fontSize: '16px',
  fontWeight: 500,
});

export const description = style({
  color: '#ffffff',
  marginLeft: '4px',
});

export const colon = style({
  marginLeft: '4px',
});

export const footer = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const tag = style({
  borderRadius: '8px',
  padding: '0.25rem',
  color: '#fff',
});

// 카테고리별 색상 한 번에 관리
export const category = styleVariants({
  PIT: { backgroundColor: '#1876fb' },
  SC: { backgroundColor: '#ffd700', color: '#000' },
  VSC: { backgroundColor: '#ff8c00' },
  RET: { backgroundColor: '#9B1112' },
  PEN: { backgroundColor: '#800080' },
});

export const driver = style({
  fontSize: '12px',
  marginTop: '12px',
  marginLeft: '4px',
});
