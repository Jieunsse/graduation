import { style } from '@vanilla-extract/css';
import { colorVars } from '@shared/styles/color.css.ts';

export const card = style({
  display: 'flex',
  flexDirection: 'column',
  textDecoration: 'none',
  borderRadius: '18px',
  overflow: 'hidden',
  background: colorVars.surface.panel,
  border: `1px solid ${colorVars.border.panel}`,
  boxShadow: colorVars.effect.elevation,
  color: colorVars.text.primary,
  minHeight: '100%',
  transition: 'opacity 0.2s ease, border-color 0.2s ease',
  selectors: {
    '&:hover': {
      opacity: 0.95,
      borderColor: colorVars.border.controlHover,
    },
  },
});

export const thumbnailWrapper = style({
  position: 'relative',
  width: '100%',
  aspectRatio: '16 / 9',
  background: colorVars.surface.control,
});

export const thumbnail = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block',
});

export const body = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  padding: '20px',
});

export const meta = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px 12px',
  fontSize: '13px',
  color: colorVars.text.secondary,
});

export const source = style({
  fontWeight: 600,
  color: colorVars.text.heading,
});

export const title = style({
  fontSize: '17px',
  fontWeight: 700,
  color: colorVars.text.heading,
  lineHeight: 1.5,
});

export const excerpt = style({
  fontSize: '14px',
  color: colorVars.text.secondary,
  lineHeight: 1.6,
  display: '-webkit-box',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
});

export const date = style({
  color: colorVars.text.secondary,
  fontWeight: 500,
});
