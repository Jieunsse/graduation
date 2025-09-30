import { globalStyle, style } from '@vanilla-extract/css';

export const container = style({
  position: 'relative',
  width: '100%',
  maxWidth: '420px',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  padding: '48px 40px',
  borderRadius: '28px',
  background: 'rgba(10, 15, 28, 0.88)',
  border: '1px solid rgba(63, 77, 126, 0.55)',
  boxShadow: '0 24px 48px rgba(9, 12, 24, 0.55)',
  backdropFilter: 'blur(18px)',
  color: '#f7f9ff',
  fontFamily: `'Paperozi', sans-serif`,
});

export const header = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  textAlign: 'center',
});

export const logo = style({
  fontFamily: 'Teko, serif',
  fontSize: '38px',
  letterSpacing: '0.08em',
  color: '#9B1112',
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
  gap: '16px',
});

export const label = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  fontSize: '14px',
  color: 'rgba(203, 209, 255, 0.92)',
});

export const input = style({
  width: '100%',
  padding: '14px 16px',
  borderRadius: '14px',
  border: '1px solid rgba(102, 120, 189, 0.6)',
  background: 'rgba(5, 9, 19, 0.78)',
  color: '#f7f9ff',
  fontSize: '15px',
  transition: 'border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease',
  selectors: {
    '&::placeholder': {
      color: 'rgba(149, 163, 216, 0.68)',
    },
    '&:focus': {
      outline: 'none',
      borderColor: 'rgba(155, 17, 18, 0.6)',
      boxShadow: '0 0 0 2px rgba(155, 17, 18, 0.28)',
      background: 'rgba(10, 14, 26, 0.92)',
    },
  },
});

export const loginButton = style({
  marginTop: '12px',
  width: '100%',
  padding: '14px 16px',
  borderRadius: '14px',
  border: 'none',
  cursor: 'pointer',
  background:
    'linear-gradient(135deg, rgba(134, 159, 255, 0.26), rgba(91, 114, 196, 0.22))',
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: 600,
  letterSpacing: '0.04em',
  boxShadow: '0 18px 32px rgba(39, 58, 147, 0.45)',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease',
  selectors: {
    '&:hover': {
      transform: 'translateY(-1px)',
      boxShadow: '0 22px 38px rgba(62, 92, 214, 0.42)',
      background:
        'linear-gradient(135deg, rgba(155, 17, 18, 0.36), rgba(134, 159, 255, 0.28))',
    },
    '&:active': {
      transform: 'translateY(0)',
    },
  },
});

export const googleButton = style({
  width: '100%',
  padding: '12px 16px',
  borderRadius: '14px',
  border: '1px solid rgba(141, 150, 196, 0.4)',
  background: 'rgba(10, 14, 24, 0.62)',
  color: '#f7f9ff',
  fontSize: '15px',
  fontWeight: 500,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '12px',
  cursor: 'pointer',
  transition: 'border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease',
  selectors: {
    '& svg': {
      width: '20px',
      height: '20px',
    },
    '&:hover': {
      borderColor: 'rgba(155, 17, 18, 0.55)',
      boxShadow: '0 16px 32px rgba(9, 12, 24, 0.45)',
      background: 'rgba(15, 20, 34, 0.82)',
    },
  },
});

export const googleIcon = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  background: '#fff',
  boxShadow: '0 4px 14px rgba(9, 12, 24, 0.4)',
});

export const footer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px',
  fontSize: '14px',
  color: 'rgba(203, 209, 255, 0.82)',
});

export const signUpButton = style({
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
  background: 'rgba(255, 255, 255, 0.9)',
  border: '1px solid rgba(184, 196, 233, 0.6)',
  boxShadow: '0 20px 40px rgba(120, 132, 189, 0.25)',
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
  border: '1px solid rgba(155, 17, 18, 0.6)',
  boxShadow: '0 0 0 2px rgba(155, 17, 18, 0.18)',
  background: '#f8f9ff',
});

globalStyle(`.light .${loginButton}`, {
  background:
    'linear-gradient(135deg, rgba(155, 17, 18, 0.86), rgba(155, 17, 18, 0.74))',
  boxShadow: '0 18px 38px rgba(155, 17, 18, 0.3)',
});

globalStyle(`.light .${googleButton}`, {
  background: '#ffffff',
  color: '#2f3762',
  border: '1px solid rgba(184, 196, 233, 0.8)',
});

globalStyle(`.light .${googleIcon}`, {
  boxShadow: '0 4px 12px rgba(120, 132, 189, 0.25)',
});

globalStyle(`.light .${footer}`, {
  color: 'rgba(55, 63, 92, 0.8)',
});

globalStyle(`.light .${signUpButton}`, {
  color: '#9B1112',
});
