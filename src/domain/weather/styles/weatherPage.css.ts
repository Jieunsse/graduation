import { style } from '@vanilla-extract/css';

export const page = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: 28,
  paddingTop: 96,
  paddingBottom: 120,
});

export const hero = style({
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr) 320px',
  gap: 28,
  padding: '32px 36px',
  borderRadius: 28,
  background:
    'linear-gradient(135deg, rgba(26, 44, 92, 0.95), rgba(67, 104, 198, 0.9))',
  border: '1px solid rgba(96, 126, 230, 0.42)',
  boxShadow: '0 28px 68px rgba(8, 14, 36, 0.6)',
  color: '#e6edff',
  selectors: {
    ':root.light &': {
      background:
        'linear-gradient(135deg, rgba(226, 234, 255, 0.95), rgba(176, 197, 255, 0.9))',
      border: '1px solid rgba(152, 174, 240, 0.52)',
      boxShadow: '0 24px 56px rgba(108, 134, 224, 0.26)',
      color: '#101a38',
    },
  },
  '@media': {
    'screen and (max-width: 1100px)': {
      gridTemplateColumns: '1fr',
    },
  },
});

export const heroText = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
});

export const heroTitle = style({
  margin: 0,
  fontSize: 34,
  fontWeight: 800,
  letterSpacing: '-0.02em',
});

export const heroSubtitle = style({
  margin: 0,
  fontSize: 16,
  lineHeight: 1.6,
  color: 'rgba(220, 232, 255, 0.86)',
  selectors: {
    ':root.light &': {
      color: 'rgba(40, 54, 102, 0.75)',
    },
  },
});

export const heroMeta = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
  gap: 12,
  marginTop: 12,
});

export const metaCard = style({
  padding: '12px 14px',
  borderRadius: 14,
  background: 'rgba(16, 22, 48, 0.38)',
  border: '1px solid rgba(116, 146, 234, 0.35)',
  selectors: {
    ':root.light &': {
      background: 'rgba(218, 228, 255, 0.78)',
      border: '1px solid rgba(160, 180, 240, 0.32)',
    },
  },
});

export const metaLabel = style({
  display: 'block',
  fontSize: 11,
  textTransform: 'uppercase',
  letterSpacing: '0.16em',
  color: 'rgba(172, 194, 255, 0.75)',
  marginBottom: 4,
  selectors: {
    ':root.light &': {
      color: 'rgba(66, 88, 142, 0.72)',
    },
  },
});

export const metaValue = style({
  fontSize: 20,
  fontWeight: 700,
});

export const metaSub = style({
  display: 'block',
  marginTop: 2,
  fontSize: 13,
  color: 'rgba(214, 226, 255, 0.75)',
  selectors: {
    ':root.light &': {
      color: 'rgba(54, 70, 120, 0.72)',
    },
  },
});

export const heroCard = style({
  padding: 20,
  borderRadius: 18,
  background: 'rgba(7, 12, 28, 0.45)',
  border: '1px solid rgba(104, 140, 230, 0.35)',
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  selectors: {
    ':root.light &': {
      background: 'rgba(214, 226, 255, 0.85)',
      border: '1px solid rgba(150, 174, 240, 0.32)',
    },
  },
});

export const heroBadge = style({
  alignSelf: 'flex-start',
  padding: '6px 12px',
  borderRadius: 999,
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: '0.04em',
  background: 'rgba(112, 186, 255, 0.18)',
  border: '1px solid rgba(112, 186, 255, 0.45)',
  color: '#e6f3ff',
  selectors: {
    ':root.light &': {
      background: 'rgba(40, 82, 160, 0.08)',
      color: '#14305c',
      border: '1px solid rgba(36, 94, 186, 0.16)',
    },
  },
});

export const heroHighlight = style({
  fontSize: 28,
  fontWeight: 800,
});

export const heroStatus = style({
  margin: 0,
  color: 'rgba(214, 226, 255, 0.78)',
  fontSize: 14,
  lineHeight: 1.5,
  selectors: {
    ':root.light &': {
      color: 'rgba(48, 62, 110, 0.82)',
    },
  },
});

export const layout = style({
  display: 'grid',
  gridTemplateColumns: 'minmax(320px, 380px) minmax(0, 1fr)',
  gap: 24,
  '@media': {
    'screen and (max-width: 1200px)': {
      gridTemplateColumns: '1fr',
    },
  },
});

export const sectionCard = style({
  borderRadius: 16,
  background: 'rgba(12, 16, 32, 0.7)',
  border: '1px solid rgba(118, 136, 192, 0.32)',
  padding: 18,
  display: 'flex',
  flexDirection: 'column',
  gap: 14,
  selectors: {
    ':root.light &': {
      background: '#f7f8ff',
      border: '1px solid rgba(128, 152, 210, 0.25)',
    },
  },
});

export const sectionTitle = style({
  margin: 0,
  fontSize: 18,
  fontWeight: 700,
});

export const description = style({
  margin: 0,
  fontSize: 14,
  lineHeight: 1.6,
  color: 'rgba(200, 210, 235, 0.78)',
  selectors: {
    ':root.light &': {
      color: 'rgba(42, 56, 92, 0.78)',
    },
  },
});

export const eventList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
});

export const eventButton = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '12px 14px',
  borderRadius: 14,
  background: 'rgba(20, 28, 48, 0.7)',
  border: '1px solid rgba(118, 138, 210, 0.28)',
  color: 'inherit',
  cursor: 'pointer',
  transition: 'transform 0.15s ease, border-color 0.15s ease',
  selectors: {
    ':root.light &': {
      background: 'rgba(240, 244, 255, 0.95)',
      border: '1px solid rgba(144, 166, 220, 0.26)',
    },
    '&:hover': {
      transform: 'translateY(-1px)',
      borderColor: 'rgba(116, 156, 255, 0.55)',
    },
  },
});

export const activeEvent = style({
  borderColor: 'rgba(136, 182, 255, 0.8)',
  background: 'linear-gradient(135deg, rgba(60, 90, 160, 0.4), rgba(90, 126, 210, 0.35))',
  selectors: {
    ':root.light &': {
      background: 'linear-gradient(135deg, rgba(192, 210, 255, 0.55), rgba(224, 234, 255, 0.75))',
      borderColor: 'rgba(112, 146, 220, 0.8)',
    },
  },
});

export const eventLabel = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
});

export const eventName = style({
  fontSize: 15,
  fontWeight: 700,
});

export const eventMeta = style({
  fontSize: 13,
  color: 'rgba(196, 210, 235, 0.7)',
  selectors: {
    ':root.light &': {
      color: 'rgba(56, 70, 110, 0.7)',
    },
  },
});

export const badge = style({
  padding: '6px 10px',
  borderRadius: 999,
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: '0.03em',
  background: 'rgba(126, 202, 255, 0.18)',
  color: '#dfefff',
  border: '1px solid rgba(126, 202, 255, 0.36)',
  selectors: {
    ':root.light &': {
      background: 'rgba(40, 98, 170, 0.08)',
      color: '#143260',
      border: '1px solid rgba(64, 120, 198, 0.26)',
    },
  },
});

export const detailCard = style({
  borderRadius: 18,
  background: 'rgba(10, 14, 30, 0.75)',
  border: '1px solid rgba(116, 138, 210, 0.32)',
  padding: 20,
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  selectors: {
    ':root.light &': {
      background: '#f6f8ff',
      border: '1px solid rgba(126, 152, 208, 0.28)',
    },
  },
});

export const statsGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
  gap: 12,
});

export const stat = style({
  padding: 12,
  borderRadius: 12,
  background: 'rgba(20, 28, 56, 0.7)',
  border: '1px solid rgba(130, 152, 210, 0.25)',
  selectors: {
    ':root.light &': {
      background: 'rgba(228, 236, 255, 0.8)',
      border: '1px solid rgba(136, 162, 210, 0.24)',
    },
  },
});

export const statLabel = style({
  fontSize: 12,
  color: 'rgba(194, 206, 232, 0.78)',
  letterSpacing: '0.02em',
  selectors: {
    ':root.light &': {
      color: 'rgba(56, 70, 104, 0.78)',
    },
  },
});

export const statValue = style({
  fontSize: 18,
  fontWeight: 700,
  marginTop: 4,
});

export const sessionList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
});

export const sessionRow = style({
  display: 'grid',
  gridTemplateColumns: '120px 1fr',
  alignItems: 'center',
  gap: 12,
  padding: '10px 12px',
  borderRadius: 12,
  background: 'rgba(18, 24, 48, 0.64)',
  border: '1px solid rgba(116, 138, 210, 0.22)',
  selectors: {
    ':root.light &': {
      background: 'rgba(226, 234, 255, 0.84)',
      border: '1px solid rgba(130, 154, 210, 0.18)',
    },
  },
});

export const sessionTitle = style({
  fontWeight: 700,
  fontSize: 14,
});

export const sessionMeta = style({
  display: 'flex',
  gap: 12,
  flexWrap: 'wrap',
  fontSize: 13,
  color: 'rgba(198, 210, 235, 0.78)',
  selectors: {
    ':root.light &': {
      color: 'rgba(44, 60, 102, 0.78)',
    },
  },
});

export const historyControl = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
});

export const select = style({
  padding: '10px 12px',
  borderRadius: 12,
  border: '1px solid rgba(126, 152, 210, 0.42)',
  background: 'rgba(14, 18, 32, 0.9)',
  color: '#e6edff',
  selectors: {
    ':root.light &': {
      background: '#fff',
      color: '#0f1c40',
      border: '1px solid rgba(130, 152, 200, 0.36)',
    },
  },
});

export const historyCard = style({
  borderRadius: 14,
  padding: 14,
  background: 'rgba(16, 22, 44, 0.8)',
  border: '1px solid rgba(126, 152, 210, 0.3)',
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
  selectors: {
    ':root.light &': {
      background: 'rgba(238, 242, 255, 0.98)',
      border: '1px solid rgba(132, 154, 202, 0.24)',
    },
  },
});

export const historyTitle = style({
  margin: 0,
  fontSize: 15,
  fontWeight: 700,
});

export const historyMeta = style({
  margin: 0,
  fontSize: 13,
  color: 'rgba(196, 210, 236, 0.78)',
  selectors: {
    ':root.light &': {
      color: 'rgba(44, 58, 96, 0.8)',
    },
  },
});

export const historyStats = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
  gap: 8,
});

export const chip = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 6,
  padding: '6px 10px',
  borderRadius: 999,
  background: 'rgba(138, 176, 255, 0.14)',
  border: '1px solid rgba(138, 176, 255, 0.32)',
  fontSize: 13,
  selectors: {
    ':root.light &': {
      background: 'rgba(42, 96, 180, 0.06)',
      border: '1px solid rgba(42, 96, 180, 0.18)',
      color: '#102a52',
    },
  },
});
