import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@shared/styles/token.css.ts';

const frameBorderColor = vars.color.gridCardDivider;

const containerBase = style({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
});

export const container = styleVariants({
  left: [
    containerBase,
    {
      '@media': {
        '(min-width: 840px)': {
          justifyContent: 'flex-start',
        },
      },
    },
  ],
  right: [
    containerBase,
    {
      '@media': {
        '(min-width: 840px)': {
          justifyContent: 'flex-end',
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
  position: 'absolute',
  top: '-18px',
  left: '50%',
  transform: 'translateX(-50%)',
  padding: '6px 12px',
  borderRadius: '999px',
  background: vars.color.gridCardBg,
  boxShadow: '0 10px 24px rgba(0, 0, 0, 0.28)',
});

export const frame = style({
  position: 'relative',
  width: 'min(100%, 420px)',
  borderTop: `2px solid ${frameBorderColor}`,
  borderLeft: `2px solid ${frameBorderColor}`,
  borderRight: `2px solid ${frameBorderColor}`,
  borderTopLeftRadius: '18px',
  borderTopRightRadius: '18px',
  padding: '32px 28px 40px',
  background:
    'radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.04), transparent 45%), rgba(0, 0, 0, 0.0)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const frameInner = style({
  width: '100%',
  maxWidth: '360px',
  display: 'flex',
  justifyContent: 'center',
  paddingInline: '4px',
});
