import { globalStyle, style } from '@vanilla-extract/css';
import { colorVars } from '@shared/styles/color.css.ts';

export const root = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  width: '100%',
  minWidth: 180,
});

export const label = style({
  fontSize: 14,
  fontWeight: 600,
  color: colorVars.text.surface,
});

export const trigger = style({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 12,
  padding: '12px 16px',
  borderRadius: 12,
  border: `1px solid ${colorVars.border.control}`,
  background: colorVars.surface.control,
  color: colorVars.text.control,
  fontSize: 14,
  fontWeight: 500,
  cursor: 'pointer',
  transition:
    'background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease, color 0.2s ease',
  selectors: {
    '&:focus-visible': {
      outline: 'none',
      boxShadow: colorVars.effect.focusRing,
      borderColor: colorVars.border.focus,
    },
  },
});

export const triggerOpen = style({
  borderColor: colorVars.border.controlHover,
  background: colorVars.surface.controlHover,
  color: colorVars.text.controlHover,
});

export const chevron = style({
  transition: 'transform 0.2s ease',
});

export const chevronOpen = style({
  transform: 'rotate(180deg)',
});

export const menu = style({
  position: 'absolute',
  top: 'calc(100% + 8px)',
  left: 0,
  width: '100%',
  borderRadius: 12,
  border: `1px solid ${colorVars.border.panel}`,
  background: colorVars.surface.panel,
  boxShadow: colorVars.effect.elevation,
  overflow: 'hidden',
  zIndex: 10,
});

export const option = style({
  width: '100%',
  padding: '12px 16px',
  background: 'transparent',
  border: 'none',
  textAlign: 'left',
  color: colorVars.text.surface,
  fontSize: 14,
  fontWeight: 500,
  cursor: 'pointer',
  transition: 'background-color 0.2s ease, color 0.2s ease',
  selectors: {
    '&:hover': {
      background: colorVars.surface.interactiveHover,
      color: colorVars.text.menuItemHover,
    },
    '&:focus-visible': {
      outline: 'none',
      background: colorVars.surface.interactiveActive,
      color: colorVars.text.menuItemHover,
    },
  },
});

export const optionActive = style({
  background: colorVars.surface.active,
  color: colorVars.text.menuActive,
});

globalStyle(`.light .${label}`, {
  color: colorVars.text.surface,
});
