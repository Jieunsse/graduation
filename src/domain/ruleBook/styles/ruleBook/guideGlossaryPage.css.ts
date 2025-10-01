import { style } from '@vanilla-extract/css';

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
  flexDirection: 'column',
  gap: 16,
  padding: '40px 48px',
  borderRadius: 24,
  background:
    'linear-gradient(135deg, rgba(18, 26, 46, 0.92), rgba(60, 80, 180, 0.78))',
  border: '1px solid rgba(98, 122, 210, 0.48)',
  boxShadow: '0 28px 42px rgba(10, 14, 28, 0.48)',
  color: 'rgba(223, 229, 255, 0.94)',
  whiteSpace: 'nowrap',
  selectors: {
    ':root.light &': {
      background:
        'linear-gradient(135deg, #f4f7ff 0%, #eef1ff 55%, #e2e7ff 100%)',
      border: '1px solid rgba(140, 152, 255, 0.45)',
      boxShadow: '0 20px 40px rgba(118, 131, 255, 0.18)',
      color: '#1C1C1C',
    },
  },
});

export const heroContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const heroTitle = style({
  margin: 0,
  fontSize: 36,
  fontWeight: 700,
  letterSpacing: '-0.01em',
});

export const heroSubtitle = style({
  margin: 0,
  fontSize: 14,
  lineHeight: 1.6,
  maxWidth: 640,
  color: 'rgba(226, 233, 255, 0.85)',
  selectors: {
    ':root.light &': {
      color: 'rgba(28, 28, 28, 0.74)',
    },
  },
});

export const heroMeta = style({
  display: 'flex',
  gap: 18,
  fontSize: 14,
  color: 'rgba(202, 214, 255, 0.78)',
  selectors: {
    ':root.light &': {
      color: 'rgba(66, 78, 140, 0.76)',
    },
  },
});

export const cardGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: 24,
});

export const sectionTitle = style({
  margin: 0,
  fontSize: 24,
  fontWeight: 600,
  color: '#dde3ff',
  selectors: {
    ':root.light &': {
      color: '#1C1C1C',
    },
  },
});

export const sectionHeader = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: 16,
});

export const helperText = style({
  fontSize: 14,
  color: 'rgba(202, 214, 255, 0.68)',
  selectors: {
    ':root.light &': {
      color: 'rgba(102, 112, 168, 0.75)',
    },
  },
});
