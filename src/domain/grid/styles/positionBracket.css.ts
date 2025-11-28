import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@shared/styles/token.css.ts';

const lineColor = vars.color.gridCardDivider;

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
});

export const positionValue = style({
  fontSize: '22px',
  fontWeight: 800,
  fontStyle: 'italic',
  letterSpacing: '0.08em',
  color: vars.color.gridCardAccent,
  textShadow: '0 10px 28px rgba(0, 0, 0, 0.32)',
});

const bracketBase = style({
  display: 'block',
  width: '126px',
  height: '28px',
  position: 'relative',
  color: lineColor,
});

export const bracket = styleVariants({
  left: [
    bracketBase,
    {
      borderTop: `2px solid ${lineColor}`,
      borderRight: `2px solid ${lineColor}`,
      borderTopRightRadius: '8px',
      borderLeft: 'none',
      borderBottom: 'none',
      marginInlineStart: '8px',
    },
  ],
  right: [
    bracketBase,
    {
      borderTop: `2px solid ${lineColor}`,
      borderLeft: `2px solid ${lineColor}`,
      borderTopLeftRadius: '8px',
      borderRight: 'none',
      borderBottom: 'none',
      marginInlineEnd: '8px',
    },
  ],
});
