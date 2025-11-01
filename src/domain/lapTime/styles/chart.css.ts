import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  width: '100%',
  marginTop: '80px',
});

export const chartPanel = style({
  backgroundColor: 'var(--color-panel-bg, rgba(255,255,255,0.05))',
  borderRadius: 16,
  padding: 24,
  boxShadow: '0 10px 40px rgba(15, 23, 42, 0.12)',
  width: '100%',
  boxSizing: 'border-box',
  overflow: 'hidden',
});

export const chartHeader = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: 12,
  marginBottom: 16,
});

export const chartTitle = style({
  fontSize: 20,
  fontWeight: 700,
  letterSpacing: '-0.02em',
});

export const chartWrapper = style({
  width: '100%',
  height: 420,
});

export const emptyState = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 280,
  fontSize: 16,
  fontWeight: 500,
  opacity: 0.7,
});
