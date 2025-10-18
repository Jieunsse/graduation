import { style } from '@vanilla-extract/css';
import { colorVars } from '../../../shared/styles/color.css.ts';

export const card = style({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '20px',
  overflow: 'hidden',
  background: colorVars.surface.panel,
  border: `1px solid ${colorVars.border.panel}`,
  color: colorVars.text.primary,
  minHeight: '100%',
  boxShadow: colorVars.effect.elevation,
  transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
  selectors: {
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: colorVars.effect.sidebarActiveShadow,
      borderColor: colorVars.border.controlHover,
    },
  },
});

export const imageWrapper = style({
  position: 'relative',
  padding: '20px 24px 0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  background: colorVars.surface.control,
  borderBottom: `1px solid ${colorVars.border.panel}`,
});

export const driverImage = style({
  width: '100%',
  maxWidth: '220px',
  height: 'auto',
  objectFit: 'contain',
  filter: 'drop-shadow(0 18px 36px rgba(0, 0, 0, 0.25))',
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  padding: '20px 24px 24px',
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '12px',
  color: colorVars.text.secondary,
  fontSize: '14px',
});

export const numberBadge = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '4px 10px',
  borderRadius: '999px',
  background: colorVars.brand.primary,
  color: colorVars.brand.onPrimary,
  fontWeight: 700,
  fontSize: '14px',
  letterSpacing: '0.04em',
});

export const flag = style({
  fontSize: '20px',
  lineHeight: 1,
});

export const name = style({
  fontSize: '22px',
  fontWeight: 700,
  color: colorVars.text.heading,
  letterSpacing: '-0.01em',
});

export const team = style({
  fontSize: '15px',
  color: colorVars.text.secondary,
});

export const statList = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
  gap: '12px',
});

export const statItem = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  padding: '12px',
  borderRadius: '12px',
  background: colorVars.surface.control,
  border: `1px solid ${colorVars.border.control}`,
  transition: 'border-color 0.3s ease, background 0.3s ease',
  selectors: {
    [`${card}:hover &`]: {
      borderColor: colorVars.border.controlHover,
      background: colorVars.surface.controlHover,
    },
  },
});

export const statLabel = style({
  fontSize: '12px',
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  color: colorVars.text.surfaceMuted,
});

export const statValue = style({
  fontSize: '18px',
  fontWeight: 700,
  color: colorVars.text.primary,
});
