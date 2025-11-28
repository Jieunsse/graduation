import { style } from '@vanilla-extract/css';
import { colorVars } from '@shared/styles/color.css.ts';

export const wrapper = style({
  borderTop: '2px solid currentColor',
  borderLeft: '2px solid currentColor',
  borderRight: '2px solid currentColor',
  padding: '20px',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  color: colorVars.text.heading,
});

export const positionNumber = style({
  position: 'absolute',
  top: '-16px',
  left: '50%',
  transform: 'translateX(-50%)',
  fontWeight: 800,
  fontSize: '16px',
  background: colorVars.surface.panel,
  padding: '4px 10px',
  borderRadius: '999px',
  boxShadow: colorVars.effect.elevation,
});
