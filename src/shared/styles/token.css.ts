// token.css.ts
import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  layout: {
    headerHeight: '64px',
    footerHeight: '64px',
    sidebarWidth: '268px',
    gap: '24px',
    paddingX: '24px',
    paddingY: '24px',
    contentMaxWidth: '1200px',
  },
  color: {
    brand: '#9B1112',

    // ✅ 기본 다크 스타일 (fallback)
    headerBg: 'linear-gradient(180deg, #0a0f1c 0%, #070910 100%)',
    headerText: '#c9d1f3',
    headerBorder: 'rgba(62, 75, 120, 0.38)',

    buttonBg: 'rgba(15, 21, 35, 0.92)',
    buttonHover: 'rgba(39, 51, 86, 0.92)',

    loginButtonBg: '#9B1112',
    loginButtonText: '#ffffff',

    // 사이드바/푸터 추가
    background: 'linear-gradient(180deg, #0a0f1c 0%, #070910 100%)',
    text: '#c9d1f3',
    subText: '#95a3d8',
    border: 'rgba(62, 75, 120, 0.38)',
  },
});

// ✅ 다크 모드
export const darkVars = createGlobalTheme('.dark', {
  color: {
    brand: '#9B1112',

    headerBg: '#121212',
    headerText: '#ffffff',
    headerBorder: '#2c2c2e',

    buttonBg: '#121212',
    buttonHover: 'rgba(255, 255, 255, 0.05)',

    loginButtonBg: '#9B1112',
    loginButtonText: '#ffffff',

    background: 'linear-gradient(180deg, #0a0f1c 0%, #070910 100%)',
    text: '#c9d1f3',
    subText: '#95a3d8',
    border: 'rgba(62, 75, 120, 0.38)',
  },
});

// ✅ 라이트 모드
export const lightVars = createGlobalTheme('.light', {
  color: {
    brand: '#3b82f6', // 라이트 모드 브랜드 블루

    headerBg: '#ffffff',
    headerText: '#2d2d2d',
    headerBorder: '#e3e6ef',

    buttonBg: '#f1f5f9',
    buttonHover: '#e2e8f0',

    loginButtonBg: '#3b82f6',
    loginButtonText: '#ffffff',

    background: '#f9fafc', // 사이드바/푸터 밝은 배경
    text: '#2d2d2d',
    subText: '#6b7280',
    border: '#e3e6ef',
  },
});
