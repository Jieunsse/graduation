import { createVar, keyframes, style } from '@vanilla-extract/css';
import { vars } from '@shared/styles/token.css.ts';

export const teamColorVar = createVar();

const shimmer = keyframes({
  '0%': { transform: 'translateX(-100%)' },
  '100%': { transform: 'translateX(100%)' },
});

export const card = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  maxWidth: '320px',
  gap: '14px',
  padding: '22px 18px 20px',
  borderRadius: '18px',
  border: `1px solid ${vars.color.gridCardBorder}`,
  background: `linear-gradient(180deg, color-mix(in srgb, ${vars.color.gridCardBg} 88%, ${teamColorVar} 12%) 0%, ${vars.color.gridCardBg} 100%)`,
  boxShadow: '0 14px 32px rgba(0, 0, 0, 0.35)',
  color: vars.color.gridCardText,
  overflow: 'hidden',
  isolation: 'isolate',
  textAlign: 'center',
  transition:
    'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
  selectors: {
    '&::before': {
      content: '',
      position: 'absolute',
      inset: 0,
      background: `linear-gradient(140deg, color-mix(in srgb, ${teamColorVar} 14%, transparent) 0%, transparent 45%)`,
      opacity: 0.9,
      pointerEvents: 'none',
      zIndex: -1,
    },
    '&:hover': {
      transform: 'translateY(-3px)',
      boxShadow: '0 18px 40px rgba(0, 0, 0, 0.45)',
      borderColor: teamColorVar,
    },
  },
});

export const cardContent = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '14px',
  minWidth: 0,
});

export const portraitFrame = style({
  position: 'relative',
  width: '152px',
  aspectRatio: '3 / 4',
  borderRadius: '16px',
  overflow: 'hidden',
  background: `linear-gradient(140deg, color-mix(in srgb, ${teamColorVar} 26%, rgba(255, 255, 255, 0.06)) 0%, ${vars.color.gridCardBg} 85%)`,
  border: `1px solid ${vars.color.gridCardDivider}`,
  boxShadow: '0 12px 26px rgba(0, 0, 0, 0.35)',
});

export const driverImage = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transform: 'scale(1.02)',
});

export const info = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
  alignItems: 'center',
});

export const driverName = style({
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  fontSize: '18px',
  fontWeight: 800,
  letterSpacing: '-0.01em',
  color: vars.color.gridCardText,
});

export const driverNumber = style({
  fontSize: '18px',
  fontWeight: 800,
  fontStyle: 'italic',
  color: vars.color.gridCardSubtleText,
});

export const teamName = style({
  fontSize: '14px',
  fontWeight: 700,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: teamColorVar,
});

export const cardSkeleton = style({
  position: 'relative',
  overflow: 'hidden',
  background: vars.color.gridSkeletonBase,
  selectors: {
    '&::after': {
      content: '',
      position: 'absolute',
      inset: 0,
      background: `linear-gradient(90deg, transparent 0%, ${vars.color.gridSkeletonHighlight} 50%, transparent 100%)`,
      animation: `${shimmer} 1.8s infinite`,
    },
  },
});
