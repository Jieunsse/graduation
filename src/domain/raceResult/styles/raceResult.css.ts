import {
  createVar,
  globalKeyframes,
  globalStyle,
  style,
  styleVariants,
} from '@vanilla-extract/css';
import { colorVars } from '@shared/styles/color.css.ts';

export const themeColorVar = createVar();
export const accentColorVar = createVar();
export const heroImageVar = createVar();

export const page = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: 32,
  paddingTop: 120,
  paddingBottom: 120,
});

export const stickyHeader = style({
  top: 88,
  zIndex: 5,
});

export const headerContainer = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: 18,
  padding: '32px 36px',
  borderRadius: 28,
  overflow: 'hidden',
  background: `linear-gradient(135deg, ${themeColorVar}AA, rgba(10, 15, 28, 0.95))`,
  border: `1px solid ${colorVars.border.panel}`,
  boxShadow: colorVars.effect.elevation,
});

export const headerHero = style({
  position: 'absolute',
  inset: 0,
  backgroundImage: `linear-gradient(180deg, rgba(5, 8, 15, 0.55), rgba(5, 8, 15, 0.92)), url(${heroImageVar})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  filter: 'saturate(1.15)',
});

export const headerOverlay = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: 18,
});

export const headerMeta = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 12,
  fontSize: 13,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
});

export const headerTitle = style({
  margin: 0,
  fontSize: 36,
  fontWeight: 700,
});

export const headerSub = style({
  margin: 0,
  fontSize: 15,
  lineHeight: 1.6,
  maxWidth: 640,
  // color: 'rgba(240, 244, 255, 0.82)',
});

export const podiumRow = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 18,
});

export const podiumCard = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 16,
  padding: '16px 20px',
  minWidth: 240,

  borderRadius: 20,
  background: `linear-gradient(145deg, rgba(25, 28, 40, 0.92) 0%, ${accentColorVar}22 100%)`,
  border: `1px solid rgba(255, 255, 255, 0.08)`,

  boxShadow: `
    0 2px 6px rgba(0,0,0,0.25),
    0 10px 20px rgba(0,0,0,0.25)
  `,
  backdropFilter: 'blur(16px)',
  WebkitBackdropFilter: 'blur(16px)',

  transition:
    'transform 0.25s ease, box-shadow 0.25s ease, background 0.3s ease',

  selectors: {
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: `
        0 6px 12px rgba(0,0,0,0.3),
        0 20px 40px rgba(0,0,0,0.3)
      `,
      background: `linear-gradient(145deg, rgba(30, 34, 50, 0.95) 0%, ${accentColorVar}44 100%)`,
    },
  },

  color: '#fff',
  fontWeight: 600,
  letterSpacing: '-0.01em',
});

export const podiumPlace = style({
  fontSize: 28,
  fontWeight: 700,
  lineHeight: 1,
});

export const podiumInfo = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
});

export const podiumName = style({
  fontSize: 16,
  fontWeight: 600,
});

export const podiumPoints = style({
  fontSize: 14,
  opacity: 0.8,
});

export const controlsRow = style({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: 16,
  padding: '0 8px',
});

export const dropdown = style({
  minWidth: 220,
  padding: '12px 16px',
  borderRadius: 16,
  border: `1px solid ${colorVars.border.control}`,
  background: colorVars.surface.control,
  color: colorVars.text.surface,
  fontSize: 15,
  fontWeight: 500,
  outline: 'none',
  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  selectors: {
    '&:focus': {
      borderColor: colorVars.border.focus,
      boxShadow: colorVars.effect.focusRing,
    },
  },
});

export const loadingState = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '96px 24px',
  borderRadius: 24,
  background: 'rgba(15, 21, 35, 0.72)',
  color: colorVars.text.surface,
  fontSize: 18,
  border: `1px dashed ${colorVars.border.panel}`,
});

export const errorState = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 16,
  padding: '48px 24px',
  borderRadius: 24,
  background: 'rgba(127, 29, 29, 0.18)',
  border: '1px solid rgba(248, 113, 113, 0.4)',
  color: '#fecaca',
});

export const emptyState = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '72px 24px',
  borderRadius: 24,
  border: `1px solid ${colorVars.border.panel}`,
  color: 'rgba(203, 213, 225, 0.8)',
  background: 'rgba(15, 21, 35, 0.72)',
});

export const summaryGrid = style({
  display: 'grid',
  gap: 18,
  gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
});

export const summaryCard = style({
  position: 'relative',
  padding: '24px 20px',
  borderRadius: 22,
  overflow: 'hidden',
  background: 'rgba(15, 21, 35, 0.92)',
  border: `1px solid rgba(148, 163, 184, 0.18)`,
  color: '#ffffff',
  boxShadow: '0 24px 48px rgba(8, 11, 22, 0.32)',
});

export const summaryLabel = style({
  fontSize: 13,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: 'rgba(226, 232, 240, 0.68)',
});

export const summaryValue = style({
  marginTop: 8,
  fontSize: 28,
  fontWeight: 700,
  lineHeight: 1.1,
});

export const summaryBadge = styleVariants({
  fin: {
    background:
      'linear-gradient(120deg, rgba(34, 197, 94, 0.2), rgba(15, 118, 110, 0.25))',
  },
  out: {
    background:
      'linear-gradient(120deg, rgba(248, 113, 113, 0.25), rgba(185, 28, 28, 0.2))',
  },
  info: {
    background:
      'linear-gradient(120deg, rgba(96, 165, 250, 0.25), rgba(59, 130, 246, 0.18))',
  },
});

globalStyle(`${summaryCard}::after`, {
  content: '',
  position: 'absolute',
  inset: '-40% -40% auto auto',
  width: 160,
  height: 160,
  borderRadius: '50%',
  background: `${accentColorVar}33`,
  filter: 'blur(0)',
});

export const summaryTrend = style({
  marginTop: 12,
  fontSize: 14,
  color: 'rgba(226, 232, 240, 0.7)',
});

export const topDriversSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 18,
  padding: '32px 28px',
  borderRadius: 26,
  background: 'rgba(11, 17, 29, 0.88)',
  border: `1px solid rgba(91, 114, 196, 0.24)`,
});

export const podiumIcons = style({
  fontSize: 32,
  lineHeight: 1,
});

export const topPodiumCard = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  gap: 16,
  padding: '18px 24px',
  borderRadius: 20,
  background: 'rgba(15, 23, 42, 0.85)',
  border: '1px solid rgba(148, 163, 184, 0.32)',
  boxShadow: '0 18px 32px rgba(15, 23, 42, 0.38)',
  color: '#ffffff',
});

export const podiumAccent = style({
  fontSize: 32,
  fontWeight: 700,
});

export const topDriverGrid = style({
  display: 'grid',
  gap: 16,
  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
});

export const topDriverCard = style({
  display: 'flex',
  alignItems: 'center',
  gap: 16,
  padding: '16px 18px',
  borderRadius: 18,
  border: `1px solid rgba(148, 163, 184, 0.24)`,
  background: 'rgba(15, 23, 42, 0.82)',
  color: '#ffffff',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  selectors: {
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 16px 32px rgba(15, 23, 42, 0.42)',
    },
  },
});

export const driverAvatar = style({
  width: 52,
  height: 52,
  borderRadius: '50%',
  objectFit: 'cover',
  border: '2px solid rgba(255, 255, 255, 0.65)',
});

export const driverInfo = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  flex: 1,
});

export const driverName = style({
  fontSize: 16,
  fontWeight: 600,
});

export const driverMeta = style({
  fontSize: 13,
  color: 'rgba(226, 232, 240, 0.72)',
});

export const driverStat = style({
  fontSize: 13,
  color: 'rgba(148, 163, 184, 0.9)',
});

export const chartCard = style({
  position: 'relative',
  padding: '28px 24px 36px',
  borderRadius: 26,
  background: 'rgba(12, 18, 33, 0.9)',
  border: `1px solid rgba(91, 114, 196, 0.26)`,
  boxShadow: '0 22px 48px rgba(12, 18, 33, 0.38)',
});

export const sectionTitle = style({
  margin: 0,
  fontSize: 20,
  fontWeight: 600,
  color: 'rgba(233, 237, 255, 0.9)',
});

export const sectionSubtitle = style({
  marginTop: 4,
  fontSize: 14,
  color: 'rgba(173, 185, 224, 0.75)',
});

export const tableCard = style({
  position: 'relative',
  borderRadius: 30,
  background:
    'linear-gradient(155deg, rgba(8, 12, 24, 0.96) 0%, rgba(2, 6, 23, 0.98) 100%)',
  border: '1px solid rgba(148, 163, 184, 0.22)',
  overflow: 'hidden',
  boxShadow: '0 32px 64px rgba(2, 6, 23, 0.55)',
});

export const tableScroll = style({
  width: '100%',
  overflowX: 'auto',
});

export const table = style({
  width: '100%',
  borderCollapse: 'collapse',
  minWidth: 840,
});

export const tableHead = style({
  position: 'sticky',
  top: 0,
  background: 'rgba(2, 6, 23, 0.94)',
  backdropFilter: 'blur(18px)',
  borderBottom: '1px solid rgba(148, 163, 184, 0.18)',
  boxShadow: '0 12px 24px rgba(2, 6, 23, 0.45)',
});

export const tableHeaderCell = style({
  padding: '20px 22px',
  borderBottom: '1px solid rgba(148, 163, 184, 0.14)',
  textAlign: 'left',
  fontSize: 13,
  fontWeight: 600,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: 'rgba(203, 213, 225, 0.78)',
  whiteSpace: 'nowrap',
});

export const tableRow = style({
  position: 'relative',
  borderLeft: '4px solid transparent',
  transition:
    'transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
  selectors: {
    '&:nth-child(odd)': {
      background: 'rgba(15, 23, 42, 0.28)',
    },
    '&:nth-child(even)': {
      background: 'rgba(15, 23, 42, 0.38)',
    },
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 16px 32px rgba(15, 23, 42, 0.45)',
      background: 'rgba(59, 130, 246, 0.18)',
    },
  },
});

export const tableCell = style({
  padding: '18px 22px',
  fontSize: 15,
  color: 'rgba(226, 232, 240, 0.92)',
  borderBottom: '1px solid rgba(148, 163, 184, 0.14)',
  verticalAlign: 'middle',
});

export const podiumHighlight = styleVariants({
  gold: {
    boxShadow: 'inset 0 0 0 1px rgba(250, 204, 21, 0.42)',
    background:
      'linear-gradient(100deg, rgba(250, 204, 21, 0.18), rgba(202, 138, 4, 0.12))',
  },
  silver: {
    boxShadow: 'inset 0 0 0 1px rgba(203, 213, 225, 0.38)',
    background:
      'linear-gradient(100deg, rgba(226, 232, 240, 0.22), rgba(148, 163, 184, 0.12))',
  },
  bronze: {
    boxShadow: 'inset 0 0 0 1px rgba(245, 158, 11, 0.3)',
    background:
      'linear-gradient(100deg, rgba(245, 158, 11, 0.18), rgba(217, 119, 6, 0.12))',
  },
});

export const positionCell = style({
  width: 96,
  textAlign: 'center',
});

export const positionBadge = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 48,
  height: 48,
  borderRadius: 16,
  fontSize: 18,
  fontWeight: 700,
  color: '#f8fafc',
  background:
    'linear-gradient(135deg, rgba(30, 41, 59, 0.85), rgba(15, 23, 42, 0.62))',
  boxShadow: '0 12px 24px rgba(2, 6, 23, 0.5)',
});

export const driverCell = style({
  display: 'flex',
  alignItems: 'center',
  gap: 18,
  minWidth: 240,
});

export const teamDot = style({
  width: 14,
  height: 14,
  borderRadius: '50%',
  boxShadow: '0 0 0 3px rgba(255, 255, 255, 0.08)',
});

export const driverText = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
});

export const driverNameKo = style({
  fontSize: 16,
  fontWeight: 600,
  color: '#f8fafc',
});

export const driverNumberBadge = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 4,
  padding: '2px 8px',
  borderRadius: 9999,
  fontSize: 12,
  fontWeight: 600,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: 'rgba(148, 163, 184, 0.85)',
  background: 'rgba(15, 23, 42, 0.72)',
  border: '1px solid rgba(148, 163, 184, 0.24)',
});

export const teamCell = style({
  fontWeight: 500,
  color: 'rgba(226, 232, 240, 0.88)',
});

export const numericCell = style({
  fontVariantNumeric: 'tabular-nums',
  textAlign: 'center',
});

export const gapCell = style({
  fontVariantNumeric: 'tabular-nums',
  fontWeight: 600,
  color: '#facc15',
});

export const timeCell = style({
  fontVariantNumeric: 'tabular-nums',
  color: 'rgba(191, 219, 254, 0.95)',
});

export const pointsCell = style({
  textAlign: 'center',
});

export const pointsBadge = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 6,
  padding: '6px 14px',
  borderRadius: 9999,
  background: 'rgba(14, 116, 144, 0.22)',
  border: '1px solid rgba(56, 189, 248, 0.45)',
  color: '#38bdf8',
  fontSize: 14,
  fontWeight: 700,
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
  boxShadow: '0 10px 20px rgba(8, 47, 73, 0.35)',
});

export const statusCell = style({
  textAlign: 'right',
});

export const statusPill = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  padding: '8px 12px',
  borderRadius: 9999,
  fontSize: 12,
  fontWeight: 600,
  letterSpacing: '0.06em',
  textTransform: 'none',
  border: '1px solid rgba(148, 163, 184, 0.25)',
  background: 'rgba(15, 23, 42, 0.72)',
});

export const statusBadge = styleVariants({
  FIN: {
    background:
      'linear-gradient(135deg, rgba(34, 197, 94, 0.22), rgba(16, 185, 129, 0.22))',
    borderColor: 'rgba(34, 197, 94, 0.45)',
    color: '#4ade80',
  },
  DNF: {
    background:
      'linear-gradient(135deg, rgba(248, 113, 113, 0.22), rgba(239, 68, 68, 0.22))',
    borderColor: 'rgba(248, 113, 113, 0.45)',
    color: '#fb7185',
  },
  DSQ: {
    background:
      'linear-gradient(135deg, rgba(249, 115, 22, 0.22), rgba(234, 88, 12, 0.22))',
    borderColor: 'rgba(249, 115, 22, 0.45)',
    color: '#f97316',
  },
  DNS: {
    background:
      'linear-gradient(135deg, rgba(234, 179, 8, 0.22), rgba(202, 138, 4, 0.22))',
    borderColor: 'rgba(234, 179, 8, 0.45)',
    color: '#facc15',
  },
});

export const statusCode = style({
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
});

export const statusLabel = style({
  fontSize: 12,
  fontWeight: 600,
  color: 'inherit',
});

globalStyle(`${tableRow}[data-tooltip]::after`, {
  content: 'attr(data-tooltip)',
  position: 'absolute',
  left: '50%',
  top: -12,
  transform: 'translate(-50%, -100%)',
  padding: '8px 12px',
  borderRadius: 12,
  background: 'rgba(15, 23, 42, 0.92)',
  color: '#f8fafc',
  fontSize: 13,
  opacity: 0,
  pointerEvents: 'none',
  whiteSpace: 'nowrap',
  transition: 'opacity 0.2s ease, transform 0.2s ease',
  boxShadow: '0 12px 24px rgba(15, 23, 42, 0.45)',
});

globalStyle(`${tableRow}[data-tooltip]:hover::after`, {
  opacity: 1,
  transform: 'translate(-50%, -120%)',
});

export const retirementSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  padding: '28px 26px',
  borderRadius: 24,
  background: 'rgba(12, 20, 34, 0.9)',
  border: `1px solid rgba(99, 102, 241, 0.24)`,
  overflow: 'hidden',
});

export const retirementList = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
  gap: 14,
});

export const retirementItem = style({
  position: 'relative',
  padding: '16px 18px',
  borderRadius: 18,
  color: '#ffffff',
  backdropFilter: 'blur(10px)',
  overflow: 'hidden',
  animation: 'retire-fade 4s ease infinite',
});

export const retirementName = style({
  fontSize: 15,
  fontWeight: 600,
});

export const retirementMeta = style({
  marginTop: 6,
  fontSize: 13,
  color: 'rgba(226, 232, 240, 0.75)',
});

export const footer = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 12,
  justifyContent: 'center',
  padding: '18px 20px',
  borderRadius: 18,
  background: 'rgba(10, 16, 30, 0.85)',
  border: `1px solid rgba(91, 114, 196, 0.2)`,
  color: 'rgba(226, 232, 240, 0.86)',
});

globalKeyframes('retire-fade', {
  '0%': { opacity: 0.95 },
  '50%': { opacity: 0.7 },
  '100%': { opacity: 0.95 },
});

globalStyle(`.light ${headerContainer}`, {
  background: `linear-gradient(135deg, ${themeColorVar}AA, rgba(255, 255, 255, 0.92))`,
  border: '1px solid rgba(15, 23, 42, 0.08)',
});

globalStyle(`.light ${podiumCard}`, {
  border: '1px solid rgba(15, 23, 42, 0.08)',
  color: '#111827',
});

globalStyle(`.light ${summaryCard}`, {
  background: '#ffffff',
  border: '1px solid rgba(15, 23, 42, 0.08)',
  color: '#0f172a',
});

globalStyle(`.light ${summaryLabel}`, {
  color: 'rgba(71, 85, 105, 0.72)',
});

globalStyle(`.light ${summaryValue}`, {
  color: '#111827',
});

globalStyle(`.light ${topDriversSection}`, {
  background: '#ffffff',
  border: '1px solid rgba(15, 23, 42, 0.08)',
});

globalStyle(`.light ${topPodiumCard}`, {
  background:
    'linear-gradient(135deg, rgba(241, 245, 249, 0.95), rgba(255, 255, 255, 0.95))',
  border: '1px solid rgba(148, 163, 184, 0.24)',
  color: '#0f172a',
});

globalStyle(`.light ${topDriverCard}`, {
  background:
    'linear-gradient(135deg, rgba(244, 247, 254, 0.95), rgba(255, 255, 255, 0.95))',
  border: '1px solid rgba(148, 163, 184, 0.24)',
  color: '#0f172a',
});

globalStyle(`.light ${chartCard}`, {
  background: '#ffffff',
  border: '1px solid rgba(148, 163, 184, 0.24)',
});

globalStyle(`.light ${tableCard}`, {
  background:
    'linear-gradient(155deg, rgba(255, 255, 255, 0.96) 0%, rgba(241, 245, 255, 0.98) 100%)',
  border: '1px solid rgba(15, 23, 42, 0.08)',
  boxShadow: '0 24px 48px rgba(15, 23, 42, 0.12)',
});

globalStyle(`.light ${tableHead}`, {
  background: 'rgba(248, 250, 255, 0.94)',
  color: 'rgba(71, 85, 105, 0.82)',
  boxShadow: '0 10px 20px rgba(148, 163, 184, 0.18)',
});

globalStyle(`.light ${tableHeaderCell}`, {
  color: 'rgba(71, 85, 105, 0.82)',
  borderBottom: '1px solid rgba(148, 163, 184, 0.2)',
});

globalStyle(`.light ${tableRow}`, {
  background: 'transparent',
  boxShadow: 'none',
});

globalStyle(`.light ${tableRow}:nth-child(odd)`, {
  background: 'rgba(241, 245, 255, 0.72)',
});

globalStyle(`.light ${tableRow}:nth-child(even)`, {
  background: 'rgba(226, 232, 240, 0.58)',
});

globalStyle(`.light ${tableRow}:hover`, {
  background: 'rgba(191, 219, 254, 0.65)',
  boxShadow: '0 12px 24px rgba(148, 163, 184, 0.24)',
});

globalStyle(`.light ${tableCell}`, {
  color: '#0f172a',
  borderBottom: '1px solid rgba(148, 163, 184, 0.18)',
});

globalStyle(`.light ${positionBadge}`, {
  background:
    'linear-gradient(135deg, rgba(226, 232, 240, 0.95), rgba(148, 163, 184, 0.4))',
  color: '#0f172a',
  boxShadow: '0 8px 16px rgba(148, 163, 184, 0.28)',
});

globalStyle(`.light ${driverNameKo}`, {
  color: '#0f172a',
});

globalStyle(`.light ${driverNumberBadge}`, {
  background: 'rgba(226, 232, 240, 0.85)',
  border: '1px solid rgba(148, 163, 184, 0.32)',
  color: 'rgba(71, 85, 105, 0.85)',
});

globalStyle(`.light ${teamCell}`, {
  color: '#1f2937',
});

globalStyle(`.light ${gapCell}`, {
  color: '#2563eb',
});

globalStyle(`.light ${timeCell}`, {
  color: '#1e40af',
});

globalStyle(`.light ${pointsBadge}`, {
  background: 'rgba(191, 219, 254, 0.6)',
  border: '1px solid rgba(59, 130, 246, 0.45)',
  color: '#1d4ed8',
  boxShadow: '0 6px 14px rgba(59, 130, 246, 0.25)',
});

globalStyle(`.light ${statusPill}`, {
  background: 'rgba(248, 250, 255, 0.92)',
  border: '1px solid rgba(148, 163, 184, 0.35)',
});

globalStyle(`.light ${statusBadge.FIN}`, {
  background:
    'linear-gradient(135deg, rgba(134, 239, 172, 0.48), rgba(74, 222, 128, 0.18))',
  borderColor: 'rgba(34, 197, 94, 0.32)',
  color: '#15803d',
});

globalStyle(`.light ${statusBadge.DNF}`, {
  background:
    'linear-gradient(135deg, rgba(254, 202, 202, 0.6), rgba(248, 113, 113, 0.22))',
  borderColor: 'rgba(248, 113, 113, 0.32)',
  color: '#b91c1c',
});

globalStyle(`.light ${statusBadge.DSQ}`, {
  background:
    'linear-gradient(135deg, rgba(254, 215, 170, 0.6), rgba(249, 115, 22, 0.2))',
  borderColor: 'rgba(249, 115, 22, 0.32)',
  color: '#c2410c',
});

globalStyle(`.light ${statusBadge.DNS}`, {
  background:
    'linear-gradient(135deg, rgba(254, 240, 138, 0.6), rgba(234, 179, 8, 0.2))',
  borderColor: 'rgba(234, 179, 8, 0.32)',
  color: '#b45309',
});

globalStyle(`.light ${retirementSection}`, {
  background: '#ffffff',
  border: '1px solid rgba(15, 23, 42, 0.08)',
});

globalStyle(`.light ${footer}`, {
  background: '#ffffff',
  border: '1px solid rgba(15, 23, 42, 0.08)',
  color: '#1f2937',
});
