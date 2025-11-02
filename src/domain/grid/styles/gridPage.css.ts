import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@shared/styles/token.css.ts';
import { colorVars } from '@shared/styles/color.css.ts';
import * as cardStyles from '@domain/grid/styles/gridCard.css.ts';

export const page = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '48px',
  paddingBottom: '64px',
  marginTop: '100px',
});

export const hero = style({
  position: 'relative',
  borderRadius: '36px',
  overflow: 'hidden',
  border: `1px solid ${vars.color.gridHeroBorder}`,
  boxShadow: '0 40px 120px rgba(5, 10, 28, 0.6)',
  padding: '48px clamp(24px, 4vw, 64px)',
  color: '#2f3762',
  isolation: 'isolate',
  selectors: {
    '&::after': {
      content: '',
      position: 'absolute',
      inset: 0,
      opacity: 0.7,
      pointerEvents: 'none',
      zIndex: -1,
      background: colorVars.surface.panel,
    },
  },
});

export const heroMeta = style({
  display: 'flex',
  gap: '16px',
  flexWrap: 'wrap',
  fontSize: '14px',
  textTransform: 'uppercase',
  letterSpacing: '0.24em',
  // color: vars.color.gridCardSubtleText,
  fontWeight: 600,
});

export const heroTitle = style({
  marginTop: '16px',
  fontSize: '48px',
  fontWeight: 800,
  letterSpacing: '-0.02em',
});

export const heroDescription = style({
  marginTop: '18px',
  maxWidth: '640px',
  lineHeight: 1.7,
  fontSize: '17px',
});

export const heroAlert = style({
  marginTop: '18px',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '10px',
  padding: '12px 18px',
  borderRadius: '16px',
  border: `1px solid ${vars.color.gridWarningBorder}`,
  background: vars.color.gridWarningBg,
  color: vars.color.gridWarningText,
  fontSize: '14px',
  letterSpacing: '0.05em',
  textTransform: 'uppercase',
});

export const controls = style({
  marginTop: '32px',
  display: 'flex',
  gap: '12px',
  flexWrap: 'wrap',
});

export const controlButtonGroup = style({
  display: 'flex',
  gap: '12px',
  flexWrap: 'wrap',
  alignItems: 'center',
});

export const controlButton = style({
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '12px 22px',
  borderRadius: '999px',
  border: `1px solid ${vars.color.gridCardBorder}`,
  background: vars.color.gridControlActiveBg,
  color: vars.color.gridCardText,
  fontSize: '15px',
  fontWeight: 600,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  cursor: 'pointer',
  transition: 'border-color 0.2s ease, background 0.2s ease, color 0.2s ease',
});

export const controlButtonVariants = styleVariants({
  active: [
    controlButton,
    {
      background: vars.color.gridControlActiveBg,
      color: vars.color.gridControlActiveText,
      borderColor: vars.color.gridControlActiveBorder,
      boxShadow: '0 16px 34px rgba(5, 10, 28, 0.35)',
    },
  ],
  inactive: [
    controlButton,
    {
      selectors: {
        '&:hover': {
          borderColor: vars.color.gridControlHoverBorder,
          background: vars.color.gridControlHoverBg,
        },
      },
    },
  ],
});

export const gridSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '28px',
});

export const sectionHeader = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
});

export const sectionTitle = style({
  fontSize: '28px',
  fontWeight: 700,
  letterSpacing: '-0.01em',
  // color: vars.color.gridCardText,
});

export const sectionDescription = style({
  fontSize: '16px',
  lineHeight: 1.65,
  // color: vars.color.gridCardSubtleText,
  maxWidth: '680px',
});

export const gridList = style({
  display: 'grid',
  gap: '32px',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  '@media': {
    '(min-width: 960px)': {
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    },
  },
});

export const statusCard = style({
  padding: '32px',
  borderRadius: '24px',
  background: vars.color.gridStatusBg,
  border: `1px solid ${vars.color.gridStatusBorder}`,
  color: vars.color.gridCardText,
  textAlign: 'center',
  fontSize: '16px',
  lineHeight: 1.6,
});

export const skeletonCard = style([cardStyles.card, cardStyles.cardSkeleton]);

export const skeletonList = style({
  display: 'grid',
  gap: '32px',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  '@media': {
    '(min-width: 960px)': {
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    },
  },
});

export const errorCard = style([
  statusCard,
  {
    color: vars.color.gridErrorText,
    borderColor: vars.color.gridErrorBorder,
  },
]);

export const loadingMessage = style([
  statusCard,
  {
    fontWeight: 600,
    letterSpacing: '0.02em',
  },
]);
