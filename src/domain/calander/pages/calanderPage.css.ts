import { style } from '@vanilla-extract/css';

export const page = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: 32,
  paddingTop: 96,
  paddingBottom: 120,
});

export const hero = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: 32,
  padding: '40px 48px',
  borderRadius: 28,
  background:
    'linear-gradient(135deg, rgba(20, 30, 58, 0.92), rgba(57, 82, 182, 0.78))',
  border: '1px solid rgba(82, 110, 210, 0.45)',
  boxShadow: '0 32px 56px rgba(8, 12, 30, 0.65)',
  color: '#e7edff',
  selectors: {
    ':root.light &': {
      background:
        'linear-gradient(135deg, rgba(218, 226, 255, 0.96), rgba(166, 182, 255, 0.86))',
      border: '1px solid rgba(146, 160, 236, 0.48)',
      boxShadow: '0 28px 58px rgba(122, 140, 230, 0.24)',
      color: '#101835',
    },
  },
});

export const heroTitle = style({
  margin: 0,
  fontSize: 36,
  fontWeight: 700,
  letterSpacing: '-0.02em',
});

export const heroDescription = style({
  margin: '12px 0 0',
  fontSize: 15,
  color: 'rgba(222, 230, 255, 0.86)',
  maxWidth: 520,
  lineHeight: 1.6,
  selectors: {
    ':root.light &': {
      color: 'rgba(44, 56, 108, 0.76)',
    },
  },
});

export const heroMeta = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  gap: 20,
});

export const heroMetaCard = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  padding: '18px 20px',
  borderRadius: 18,
  background: 'rgba(12, 18, 36, 0.48)',
  border: '1px solid rgba(96, 118, 210, 0.35)',
  selectors: {
    ':root.light &': {
      background: 'rgba(222, 229, 255, 0.65)',
      border: '1px solid rgba(160, 176, 240, 0.35)',
    },
  },
});

export const heroMetaLabel = style({
  fontSize: 12,
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: 'rgba(154, 178, 255, 0.78)',
  selectors: {
    ':root.light &': {
      color: 'rgba(64, 82, 150, 0.75)',
    },
  },
});

export const heroMetaValue = style({
  fontSize: 18,
  fontWeight: 600,
  color: '#f6f8ff',
  selectors: {
    ':root.light &': {
      color: '#1a2142',
    },
  },
});

export const heroMetaSub = style({
  fontSize: 13,
  color: 'rgba(200, 212, 250, 0.7)',
  selectors: {
    ':root.light &': {
      color: 'rgba(52, 66, 116, 0.68)',
    },
  },
});

export const layout = style({
  display: 'grid',
  gridTemplateColumns: 'minmax(360px, 420px) minmax(0, 1fr)',
  gap: 28,
  alignItems: 'start',
  '@media': {
    'screen and (max-width: 1280px)': {
      gridTemplateColumns: 'minmax(320px, 380px) minmax(0, 1fr)',
    },
    'screen and (max-width: 1024px)': {
      gridTemplateColumns: '1fr',
    },
  },
});

export const detailColumn = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
});
