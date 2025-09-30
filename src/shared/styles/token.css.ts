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

export const lightVars = createGlobalTheme('.light', {
  color: {
    // 브랜드 & 포인트
    brand: '#6C4BFF',
    brandHover: '#7B61FF',
    dashboardBlue: '#1A73E8',

    // 텍스트
    textPrimary: '#1C1C1C', // 본문 텍스트
    textSecondary: '#6C6C6C', // 보조 텍스트
    textLight: '#E4E8FF', // 강조 대비 텍스트 (ex. 버튼 안)

    // 배경
    bgLight: '#FFFFFF', // 기본 배경 (화이트)
    bgDark: 'linear-gradient(180deg, #0a0f1c 0%, #070910 100%)', // 다크 배경은 라이트 모드에서도 필요 시 fallback

    // 테두리
    borderDark: 'rgba(62, 75, 120, 0.38)', // 사이드바 톤
    borderLight: 'rgba(0, 0, 0, 0.08)', // 푸터 라인
  },
});
