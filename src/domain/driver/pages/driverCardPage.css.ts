import { style } from '@vanilla-extract/css';
import { colorVars } from '@shared/styles/color.css.ts';

export const page = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
  padding: '32px 0 48px',
  marginTop: '60px',
});

export const hero = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  position: 'relative',
  padding: '24px',
  borderRadius: '24px',
  background: colorVars.gradient.callout,
  color: colorVars.text.onCallout,
  overflow: 'hidden',
  boxShadow: colorVars.effect.calloutShadow,
  border: `1px solid ${colorVars.border.panel}`,
});

export const heroAccent = style({
  position: 'absolute',
  inset: 0,
  background: colorVars.gradient.calloutHover,
  opacity: 0.18,
  pointerEvents: 'none',
});

export const heroContent = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

export const heroTitle = style({
  fontSize: '32px',
  fontWeight: 800,
  letterSpacing: '-0.01em',
  color: colorVars.text.onCallout,
});

export const heroDescription = style({
  fontSize: '16px',
  lineHeight: 1.6,
  maxWidth: '720px',
  color: colorVars.text.onCallout,
});

export const heroMeta = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '12px',
  fontSize: '14px',
  color: colorVars.text.onCallout,
  opacity: 0.9,
});

export const grid = style({
  display: 'grid',
  gap: '24px',
  gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
  '@media': {
    '(min-width: 640px)': {
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    },
    '(min-width: 960px)': {
      gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    },
    '(min-width: 1280px)': {
      gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
    },
  },
});
