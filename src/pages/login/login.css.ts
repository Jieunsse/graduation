import { globalStyle, style } from '@vanilla-extract/css';

export const container = style({
  minHeight: '100vh',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '48px 16px',
  background:
    'radial-gradient(120% 140% at 50% 0%, rgba(62, 92, 214, 0.22) 0%, rgba(6, 9, 19, 0.96) 55%, #04060d 100%)',
  position: 'relative',
  overflow: 'hidden',
});

export const primaryGlow = style({
  position: 'absolute',
  width: '480px',
  height: '480px',
  top: '-120px',
  right: '-80px',
  borderRadius: '50%',
  background:
    'radial-gradient(circle, rgba(155, 17, 18, 0.35) 0%, rgba(9, 12, 24, 0) 70%)',
  filter: 'blur(0px)',
});

export const secondaryGlow = style({
  position: 'absolute',
  width: '360px',
  height: '360px',
  bottom: '-120px',
  left: '-60px',
  borderRadius: '50%',
  background:
    'radial-gradient(circle, rgba(62, 92, 214, 0.35) 0%, rgba(9, 12, 24, 0) 72%)',
  filter: 'blur(0px)',
});

globalStyle(`.light .${container}`, {
  background:
    'radial-gradient(120% 140% at 50% 0%, rgba(255, 210, 214, 0.28) 0%, rgba(247, 249, 255, 0.92) 55%, #f6f7ff 100%)',
});

globalStyle(`.light .${primaryGlow}`, {
  background:
    'radial-gradient(circle, rgba(155, 17, 18, 0.28) 0%, rgba(255, 255, 255, 0) 74%)',
});

globalStyle(`.light .${secondaryGlow}`, {
  background:
    'radial-gradient(circle, rgba(110, 135, 255, 0.26) 0%, rgba(255, 255, 255, 0) 76%)',
});
