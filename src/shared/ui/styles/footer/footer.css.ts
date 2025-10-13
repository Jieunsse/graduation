// src/shared/ui/footer/footer.css.ts
import { style } from '@vanilla-extract/css';
import { colorVars } from '@shared/styles/color.css.ts';
import { vars } from '@shared/styles/token.css.ts';

export const box = style({
  bottom: 10,
  left: vars.layout.sidebarWidth,
  width: '1200px',
  height: '200px',
  background: colorVars.surface.background,
  border: `1px solid ${colorVars.border.footer}`,
  borderTop: `1px solid ${colorVars.border.footerTop}`,
  borderRadius: '42px',
  zIndex: 1000,
});

export const container = style({
  width: '100%',
  maxWidth: '1000px',
  padding: '32px 24px',
  margin: '0 auto',
  color: colorVars.text.surface,
});

export const footerRow = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: '2rem',
});

export const logoSection = style({
  flex: 1,
});

export const logo = style({
  fontFamily: 'Teko, sans-serif',
  color: colorVars.brand.primary,
  fontSize: '28px',
  marginBottom: '8px',
});

export const copy = style({
  fontSize: '13px',
  color: colorVars.text.surfaceMuted,
});

export const menuSection = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '2rem',
  flex: 2,
});

export const menuHeading = style({
  fontSize: '14px',
  fontWeight: 600,
  marginBottom: '0.75rem',
  color: colorVars.text.heading,
});

export const menuList = style({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
});

export const menuItem = style({
  fontSize: '13px',
  color: colorVars.text.menuItem,
  cursor: 'pointer',
  transition: 'color 0.2s ease',
  ':hover': {
    color: colorVars.text.menuItemHover,
  },
});
