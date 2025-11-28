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
  alignItems: 'center',
  gap: '20px',
  padding: '18px 20px',
  borderRadius: '20px',
  border: `1px solid ${vars.color.gridCardBorder}`,
  background: `linear-gradient(120deg, ${vars.color.gridCardBg} 0%, ${vars.color.gridCardBg} 60%, color-mix(in srgb, ${teamColorVar} 18%, ${vars.color.gridCardBg}) 100%)`,
  boxShadow: '0 26px 52px rgba(0, 0, 0, 0.45)',
  color: vars.color.gridCardText,
  overflow: 'hidden',
  isolation: 'isolate',
  transition:
    'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
  selectors: {
    '&::before': {
      content: '',
      position: 'absolute',
      inset: 0,
      background: `linear-gradient(90deg, color-mix(in srgb, ${teamColorVar} 24%, transparent) 0%, transparent 50%)`,
      opacity: 0.9,
      pointerEvents: 'none',
      zIndex: -1,
    },
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 36px 78px rgba(0, 0, 0, 0.55)',
      borderColor: teamColorVar,
    },
  },
});

export const positionColumn = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '86px',
  gap: '4px',
});

export const positionNumber = style({
  fontSize: '42px',
  fontWeight: 800,
  fontStyle: 'italic',
  letterSpacing: '0.04em',
  color: vars.color.gridCardAccent,
  textShadow: '0 14px 28px rgba(0, 0, 0, 0.55)',
});

export const positionBracket = style({
  position: 'relative',
  width: '66px',
  height: '46px',
  borderTop: `2px solid ${vars.color.gridCardDivider}`,
  borderBottom: `2px solid ${vars.color.gridCardDivider}`,
  selectors: {
    '&::before': {
      content: '',
      position: 'absolute',
      insetBlock: '-2px',
      left: '-2px',
      width: '2px',
      background: vars.color.gridCardDivider,
    },
    '&::after': {
      content: '',
      position: 'absolute',
      insetBlock: '-2px',
      right: '-2px',
      width: '2px',
      background: vars.color.gridCardDivider,
    },
  },
});

export const cardContent = style({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  gap: '18px',
  minWidth: 0,
});

export const portraitFrame = style({
  position: 'relative',
  width: '148px',
  aspectRatio: '3 / 4',
  borderRadius: '18px',
  overflow: 'hidden',
  background: `linear-gradient(150deg, color-mix(in srgb, ${teamColorVar} 42%, rgba(0, 0, 0, 0.2)) 0%, ${vars.color.gridCardBg} 80%)`,
  border: `1px solid ${vars.color.gridCardBorder}`,
  boxShadow: '0 18px 38px rgba(0, 0, 0, 0.55)',
});

export const driverImage = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transform: 'scale(1.04)',
});

export const info = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

export const driverName = style({
  display: 'flex',
  alignItems: 'baseline',
  gap: '10px',
  fontSize: '21px',
  fontWeight: 800,
  letterSpacing: '-0.01em',
  color: vars.color.gridCardText,
});

export const driverNumber = style({
  fontSize: '20px',
  fontWeight: 800,
  fontStyle: 'italic',
  color: vars.color.gridCardSubtleText,
});

export const teamName = style({
  fontSize: '16px',
  fontWeight: 700,
  letterSpacing: '0.02em',
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
