import { globalStyle, style } from '@vanilla-extract/css';

export const pageWrapper = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: 32,
  paddingTop: 104,
  paddingBottom: 120,
});

export const page = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 32,
});

export const backButton = style({
  alignSelf: 'flex-start',
  display: 'inline-flex',
  alignItems: 'center',
  gap: 10,
  padding: '10px 18px',
  borderRadius: 999,
  border: '1px solid rgba(91, 114, 196, 0.45)',
  background: 'rgba(12, 16, 28, 0.65)',
  color: 'rgba(221, 227, 255, 0.85)',
  fontSize: 13,
  fontWeight: 500,
  letterSpacing: '0.04em',
  textDecoration: 'none',
  cursor: 'pointer',
  transition:
    'background 0.2s ease, transform 0.2s ease, border-color 0.2s ease',
  ':hover': {
    background: 'rgba(35, 45, 82, 0.75)',
    borderColor: 'rgba(134, 159, 255, 0.65)',
    transform: 'translateY(-1px)',
  },
  ':focus-visible': {
    outline: '2px solid rgba(134, 159, 255, 0.8)',
    outlineOffset: 2,
  },
});

export const hero = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  padding: '36px 40px',
  borderRadius: 20,
  background:
    'linear-gradient(135deg, rgba(17, 24, 45, 0.94), rgba(49, 76, 158, 0.78))',
  border: '1px solid rgba(91, 114, 196, 0.45)',
  boxShadow: '0 24px 48px rgba(9, 14, 28, 0.45)',
  position: 'relative',
  overflow: 'hidden',
});

export const heroHeader = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
});

export const heroCategory = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  fontSize: 12,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: 'rgba(221, 227, 255, 0.75)',
});

export const heroTitle = style({
  margin: 0,
  fontSize: 32,
  fontWeight: 700,
  color: 'rgba(221, 227, 255, 0.92)',
  lineHeight: 1.3,
});

export const heroMeta = style({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: 14,
  fontSize: 13,
  color: 'rgba(221, 227, 255, 0.72)',
});

export const heroMetaItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: 6,
});

export const tagGroup = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 8,
});

export const tag = style({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '6px 12px',
  borderRadius: 999,
  background: 'rgba(15, 25, 54, 0.55)',
  color: 'rgba(221, 227, 255, 0.85)',
  fontSize: 12,
  letterSpacing: '0.04em',
});

export const statGroup = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 12,
});

export const statPill = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  padding: '10px 14px',
  borderRadius: 12,
  background: 'rgba(12, 16, 28, 0.45)',
  color: 'rgba(221, 227, 255, 0.85)',
  fontSize: 13,
});

export const contentSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  padding: '32px 36px',
  borderRadius: 20,
  background: 'rgba(10, 15, 28, 0.82)',
  border: '1px solid rgba(63, 77, 126, 0.45)',
  boxShadow: '0 18px 42px rgba(9, 12, 24, 0.42)',
  backdropFilter: 'blur(14px)',
});

export const contentHeading = style({
  margin: 0,
  fontSize: 20,
  fontWeight: 600,
  color: '#f8f9ff',
});

export const paragraph = style({
  margin: 0,
  color: 'rgba(221, 227, 255, 0.88)',
  fontSize: 15,
  wordBreak: 'keep-all',
});

export const divider = style({
  width: '100%',
  height: 1,
  background: 'rgba(63, 77, 126, 0.35)',
});

export const commentSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  padding: '32px 36px',
  borderRadius: 20,
  background: 'rgba(10, 15, 28, 0.82)',
  border: '1px solid rgba(63, 77, 126, 0.45)',
  boxShadow: '0 18px 42px rgba(9, 12, 24, 0.42)',
  backdropFilter: 'blur(14px)',
});

export const commentHeader = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
});

export const commentTitle = style({
  margin: 0,
  fontSize: 18,
  fontWeight: 600,
  color: '#f8f9ff',
});

export const commentSubtitle = style({
  margin: 0,
  fontSize: 12,
  color: 'rgba(221, 227, 255, 0.72)',
});

export const commentForm = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
});

export const commentTextArea = style({
  width: '100%',
  minHeight: 120,
  padding: '12px',
  boxSizing: 'border-box',
  borderRadius: 14,
  border: '1px solid rgba(91, 114, 196, 0.4)',
  background: 'rgba(8, 12, 23, 0.75)',
  color: '#f1f4ff',
  fontSize: 14,
  lineHeight: 1.6,
  resize: 'vertical',
  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  selectors: {
    '&::placeholder': {
      color: 'rgba(200, 206, 240, 0.55)',
    },
    '&:focus': {
      borderColor: 'rgba(134, 159, 255, 0.9)',
      boxShadow: '0 0 0 3px rgba(134, 159, 255, 0.22)',
      outline: 'none',
    },
  },
});

export const commentActions = style({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: 16,
  flexWrap: 'wrap',
});

export const commentHelper = style({
  fontSize: 13,
  color: 'rgba(221, 227, 255, 0.6)',
});

export const commentSubmit = style({
  border: 'none',
  borderRadius: 12,
  padding: '12px 24px',
  background: 'rgba(91, 114, 196, 0.75)',
  color: '#0a0f1c',
  fontWeight: 600,
  fontSize: 14,
  cursor: 'pointer',
  transition: 'background 0.2s ease, transform 0.2s ease',
  ':hover': {
    background: 'rgba(134, 159, 255, 0.85)',
    transform: 'translateY(-1px)',
  },
  ':disabled': {
    background: 'rgba(91, 114, 196, 0.35)',
    color: 'rgba(12, 16, 28, 0.65)',
    cursor: 'not-allowed',
    transform: 'none',
  },
});

export const commentList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 18,
});

export const commentItem = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  padding: '18px 20px',
  borderRadius: 14,
  background: 'rgba(14, 20, 36, 0.72)',
  border: '1px solid rgba(63, 77, 126, 0.35)',
});

export const commentMeta = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 12,
  fontSize: 13,
  color: 'rgba(221, 227, 255, 0.72)',
});

export const commentAuthor = style({
  fontWeight: 600,
});

export const commentBody = style({
  margin: 0,
  fontSize: 14,
  lineHeight: 1.6,
  color: 'rgba(221, 227, 255, 0.85)',
  whiteSpace: 'pre-wrap',
});

export const emptyComment = style({
  padding: '24px 20px',
  textAlign: 'center',
  color: 'rgba(221, 227, 255, 0.6)',
  fontSize: 14,
  borderRadius: 12,
  border: '1px dashed rgba(91, 114, 196, 0.4)',
  background: 'rgba(14, 20, 36, 0.5)',
});

export const emptyState = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 16,
  padding: '120px 32px',
  borderRadius: 20,
  background: 'rgba(10, 15, 28, 0.82)',
  border: '1px solid rgba(63, 77, 126, 0.45)',
  boxShadow: '0 18px 42px rgba(9, 12, 24, 0.42)',
  backdropFilter: 'blur(14px)',
  textAlign: 'center',
});

export const emptyTitle = style({
  margin: 0,
  fontSize: 22,
  fontWeight: 600,
  color: '#f8f9ff',
});

export const emptyMessage = style({
  margin: 0,
  maxWidth: 420,
  color: 'rgba(221, 227, 255, 0.72)',
  fontSize: 15,
  lineHeight: 1.6,
});

export const emptyAction = style([
  backButton,
  {
    marginTop: 8,
    alignSelf: 'center',
  },
]);

// Light mode overrides

globalStyle(`.${heroMetaItem} strong`, {
  fontWeight: 600,
  color: '#f8f9ff',
});

globalStyle(`.light .${pageWrapper}`, {
  backgroundColor: 'transparent',
});

globalStyle(`.light .${backButton}`, {
  background: 'rgba(255, 255, 255, 0.92)',
  borderColor: 'rgba(184, 196, 233, 0.7)',
  color: '#1b2350',
});

globalStyle(`.light .${backButton}:hover`, {
  background: 'rgba(211, 219, 255, 0.88)',
});

globalStyle(`.light .${hero}`, {
  background:
    'linear-gradient(135deg, rgba(255, 255, 255, 0.96), rgba(236, 240, 255, 0.92))',
  border: '1px solid rgba(184, 196, 233, 0.75)',
  boxShadow: '0 18px 40px rgba(159, 176, 231, 0.28)',
});

globalStyle(`.light .${heroTitle}`, {
  color: '#111633',
});

globalStyle(`.light .${heroMeta}`, {
  color: 'rgba(46, 53, 82, 0.68)',
});

globalStyle(`.light .${heroMetaItem} strong`, {
  color: '#111633',
});

globalStyle(`.light .${heroCategory}`, {
  color: 'rgba(46, 53, 82, 0.68)',
});

globalStyle(`.light .${tag}`, {
  background: 'rgba(211, 219, 255, 0.75)',
  color: '#1b2350',
});

globalStyle(`.light .${statPill}`, {
  background: 'rgba(235, 239, 255, 0.8)',
  color: 'rgba(27, 35, 80, 0.75)',
});

globalStyle(`.light .${contentSection}`, {
  background: 'rgba(248, 250, 255, 0.9)',
  borderColor: 'rgba(184, 196, 233, 0.75)',
  boxShadow: '0 18px 32px rgba(159, 176, 231, 0.25)',
});

globalStyle(`.light .${contentHeading}`, {
  color: '#111633',
});

globalStyle(`.light .${paragraph}`, {
  color: 'rgba(27, 35, 80, 0.82)',
});

globalStyle(`.light .${divider}`, {
  background: 'rgba(184, 196, 233, 0.6)',
});

globalStyle(`.light .${commentSection}`, {
  background: 'rgba(248, 250, 255, 0.9)',
  borderColor: 'rgba(184, 196, 233, 0.75)',
  boxShadow: '0 18px 32px rgba(159, 176, 231, 0.25)',
});

globalStyle(`.light .${commentTitle}`, {
  color: '#111633',
});

globalStyle(`.light .${commentSubtitle}`, {
  color: 'rgba(46, 53, 82, 0.68)',
});

globalStyle(`.light .${commentTextArea}`, {
  background: '#ffffff',
  color: '#1b2350',
});

globalStyle(`.light .${commentTextArea}::placeholder`, {
  color: 'rgba(46, 53, 82, 0.45)',
});

globalStyle(`.light .${commentHelper}`, {
  color: 'rgba(46, 53, 82, 0.6)',
});

globalStyle(`.light .${commentSubmit}`, {
  color: '#ffffff',
});

globalStyle(`.light .${commentItem}`, {
  background: 'rgba(235, 239, 255, 0.82)',
  borderColor: 'rgba(184, 196, 233, 0.6)',
});

globalStyle(`.light .${commentMeta}`, {
  color: 'rgba(46, 53, 82, 0.68)',
});

globalStyle(`.light .${commentBody}`, {
  color: 'rgba(27, 35, 80, 0.8)',
});

globalStyle(`.light .${emptyComment}`, {
  background: 'rgba(235, 239, 255, 0.72)',
  borderColor: 'rgba(184, 196, 233, 0.6)',
  color: 'rgba(46, 53, 82, 0.6)',
});

globalStyle(`.light .${emptyState}`, {
  background: 'rgba(248, 250, 255, 0.9)',
  borderColor: 'rgba(184, 196, 233, 0.75)',
  boxShadow: '0 18px 32px rgba(159, 176, 231, 0.25)',
});

globalStyle(`.light .${emptyTitle}`, {
  color: '#111633',
});

globalStyle(`.light .${emptyMessage}`, {
  color: 'rgba(27, 35, 80, 0.72)',
});
