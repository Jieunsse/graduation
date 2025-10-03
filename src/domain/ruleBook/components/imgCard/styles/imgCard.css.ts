import { style } from '@vanilla-extract/css';

export const imgCard = style({
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

export const img = style({
  width: '100%',
  height: '100%',
  objectFit: 'contain',
  borderRadius: 20,
  boxShadow: '0 12px 32px rgba(6, 10, 24, 0.48)',
});
