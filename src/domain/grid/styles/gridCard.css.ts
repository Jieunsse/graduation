import { createVar, keyframes, style } from '@vanilla-extract/css';
import { vars } from '@shared/styles/token.css.ts';

export const teamColorVar = createVar();

const floatIn = keyframes({
  '0%': { transform: 'translateY(12px)', opacity: 0 },
  '100%': { transform: 'translateY(0)', opacity: 1 },
});

const shimmer = keyframes({
  '0%': { transform: 'translateX(-100%)' },
  '100%': { transform: 'translateX(100%)' },
});

export const card = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '18px',
  padding: '28px 24px 32px',
  borderRadius: '28px',
  // background: vars.color.gridCardBg,
  border: `1px solid ${vars.color.gridCardBorder}`,
  boxShadow: '0 32px 60px rgba(4, 10, 24, 0.55)',
  color: vars.color.gridCardText,
  textAlign: 'center',
  overflow: 'hidden',
  isolation: 'isolate',
  transition:
    'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
  selectors: {
    '&::after': {
      content: '',
      position: 'absolute',
      inset: '0',
      background: `radial-gradient(120% 150% at 50% 0%, ${vars.color.gridCardGlow} 0%, transparent 68%)`,
      opacity: 0.7,
      pointerEvents: 'none',
      zIndex: -1,
    },
    '&:hover': {
      transform: 'translateY(-6px)',
      boxShadow: '0 40px 80px rgba(4, 10, 24, 0.65)',
      borderColor: teamColorVar,
    },
  },
});

export const header = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '12px',
  width: '100%',
});

export const position = style({
  fontSize: '42px',
  fontWeight: 700,
  letterSpacing: '0.08em',
  color: vars.color.gridCardAccent,
  textShadow: '0 8px 24px rgba(0, 0, 0, 0.45)',
});

export const bracket = style({
  position: 'relative',
  width: '88px',
  height: '40px',
  borderTop: `2px solid ${vars.color.gridCardDivider}`,
  borderBottom: `2px solid ${vars.color.gridCardDivider}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  selectors: {
    '&::before': {
      content: '',
      position: 'absolute',
      left: '-2px',
      top: '-2px',
      bottom: '-2px',
      width: '2px',
      background: vars.color.gridCardDivider,
    },
    '&::after': {
      content: '',
      position: 'absolute',
      right: '-2px',
      top: '-2px',
      bottom: '-2px',
      width: '2px',
      background: vars.color.gridCardDivider,
    },
  },
});

export const bracketLabel = style({
  fontSize: '13px',
  fontWeight: 600,
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  // color: vars.color.gridCardDivider,
});

export const imageWrapper = style({
  position: 'relative',
  width: '100%',
  maxWidth: '240px',
  aspectRatio: '3 / 4',
  borderRadius: '24px',
  overflow: 'hidden',
  background: `linear-gradient(145deg, ${teamColorVar}1A 0%, ${vars.color.gridCardBg} 100%)`,
  boxShadow: '0 18px 38px rgba(0, 0, 0, 0.45)',
  animation: `${floatIn} 420ms ease`,
});

export const driverImage = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transform: 'scale(1.08)',
});

export const info = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
});

export const driverName = style({
  display: 'flex',
  alignItems: 'baseline',
  justifyContent: 'center',
  gap: '8px',
  fontSize: '22px',
  fontWeight: 700,
  color: '#121212',
  letterSpacing: '-0.01em',
});

export const driverNumber = style({
  fontSize: '22px',
  fontWeight: 700,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  // color: vars.color.gridCardSubtleText,
});

export const teamName = style({
  fontSize: '16px',
  fontWeight: 600,
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
