import { style } from '@vanilla-extract/css';
import { vars } from '@shared/styles/token.css.ts';

export const container = style({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
});

export const frame = style({
  position: 'relative',
  width: 'min(100%, 440px)',
  padding: '36px 32px 28px',
  borderTop: '2px solid currentColor',
  borderLeft: '2px solid currentColor',
  borderRight: '2px solid currentColor',
  color: vars.color.gridCardDivider,
  display: 'flex',
  justifyContent: 'center',
});

export const positionLabel = style({
  position: 'absolute',
  top: '-18px',
  left: '50%',
  transform: 'translateX(-50%)',
  fontSize: '20px',
  fontWeight: 800,
  fontStyle: 'italic',
  letterSpacing: '0.08em',
  padding: '6px 12px',
  borderRadius: '999px',
  background: vars.color.gridCardBg,
  color: vars.color.gridCardAccent,
  boxShadow: '0 10px 24px rgba(0, 0, 0, 0.28)',
});

export const frameInner = style({
  width: '100%',
  maxWidth: '360px',
  display: 'flex',
  justifyContent: 'center',
  paddingInline: '4px',
});
