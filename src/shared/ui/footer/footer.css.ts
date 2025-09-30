// src/shared/ui/footer/footer.css.ts
import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@shared/styles/token.css.ts';

export const box = style({
  position: 'fixed',
  bottom: 0,
  left: vars.layout.sidebarWidth,
  width: `calc(100% - ${vars.layout.sidebarWidth})`,
  background: 'linear-gradient(180deg, #0a0f1c 0%, #070910 100%)', // ✅ 사이드바/헤더와 통일
  borderTop: '1px solid rgba(62, 75, 120, 0.38)', // ✅ 사이드바 보더와 동일
  zIndex: 1000,
});

export const container = style({
  width: '100%',
  maxWidth: '1400px',
  padding: '32px 24px',
  margin: '0 auto',
  color: '#c9d1f3', // ✅ 기본 텍스트 컬러 통일
});

export const footerRow = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: '2rem',
});

export const logoSection = style({
  flex: 1,
});

export const logo = style({
  fontFamily: 'Teko, sans-serif',
  color: '#9B1112', // ✅ 브랜드 블루
  fontSize: '28px',
  marginBottom: '8px',
});

export const copy = style({
  fontSize: '13px',
  color: '#95a3d8', // ✅ 사이드바 iconWrapper 텍스트 톤
});

export const menuSection = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '2rem',
  flex: 2,
});

export const menuHeading = style({
  fontSize: '14px',
  fontWeight: 600,
  marginBottom: '0.75rem',
  color: '#ffffff', // ✅ 명확하게 white로 heading 강조
});

export const menuList = style({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
});

export const menuItem = style({
  fontSize: '13px',
  color: '#c9d1f3', // ✅ 사이드바 기본 텍스트 컬러
  cursor: 'pointer',
  transition: 'color 0.2s ease',
  ':hover': {
    color: '#ffffff', // ✅ hover 시 화이트로 강조
  },
});

// Light mode overrides
globalStyle(`.light .${box}`, {
  background: 'linear-gradient(180deg, #ffffff 0%, #eef2ff 100%)',
  borderTop: '1px solid rgba(184, 196, 233, 0.8)',
});

globalStyle(`.light .${container}`, {
  color: '#2f3762',
});

globalStyle(`.light .${copy}`, {
  color: '#5a6594',
});

globalStyle(`.light .${menuHeading}`, {
  color: '#111633',
});

globalStyle(`.light .${menuItem}`, {
  color: '#3b4573',
});

globalStyle(`.light .${menuItem}:hover`, {
  color: '#111633',
});
