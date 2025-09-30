import { globalStyle, style } from '@vanilla-extract/css';

export const page = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: 32,
  paddingTop: 104,
  paddingBottom: 120,
});

export const hero = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 32,
  padding: '32px 40px',
  borderRadius: 20,
  background:
    'linear-gradient(135deg, rgba(15, 21, 35, 0.94), rgba(39, 58, 147, 0.72))',
  border: '1px solid rgba(91, 114, 196, 0.45)',
  boxShadow: '0 24px 48px rgba(18, 23, 42, 0.45)',
  position: 'relative',
  overflow: 'hidden',
});

export const heroOverlay = style({
  position: 'absolute',
  inset: 0,
  pointerEvents: 'none',
});

export const heroContent = style({
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
});

export const heroTitle = style({
  margin: 0,
  fontSize: 32,
  fontWeight: 700,
  letterSpacing: '-0.01em',
  color: '#111633',
});

export const heroDescription = style({
  margin: 0,
  maxWidth: 520,
  lineHeight: 1.6,
  color: 'rgba(221, 227, 255, 0.82)',
  fontSize: 15,
  whiteSpace: 'nowrap',
});

export const heroMeta = style({
  display: 'flex',
  gap: 16,
  color: 'rgba(221, 227, 255, 0.72)',
  fontSize: 13,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
});

export const heroActions = style({
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  gap: 12,
});

export const primaryButton = style({
  border: 'none',
  borderRadius: 14,
  padding: '14px 28px',
  background:
    'linear-gradient(135deg, rgba(155, 17, 18, 0.92), rgba(216, 58, 59, 0.85))',
  color: '#ffffff',
  fontSize: 16,
  fontWeight: 600,
  cursor: 'pointer',
  boxShadow: '0 20px 28px rgba(155, 17, 18, 0.25)',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  ':hover': {
    transform: 'translateY(-1px)',
    boxShadow: '0 24px 32px rgba(155, 17, 18, 0.35)',
  },
});

export const secondaryButton = style({
  border: '1px solid rgba(221, 227, 255, 0.32)',
  borderRadius: 12,
  padding: '12px 24px',
  background: 'rgba(12, 16, 28, 0.35)',
  color: 'rgba(221, 227, 255, 0.88)',
  fontSize: 14,
  fontWeight: 500,
  cursor: 'pointer',
  transition: 'background 0.2s ease, border-color 0.2s ease',
  ':hover': {
    background: 'rgba(35, 45, 82, 0.45)',
    borderColor: 'rgba(221, 227, 255, 0.45)',
  },
});

export const boardSurface = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  padding: '28px 32px',
  borderRadius: 20,
  background: 'rgba(10, 15, 28, 0.82)',
  border: '1px solid rgba(63, 77, 126, 0.45)',
  boxShadow: '0 18px 42px rgba(9, 12, 24, 0.42)',
  backdropFilter: 'blur(14px)',
});

export const toolbar = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: 24,
  flexWrap: 'wrap',
});

export const categoryList = style({
  display: 'flex',
  flexDirection: 'row',
  gap: 12,
  flexWrap: 'wrap',
});

export const categoryButton = style({
  border: '1px solid rgba(110, 135, 255, 0.24)',
  borderRadius: 999,
  padding: '10px 18px',
  background: 'rgba(18, 26, 46, 0.6)',
  color: 'rgba(207, 214, 255, 0.88)',
  fontSize: 13,
  fontWeight: 500,
  letterSpacing: '0.02em',
  cursor: 'pointer',
  transition: 'background 0.2s ease, border-color 0.2s ease, color 0.2s ease',
});

export const categoryButtonActive = style({
  background:
    'linear-gradient(135deg, rgba(91, 114, 196, 0.85), rgba(134, 159, 255, 0.85))',
  color: '#0a0f1c',
  borderColor: 'rgba(174, 193, 255, 0.75)',
});

export const searchArea = style({
  display: 'flex',
  flexDirection: 'row',
  gap: 12,
  alignItems: 'center',
});

export const searchInput = style({
  flex: '1 1 220px',
  minWidth: 200,
  padding: '12px 18px',
  borderRadius: 12,
  border: '1px solid rgba(91, 114, 196, 0.4)',
  background: 'rgba(8, 12, 23, 0.75)',
  color: '#e6e9ff',
  fontSize: 14,
  outline: 'none',
  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  selectors: {
    '&::placeholder': {
      color: 'rgba(200, 206, 240, 0.55)',
    },
    '&:focus': {
      borderColor: 'rgba(134, 159, 255, 0.9)',
      boxShadow: '0 0 0 3px rgba(134, 159, 255, 0.22)',
    },
  },
});

export const searchButton = style({
  border: 'none',
  borderRadius: 12,
  padding: '12px 18px',
  background: 'rgba(91, 114, 196, 0.75)',
  color: '#0a0f1c',
  fontWeight: 600,
  fontSize: 14,
  cursor: 'pointer',
  transition: 'background 0.2s ease, transform 0.2s ease',
  ':hover': {
    background: 'rgba(134, 159, 255, 0.85)',
    transform: 'translateY(-1px)',
  },
  whiteSpace: 'nowrap',
});

export const listHeader = style({
  display: 'grid',
  gridTemplateColumns: 'minmax(120px, 2.6fr) 1fr 120px 120px 100px',
  padding: '14px 20px',
  borderRadius: 14,
  background: 'rgba(18, 23, 42, 0.75)',
  border: '1px solid rgba(63, 77, 126, 0.45)',
  color: 'rgba(200, 206, 240, 0.75)',
  fontSize: 13,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
});

export const list = style({
  display: 'flex',
  flexDirection: 'column',
});

export const listRow = style({
  display: 'grid',
  gridTemplateColumns: 'minmax(120px, 2.6fr) 1fr 120px 120px 100px',
  alignItems: 'center',
  padding: '18px 20px',
  borderBottom: '1px solid rgba(45, 58, 102, 0.45)',
  color: '#eef1ff',
  gap: 16,
});

export const listRowNotice = style({
  background: 'rgba(155, 17, 18, 0.08)',
  borderBottom: '1px solid rgba(155, 17, 18, 0.25)',
});

export const titleCell = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
});

export const titleMain = style({
  margin: 0,
  fontSize: 16,
  fontWeight: 600,
  color: '#f8f9ff',
  display: 'flex',
  alignItems: 'center',
  gap: 10,
});

export const badge = style({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '4px 10px',
  borderRadius: 999,
  background:
    'linear-gradient(135deg, rgba(155, 17, 18, 0.18), rgba(155, 17, 18, 0.12))',
  color: '#9b1112',
  fontSize: 11,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
});

export const tagGroup = style({
  display: 'flex',
  gap: 8,
  flexWrap: 'wrap',
});

export const tag = style({
  padding: '4px 10px',
  borderRadius: 999,
  background: 'rgba(45, 58, 102, 0.55)',
  color: 'rgba(207, 214, 255, 0.88)',
  fontSize: 11,
  letterSpacing: '0.04em',
});

export const statCell = style({
  fontSize: 14,
  color: 'rgba(221, 227, 255, 0.82)',
  display: 'flex',
  alignItems: 'center',
  gap: 6,
  justifyContent: 'flex-start',
});

export const pagination = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 8,
});

export const pageButton = style({
  border: '1px solid rgba(91, 114, 196, 0.45)',
  borderRadius: 10,
  width: 36,
  height: 36,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgba(18, 23, 42, 0.65)',
  color: 'rgba(221, 227, 255, 0.78)',
  fontSize: 13,
  fontWeight: 500,
  cursor: 'pointer',
  transition: 'background 0.2s ease, color 0.2s ease',
});

export const pageButtonActive = style({
  background: 'rgba(134, 159, 255, 0.85)',
  color: '#0a0f1c',
  borderColor: 'rgba(134, 159, 255, 0.85)',
});

export const emptyState = style({
  padding: '48px 24px',
  textAlign: 'center',
  color: '#111633',
  fontSize: 15,
});

// Light mode overrides

globalStyle(`.light .${hero}`, {
  background:
    'linear-gradient(135deg, rgba(255, 255, 255, 0.96), rgba(236, 240, 255, 0.92))',
  border: '1px solid rgba(184, 196, 233, 0.75)',
  boxShadow: '0 18px 40px rgba(159, 176, 231, 0.28)',
});

globalStyle(`.light .${heroDescription}`, {
  color: 'rgba(46, 53, 82, 0.82)',
});

globalStyle(`.light .${heroMeta}`, {
  color: 'rgba(46, 53, 82, 0.68)',
});

globalStyle(`.light .${heroActions} > *`, {
  color: '#111633',
});

globalStyle(`.light .${secondaryButton}`, {
  background: 'rgba(255, 255, 255, 0.72)',
  border: '1px solid rgba(184, 196, 233, 0.6)',
  color: '#1b2350',
});

globalStyle(`.light .${secondaryButton}:hover`, {
  background: 'rgba(211, 219, 255, 0.85)',
});

globalStyle(`.light .${boardSurface}`, {
  background: 'rgba(248, 250, 255, 0.88)',
  border: '1px solid rgba(184, 196, 233, 0.75)',
  boxShadow: '0 18px 32px rgba(159, 176, 231, 0.25)',
});

globalStyle(`.light .${categoryButton}`, {
  background: 'rgba(244, 246, 255, 0.92)',
  color: 'rgba(27, 35, 80, 0.78)',
  borderColor: 'rgba(184, 196, 233, 0.8)',
});

globalStyle(`.light .${categoryButtonActive}`, {
  color: '#0a0f1c',
});

globalStyle(`.light .${searchInput}`, {
  background: '#ffffff',
  color: '#1b2350',
});

globalStyle(`.light .${searchInput}::placeholder`, {
  color: 'rgba(46, 53, 82, 0.45)',
});

globalStyle(`.light .${searchButton}`, {
  color: '#ffffff',
});

globalStyle(`.light .${listHeader}`, {
  background: 'rgba(235, 239, 255, 0.82)',
  color: 'rgba(46, 53, 82, 0.72)',
  borderColor: 'rgba(184, 196, 233, 0.6)',
});

globalStyle(`.light .${listRow}`, {
  color: '#1b2350',
  borderColor: 'rgba(219, 224, 247, 0.8)',
});

globalStyle(`.light .${listRowNotice}`, {
  background: 'rgba(155, 17, 18, 0.12)',
});

globalStyle(`.light .${titleMain}`, {
  color: '#111633',
});

globalStyle(`.light .${tag}`, {
  background: 'rgba(211, 219, 255, 0.75)',
  color: '#1b2350',
});

globalStyle(`.light .${statCell}`, {
  color: 'rgba(46, 53, 82, 0.72)',
});

globalStyle(`.light .${pageButton}`, {
  background: 'rgba(235, 239, 255, 0.9)',
  color: 'rgba(46, 53, 82, 0.72)',
  borderColor: 'rgba(184, 196, 233, 0.7)',
});

globalStyle(`.light .${pageButtonActive}`, {
  background: 'rgba(134, 159, 255, 0.88)',
  borderColor: 'rgba(134, 159, 255, 0.88)',
  color: '#0a0f1c',
});
