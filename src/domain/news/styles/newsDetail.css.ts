import { style } from '@vanilla-extract/css';
import { colorVars } from '@shared/styles/color.css.ts';

export const page = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  padding: '32px 0 48px',
  marginTop: '60px',
});

export const backButton = style({
  alignSelf: 'flex-start',
  padding: '10px 14px',
  borderRadius: '12px',
  border: `1px solid ${colorVars.border.control}`,
  background: colorVars.surface.control,
  color: colorVars.text.primary,
  fontSize: '14px',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  selectors: {
    '&:hover': {
      borderColor: colorVars.border.controlHover,
      background: colorVars.surface.controlHover,
      color: colorVars.text.heading,
    },
  },
});

export const stateCard = style({
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

export const article = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  borderRadius: '24px',
  border: `1px solid ${colorVars.border.panel}`,
  background: colorVars.surface.panel,
  boxShadow: colorVars.effect.elevation,
  padding: '32px',
});

export const header = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
});

export const metaRow = style({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: '12px',
  color: colorVars.text.surface,
  fontSize: '14px',
});

export const source = style({
  padding: '6px 10px',
  borderRadius: '10px',
  background: colorVars.surface.tag,
  color: colorVars.text.tag,
  fontWeight: 700,
});

export const date = style({
  color: colorVars.text.secondary,
});

export const readingTime = style({
  color: colorVars.text.secondary,
});

export const title = style({
  fontSize: '30px',
  fontWeight: 800,
  color: colorVars.text.heading,
  letterSpacing: '-0.01em',
  lineHeight: 1.3,
});

export const excerpt = style({
  fontSize: '16px',
  lineHeight: 1.7,
  color: colorVars.text.secondary,
});

export const infoRow = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px',
});

export const infoChip = style({
  padding: '8px 12px',
  borderRadius: '10px',
  background: colorVars.surface.active,
  color: colorVars.text.surface,
  border: `1px solid ${colorVars.border.panel}`,
  fontSize: '13px',
});

export const heroImageWrapper = style({
  overflow: 'hidden',
  borderRadius: '18px',
  border: `1px solid ${colorVars.border.panel}`,
  background: colorVars.surface.control,
  maxHeight: '380px',
});

export const heroImage = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block',
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '18px',
  color: colorVars.text.primary,
  fontSize: '16px',
  lineHeight: 1.8,
});

export const paragraph = style({
  margin: 0,
});

export const footer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '14px',
  borderTop: `1px solid ${colorVars.border.panel}`,
  paddingTop: '16px',
});

export const tags = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px',
});

export const tag = style({
  padding: '6px 10px',
  borderRadius: '10px',
  background: colorVars.surface.tag,
  color: colorVars.text.tag,
  fontSize: '13px',
  fontWeight: 600,
});

export const actions = style({
  display: 'flex',
  justifyContent: 'flex-end',
});

export const sourceButton = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '12px 18px',
  borderRadius: '12px',
  background: colorVars.brand.primary,
  color: colorVars.brand.onPrimary,
  border: `1px solid ${colorVars.brand.primaryHover}`,
  fontWeight: 700,
  textDecoration: 'none',
  transition: 'transform 0.15s ease, box-shadow 0.15s ease',
  boxShadow: colorVars.effect.brandShadow,
  selectors: {
    '&:hover': {
      background: colorVars.brand.primaryHover,
      color: colorVars.brand.onPrimaryHover,
      transform: 'translateY(-1px)',
      boxShadow: colorVars.effect.brandShadowHover,
    },
  },
});
