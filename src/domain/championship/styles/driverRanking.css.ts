import { style, styleVariants } from '@vanilla-extract/css';
import { colorVars } from '@shared/styles/color.css.ts';

export const page = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
  padding: '32px 0 64px',
  marginTop: '60px',
});

export const hero = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  padding: '28px',
  borderRadius: '24px',
  overflow: 'hidden',
  border: `1px solid ${colorVars.border.panel}`,
});

export const heroAccent = style({
  position: 'absolute',
  inset: 0,
  opacity: 0.22,
  pointerEvents: 'none',
  background: colorVars.gradient.callout,
});

export const heroContent = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

export const heroTitle = style({
  fontSize: '34px',
  fontWeight: 800,
  letterSpacing: '-0.02em',
  color: colorVars.text.heading,
});

export const heroDescription = style({
  fontSize: '16px',
  lineHeight: 1.7,
  maxWidth: '680px',
  color: colorVars.text.secondary,
});

export const heroMeta = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '12px',
  fontSize: '13px',
  color: colorVars.text.surfaceMuted,
});

export const rankingSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  padding: '0 24px',
});

export const sectionHeader = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  maxWidth: '760px',
});

export const sectionTitle = style({
  fontSize: '28px',
  fontWeight: 800,
  letterSpacing: '-0.01em',
  color: colorVars.text.heading,
});

export const sectionDescription = style({
  fontSize: '15px',
  lineHeight: 1.7,
  color: colorVars.text.secondary,
});

export const grid = style({
  display: 'grid',
  gap: '28px',
  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  '@media': {
    'screen and (max-width: 1440px)': {
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    },
    'screen and (max-width: 768px)': {
      gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
    },
  },
});

export const card = style({
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '24px',
  padding: '28px',
  minHeight: '320px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '24px',
  color: colorVars.neutral.white,
  boxShadow: '0 28px 48px rgba(15, 23, 42, 0.32)',
  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
  selectors: {
    '&:hover': {
      transform: 'translateY(-6px) scale(1.01)',
      boxShadow: '0 36px 72px rgba(15, 23, 42, 0.38)',
    },
  },
});

export const cardThemes = styleVariants({
  mclaren: { background: 'linear-gradient(135deg, #ff6f00 0%, #ff9500 100%)' },
  ferrari: { background: 'linear-gradient(135deg, #d90429 0%, #ef233c 100%)' },
  mercedes: { background: 'linear-gradient(135deg, #0f9ba8 0%, #2ec4b6 100%)' },
  redbull: { background: 'linear-gradient(135deg, #1d3557 0%, #457b9d 100%)' },
  williams: { background: 'linear-gradient(135deg, #0077b6 0%, #0096c7 100%)' },
  racingbulls: {
    background: 'linear-gradient(135deg, #3a0ca3 0%, #4361ee 100%)',
  },
  astonmartin: {
    background: 'linear-gradient(135deg, #016450 0%, #01a982 100%)',
  },
  haas: { background: 'linear-gradient(135deg, #a4133c 0%, #ff4d6d 100%)' },
  kicksauber: {
    background: 'linear-gradient(135deg, #008b8b 0%, #00c4b3 100%)',
  },
  alpine: { background: 'linear-gradient(135deg, #005f99 0%, #00b4d8 100%)' },
});

export const cardBody = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});

export const driverHeader = style({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
});

export const teamLogo = style({
  width: '56px',
  height: '56px',
  borderRadius: '18px',
  backgroundColor: 'rgba(255, 255, 255, 0.16)',
  padding: '12px',
  objectFit: 'contain',
});

export const driverMeta = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
});

export const driverCode = style({
  fontSize: '13px',
  fontWeight: 700,
  letterSpacing: '0.3em',
  textTransform: 'uppercase',
  opacity: 0.8,
});

export const driverName = style({
  fontSize: '24px',
  fontWeight: 800,
  letterSpacing: '-0.01em',
});

export const infoRow = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '12px',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const teamBadge = style({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '8px 16px',
  borderRadius: '999px',
  fontSize: '13px',
  fontWeight: 600,
  backgroundColor: 'rgba(255, 255, 255, 0.22)',
  color: colorVars.neutral.white,
  letterSpacing: '0.02em',
});

export const points = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  gap: '6px',
});

export const pointsLabel = style({
  fontSize: '12px',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  opacity: 0.75,
});

export const pointsValue = style({
  fontSize: '28px',
  fontWeight: 800,
  letterSpacing: '-0.01em',
});

export const driverImage = style({
  width: '100%',
  maxWidth: '320px',
  height: 'auto',
  alignSelf: 'flex-end',
  transform: 'translateY(12px)',
  filter: 'drop-shadow(0 18px 36px rgba(0, 0, 0, 0.35))',
});
