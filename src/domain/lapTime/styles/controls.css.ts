import { style } from '@vanilla-extract/css';

export const optionsContainer = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
  gap: 16,
  width: '100%',
});

export const optionCard = style({
  borderRadius: 12,
  padding: 12,
  backgroundColor: 'rgba(148, 163, 184, 0.08)',
  border: '1px solid rgba(148, 163, 184, 0.2)',
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
});

export const optionLabel = style({
  fontSize: 13,
  fontWeight: 600,
  opacity: 0.8,
  letterSpacing: '0.02em',
  textTransform: 'uppercase',
});

export const checkboxRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
});

export const slider = style({
  width: '100%',
});

export const select = style({
  height: 36,
  borderRadius: 8,
  border: '1px solid var(--color-border, rgba(148, 163, 184, 0.3))',
  padding: '0 10px',
  fontSize: 14,
  backgroundColor: 'transparent',
  color: 'inherit',
});

export const helperText = style({
  fontSize: 12,
  opacity: 0.6,
});
