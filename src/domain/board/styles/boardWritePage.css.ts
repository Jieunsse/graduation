import { globalStyle, style } from '@vanilla-extract/css';

export const page = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: 32,
  paddingTop: 104,
  paddingBottom: 120,
});

export const title = style({
  margin: 0,
  fontSize: 32,
  fontWeight: 700,
  color: 'rgba(231, 235, 255, 0.95)',
  letterSpacing: '-0.01em',
});

globalStyle(`.light .${title}`, {
  color: 'rgba(24, 31, 60, 0.92)',
});
