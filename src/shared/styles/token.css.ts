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
    gridCardBg: '#0f172a',
    gridCardBorder: 'rgba(148, 163, 184, 0.2)',
    gridCardText: '#f8fbff',
    gridCardSubtleText: 'rgba(226, 232, 240, 0.72)',
    gridCardAccent: '#ffffff',
    gridCardDivider: 'rgba(148, 163, 184, 0.45)',
    gridCardGlow: 'rgba(99, 102, 241, 0.35)',
    gridSkeletonBase: 'rgba(148, 163, 184, 0.18)',
    gridSkeletonHighlight: 'rgba(226, 232, 240, 0.32)',
    gridHeroBackground: 'linear-gradient(135deg, #0b1220 0%, #1f2937 100%)',
    gridHeroBorder: 'rgba(148, 163, 184, 0.35)',
    gridHeroOverlay: 'linear-gradient(180deg, rgba(15, 23, 42, 0.7) 0%, rgba(15, 23, 42, 0.92) 100%)',
    gridHeroShadow: '0 40px 120px rgba(5, 10, 28, 0.6)',
    gridCardShadow: '0 32px 60px rgba(4, 10, 24, 0.55)',
    gridCardHoverShadow: '0 40px 80px rgba(4, 10, 24, 0.65)',
    gridCardImageShadow: '0 18px 38px rgba(0, 0, 0, 0.45)',
    gridCardPositionShadow: '0 8px 24px rgba(0, 0, 0, 0.45)',
    gridControlActiveBg: 'rgba(99, 102, 241, 0.18)',
    gridControlActiveBorder: 'rgba(129, 140, 248, 0.65)',
    gridControlActiveText: '#f8fbff',
    gridControlHoverBg: 'rgba(99, 102, 241, 0.08)',
    gridControlHoverBorder: 'rgba(129, 140, 248, 0.35)',
    gridStatusBg: 'rgba(15, 23, 42, 0.78)',
    gridStatusBorder: 'rgba(148, 163, 184, 0.28)',
    gridErrorText: '#fca5a5',
    gridErrorBorder: 'rgba(252, 165, 165, 0.55)',
    gridWarningBg: 'rgba(253, 224, 71, 0.16)',
    gridWarningBorder: 'rgba(253, 224, 71, 0.48)',
    gridWarningText: '#fde047',
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
    gridCardBg: '#0f172a',
    gridCardBorder: 'rgba(148, 163, 184, 0.2)',
    gridCardText: '#f8fbff',
    gridCardSubtleText: 'rgba(226, 232, 240, 0.72)',
    gridCardAccent: '#ffffff',
    gridCardDivider: 'rgba(148, 163, 184, 0.45)',
    gridCardGlow: 'rgba(99, 102, 241, 0.35)',
    gridSkeletonBase: 'rgba(148, 163, 184, 0.18)',
    gridSkeletonHighlight: 'rgba(226, 232, 240, 0.32)',
    gridHeroBackground: 'linear-gradient(135deg, #0b1220 0%, #1f2937 100%)',
    gridHeroBorder: 'rgba(148, 163, 184, 0.35)',
    gridHeroOverlay: 'linear-gradient(180deg, rgba(15, 23, 42, 0.7) 0%, rgba(15, 23, 42, 0.92) 100%)',
    gridHeroShadow: '0 40px 120px rgba(5, 10, 28, 0.6)',
    gridCardShadow: '0 32px 60px rgba(4, 10, 24, 0.55)',
    gridCardHoverShadow: '0 40px 80px rgba(4, 10, 24, 0.65)',
    gridCardImageShadow: '0 18px 38px rgba(0, 0, 0, 0.45)',
    gridCardPositionShadow: '0 8px 24px rgba(0, 0, 0, 0.45)',
    gridControlActiveBg: 'rgba(99, 102, 241, 0.18)',
    gridControlActiveBorder: 'rgba(129, 140, 248, 0.65)',
    gridControlActiveText: '#f8fbff',
    gridControlHoverBg: 'rgba(99, 102, 241, 0.08)',
    gridControlHoverBorder: 'rgba(129, 140, 248, 0.35)',
    gridStatusBg: 'rgba(15, 23, 42, 0.78)',
    gridStatusBorder: 'rgba(148, 163, 184, 0.28)',
    gridErrorText: '#fca5a5',
    gridErrorBorder: 'rgba(252, 165, 165, 0.55)',
    gridWarningBg: 'rgba(253, 224, 71, 0.16)',
    gridWarningBorder: 'rgba(253, 224, 71, 0.48)',
    gridWarningText: '#fde047',
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
    gridCardBg: '#ffffff',
    gridCardBorder: 'rgba(15, 23, 42, 0.08)',
    gridCardText: '#0f172a',
    gridCardSubtleText: '#475569',
    gridCardAccent: '#0f172a',
    gridCardDivider: 'rgba(15, 23, 42, 0.12)',
    gridCardGlow: 'rgba(99, 102, 241, 0.12)',
    gridSkeletonBase: 'rgba(226, 232, 240, 0.6)',
    gridSkeletonHighlight: 'rgba(148, 163, 184, 0.45)',
    gridHeroBackground: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)',
    gridHeroBorder: 'rgba(99, 102, 241, 0.28)',
    gridHeroOverlay: 'linear-gradient(180deg, rgba(255, 255, 255, 0.7) 0%, rgba(241, 245, 249, 0.9) 100%)',
    gridHeroShadow: '0 40px 60px rgba(15, 23, 42, 0.18)',
    gridCardShadow: '0 24px 48px rgba(15, 23, 42, 0.12)',
    gridCardHoverShadow: '0 32px 60px rgba(15, 23, 42, 0.16)',
    gridCardImageShadow: '0 16px 30px rgba(15, 23, 42, 0.12)',
    gridCardPositionShadow: '0 4px 18px rgba(15, 23, 42, 0.25)',
    gridControlActiveBg: 'rgba(99, 102, 241, 0.18)',
    gridControlActiveBorder: 'rgba(99, 102, 241, 0.38)',
    gridControlActiveText: '#312e81',
    gridControlHoverBg: 'rgba(99, 102, 241, 0.08)',
    gridControlHoverBorder: 'rgba(99, 102, 241, 0.24)',
    gridStatusBg: '#f8fafc',
    gridStatusBorder: 'rgba(15, 23, 42, 0.08)',
    gridErrorText: '#b91c1c',
    gridErrorBorder: 'rgba(239, 68, 68, 0.45)',
    gridWarningBg: 'rgba(234, 179, 8, 0.16)',
    gridWarningBorder: 'rgba(234, 179, 8, 0.45)',
    gridWarningText: '#92400e',
  },
});
