// src/shared/ui/header/header.css.ts
import { style } from '@vanilla-extract/css';
import { colorVars } from '@shared/styles/color.css.ts';

export const box = style({
  position: 'fixed',
  top: 0,
  left: '268px', // 사이드바 width 고정
  width: `calc(100% - 268px)`,
  height: '70px',
  zIndex: 1000,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const container = style({
  width: '100%',
  maxWidth: '1200px',
  padding: '0 24px',
  marginTop: '12px',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  background: colorVars.surface.panel,
  border: `1px solid ${colorVars.border.panel}`,
  borderRadius: '12px',
  boxShadow: colorVars.effect.elevation,
});

export const headerRow = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const logo = style({
  fontFamily: 'Teko, serif',
  color: colorVars.brand.primary,
  fontSize: '40px',
  marginTop: '8px',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
});

export const buttonStyle = style({
  border: 'none',
  cursor: 'pointer',
  padding: '10px 16px',
  backgroundColor: 'transparent',
  color: colorVars.text.surface,
  fontFamily: `'Paperozi', sans-serif`,
  fontWeight: 400,
  fontSize: '16px',
  borderRadius: '12px',
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  lineHeight: 1,
  transition:
    'background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease',
  selectors: {
    '&:visited': {
      color: colorVars.text.surface,
    },
  },

  ':hover': {
    background: colorVars.surface.interactiveHover,
    color: colorVars.text.menuButtonHover,
  },
});

export const buttonActive = style({
  background: colorVars.surface.interactiveActive,
  color: colorVars.text.menuButtonHover,
  boxShadow: colorVars.effect.focusRing,
});

export const loginButtonStyle = style({
  border: 'none',
  cursor: 'pointer',
  padding: '10px 16px',
  background: colorVars.gradient.callout,
  borderRadius: '12px',
  fontFamily: `'Paperozi', sans-serif`,
  fontWeight: 500,
  color: colorVars.text.onCallout,
  boxShadow: colorVars.effect.calloutShadow,
  transition: 'background 0.2s ease',

  ':hover': {
    background: colorVars.gradient.calloutHover,
    color: colorVars.text.onCalloutHover,
  },
});

export const logoutButtonStyle = style({
  border: 'none',
  cursor: 'pointer',
  padding: '10px 16px',
  borderRadius: '12px',
  fontFamily: `'Paperozi', sans-serif`,
  fontWeight: 500,
  background: colorVars.gradient.callout,
  color: colorVars.text.onCallout,
  boxShadow: colorVars.effect.calloutShadow,
  transition:
    'background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease',

  ':hover': {
    background: colorVars.gradient.calloutHover,
    color: colorVars.text.onCalloutHover,
    boxShadow: colorVars.effect.calloutShadowHover,
  },

  selectors: {
    '.dark &': {
      background: colorVars.text.onCallout,
      color: colorVars.brand.primary,
      boxShadow: colorVars.effect.brandShadow,
    },
    '.dark &:hover': {
      background: colorVars.text.onCalloutHover,
      color: colorVars.brand.primaryHover,
      boxShadow: colorVars.effect.brandShadowHover,
    },
  },
});
