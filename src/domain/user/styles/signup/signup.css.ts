import { globalStyle, style } from '@vanilla-extract/css';

export const container = style({
  minHeight: '100vh',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '48px 16px',
  background:
    'radial-gradient(120% 140% at 50% 0%, rgba(62, 92, 214, 0.18) 0%, rgba(6, 9, 19, 0.95) 55%, #05070f 100%)',
  position: 'relative',
  overflow: 'hidden',
});

export const primaryGlow = style({
  position: 'absolute',
  width: '520px',
  height: '520px',
  top: '-140px',
  right: '-120px',
  borderRadius: '50%',
  background:
    'radial-gradient(circle, rgba(155, 17, 18, 0.32) 0%, rgba(9, 12, 24, 0) 70%)',
  filter: 'blur(0px)',
});

export const secondaryGlow = style({
  position: 'absolute',
  width: '380px',
  height: '380px',
  bottom: '-140px',
  left: '-80px',
  borderRadius: '50%',
  background:
    'radial-gradient(circle, rgba(134, 159, 255, 0.3) 0%, rgba(9, 12, 24, 0) 72%)',
  filter: 'blur(0px)',
});

globalStyle(`.light .${container}`, {
  background:
    'radial-gradient(120% 140% at 50% 0%, rgba(255, 210, 214, 0.32) 0%, rgba(247, 249, 255, 0.9) 55%, #f6f7ff 100%)',
});

globalStyle(`.light .${primaryGlow}`, {
  background:
    'radial-gradient(circle, rgba(155, 17, 18, 0.24) 0%, rgba(255, 255, 255, 0) 74%)',
});

globalStyle(`.light .${secondaryGlow}`, {
  background:
    'radial-gradient(circle, rgba(110, 135, 255, 0.24) 0%, rgba(255, 255, 255, 0) 76%)',
});
