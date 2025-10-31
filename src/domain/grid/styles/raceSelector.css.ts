import { style } from '@vanilla-extract/css';
import { vars } from '@shared/styles/token.css.ts';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  minWidth: 'min(260px, 100%)',
  flex: '1 1 220px',
});

export const label = style({
  fontSize: '12px',
  fontWeight: 700,
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color: vars.color.gridCardSubtleText,
  selectors: {
    ':root.light &': {
      color: '#121212',
    },
  },
});

export const select = style({
  appearance: 'none',
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  padding: '12px 16px',
  textAlign: 'center',
  borderRadius: '999px',
  border: `1px solid ${vars.color.gridCardBorder}`,
  background: vars.color.gridCardBg,
  color: vars.color.gridCardText,
  fontSize: '15px',
  fontWeight: 600,
  lineHeight: 1.4,
  outline: 'none',
  cursor: 'pointer',
  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  boxShadow: '0 12px 24px rgba(15, 23, 42, 0.18)',
  selectors: {
    '&:focus-visible': {
      borderColor: vars.color.gridControlActiveBorder,
      boxShadow: '0 0 0 3px rgba(129, 140, 248, 0.35)',
    },
    ':root.light &': {
      background: '#6366F1EE',
    },
  },
  '@media': {
    '(max-width: 480px)': {
      width: '100%',
    },
  },
});

export const selectWrapper = style({
  position: 'relative',
  width: '100%',
});

export const selectChevron = style({
  position: 'absolute',
  top: '50%',
  right: '16px',
  width: '12px',
  height: '12px',
  pointerEvents: 'none',
  transform: 'translateY(-50%) rotate(45deg)',
  borderBottom: `2px solid ${vars.color.gridCardSubtleText}`,
  borderRight: `2px solid ${vars.color.gridCardSubtleText}`,
});
