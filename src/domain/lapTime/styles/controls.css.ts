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

export const optionCardFullWidth = style({
  gridColumn: '1 / -1',
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

export const driverGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
  gap: 12,
});

export const driverOption = style({
  display: 'grid',
  gridTemplateColumns: 'auto auto 1fr',
  alignItems: 'center',
  gap: 12,
  padding: '14px 18px',
  borderRadius: 14,
  border: '1px solid rgba(148, 163, 184, 0.25)',
  backgroundColor: 'rgba(15, 23, 42, 0.35)',
  cursor: 'pointer',
  minHeight: 92,
  transition:
    'background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease',
  selectors: {
    '&:hover': {
      borderColor: 'rgba(148, 163, 184, 0.45)',
      transform: 'translateY(-1px)',
    },
    '&[data-selected="true"]': {
      backgroundColor: 'rgba(99, 102, 241, 0.18)',
      borderColor: 'rgba(99, 102, 241, 0.55)',
      boxShadow: '0 10px 24px rgba(99, 102, 241, 0.2)',
    },
    ':root.light &': {
      backgroundColor: 'rgba(244, 246, 255, 0.9)',
      borderColor: 'rgba(120, 128, 171, 0.22)',
    },
    ':root.light &:hover': {
      borderColor: 'rgba(99, 102, 241, 0.45)',
      boxShadow: '0 8px 18px rgba(111, 126, 255, 0.18)',
    },
    ':root.light &[data-selected="true"]': {
      backgroundColor: 'rgba(99, 102, 241, 0.16)',
      borderColor: 'rgba(99, 102, 241, 0.5)',
      boxShadow: '0 12px 26px rgba(111, 126, 255, 0.24)',
    },
  },
});

export const driverCheckbox = style({
  width: 18,
  height: 18,
});

export const driverColor = style({
  width: 14,
  height: 14,
  borderRadius: '9999px',
  boxShadow: '0 0 0 2px rgba(15, 23, 42, 0.5)',
  selectors: {
    ':root.light &': {
      boxShadow: '0 0 0 2px rgba(255, 255, 255, 0.9)',
    },
  },
});

export const driverInfo = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  minWidth: 0,
});

export const driverName = style({
  fontSize: 15,
  fontWeight: 600,
  lineHeight: 1.3,
  color: '#F1F5FF',
  overflowWrap: 'anywhere',
  selectors: {
    ':root.light &': {
      color: '#1C1C1C',
    },
  },
});

export const driverTeam = style({
  fontSize: 12,
  color: 'rgba(226, 232, 240, 0.7)',
  lineHeight: 1.4,
  selectors: {
    ':root.light &': {
      color: '#6C6C6C',
    },
  },
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
  color: '#121212',
});

export const helperText = style({
  fontSize: 12,
  opacity: 0.6,
});
