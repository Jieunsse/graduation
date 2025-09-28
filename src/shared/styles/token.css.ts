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

    headerBg: 'linear-gradient(180deg, #0a0f1c 0%, #070910 100%)',
    headerText: '',
    headerBorder: '',

    buttonBg: '',
    buttonHover: '#9B1112',

    loginButtonBg: '#9B1112',
    loginButtonText: '',
  },
});

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
  },
});

export const lightVars = createGlobalTheme('.light', {
  color: {
    brand: '#9B1112',

    headerBg: '#e4e8ff',
    headerText: '#111111',
    headerBorder: '#e0e0e0',

    buttonBg: '#ffffff',
    buttonHover: 'rgba(0, 0, 0, 0.05)',

    loginButtonBg: '#9B1112',
    loginButtonText: '#ffffff',
  },
});
