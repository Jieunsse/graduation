import {
  globalStyle,
  keyframes,
  style,
  styleVariants,
} from '@vanilla-extract/css';
import type { RaceEventType } from '../types/raceEvent.ts';

const palette = {
  primary: '#2563EB',
  success: '#10B981',
  warning: '#F59E0B',
  danger: '#EF4444',
  info: '#0EA5E9',
  backgroundDark: '#0B1220',
  surfaceDark: 'rgba(15, 23, 42, 0.85)',
  surfaceLight: '#FFFFFF',
  borderDark: 'rgba(148, 163, 184, 0.28)',
  borderLight: 'rgba(148, 163, 184, 0.35)',
  textStrongDark: '#F9FAFB',
  textMutedDark: '#CBD5F5',
  textStrongLight: '#0F172A',
  textMutedLight: '#4B5563',
};

const eventTheme: Record<
  RaceEventType,
  { background: string; border: string; icon: string; text: string }
> = {
  OVERTAKE: {
    background: '#ECFDF5',
    border: 'rgba(16, 185, 129, 0.45)',
    icon: palette.success,
    text: '#047857',
  },
  CRASH: {
    background: '#FEF2F2',
    border: 'rgba(239, 68, 68, 0.4)',
    icon: palette.danger,
    text: '#B91C1C',
  },
  PIT_STOP: {
    background: '#EFF6FF',
    border: 'rgba(37, 99, 235, 0.4)',
    icon: palette.primary,
    text: '#1D4ED8',
  },
  SAFETY_CAR: {
    background: '#FFFBEB',
    border: 'rgba(245, 158, 11, 0.4)',
    icon: palette.warning,
    text: '#B45309',
  },
  RED_FLAG: {
    background: '#FEF2F2',
    border: 'rgba(239, 68, 68, 0.4)',
    icon: palette.danger,
    text: '#B91C1C',
  },
};

const pulse = keyframes({
  '0%': { transform: 'translateX(-50%) scale(0.75)', opacity: 0.65 },
  '70%': { transform: 'translateX(-50%) scale(1.2)', opacity: 0 },
  '100%': { transform: 'translateX(-50%) scale(1.2)', opacity: 0 },
});

export const page = style({
  position: 'relative',
  width: '100%',
  minHeight: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: 32,
  paddingTop: 104,
  paddingBottom: 120,
  paddingInline: 8,
  background: palette.backgroundDark,
});

export const hero = style({
  position: 'sticky',
  top: 88,
  zIndex: 4,
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  padding: '32px 36px',
  borderRadius: 24,
  background: palette.surfaceDark,
  border: `1px solid ${palette.borderDark}`,
  boxShadow: '0 24px 48px rgba(15, 23, 42, 0.35)',
  backdropFilter: 'blur(18px)',
});

export const heroHeader = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
});

export const heroEyebrow = style({
  fontSize: 12,
  letterSpacing: '0.16em',
  textTransform: 'uppercase',
  color: 'rgba(148, 163, 184, 0.75)',
});

export const heroTitle = style({
  margin: 0,
  fontSize: 32,
  fontWeight: 700,
  letterSpacing: '-0.01em',
  color: palette.textStrongDark,
});

export const heroDescription = style({
  margin: 0,
  maxWidth: 620,
  lineHeight: 1.6,
  fontSize: 15,
  color: palette.textMutedDark,
});

export const heroStats = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 16,
});

export const statCard = style({
  flex: '1 1 160px',
  minWidth: 140,
  padding: '14px 16px',
  borderRadius: 20,
  background: 'rgba(15, 23, 42, 0.6)',
  border: `1px solid ${palette.borderDark}`,
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
});

export const statLabel = style({
  fontSize: 12,
  letterSpacing: '0.05em',
  textTransform: 'uppercase',
  color: 'rgba(148, 163, 184, 0.75)',
});

export const statValue = style({
  fontSize: 20,
  fontWeight: 600,
  color: palette.textStrongDark,
});

export const layout = style({
  display: 'grid',
  gap: 28,
  gridTemplateColumns: 'minmax(0, 1fr)',
  '@media': {
    'screen and (min-width: 1180px)': {
      gridTemplateColumns: 'minmax(0, 2.1fr) minmax(320px, 1fr)',
    },
  },
});

export const timelineSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 28,
  padding: '32px 36px',
  borderRadius: 24,
  background: palette.surfaceDark,
  border: `1px solid ${palette.borderDark}`,
  boxShadow: '0 24px 42px rgba(15, 23, 42, 0.28)',
});

export const sectionHeader = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
});

export const sectionTitle = style({
  margin: 0,
  fontSize: 20,
  fontWeight: 600,
  color: palette.textStrongDark,
});

export const sectionSubtitle = style({
  margin: 0,
  fontSize: 14,
  lineHeight: 1.5,
  color: palette.textMutedDark,
});

export const sliderContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 18,
});

export const sliderRail = style({
  position: 'relative',
  height: 68,
  display: 'flex',
  alignItems: 'center',
});

export const sliderTrack = style({
  position: 'relative',
  width: '100%',
  height: 18,
  borderRadius: 999,
  background: 'rgba(148, 163, 184, 0.2)',
  overflow: 'hidden',
});

export const sliderProgress = style({
  position: 'absolute',
  inset: 0,
  background: 'linear-gradient(90deg, #0EA5E9 0%, #10B981 42%, #FACC15 82%)',
  transformOrigin: 'left center',
});

export const markerLayer = style({
  position: 'absolute',
  inset: 0,
  display: 'flex',
  alignItems: 'center',
  pointerEvents: 'none',
});

export const markerButton = style({
  position: 'absolute',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  width: 34,
  height: 34,
  borderRadius: 12,
  border: '1px solid rgba(15, 23, 42, 0.25)',
  background: 'rgba(15, 23, 42, 0.72)',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  pointerEvents: 'auto',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease',
  ':hover': {
    transform: 'translate(-50%, -50%) scale(1.06)',
    boxShadow: '0 12px 20px rgba(15, 23, 42, 0.35)',
  },
});

export const markerActive = style({
  boxShadow: '0 0 0 3px rgba(37, 99, 235, 0.35)',
  background: 'rgba(37, 99, 235, 0.85)',
});

export const currentIndicator = style({
  position: 'absolute',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  height: 48,
  width: 2,
  background: '#FFFFFF',
  borderRadius: 999,
  boxShadow: '0 0 0 3px rgba(148, 163, 184, 0.25)',
  pointerEvents: 'none',
});

export const currentPulse = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: 24,
  height: 24,
  borderRadius: '50%',
  background: 'rgba(37, 99, 235, 0.28)',
  animation: `${pulse} 2.4s ease-out infinite`,
});

export const sliderInput = style({
  position: 'absolute',
  inset: 0,
  opacity: 0,
  cursor: 'pointer',
  selectors: {
    '&:disabled': {
      cursor: 'not-allowed',
    },
  },
});

export const sliderMeta = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 16,
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const lapInfo = style({
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  fontSize: 14,
  color: palette.textMutedDark,
});

export const lapIcon = style({
  fontSize: 18,
});

export const lapCount = style({
  fontWeight: 600,
  color: palette.textStrongDark,
});

export const timeCode = style({
  fontFamily:
    '"DM Mono", "SFMono-Regular", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  fontSize: 14,
  color: palette.textStrongDark,
});

export const timeStack = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 12,
  fontSize: 13,
  color: palette.textMutedDark,
});

export const controlsRow = style({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 16,
});

export const controlsPrimary = style({
  display: 'flex',
  alignItems: 'center',
  gap: 12,
});

export const playButton = style({
  border: 'none',
  borderRadius: 999,
  padding: '12px 24px',
  fontSize: 14,
  fontWeight: 600,
  background: palette.primary,
  color: '#FFFFFF',
  cursor: 'pointer',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease',
  ':hover': {
    transform: 'translateY(-1px)',
    boxShadow: '0 18px 28px rgba(37, 99, 235, 0.35)',
  },
  selectors: {
    '&:disabled': {
      opacity: 0.4,
      cursor: 'not-allowed',
      boxShadow: 'none',
      transform: 'none',
    },
  },
});

export const controlButton = style({
  borderRadius: 999,
  border: `1px solid ${palette.borderDark}`,
  background: 'transparent',
  padding: '10px 18px',
  fontSize: 14,
  fontWeight: 500,
  color: palette.textStrongDark,
  cursor: 'pointer',
  transition: 'color 0.2s ease, background 0.2s ease, border-color 0.2s ease',
  selectors: {
    '&:disabled': {
      opacity: 0.4,
      cursor: 'not-allowed',
    },
  },
  ':hover': {
    background: 'rgba(148, 163, 184, 0.16)',
  },
});

export const resetButton = style({
  marginLeft: 8,
  borderColor: 'transparent',
  color: 'rgba(148, 163, 184, 0.85)',
  ':hover': {
    background: 'rgba(148, 163, 184, 0.12)',
  },
});

export const controlButtonActive = style({
  background: 'rgba(37, 99, 235, 0.18)',
  borderColor: 'rgba(37, 99, 235, 0.4)',
  color: palette.textStrongDark,
});

export const speedLabel = style({
  fontSize: 12,
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  color: 'rgba(148, 163, 184, 0.75)',
});

export const eventPanel = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  padding: '32px 30px',
  borderRadius: 24,
  background: palette.surfaceDark,
  border: `1px solid ${palette.borderDark}`,
  boxShadow: '0 24px 42px rgba(15, 23, 42, 0.28)',
  minHeight: 360,
});

export const eventHeader = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
});

export const eventHeading = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
});

export const eventTitleRow = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 16,
});

export const eventTitle = style({
  margin: 0,
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  fontSize: 22,
  fontWeight: 600,
  color: palette.textStrongDark,
});

export const eventBadge = styleVariants(
  eventTheme,
  ({ background, border, text }) => ({
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    padding: '6px 12px',
    borderRadius: 999,
    fontSize: 13,
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    background,
    border: `1px solid ${border}`,
    color: text,
  })
);

export const eventDescription = style({
  margin: 0,
  fontSize: 15,
  lineHeight: 1.7,
  color: palette.textMutedDark,
});

export const eventMetaRow = style({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: 16,
});

export const eventMetaItem = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  fontSize: 13,
  color: palette.textMutedDark,
});

export const eventMetaValue = style({
  fontSize: 15,
  fontWeight: 600,
  color: palette.textStrongDark,
});

export const chipGroup = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 8,
});

export const chip = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 6,
  padding: '6px 12px',
  borderRadius: 999,
  background: 'rgba(148, 163, 184, 0.18)',
  color: palette.textStrongDark,
  fontSize: 13,
});

export const divider = style({
  height: 1,
  width: '100%',
  background: 'rgba(148, 163, 184, 0.18)',
});

export const nextSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
});

export const nextList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
});

export const nextItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  padding: '12px 14px',
  borderRadius: 16,
  border: `1px solid ${palette.borderDark}`,
  background: 'rgba(15, 23, 42, 0.55)',
  transition: 'transform 0.18s ease, background 0.18s ease',
  ':hover': {
    transform: 'translateY(-2px)',
    background: 'rgba(37, 99, 235, 0.16)',
  },
});

export const nextItemMeta = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  fontSize: 13,
  color: palette.textMutedDark,
});

export const nextTime = style({
  fontFamily:
    '"DM Mono", "SFMono-Regular", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  fontSize: 13,
  color: palette.textStrongDark,
});

export const emptyState = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 12,
  textAlign: 'center',
  padding: '48px 24px',
  borderRadius: 20,
  border: `1px dashed ${palette.borderDark}`,
  background: 'rgba(15, 23, 42, 0.5)',
  color: palette.textMutedDark,
  fontSize: 15,
});

export const eventIcon = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  fontWeight: 700,
  color: '#0F172A',
  background: '#FFFFFF',
  boxShadow: '0 10px 22px rgba(15, 23, 42, 0.25)',
});

export const eventIconSize = styleVariants({
  small: { width: 28, height: 28, fontSize: 14 },
  medium: { width: 40, height: 40, fontSize: 18 },
});

export const eventIconByType = styleVariants(eventTheme, ({ icon }) => ({
  background: icon,
  color: '#FFFFFF',
}));

// Light appearance overrides

globalStyle(`.light .${page}`, {
  background: '#f7f9fb',
});

globalStyle(`.light .${hero}`, {
  background: 'rgba(255, 255, 255, 0.92)',
  border: `1px solid ${palette.borderLight}`,
  boxShadow: '0 18px 36px rgba(148, 163, 184, 0.25)',
});

globalStyle(`.light .${heroEyebrow}`, {
  color: palette.textMutedLight,
});

globalStyle(`.light .${heroTitle}`, {
  color: palette.textStrongLight,
});

globalStyle(`.light .${heroDescription}`, {
  color: palette.textMutedLight,
});

globalStyle(`.light .${statCard}`, {
  background: '#FFFFFF',
  border: `1px solid ${palette.borderLight}`,
});

globalStyle(`.light .${statValue}`, {
  color: palette.textStrongLight,
});

globalStyle(`.light .${timelineSection}`, {
  background: palette.surfaceLight,
  border: `1px solid ${palette.borderLight}`,
  boxShadow: '0 18px 36px rgba(148, 163, 184, 0.18)',
});

globalStyle(`.light .${sectionTitle}`, {
  color: palette.textStrongLight,
});

globalStyle(`.light .${sectionSubtitle}`, {
  color: palette.textMutedLight,
});

globalStyle(`.light .${markerButton}`, {
  borderColor: 'rgba(226, 232, 240, 0.9)',
  background: '#FFFFFF',
});

// globalStyle(`.light .${markerIcon}`, {
//   color: palette.textStrongLight,
// });

globalStyle(`.light .${currentIndicator}`, {
  background: palette.primary,
  boxShadow: '0 0 0 3px rgba(37, 99, 235, 0.2)',
});

globalStyle(`.light .${currentPulse}`, {
  background: 'rgba(37, 99, 235, 0.2)',
});

globalStyle(`.light .${controlButton}`, {
  borderColor: 'rgba(203, 213, 225, 0.8)',
  color: palette.textStrongLight,
});

globalStyle(`.light .${resetButton}`, {
  color: palette.textMutedLight,
});

globalStyle(`.light .${eventPanel}`, {
  background: palette.surfaceLight,
  border: `1px solid ${palette.borderLight}`,
  boxShadow: '0 18px 36px rgba(148, 163, 184, 0.18)',
});

globalStyle(`.light .${eventTitle}`, {
  color: palette.textStrongLight,
});

globalStyle(`.light .${eventDescription}`, {
  color: palette.textMutedLight,
});

globalStyle(`.light .${eventMetaItem}`, {
  color: palette.textMutedLight,
});

globalStyle(`.light .${eventMetaValue}`, {
  color: palette.textStrongLight,
});

globalStyle(`.light .${timeStack}`, {
  color: palette.textMutedLight,
});

globalStyle(`.light .${chip}`, {
  background: 'rgba(226, 232, 240, 0.7)',
  color: palette.textStrongLight,
});

globalStyle(`.light .${nextItem}`, {
  background: '#FFFFFF',
  border: `1px solid ${palette.borderLight}`,
});

globalStyle(`.light .${emptyState}`, {
  background: '#FFFFFF',
  borderColor: palette.borderLight,
  color: palette.textMutedLight,
});
