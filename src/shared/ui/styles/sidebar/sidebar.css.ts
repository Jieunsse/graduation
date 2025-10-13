// src/shared/ui/sidebar/sidebar.css.ts
import { style } from '@vanilla-extract/css';
import { colorVars } from '@shared/styles/color.css.ts';

// 컨테이너
export const container = style({
  width: '268px',
  minHeight: '100vh',
  padding: '32px 24px 28px',
  boxSizing: 'border-box',
  background: colorVars.surface.sidebar,
  borderRight: `1px solid ${colorVars.border.sidebar}`,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  color: colorVars.text.sidebar,
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
  color: colorVars.text.menuButton,
  fontSize: '14px',
  letterSpacing: '-0.01em',
  lineHeight: '1.45',
  cursor: 'pointer',
  transition:
    'background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease',

  ':hover': {
    background: colorVars.surface.interactiveHover,
    color: colorVars.text.menuButtonHover,
  },

  selectors: {
    '&:focus-visible': {
      outline: `2px solid ${colorVars.border.focus}`,
      outlineOffset: '2px',
    },
  },
});

// 메뉴 버튼 상태 (highlight, open)
export const menuButtonHighlight = style([
  menuButton,
  {
    background: colorVars.gradient.sidebarHighlight,
    color: colorVars.text.menuButtonHover,
    boxShadow: colorVars.effect.sidebarHighlightShadow,
    ':hover': {
      background: colorVars.gradient.sidebarHighlightHover,
    },
  },
]);

export const menuButtonActive = style([
  menuButton,
  {
    background: colorVars.surface.active,
    color: colorVars.text.menuActive,
    boxShadow: colorVars.effect.sidebarActiveShadow,
  },
]);

export const menuButtonOpen = style([
  menuButton,
  {
    background: colorVars.surface.open,
    color: colorVars.text.menuOpen,
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
  background: colorVars.surface.icon,
  color: colorVars.text.icon,
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
  background: colorVars.surface.tag,
  color: colorVars.text.tag,
  fontWeight: 600,
});

// 구분선
export const divider = style({
  margin: '28px 0 22px',
  border: 'none',
  height: '1px',
  background: colorVars.gradient.divider,
});

// 하단 컨트롤 버튼
export const controlButton = style({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  padding: '14px 16px',
  borderRadius: '14px',
  border: `1px solid ${colorVars.border.control}`,
  background: colorVars.surface.control,
  color: colorVars.text.control,
  cursor: 'pointer',
  transition:
    'border-color 0.2s ease, background-color 0.2s ease, color 0.2s ease',

  ':hover': {
    background: colorVars.surface.controlHover,
    borderColor: colorVars.border.controlHover,
    color: colorVars.text.controlHover,
  },

  selectors: {
    '&:focus-visible': {
      outline: `2px solid ${colorVars.border.focus}`,
      outlineOffset: '2px',
    },
  },
});
