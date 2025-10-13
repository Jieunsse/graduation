import {
  createGlobalTheme,
  createGlobalThemeContract,
} from '@vanilla-extract/css';

export const colorVars = createGlobalThemeContract({
  brand: {
    primary: 'brand-primary',
    primaryHover: 'brand-primary-hover',
    onPrimary: 'brand-on-primary',
    onPrimaryHover: 'brand-on-primary-hover',
    text: 'brand-text',
    textStrong: 'brand-text-strong',
  },
  accent: {
    blue: 'accent-blue',
  },
  text: {
    primary: 'text-primary',
    secondary: 'text-secondary',
    surface: 'text-surface',
    surfaceMuted: 'text-surface-muted',
    sidebar: 'text-sidebar',
    highlight: 'text-highlight',
    heading: 'text-heading',
    menuButton: 'text-menu-button',
    menuButtonHover: 'text-menu-button-hover',
    menuItem: 'text-menu-item',
    menuItemHover: 'text-menu-item-hover',
    menuActive: 'text-menu-active',
    menuOpen: 'text-menu-open',
    control: 'text-control',
    controlHover: 'text-control-hover',
    brand: 'text-brand',
    brandStrong: 'text-brand-strong',
    onBrand: 'text-on-brand',
    onBrandHover: 'text-on-brand-hover',
    onCallout: 'text-on-callout',
    onCalloutHover: 'text-on-callout-hover',
    icon: 'text-icon',
    tag: 'text-tag',
  },
  surface: {
    background: 'surface-background',
    sidebar: 'surface-sidebar',
    panel: 'surface-panel',
    control: 'surface-control',
    controlHover: 'surface-control-hover',
    interactiveHover: 'surface-interactive-hover',
    interactiveActive: 'surface-interactive-active',
    active: 'surface-active',
    open: 'surface-open',
    icon: 'surface-icon',
    tag: 'surface-tag',
  },
  border: {
    panel: 'border-panel',
    sidebar: 'border-sidebar',
    control: 'border-control',
    controlHover: 'border-control-hover',
    footer: 'border-footer',
    footerTop: 'border-footer-top',
    focus: 'border-focus',
  },
  gradient: {
    sidebarHighlight: 'gradient-sidebar-highlight',
    sidebarHighlightHover: 'gradient-sidebar-highlight-hover',
    callout: 'gradient-callout',
    calloutHover: 'gradient-callout-hover',
    divider: 'gradient-divider',
  },
  effect: {
    elevation: 'effect-elevation',
    focusRing: 'effect-focus-ring',
    sidebarHighlightShadow: 'effect-sidebar-highlight-shadow',
    sidebarActiveShadow: 'effect-sidebar-active-shadow',
    calloutShadow: 'effect-callout-shadow',
    calloutShadowHover: 'effect-callout-shadow-hover',
    accentShadow: 'effect-accent-shadow',
    brandShadow: 'effect-brand-shadow',
    brandShadowHover: 'effect-brand-shadow-hover',
  },
  neutral: {
    white: 'neutral-white',
    black: 'neutral-black',
  },
});

type PaletteFromContract<T> = {
  [K in keyof T]: T[K] extends string ? string : PaletteFromContract<T[K]>;
};

type Palette = PaletteFromContract<typeof colorVars>;

const darkPalette: Palette = {
  brand: {
    primary: '#9B1112',
    primaryHover: '#b71516',
    onPrimary: '#ffffff',
    onPrimaryHover: '#ffffff',
    text: '#9B1112',
    textStrong: '#5c0909',
  },
  accent: {
    blue: '#2563eb',
  },
  text: {
    primary: '#c9d1f3',
    secondary: '#95a3d8',
    surface: '#c9d1f3',
    surfaceMuted: '#95a3d8',
    sidebar: '#e4e8ff',
    highlight: '#ffffff',
    heading: '#ffffff',
    menuButton: '#c9d1f3',
    menuButtonHover: '#ffffff',
    menuItem: '#c9d1f3',
    menuItemHover: '#ffffff',
    menuActive: '#ffffff',
    menuOpen: '#f5f7ff',
    control: '#dce2ff',
    controlHover: '#ffffff',
    brand: '#9B1112',
    brandStrong: '#5c0909',
    onBrand: '#ffffff',
    onBrandHover: '#ffffff',
    onCallout: '#ffffff',
    onCalloutHover: '#ffffff',
    icon: '#95a3d8',
    tag: '#dfe4ff',
  },
  surface: {
    background: 'linear-gradient(180deg, #0a0f1c 0%, #070910 100%)',
    sidebar: 'linear-gradient(180deg, #0a0f1c 0%, #070910 100%)',
    panel: 'rgba(15, 21, 35, 0.92)',
    control: 'rgba(15, 21, 35, 0.92)',
    controlHover: 'rgba(39, 51, 86, 0.92)',
    interactiveHover: 'rgba(91, 114, 196, 0.16)',
    interactiveActive: 'rgba(91, 114, 196, 0.24)',
    active: 'rgba(96, 118, 210, 0.24)',
    open: 'rgba(92, 116, 201, 0.18)',
    icon: 'rgba(66, 80, 127, 0.26)',
    tag: 'rgba(116, 138, 255, 0.22)',
  },
  border: {
    panel: 'rgba(63, 77, 126, 0.55)',
    sidebar: 'rgba(62, 75, 120, 0.38)',
    control: 'rgba(63, 77, 126, 0.55)',
    controlHover: 'rgba(101, 126, 197, 0.75)',
    footer: 'rgba(62, 75, 120, 0.38)',
    footerTop: 'rgba(62, 75, 120, 0.38)',
    focus: 'rgba(120, 146, 255, 0.55)',
  },
  gradient: {
    sidebarHighlight:
      'linear-gradient(135deg, rgba(110, 135, 255, 0.28), rgba(68, 100, 238, 0.2))',
    sidebarHighlightHover:
      'linear-gradient(135deg, rgba(134, 159, 255, 0.36), rgba(92, 121, 255, 0.26))',
    callout:
      'linear-gradient(135deg, rgba(110, 135, 255, 0.28), rgba(68, 100, 238, 0.2))',
    calloutHover:
      'linear-gradient(135deg, rgba(134, 159, 255, 0.36), rgba(92, 121, 255, 0.26))',
    divider:
      'linear-gradient(90deg, rgba(74, 86, 133, 0) 0%, rgba(74, 86, 133, 0.65) 50%, rgba(74, 86, 133, 0) 100%)',
  },
  effect: {
    elevation: '0 12px 28px rgba(39, 58, 147, 0.35)',
    focusRing: '0 0 0 1px rgba(134, 159, 255, 0.35)',
    sidebarHighlightShadow: '0 12px 28px rgba(39, 58, 147, 0.35)',
    sidebarActiveShadow: '0 16px 32px rgba(52, 72, 168, 0.4)',
    calloutShadow: '0 12px 28px rgba(39, 58, 147, 0.35)',
    calloutShadowHover: '0 12px 28px rgba(39, 58, 147, 0.35)',
    accentShadow: '0 18px 32px rgba(37, 99, 235, 0.25)',
    brandShadow: '0 18px 36px rgba(155, 17, 18, 0.25)',
    brandShadowHover: '0 22px 40px rgba(155, 17, 18, 0.28)',
  },
  neutral: {
    white: '#ffffff',
    black: '#000000',
  },
};

const lightPalette: Palette = {
  brand: {
    primary: '#9B1112',
    primaryHover: '#b71516',
    onPrimary: '#E4E8FF',
    onPrimaryHover: '#5c0909',
    text: '#9B1112',
    textStrong: '#5c0909',
  },
  accent: {
    blue: '#2563eb',
  },
  text: {
    primary: '#1C1C1C',
    secondary: '#6C6C6C',
    surface: '#2f3762',
    surfaceMuted: '#5a6594',
    sidebar: '#2d3561',
    highlight: '#ffffff',
    heading: '#111633',
    menuButton: '#3c4574',
    menuButtonHover: '#141836',
    menuItem: '#3b4573',
    menuItemHover: '#111633',
    menuActive: '#1b2350',
    menuOpen: '#141836',
    control: '#2f3762',
    controlHover: '#111633',
    brand: '#9B1112',
    brandStrong: '#5c0909',
    onBrand: '#E4E8FF',
    onBrandHover: '#5c0909',
    onCallout: '#9B1112',
    onCalloutHover: '#5c0909',
    icon: '#5360a3',
    tag: '#1f2652',
  },
  surface: {
    background: 'linear-gradient(180deg, #ffffff 0%, #eef2ff 100%)',
    sidebar: 'linear-gradient(180deg, #f7f9ff 0%, #e8edff 100%)',
    panel:
      'linear-gradient(135deg, rgba(255, 255, 255, 0.94), rgba(236, 240, 255, 0.94))',
    control: 'rgba(244, 247, 255, 0.92)',
    controlHover: 'rgba(231, 237, 255, 0.96)',
    interactiveHover: 'rgba(150, 166, 237, 0.25)',
    interactiveActive: 'rgba(150, 166, 237, 0.35)',
    active: 'rgba(154, 172, 245, 0.24)',
    open: 'rgba(147, 167, 255, 0.24)',
    icon: 'rgba(153, 168, 226, 0.24)',
    tag: 'rgba(172, 185, 249, 0.34)',
  },
  border: {
    panel: 'rgba(184, 196, 233, 0.8)',
    sidebar: 'rgba(169, 181, 224, 0.7)',
    control: 'rgba(176, 189, 233, 0.75)',
    controlHover: 'rgba(148, 166, 233, 0.95)',
    footer: 'rgba(62, 75, 120, 0.38)',
    footerTop: 'rgba(184, 196, 233, 0.8)',
    focus: 'rgba(120, 146, 255, 0.55)',
  },
  gradient: {
    sidebarHighlight:
      'linear-gradient(135deg, rgba(143, 161, 245, 0.28), rgba(103, 133, 236, 0.18))',
    sidebarHighlightHover:
      'linear-gradient(135deg, rgba(165, 181, 248, 0.36), rgba(126, 153, 240, 0.24))',
    callout:
      'linear-gradient(135deg, rgba(155, 17, 18, 0.18), rgba(155, 17, 18, 0.12))',
    calloutHover:
      'linear-gradient(135deg, rgba(155, 17, 18, 0.24), rgba(155, 17, 18, 0.16))',
    divider:
      'linear-gradient(90deg, rgba(176, 189, 233, 0) 0%, rgba(176, 189, 233, 0.85) 50%, rgba(176, 189, 233, 0) 100%)',
  },
  effect: {
    elevation: '0 12px 28px rgba(159, 176, 231, 0.28)',
    focusRing: '0 0 0 1px rgba(150, 166, 237, 0.45)',
    sidebarHighlightShadow: '0 12px 28px rgba(120, 145, 226, 0.35)',
    sidebarActiveShadow: '0 16px 32px rgba(140, 160, 240, 0.28)',
    calloutShadow: '0 10px 22px rgba(155, 17, 18, 0.18)',
    calloutShadowHover: '0 10px 22px rgba(155, 17, 18, 0.18)',
    accentShadow: '0 18px 32px rgba(37, 99, 235, 0.25)',
    brandShadow: '0 18px 36px rgba(155, 17, 18, 0.25)',
    brandShadowHover: '0 22px 40px rgba(155, 17, 18, 0.28)',
  },
  neutral: {
    white: '#ffffff',
    black: '#000000',
  },
};

createGlobalTheme(':root', colorVars, darkPalette);
createGlobalTheme('.dark', colorVars, darkPalette);
createGlobalTheme('.light', colorVars, lightPalette);
