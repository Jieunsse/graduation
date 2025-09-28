import { style } from '@vanilla-extract/css';

export const hero = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '80vh',
  textAlign: 'center',
  color: '#fff',
  padding: '2rem',
});

export const title = style({
  fontSize: '3rem',
  fontWeight: 'bold',
  lineHeight: 1.2,
  marginBottom: '1.5rem',
});

export const description = style({
  fontSize: '1rem',
  maxWidth: '600px',
  marginBottom: '2rem',
  lineHeight: 1.6,
});

export const ctaButton = style({
  borderRadius: '12px',
  padding: '0.75rem 1.5rem',
  color: '#fff',
  cursor: 'pointer',
  ':hover': {
    background: '#2563eb',
  },
});
