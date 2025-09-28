// src/shared/ui/sidebar/sidebar.css.ts
import { style } from '@vanilla-extract/css';

// 컨테이너
export const container = style({
  width: '268px',
  minHeight: '100vh',
  padding: '32px 24px 28px',
  boxSizing: 'border-box',
  background: 'linear-gradient(180deg, #0a0f1c 0%, #070910 100%)',
  borderRight: '1px solid rgba(62, 75, 120, 0.38)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  color: '#e4e8ff',
  fontFamily: `'Paperlogy', 'Noto Sans KR', sans-serif`,
});

// 섹션
export const section = style({
  display: 'flex',
  flexDirection: 'column',
});

// 메뉴 리스트
export const menuList = style({
  listStyle: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
});

// 메뉴 버튼
export const menuButton = style({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  padding: '10px 12px',
  border: 'none',
  borderRadius: '14px',
  background: 'none',
  color: '#c9d1f3',
  fontSize: '14px',
  letterSpacing: '-0.01em',
  lineHeight: '1.45',
  cursor: 'pointer',
  transition:
    'background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease',

  ':hover': {
    background: 'rgba(91, 114, 196, 0.16)',
    color: '#ffffff',
  },

  selectors: {
    '&:focus-visible': {
      outline: '2px solid rgba(120, 146, 255, 0.55)',
      outlineOffset: '2px',
    },
  },
});

// 메뉴 버튼 상태 (highlight, open)
export const menuButtonHighlight = style([
  menuButton,
  {
    background:
      'linear-gradient(135deg, rgba(110, 135, 255, 0.28), rgba(68, 100, 238, 0.2))',
    color: '#ffffff',
    boxShadow: '0 12px 28px rgba(39, 58, 147, 0.35)',
    ':hover': {
      background:
        'linear-gradient(135deg, rgba(134, 159, 255, 0.36), rgba(92, 121, 255, 0.26))',
    },
  },
]);

export const menuButtonOpen = style([
  menuButton,
  {
    background: 'rgba(92, 116, 201, 0.18)',
    color: '#f5f7ff',
  },
]);

// 아이콘
export const iconWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '34px',
  height: '34px',
  borderRadius: '12px',
  background: 'rgba(66, 80, 127, 0.26)',
  color: '#95a3d8',
  flexShrink: 0,
  transition: 'background 0.2s ease, color 0.2s ease',
});

export const icon = style({
  width: '20px',
  height: '20px',
});

// 텍스트
export const label = style({
  fontWeight: 500,
  color: 'inherit',
});

export const tag = style({
  marginLeft: 'auto',
  padding: '2px 8px',
  borderRadius: '999px',
  fontSize: '11px',
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  background: 'rgba(116, 138, 255, 0.22)',
  color: '#dfe4ff',
  fontWeight: 600,
});

// 구분선
export const divider = style({
  margin: '28px 0 22px',
  border: 'none',
  height: '1px',
  background:
    'linear-gradient(90deg, rgba(74, 86, 133, 0) 0%, rgba(74, 86, 133, 0.65) 50%, rgba(74, 86, 133, 0) 100%)',
});

// 하단 컨트롤 버튼
export const controlButton = style({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  padding: '14px 16px',
  borderRadius: '14px',
  border: '1px solid rgba(63, 77, 126, 0.55)',
  background: 'rgba(15, 21, 35, 0.92)',
  color: '#dce2ff',
  cursor: 'pointer',
  transition:
    'border-color 0.2s ease, background-color 0.2s ease, color 0.2s ease',

  ':hover': {
    background: 'rgba(39, 51, 86, 0.92)',
    borderColor: 'rgba(101, 126, 197, 0.75)',
    color: '#ffffff',
  },

  selectors: {
    '&:focus-visible': {
      outline: '2px solid rgba(120, 146, 255, 0.55)',
      outlineOffset: '2px',
    },
  },
});
