import { globalStyle, style } from '@vanilla-extract/css';
import { colorVars } from '@shared/styles/color.css.ts';

export const hero = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '80vh',
  textAlign: 'center',
  color: colorVars.text.highlight,
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
  color: colorVars.text.highlight,
  cursor: 'pointer',
  transition: 'background 0.2s ease, box-shadow 0.2s ease',
  ':hover': {
    background: colorVars.accent.blue,
    boxShadow: colorVars.effect.accentShadow,
  },
});

globalStyle(`.light .${hero}`, {
  color: colorVars.text.primary,
  padding: '3rem 2.5rem',
  gap: '1.5rem',
});

globalStyle(`.light .${title}`, {
  color: colorVars.text.primary,
});

globalStyle(`.light .${description}`, {
  color: colorVars.text.secondary,
});

globalStyle(`.light .${ctaButton}`, {
  background: colorVars.brand.primary,
  color: colorVars.brand.onPrimary,
  boxShadow: colorVars.effect.brandShadow,
});

globalStyle(`.light .${ctaButton}:hover`, {
  background: colorVars.brand.primaryHover,
  color: colorVars.brand.onPrimaryHover,
  boxShadow: colorVars.effect.brandShadowHover,
});
