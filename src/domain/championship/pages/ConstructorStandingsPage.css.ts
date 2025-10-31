import { style } from '@vanilla-extract/css';
import { colorVars } from '@shared/styles/color.css.ts';

export const page = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
  padding: '32px 0 64px',
});

export const hero = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  padding: '28px',
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
  opacity: 0.22,
  pointerEvents: 'none',
});

export const heroContent = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

export const heroTitle = style({
  fontSize: '34px',
  fontWeight: 800,
  letterSpacing: '-0.02em',
  color: colorVars.text.onCallout,
});

export const heroDescription = style({
  fontSize: '16px',
  lineHeight: 1.7,
  maxWidth: '680px',
  color: colorVars.text.onCallout,
});

export const heroMeta = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '12px',
  fontSize: '13px',
  opacity: 0.85,
});
