import { style, styleVariants } from '@vanilla-extract/css';
import { colorVars } from '@shared/styles/color.css.ts';

export const dashboard = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
  width: '100%',
  padding: '24px 0 64px',
});

export const header = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  maxWidth: '760px',
  marginLeft: '24px',
});

export const title = style({
  fontSize: '32px',
  fontWeight: 800,
  letterSpacing: '-0.01em',
  color: colorVars.text.heading,
});

export const description = style({
  fontSize: '16px',
  lineHeight: 1.7,
  color: colorVars.text.secondary,
  wordBreak: 'keep-all',
});

export const grid = style({
  display: 'grid',
  gap: '28px',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  '@media': {
    'screen and (max-width: 1024px)': {
      gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
    },
  },
});

export const card = style({
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '24px',
  padding: '28px 28px 0',
  minHeight: '280px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '20px',
  color: '#ffffff',
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
  paddingBottom: '20px',
});

export const teamHeader = style({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
});

export const teamLogo = style({
  width: '52px',
  height: '52px',
  borderRadius: '16px',
  backgroundColor: 'rgba(255, 255, 255, 0.16)',
  padding: '10px',
  objectFit: 'contain',
});

export const teamMeta = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

export const teamName = style({
  fontSize: '22px',
  fontWeight: 800,
  letterSpacing: '-0.01em',
});

export const dataTag = style({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '6px 12px',
  borderRadius: '999px',
  fontSize: '13px',
  fontWeight: 600,
  backgroundColor: 'rgba(255, 255, 255, 0.22)',
  color: '#ffffff',
  letterSpacing: '0.01em',
});

export const driverList = style({
  listStyle: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  gap: '16px',
  flexWrap: 'wrap',
});

export const driver = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  padding: '12px 16px',
  borderRadius: '18px',
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  backdropFilter: 'blur(6px)',
  boxShadow: '0 12px 24px rgba(0, 0, 0, 0.18)',
});

export const driverAvatar = style({
  width: '56px',
  height: '56px',
  borderRadius: '50%',
  objectFit: 'cover',
  border: '2px solid rgba(255, 255, 255, 0.8)',
  backgroundColor: 'rgba(0, 0, 0, 0.1)',
});

export const driverName = style({
  fontSize: '15px',
  fontWeight: 600,
  letterSpacing: '0.01em',
});

export const carImage = style({
  width: '100%',
  maxWidth: '520px',
  height: 'auto',
  alignSelf: 'flex-end',
  transform: 'translateY(12px)',
  filter: 'drop-shadow(0 18px 36px rgba(0, 0, 0, 0.35))',
});
