// src/shared/ui/header/header.css.ts
import { globalStyle, style } from '@vanilla-extract/css';

export const box = style({
  position: 'fixed',
  top: 0,
  left: '268px', // 사이드바 width 고정
  width: `calc(100% - 268px)`,
  height: '70px',
  zIndex: 1000,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const container = style({
  width: '100%',
  maxWidth: '1200px',
  padding: '0 24px',
  marginTop: '12px',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  background: 'rgba(15, 21, 35, 0.92)', // ✅ 사이드바 controlButton 배경 톤 차용
  border: '1px solid rgba(63, 77, 126, 0.55)', // ✅ 통일감
  borderRadius: '12px',
  boxShadow: '0 12px 28px rgba(39, 58, 147, 0.35)', // ✅ highlight shadow와 유사
});

export const headerRow = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const logo = style({
  fontFamily: 'Teko, serif',
  color: '#9B1112', // ✅ 브랜드 블루
  fontSize: '40px',
  marginTop: '8px',
});

export const buttonStyle = style({
  border: 'none',
  cursor: 'pointer',
  padding: '10px 16px',
  backgroundColor: 'transparent',
  color: '#c9d1f3', // ✅ 사이드바 기본 텍스트 컬러
  fontFamily: `'Paperozi', sans-serif`,
  fontWeight: 400,
  fontSize: '16px',
  borderRadius: '12px',
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  lineHeight: 1,
  transition: 'background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease',
  selectors: {
    '&:visited': {
      color: '#c9d1f3',
    },
  },

  ':hover': {
    background: 'rgba(91, 114, 196, 0.16)', // ✅ 사이드바 hover 배경
    color: '#ffffff',
  },
});

export const buttonActive = style({
  background: 'rgba(91, 114, 196, 0.24)',
  color: '#ffffff',
  boxShadow: '0 0 0 1px rgba(134, 159, 255, 0.35)',
});

export const loginButtonStyle = style({
  border: 'none',
  cursor: 'pointer',
  padding: '10px 16px',
  background:
    'linear-gradient(135deg, rgba(110, 135, 255, 0.28), rgba(68, 100, 238, 0.2))', // ✅ highlight 스타일 차용
  borderRadius: '12px',
  fontFamily: `'Paperozi', sans-serif`,
  fontWeight: 500,
  color: '#ffffff',
  boxShadow: '0 12px 28px rgba(39, 58, 147, 0.35)',
  transition: 'background 0.2s ease',

  ':hover': {
    background:
      'linear-gradient(135deg, rgba(134, 159, 255, 0.36), rgba(92, 121, 255, 0.26))',
  },
});

// Light mode overrides
globalStyle(`.light .${container}`, {
  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.94), rgba(236, 240, 255, 0.94))',
  border: '1px solid rgba(184, 196, 233, 0.8)',
  boxShadow: '0 12px 28px rgba(159, 176, 231, 0.28)',
});

globalStyle(`.light .${buttonStyle}`, {
  color: '#2f3762',
});

globalStyle(`.light .${buttonStyle}:hover`, {
  background: 'rgba(150, 166, 237, 0.25)',
  color: '#111633',
});

globalStyle(`.light .${buttonActive}`, {
  background: 'rgba(150, 166, 237, 0.35)',
  color: '#111633',
  boxShadow: '0 0 0 1px rgba(150, 166, 237, 0.45)',
});

globalStyle(`.light .${loginButtonStyle}`, {
  background:
    'linear-gradient(135deg, rgba(155, 17, 18, 0.18), rgba(155, 17, 18, 0.12))',
  color: '#9B1112',
  boxShadow: '0 10px 22px rgba(155, 17, 18, 0.18)',
});

globalStyle(`.light .${loginButtonStyle}:hover`, {
  background:
    'linear-gradient(135deg, rgba(155, 17, 18, 0.24), rgba(155, 17, 18, 0.16))',
  color: '#5c0909',
});
