import { globalStyle, style } from '@vanilla-extract/css';

export const container = style({
  position: 'relative',
  width: '100%',
  maxWidth: '460px',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  padding: '52px 44px',
  borderRadius: '30px',
  background: 'rgba(10, 15, 28, 0.9)',
  border: '1px solid rgba(63, 77, 126, 0.55)',
  boxShadow: '0 26px 52px rgba(9, 12, 24, 0.55)',
  backdropFilter: 'blur(20px)',
  color: '#f7f9ff',
  fontFamily: `'Paperozi', sans-serif`,
});

export const header = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  textAlign: 'center',
});

export const logo = style({
  fontFamily: 'Teko, serif',
  fontSize: '38px',
  letterSpacing: '0.08em',
  color: '#9B1112',
});

export const titleGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
});

export const title = style({
  fontSize: '28px',
  fontWeight: 600,
});

export const subtitle = style({
  fontSize: '15px',
  lineHeight: 1.6,
  color: 'rgba(203, 209, 255, 0.82)',
});

export const form = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '18px',
});

export const fieldGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
});

export const label = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  fontSize: '14px',
  color: 'rgba(203, 209, 255, 0.92)',
});

export const input = style({
  padding: '12px 10px',
  borderRadius: '14px',
  border: '1px solid rgba(102, 120, 189, 0.6)',
  background: 'rgba(5, 9, 19, 0.8)',
  color: '#f7f9ff',
  fontSize: '15px',
  transition:
    'border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease, transform 0.2s ease',
  selectors: {
    '&::placeholder': {
      color: 'rgba(149, 163, 216, 0.68)',
    },
    '&:focus': {
      outline: 'none',
      borderColor: 'rgba(155, 17, 18, 0.6)',
      boxShadow: '0 0 0 2px rgba(155, 17, 18, 0.28)',
      background: 'rgba(10, 14, 26, 0.92)',
      transform: 'translateY(-1px)',
    },
  },
});

export const helper = style({
  fontSize: '12px',
  lineHeight: 1.5,
  color: 'rgba(149, 163, 216, 0.75)',
});

export const passwordHint = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
  padding: '14px 16px',
  borderRadius: '16px',
  background: 'rgba(23, 30, 55, 0.55)',
  border: '1px solid rgba(63, 77, 126, 0.45)',
});

export const actions = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  marginTop: '4px',
});

export const submitButton = style({
  width: '100%',
  height: '48px',
  padding: '12px 8px',
  borderRadius: '16px',
  border: 'none',
  cursor: 'pointer',
  background:
    'linear-gradient(135deg, rgba(134, 159, 255, 0.26), rgba(91, 114, 196, 0.22))',
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: 600,
  letterSpacing: '0.04em',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease',
  selectors: {
    '&:hover': {
      transform: 'translateY(-1px)',
      background:
        'linear-gradient(135deg, rgba(155, 17, 18, 0.36), rgba(134, 159, 255, 0.28))',
    },
    '&:active': {
      transform: 'translateY(0)',
    },
  },
});

export const footer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px',
  fontSize: '14px',
  color: 'rgba(203, 209, 255, 0.82)',
});

export const loginButton = style({
  border: 'none',
  background: 'none',
  color: '#9B1112',
  fontWeight: 600,
  cursor: 'pointer',
  padding: 0,
  selectors: {
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

globalStyle(`.light .${container}`, {
  background: 'rgba(255, 255, 255, 0.92)',
  border: '1px solid rgba(184, 196, 233, 0.6)',
  boxShadow: '0 22px 44px rgba(120, 132, 189, 0.24)',
  color: '#1C1C1C',
});

globalStyle(`.light .${subtitle}`, {
  color: 'rgba(55, 63, 92, 0.7)',
});

globalStyle(`.light .${label}`, {
  color: 'rgba(44, 52, 78, 0.92)',
});

globalStyle(`.light .${input}`, {
  background: '#ffffff',
  border: '1px solid rgba(184, 196, 233, 0.7)',
  color: '#1C1C1C',
});

globalStyle(`.light .${input}::placeholder`, {
  color: 'rgba(122, 133, 176, 0.7)',
});

globalStyle(`.light .${input}:focus`, {
  border: '1px solid rgba(155, 17, 18, 0.55)',
  boxShadow: '0 0 0 2px rgba(155, 17, 18, 0.18)',
  background: '#f8f9ff',
});

globalStyle(`.light .${passwordHint}`, {
  background: 'rgba(244, 246, 255, 0.85)',
  border: '1px solid rgba(184, 196, 233, 0.6)',
});

globalStyle(`.light .${footer}`, {
  color: 'rgba(55, 63, 92, 0.8)',
});

globalStyle(`.light .${loginButton}`, {
  color: '#9B1112',
});

globalStyle(`.light .${submitButton}`, {
  background: '#9B1112',
});
