import { style } from '@vanilla-extract/css';
import { colorVars } from '@shared/styles/color.css.ts';

export const page = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
  padding: '32px 0 48px',
  marginTop: '60px',
});

export const hero = style({
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '24px',
  border: `1px solid ${colorVars.border.panel}`,
  background: colorVars.surface.panel,
  boxShadow: colorVars.effect.elevation,
  padding: '40px',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});

export const heroAccent = style({
  position: 'absolute',
  inset: 0,
  background: colorVars.gradient.sidebarHighlight,
  opacity: 0.18,
  pointerEvents: 'none',
});

export const heroContent = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  color: colorVars.text.primary,
});

export const heroTitle = style({
  fontSize: '32px',
  fontWeight: 800,
  color: colorVars.text.heading,
  letterSpacing: '-0.01em',
});

export const heroDescription = style({
  fontSize: '16px',
  lineHeight: 1.7,
  color: colorVars.text.secondary,
  maxWidth: '680px',
});

export const heroMeta = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '12px 20px',
  color: colorVars.text.surface,
  fontSize: '14px',
});

export const section = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
});

export const sectionHeader = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

export const sectionTitle = style({
  fontSize: '22px',
  fontWeight: 700,
  color: colorVars.text.heading,
});

export const sectionDescription = style({
  fontSize: '15px',
  color: colorVars.text.secondary,
});

export const grid = style({
  display: 'grid',
  gap: '24px',
  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
});

export const statusCard = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '18px',
  border: `1px solid ${colorVars.border.panel}`,
  background: colorVars.surface.panel,
  padding: '48px 24px',
  color: colorVars.text.secondary,
  textAlign: 'center',
  minHeight: '240px',
});
