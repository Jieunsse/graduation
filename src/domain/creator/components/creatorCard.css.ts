import { style } from '@vanilla-extract/css';
import { colorVars } from '@shared/styles/color.css.ts';

export const card = style({
  display: 'flex',
  flexDirection: 'column',
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

export const durationBadge = style({
  position: 'absolute',
  right: '12px',
  bottom: '12px',
  padding: '4px 10px',
  borderRadius: '999px',
  background: 'rgba(0, 0, 0, 0.65)',
  color: colorVars.neutral.white,
  fontSize: '12px',
  fontWeight: 600,
  letterSpacing: '0.02em',
  backdropFilter: 'blur(6px)',
});

export const body = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  padding: '18px',
});

export const creatorInfo = style({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
});

export const profileImage = style({
  width: '42px',
  height: '42px',
  borderRadius: '50%',
  objectFit: 'cover',
  border: `2px solid ${colorVars.surface.control}`,
  boxShadow: colorVars.effect.sidebarHighlightShadow,
});

export const creatorName = style({
  fontSize: '16px',
  fontWeight: 700,
  color: colorVars.text.heading,
});

export const description = style({
  fontSize: '14px',
  lineHeight: 1.6,
  color: colorVars.text.secondary,
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
});
