import { keyframes, style } from '@vanilla-extract/css';
import { colorVars } from '@shared/styles/color.css.ts';

const pulse = keyframes({
  '0%': { opacity: 0.4 },
  '50%': { opacity: 0.9 },
  '100%': { opacity: 0.4 },
});

export const section = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 18,
});

export const sectionHeader = style({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  gap: 12,
});

export const sectionTitle = style({
  margin: 0,
  fontSize: 24,
  fontWeight: 700,
  letterSpacing: '-0.01em',
  color: colorVars.text.heading,
});

export const sectionCaption = style({
  margin: 0,
  fontSize: 14,
  color: colorVars.text.secondary,
});

export const podiumGrid = style({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-end',
  gap: 20,
});

export const podiumSkeletonRow = style({
  display: 'grid',
  gap: 20,
  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
});

export const skeletonCard = style({
  position: 'relative',
  height: 320,
  borderRadius: 28,
  background: 'linear-gradient(135deg, rgba(30, 38, 62, 0.45), rgba(20, 24, 38, 0.65))',
  overflow: 'hidden',
  animation: `${pulse} 1.6s ease-in-out infinite`,
  selectors: {
    ":root[data-theme='light'] &": {
      background: 'linear-gradient(135deg, rgba(225, 231, 255, 0.65), rgba(205, 214, 255, 0.65))',
    },
  },
});

export const skeletonChart = style({
  height: 360,
  borderRadius: 28,
  background: 'linear-gradient(135deg, rgba(30, 38, 62, 0.45), rgba(20, 24, 38, 0.65))',
  animation: `${pulse} 1.6s ease-in-out infinite`,
  selectors: {
    ":root[data-theme='light'] &": {
      background: 'linear-gradient(135deg, rgba(225, 231, 255, 0.65), rgba(205, 214, 255, 0.65))',
    },
  },
});

export const chartWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
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

