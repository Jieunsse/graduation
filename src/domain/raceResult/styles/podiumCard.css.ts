import { createVar, keyframes, style, styleVariants } from '@vanilla-extract/css';
import { colorVars } from '@shared/styles/color.css.ts';

export const accentVar = createVar();

const shimmer = keyframes({
  '0%': { opacity: 0.2 },
  '40%': { opacity: 0.45 },
  '100%': { opacity: 0.2 },
});

export const card = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: 20,
  padding: '28px 24px 18px',
  borderRadius: 28,
  overflow: 'hidden',
  flex: '1 1 240px',
  minWidth: 0,
  color: colorVars.text.surface,
  background: colorVars.surface.panel,
  border: `1px solid ${colorVars.border.panel}`,
  boxShadow: colorVars.effect.elevation,
  transition: 'transform 0.28s ease, box-shadow 0.28s ease',
  vars: {
    [accentVar]: 'rgba(255, 255, 255, 0.12)',
  },
  selectors: {
    '&:hover': {
      transform: 'translateY(-6px)',
      boxShadow: colorVars.effect.brandShadow,
    },
    ":root[data-theme='light'] &": {
      color: colorVars.text.primary,
      boxShadow: '0 12px 24px rgba(72, 82, 148, 0.18)',
    },
  },
});

export const podiumVariant = styleVariants({
  first: {
    order: 2,
    minHeight: 360,
    transform: 'translateY(-16px)',
    '@media': {
      '(max-width: 959px)': {
        transform: 'none',
        minHeight: 320,
      },
    },
  },
  second: {
    order: 1,
    minHeight: 320,
    '@media': {
      '(max-width: 959px)': {
        minHeight: 300,
      },
    },
  },
  third: {
    order: 3,
    minHeight: 300,
    '@media': {
      '(max-width: 959px)': {
        minHeight: 280,
      },
    },
  },
});

export const glow = style({
  position: 'absolute',
  inset: 0,
  background: `linear-gradient(135deg, rgba(8, 11, 22, 0.8), var(${accentVar}))`,
  opacity: 0.78,
  pointerEvents: 'none',
  animation: `${shimmer} 6s ease-in-out infinite`,
  selectors: {
    ":root[data-theme='light'] &": {
      background: `linear-gradient(135deg, rgba(247, 249, 255, 0.92), var(${accentVar}))`,
      opacity: 0.9,
    },
  },
});

export const content = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  zIndex: 1,
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: 12,
});

export const rankBadge = style({
  display: 'inline-flex',
  flexDirection: 'column',
  gap: 4,
  padding: '8px 14px',
  borderRadius: 18,
  fontSize: 14,
  fontWeight: 700,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: colorVars.text.onBrand,
  background: colorVars.brand.primary,
  boxShadow: colorVars.effect.brandShadow,
  selectors: {
    ":root[data-theme='light'] &": {
      color: colorVars.text.onBrand,
    },
  },
});

export const teamBadge = style({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  padding: '6px 12px',
  borderRadius: 16,
  background: 'rgba(15, 21, 35, 0.4)',
  color: colorVars.text.surface,
  fontSize: 13,
  fontWeight: 600,
  letterSpacing: '-0.01em',
  selectors: {
    ":root[data-theme='light'] &": {
      background: 'rgba(226, 231, 255, 0.65)',
      color: colorVars.text.primary,
    },
  },
});

export const teamLogo = style({
  width: 28,
  height: 28,
  objectFit: 'contain',
  filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.35))',
});

export const body = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 16,
});

export const driverMeta = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
  flex: '1 1 auto',
  minWidth: 0,
});

export const driverName = style({
  fontSize: 24,
  fontWeight: 700,
  letterSpacing: '-0.01em',
  lineHeight: 1.2,
  wordBreak: 'keep-all',
});

export const teamName = style({
  fontSize: 14,
  opacity: 0.86,
  fontWeight: 500,
});

export const pointsWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  minWidth: 72,
});

export const pointsValue = style({
  fontSize: 36,
  fontWeight: 800,
  lineHeight: 1,
});

export const pointsLabel = style({
  fontSize: 13,
  opacity: 0.75,
});

export const driverImage = style({
  position: 'absolute',
  right: -12,
  bottom: 0,
  width: '48%',
  maxWidth: 220,
  height: 'auto',
  objectFit: 'contain',
  filter: 'drop-shadow(0 14px 36px rgba(0,0,0,0.45))',
  pointerEvents: 'none',
  transition: 'transform 0.3s ease',
  selectors: {
    [`${card}:hover &`]: {
      transform: 'translateY(-8px)',
    },
    ":root[data-theme='light'] &": {
      filter: 'drop-shadow(0 18px 38px rgba(36, 46, 92, 0.25))',
    },
  },
});

export const srOnly = style({
  position: 'absolute',
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  border: 0,
});

