import { createVar, style } from '@vanilla-extract/css';
import { colorVars } from '@shared/styles/color.css.ts';

export const axisColorVar = createVar();
export const gridColorVar = createVar();
export const tooltipBgVar = createVar();
export const tooltipTextVar = createVar();

export const chartCard = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  padding: '28px 24px 32px',
  borderRadius: 28,
  background: colorVars.surface.panel,
  border: `1px solid ${colorVars.border.panel}`,
  boxShadow: colorVars.effect.elevation,
  color: colorVars.text.surface,
  vars: {
    [axisColorVar]: 'rgba(230, 236, 255, 0.92)',
    [gridColorVar]: 'rgba(230, 236, 255, 0.18)',
    [tooltipBgVar]: 'rgba(16, 22, 35, 0.92)',
    [tooltipTextVar]: 'rgba(236, 240, 255, 0.95)',
  },
  selectors: {
    ":root[data-theme='light'] &": {
      color: colorVars.text.primary,
      vars: {
        [axisColorVar]: 'rgba(24, 31, 55, 0.78)',
        [gridColorVar]: 'rgba(24, 31, 55, 0.14)',
        [tooltipBgVar]: 'rgba(246, 248, 255, 0.94)',
        [tooltipTextVar]: 'rgba(18, 26, 42, 0.92)',
      },
      boxShadow: '0 12px 26px rgba(82, 94, 164, 0.16)',
    },
  },
});

export const chartTitle = style({
  margin: 0,
  fontSize: 22,
  fontWeight: 700,
  letterSpacing: '-0.01em',
});

export const chartSubtitle = style({
  margin: 0,
  fontSize: 14,
  color: colorVars.text.secondary,
});

export const header = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
});

export const legend = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 12,
  fontSize: 13,
  color: colorVars.text.secondary,
});

export const chartArea = style({
  width: '100%',
  height: 360,
});

export const tooltip = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
  padding: '12px 16px',
  borderRadius: 16,
  background: `var(${tooltipBgVar})`,
  color: `var(${tooltipTextVar})`,
  boxShadow: colorVars.effect.elevation,
});

export const tooltipTitle = style({
  fontSize: 14,
  fontWeight: 600,
  margin: 0,
});

export const tooltipStat = style({
  display: 'flex',
  justifyContent: 'space-between',
  gap: 16,
  fontSize: 13,
});

