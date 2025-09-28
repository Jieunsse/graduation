import { style } from '@vanilla-extract/css';
import { vars } from '@shared/styles/token.css.ts';

export const container = style({
  display: 'grid',
  gridTemplateColumns: `${vars.layout.sidebarWidth} minmax(0, 1fr)`,
  height: '100vh', // minHeight → height 로 변경
  overflow: 'hidden', // 전체 스크롤 제거
});

export const sidebarSlot = style({
  width: vars.layout.sidebarWidth,
  height: '100vh', // 뷰포트 꽉 차게
  overflowY: 'auto', // 사이드바 내부에서만 스크롤
});

export const contentSlot = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100vh',
  overflowY: 'auto', // 컨텐츠 쪽도 필요하다면 개별 스크롤
});

export const contentInner = style({
  width: '100%',
  maxWidth: vars.layout.contentMaxWidth,
  paddingInline: '16px',
  display: 'flex',
  flexDirection: 'column',
  rowGap: vars.layout.gap,
});

// ✅ 헤더
export const header = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'fixed',
  top: 0,
  left: vars.layout.sidebarWidth, // 사이드바 오른쪽부터 시작
  right: 0,
  height: vars.layout.headerHeight,
});

export const headerInner = style({
  width: '100%',
  maxWidth: vars.layout.contentMaxWidth,
  paddingInline: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

// ✅ 푸터
export const footer = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'fixed',
  bottom: 0,
  left: vars.layout.sidebarWidth,
  right: 0,
  height: vars.layout.footerHeight,
});

export const footerInner = style({
  width: '100%',
  maxWidth: vars.layout.contentMaxWidth,
  paddingInline: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});
