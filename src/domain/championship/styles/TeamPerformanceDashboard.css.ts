import { createVar, style, styleVariants } from '@vanilla-extract/css';
import { colorVars } from '@shared/styles/color.css.ts';

const accentColorVar = createVar();

export const dashboard = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  width: '100%',
  padding: '16px 0 48px',
});

export const header = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  maxWidth: '720px',
});

export const title = style({
  fontSize: '32px',
  fontWeight: 800,
  letterSpacing: '-0.01em',
  color: colorVars.text.heading,
});

export const description = style({
  fontSize: '16px',
  lineHeight: 1.6,
  color: colorVars.text.secondary,
});

export const controls = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '12px',
  alignItems: 'center',
});

export const input = style({
  flex: '1 1 240px',
  minWidth: '200px',
  padding: '10px 14px',
  borderRadius: '12px',
  border: `1px solid ${colorVars.border.control}`,
  backgroundColor: colorVars.surface.control,
  color: colorVars.text.primary,
  fontSize: '14px',
  transition: 'border 0.2s ease, box-shadow 0.2s ease',
  selectors: {
    '&:focus': {
      outline: 'none',
      borderColor: colorVars.border.focus,
      boxShadow: colorVars.effect.focusRing,
    },
  },
});

export const button = style({
  padding: '10px 20px',
  borderRadius: '12px',
  border: 'none',
  background: colorVars.gradient.sidebarHighlight,
  color: colorVars.text.onCallout,
  fontWeight: 600,
  fontSize: '14px',
  cursor: 'pointer',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  boxShadow: colorVars.effect.sidebarHighlightShadow,
  selectors: {
    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
      transform: 'none',
      boxShadow: 'none',
    },
    '&:hover': {
      transform: 'translateY(-1px)',
      boxShadow: colorVars.effect.sidebarActiveShadow,
    },
    '&:active': {
      transform: 'translateY(0)',
    },
  },
});

export const grid = style({
  display: 'grid',
  gap: '24px',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
});

export const card = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  padding: '24px',
  borderRadius: '12px',
  border: '1px solid rgba(0, 0, 0, 0.1)',
  background: '#f7f7f7',
  boxShadow: '0 16px 32px rgba(15, 23, 42, 0.12)',
  transform: 'translateY(0)',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  vars: {
    [accentColorVar]: 'transparent',
  },
  selectors: {
    '&:hover': {
      transform: 'translateY(-4px) scale(1.01)',
      boxShadow: '0 24px 40px rgba(15, 23, 42, 0.18)',
    },
    ':where(.dark &)': {
      background: 'rgba(17, 24, 39, 0.92)',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      boxShadow: '0 24px 44px rgba(15, 23, 42, 0.45)',
    },
  },
});

export const cardHighlight = styleVariants({
  gold: {
    borderColor: '#FFD700',
    boxShadow: '0 24px 44px rgba(255, 215, 0, 0.45)',
    vars: { [accentColorVar]: '#FFD700' },
  },
  silver: {
    borderColor: '#C0C0C0',
    boxShadow: '0 24px 44px rgba(192, 192, 192, 0.4)',
    vars: { [accentColorVar]: '#C0C0C0' },
  },
  bronze: {
    borderColor: '#CD7F32',
    boxShadow: '0 24px 44px rgba(205, 127, 50, 0.38)',
    vars: { [accentColorVar]: '#CD7F32' },
  },
});

export const teamName = style({
  fontSize: '20px',
  fontWeight: 700,
  color: colorVars.text.primary,
});

export const metrics = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  gap: '12px',
});

export const metric = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
});

export const metricLabel = style({
  fontSize: '12px',
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  color: colorVars.text.secondary,
});

export const metricValue = style({
  fontSize: '18px',
  fontWeight: 700,
  color: colorVars.text.primary,
});

export const driverCount = style({
  fontSize: '13px',
  color: colorVars.text.secondary,
});

export const rankBadge = style({
  position: 'absolute',
  top: '16px',
  right: '16px',
  width: '44px',
  height: '44px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 700,
  fontSize: '16px',
  color: '#0f172a',
  backgroundColor: accentColorVar,
  border: '1px solid rgba(15, 23, 42, 0.12)',
  boxShadow: '0 12px 24px rgba(15, 23, 42, 0.25)',
});

export const statusMessage = style({
  fontSize: '14px',
  color: colorVars.text.secondary,
});

export const errorMessage = style({
  fontSize: '14px',
  color: '#f87171',
});
