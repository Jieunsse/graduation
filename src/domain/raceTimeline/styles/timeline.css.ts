import { globalStyle, style, styleVariants } from '@vanilla-extract/css';
import type { RaceEventType } from '../types/raceEvent.ts';

const eventColors: Record<RaceEventType, { base: string; glow: string }> = {
  OVERTAKE: { base: '#3dd68c', glow: 'rgba(61, 214, 140, 0.25)' },
  CRASH: { base: '#ef4444', glow: 'rgba(239, 68, 68, 0.25)' },
  PIT_STOP: { base: '#38bdf8', glow: 'rgba(56, 189, 248, 0.25)' },
  SAFETY_CAR: { base: '#facc15', glow: 'rgba(250, 204, 21, 0.25)' },
  RED_FLAG: { base: '#f87171', glow: 'rgba(248, 113, 113, 0.3)' },
};

export const page = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: 32,
  paddingTop: 104,
  paddingBottom: 120,
});

export const hero = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: 18,
  padding: '36px 40px',
  borderRadius: 24,
  // background:
  //   'linear-gradient(135deg, rgba(15, 21, 35, 0.94), rgba(155, 17, 18, 0.58))',
  border: '1px solid rgba(155, 17, 18, 0.35)',
  boxShadow: '0 24px 48px rgba(9, 12, 24, 0.46)',
  overflow: 'hidden',
});

export const heroGlow = style({
  position: 'absolute',
  inset: '-80px -120px auto auto',
  width: 320,
  height: 320,
  borderRadius: '50%',
  filter: 'blur(0px)',
  pointerEvents: 'none',
});

export const heroMeta = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 18,
  color: 'rgba(221, 227, 255, 0.76)',
  fontSize: 13,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
});

export const heroTitle = style({
  margin: 0,
  fontSize: 36,
  fontWeight: 700,
  letterSpacing: '-0.01em',
  color: 'rgba(255, 255, 255, 0.94)',
});

export const heroDescription = style({
  margin: 0,
  maxWidth: 560,
  lineHeight: 1.6,
  fontSize: 16,
  color: 'rgba(221, 227, 255, 0.82)',
  wordBreak: 'keep-all',
});

export const layout = style({
  display: 'grid',
  gap: 28,
  gridTemplateColumns: 'minmax(0, 1fr)',

  '@media': {
    'screen and (min-width: 1180px)': {
      gridTemplateColumns: 'minmax(0, 2fr) minmax(320px, 1fr)',
    },
  },
});

export const timelineSurface = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: 32,
  padding: '32px 36px',
  borderRadius: 24,
  background: 'rgba(10, 15, 28, 0.88)',
  border: '1px solid rgba(63, 77, 126, 0.45)',
  boxShadow: '0 18px 42px rgba(9, 12, 24, 0.42)',
  backdropFilter: 'blur(16px)',
  overflow: 'hidden',
});

export const surfaceHeader = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
});

export const surfaceTitle = style({
  margin: 0,
  fontSize: 20,
  fontWeight: 600,
  color: 'rgba(221, 227, 255, 0.92)',
});

export const surfaceSubtitle = style({
  margin: 0,
  fontSize: 14,
  color: 'rgba(200, 206, 240, 0.72)',
});

export const sliderContainer = style({
  position: 'relative',
  paddingTop: 18,
  paddingBottom: 28,
});

export const sliderRoot = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  height: 32,
  width: '100%',
});

export const sliderTrack = style({
  position: 'relative',
  flexGrow: 1,
  height: 24,
  borderRadius: 24,
  background:
    'linear-gradient(90deg, rgba(41, 53, 92, 0.65), rgba(82, 102, 171, 0.65))',
  overflow: 'hidden',
});

export const sliderRange = style({
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '0%',
  background:
    'linear-gradient(90deg, rgba(155, 17, 18, 0.65), rgba(134, 159, 255, 0.85))',
  borderRadius: 999,
  transition: 'width 0.15s ease-out',
});

export const sliderThumb = style({
  position: 'absolute',
  top: '50%',
  width: 20,
  height: 20,
  borderRadius: '50%',
  background: '#ffffff',
  boxShadow: '0 6px 16px rgba(155, 17, 18, 0.35)',
  border: '2px solid rgba(155, 17, 18, 0.75)',
  transform: 'translate(-50%, -50%)',
  pointerEvents: 'none',
  transition: 'left 0.15s ease-out, box-shadow 0.2s ease',
});

export const sliderInput = style({
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  opacity: 0,
  cursor: 'pointer',
  selectors: {
    '&:disabled': {
      cursor: 'not-allowed',
    },
  },
});

export const markerLayer = style({
  position: 'absolute',
  top: '50%',
  left: 0,
  width: '100%',
  transform: 'translateY(-50%)',
  pointerEvents: 'none',
});

export const marker = style({
  position: 'absolute',
  width: 18,
  height: 18,
  borderRadius: '50%',
  transform: 'translate(-50%, -50%)',
  border: '2px solid rgba(9, 12, 24, 0.85)',
  cursor: 'pointer',
  pointerEvents: 'auto',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  ':hover': {
    transform: 'translate(-50%, -50%) scale(1.15)',
  },
});

export const markerByType = styleVariants(eventColors, ({ base, glow }) => ({
  background: base,
  boxShadow: `0 0 0 4px ${glow}`,
}));

export const markerActive = style({
  transform: 'translate(-50%, -50%) scale(1.25)',
  filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.35))',
});

export const playheadTime = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 16,
  fontSize: 14,
  color: 'rgba(200, 206, 240, 0.75)',
});

export const controlsRow = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 12,
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const controlGroup = style({
  display: 'flex',
  alignItems: 'center',
  gap: 12,
});

export const controlLabel = style({
  fontSize: 13,
  color: 'rgba(200, 206, 240, 0.78)',
});

export const controlButton = style({
  border: '1px solid rgba(134, 159, 255, 0.45)',
  borderRadius: 999,
  padding: '10px 18px',
  background: 'rgba(18, 26, 46, 0.6)',
  color: 'rgba(221, 227, 255, 0.92)',
  fontSize: 14,
  fontWeight: 500,
  cursor: 'pointer',
  transition: 'background 0.2s ease, border-color 0.2s ease, color 0.2s ease',
  selectors: {
    '&:disabled': {
      opacity: 0.45,
      cursor: 'not-allowed',
      boxShadow: 'none',
    },
  },
  ':hover': {
    background: 'rgba(39, 51, 86, 0.72)',
    borderColor: 'rgba(174, 193, 255, 0.75)',
  },
});

export const controlButtonPrimary = style({
  background:
    'linear-gradient(135deg, rgba(155, 17, 18, 0.85), rgba(134, 159, 255, 0.65))',
  borderColor: 'rgba(255, 255, 255, 0.32)',
  color: '#ffffff',
});

export const controlButtonActive = style({
  background: 'rgba(134, 159, 255, 0.85)',
  color: '#0a0f1c',
});

export const eventPanel = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  padding: '28px 30px',
  borderRadius: 24,
  background: 'rgba(10, 15, 28, 0.78)',
  border: '1px solid rgba(63, 77, 126, 0.42)',
  boxShadow: '0 18px 42px rgba(9, 12, 24, 0.42)',
  minHeight: 360,
});

export const eventHeader = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
});

export const eventTitle = style({
  margin: 0,
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  fontSize: 22,
  fontWeight: 600,
  color: 'rgba(221, 227, 255, 0.92)',
});

export const eventMeta = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 12,
  fontSize: 13,
  color: 'rgba(200, 206, 240, 0.72)',
});

export const eventDescription = style({
  margin: 0,
  fontSize: 15,
  lineHeight: 1.6,
  color: 'rgba(221, 227, 255, 0.84)',
});

export const relatedDrivers = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 8,
  fontSize: 13,
  color: 'rgba(200, 206, 240, 0.78)',
});

export const relatedBadge = style({
  padding: '6px 12px',
  borderRadius: 999,
  background: 'rgba(39, 51, 86, 0.62)',
  border: '1px solid rgba(134, 159, 255, 0.32)',
});

export const upcomingList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
});

export const upcomingItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  padding: '12px 14px',
  borderRadius: 16,
  border: '1px solid rgba(63, 77, 126, 0.35)',
  background: 'rgba(12, 18, 32, 0.6)',
});

export const upcomingMeta = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  fontSize: 13,
  color: 'rgba(200, 206, 240, 0.78)',
});

export const emptyState = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: '48px 24px',
  borderRadius: 20,
  background: 'rgba(9, 12, 24, 0.55)',
  border: '1px dashed rgba(63, 77, 126, 0.45)',
  color: 'rgba(200, 206, 240, 0.7)',
  fontSize: 15,
});

export const eventIcon = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  color: '#0a0f1c',
  fontWeight: 700,
  background: '#ffffff',
});

export const eventIconSize = styleVariants({
  small: { width: 28, height: 28, fontSize: 14 },
  medium: { width: 40, height: 40, fontSize: 18 },
});

export const eventIconByType = styleVariants(eventColors, ({ base }) => ({
  background: base,
  color: '#0a0f1c',
  boxShadow: `0 10px 18px ${base}33`,
}));

export const lightDivider = style({
  height: 1,
  width: '100%',
  background: 'rgba(200, 206, 240, 0.16)',
});

// Light mode overrides

globalStyle(`.light .${hero}`, {
  border: '1px solid rgba(63, 77, 126, 0.35)',
});

globalStyle(`.light .${heroMeta}`, {
  color: 'rgba(26, 28, 46, 0.58)',
});

globalStyle(`.light .${heroTitle}`, {
  color: '#1c1c1c',
});

globalStyle(`.light .${heroDescription}`, {
  color: 'rgba(26, 28, 46, 0.78)',
});

globalStyle(`.light .${timelineSurface}`, {
  background: 'rgba(255, 255, 255, 0.82)',
  border: '1px solid rgba(184, 196, 233, 0.55)',
  boxShadow: '0 18px 42px rgba(31, 41, 91, 0.15)',
});

globalStyle(`.light .${surfaceTitle}`, {
  color: '#1c1c1c',
});

globalStyle(`.light .${surfaceSubtitle}`, {
  color: 'rgba(26, 28, 46, 0.62)',
});

globalStyle(`.light .${sliderTrack}`, {
  background:
    'linear-gradient(90deg, rgba(220, 224, 245, 0.85), rgba(174, 193, 255, 0.85))',
});

globalStyle(`.light .${sliderRange}`, {
  background:
    'linear-gradient(90deg, rgba(155, 17, 18, 0.75), rgba(134, 159, 255, 0.9))',
});

globalStyle(`.light .${sliderThumb}`, {
  background: '#ffffff',
  borderColor: 'rgba(155, 17, 18, 0.65)',
});

globalStyle(`.light .${eventPanel}`, {
  background: 'rgba(255, 255, 255, 0.9)',
  border: '1px solid rgba(184, 196, 233, 0.55)',
  boxShadow: '0 18px 42px rgba(31, 41, 91, 0.12)',
});

globalStyle(`.light .${eventTitle}`, {
  color: '#1c1c1c',
});

globalStyle(`.light .${eventMeta}`, {
  color: 'rgba(26, 28, 46, 0.62)',
});

globalStyle(`.light .${eventDescription}`, {
  color: 'rgba(26, 28, 46, 0.82)',
});

globalStyle(`.light .${relatedDrivers}`, {
  color: 'rgba(26, 28, 46, 0.72)',
});

globalStyle(`.light .${relatedBadge}`, {
  background: 'rgba(206, 214, 255, 0.35)',
  border: '1px solid rgba(134, 159, 255, 0.45)',
});

globalStyle(`.light .${upcomingItem}`, {
  background: 'rgba(240, 244, 255, 0.72)',
  border: '1px solid rgba(184, 196, 233, 0.55)',
});

globalStyle(`.light .${emptyState}`, {
  background: 'rgba(240, 244, 255, 0.6)',
  borderColor: 'rgba(184, 196, 233, 0.65)',
  color: 'rgba(26, 28, 46, 0.62)',
});

globalStyle(`.light .${controlButton}`, {
  background: 'rgba(234, 238, 255, 0.7)',
  borderColor: 'rgba(174, 193, 255, 0.6)',
  color: 'rgba(26, 28, 46, 0.78)',
});

globalStyle(`.light .${controlButton}:hover`, {
  background: 'rgba(206, 214, 255, 0.9)',
});

globalStyle(`.light .${controlLabel}`, {
  color: 'rgba(26, 28, 46, 0.6)',
});

globalStyle(`.light .${upcomingMeta}`, {
  color: 'rgba(26, 28, 46, 0.6)',
});
