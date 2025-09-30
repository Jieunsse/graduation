import { globalStyle, style } from '@vanilla-extract/css';
import { lightVars } from '@shared/styles/token.css.ts';

export const hero = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '80vh',
  textAlign: 'center',
  color: '#fff',
  padding: '2rem',
  transition: 'color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease',
});

export const title = style({
  fontSize: '3rem',
  fontWeight: 'bold',
  lineHeight: 1.2,
  marginBottom: '1.5rem',
  maxWidth: '768px',
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
  transition: 'background 0.2s ease, box-shadow 0.2s ease',
  ':hover': {
    background: '#2563eb',
    boxShadow: '0 18px 32px rgba(37, 99, 235, 0.25)',
  },
});

globalStyle(`.light .${hero}`, {
  color: lightVars.color.textPrimary,
  padding: '3rem 2.5rem',
  gap: '1.5rem',
});

globalStyle(`.light .${title}`, {
  color: lightVars.color.textPrimary,
});

globalStyle(`.light .${description}`, {
  color: lightVars.color.textSecondary,
});

globalStyle(`.light .${ctaButton}`, {
  background: '#9B1112',
  color: lightVars.color.textLight,
  boxShadow: '0 18px 36px rgba(155, 17, 18, 0.25)',
});

globalStyle(`.light .${ctaButton}:hover`, {
  background: '#b71516',
  boxShadow: '0 22px 40px rgba(155, 17, 18, 0.28)',
});
