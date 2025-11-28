import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@shared/styles/token.css.ts';

const frameBorderColor = vars.color.gridCardDivider;

const containerBase = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  width: '100%',
  maxWidth: '440px',
  alignItems: 'center',
});

export const container = styleVariants({
  left: [
    containerBase,
    {
      '@media': {
        '(min-width: 840px)': {
          alignItems: 'flex-start',
          justifySelf: 'start',
        },
      },
    },
  ],
  right: [
    containerBase,
    {
      '@media': {
        '(min-width: 840px)': {
          alignItems: 'flex-end',
          justifySelf: 'end',
        },
      },
    },
  ],
});

export const positionLabel = style({
  fontSize: '22px',
  fontWeight: 800,
  fontStyle: 'italic',
  letterSpacing: '0.08em',
  color: vars.color.gridCardAccent,
  textShadow: '0 10px 28px rgba(0, 0, 0, 0.32)',
});

export const frame = style({
  width: '100%',
  borderTop: `2px solid ${frameBorderColor}`,
  borderLeft: `2px solid ${frameBorderColor}`,
  borderRight: `2px solid ${frameBorderColor}`,
  borderTopLeftRadius: '18px',
  borderTopRightRadius: '18px',
  padding: '22px 22px 26px',
  background:
    'radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.04), transparent 45%), rgba(0, 0, 0, 0.0)',
});

export const frameInner = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
});
