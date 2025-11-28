import { style } from '@vanilla-extract/css';
import { vars } from '@shared/styles/token.css.ts';

export const container = style({
  display: 'flex',
  position: 'relative',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '12px',
  paddingInline: '12px',
});

export const frame = style({
  position: 'relative',
  width: 'min(100%, 520px)',
  padding: '52px 44px 48px',
  color: vars.color.gridCardDivider,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '22px 22px 0 0',
  selectors: {
    '&::before': {
      content: '',
      position: 'absolute',
      inset: 0,
      borderTop: '3px solid currentColor',
      borderLeft: '3px solid currentColor',
      borderRight: '3px solid currentColor',
      borderBottom: 'none',
      borderRadius: '22px 22px 0 0',
      pointerEvents: 'none',
    },
  },
});

export const positionLabel = style({
  position: 'relative',
  fontSize: '20px',
  fontWeight: 800,
  fontStyle: 'italic',
  letterSpacing: '0.08em',
  padding: '8px 14px',
  borderRadius: '999px',
  background: vars.color.gridCardBg,
  color: vars.color.gridCardAccent,
  boxShadow: '0 10px 24px rgba(0, 0, 0, 0.28)',
  transform: 'translateY(8px)',
  zIndex: 1,
});

export const frameInner = style({
  width: '100%',
  maxWidth: '360px',
  display: 'flex',
  justifyContent: 'center',
  padding: '10px 8px',
});
