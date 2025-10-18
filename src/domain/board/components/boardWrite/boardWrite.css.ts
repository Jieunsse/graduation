import { globalStyle, style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 28,
  padding: '32px 36px',
  borderRadius: 20,
  background: 'rgba(10, 15, 28, 0.82)',
  border: '1px solid rgba(63, 77, 126, 0.45)',
  boxShadow: '0 18px 42px rgba(9, 12, 24, 0.42)',
  backdropFilter: 'blur(14px)',
});

export const header = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
});

export const headerTitle = style({
  margin: 0,
  fontSize: 22,
  fontWeight: 700,
  color: 'rgba(231, 235, 255, 0.95)',
});

export const headerDescription = style({
  margin: 0,
  fontSize: 14,
  lineHeight: 1.6,
  color: 'rgba(221, 227, 255, 0.72)',
});

export const form = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
});

export const field = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
});

export const label = style({
  fontSize: 15,
  fontWeight: 600,
  color: 'rgba(221, 227, 255, 0.88)',
});

export const input = style({
  width: '100%',
});

globalStyle(`.${input} input`, {
  width: '100%',
  padding: '12px 16px',
  borderRadius: 12,
  border: '1px solid rgba(91, 114, 196, 0.4)',
  background: 'rgba(8, 12, 23, 0.75)',
  color: '#f1f4ff',
  fontSize: 14,
  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  outline: 'none',
});

globalStyle(`.${input} input::placeholder`, {
  color: 'rgba(200, 206, 240, 0.55)',
});

globalStyle(`.${input} input:focus`, {
  borderColor: 'rgba(134, 159, 255, 0.9)',
  boxShadow: '0 0 0 3px rgba(134, 159, 255, 0.22)',
});

export const textarea = style({
  width: '100%',
});

globalStyle(`.${textarea} textarea`, {
  width: '100%',
  minHeight: 220,
  padding: '16px',
  borderRadius: 14,
  border: '1px solid rgba(91, 114, 196, 0.4)',
  background: 'rgba(8, 12, 23, 0.75)',
  color: '#f1f4ff',
  fontSize: 14,
  lineHeight: 1.6,
  resize: 'vertical',
  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  outline: 'none',
});

globalStyle(`.${textarea} textarea::placeholder`, {
  color: 'rgba(200, 206, 240, 0.55)',
});

globalStyle(`.${textarea} textarea:focus`, {
  borderColor: 'rgba(134, 159, 255, 0.9)',
  boxShadow: '0 0 0 3px rgba(134, 159, 255, 0.22)',
});

export const error = style({
  fontSize: 13,
  color: 'rgba(255, 140, 148, 0.9)',
});

export const actions = style({
  display: 'flex',
  justifyContent: 'flex-end',
});

export const submitButton = style({
  borderRadius: 12,
  padding: '12px 32px',
  background: 'rgba(91, 114, 196, 0.82)',
  color: '#0a0f1c',
  fontSize: 15,
  fontWeight: 600,
  border: 'none',
  transition: 'background 0.2s ease, transform 0.2s ease',
});

globalStyle(`.${submitButton}:hover:not([data-disabled])`, {
  background: 'rgba(134, 159, 255, 0.9)',
  transform: 'translateY(-1px)',
});

globalStyle(`.${submitButton}[data-disabled]`, {
  background: 'rgba(91, 114, 196, 0.35)',
  color: 'rgba(12, 16, 28, 0.65)',
  cursor: 'not-allowed',
  transform: 'none',
});

globalStyle(`.light .${container}`, {
  background: 'rgba(255, 255, 255, 0.9)',
  border: '1px solid rgba(208, 214, 255, 0.6)',
  boxShadow: '0 18px 42px rgba(15, 23, 60, 0.12)',
});

globalStyle(`.light .${headerTitle}`, {
  color: 'rgba(10, 15, 28, 0.9)',
});

globalStyle(`.light .${headerDescription}`, {
  color: 'rgba(24, 31, 60, 0.65)',
});

globalStyle(`.light .${label}`, {
  color: 'rgba(24, 31, 60, 0.85)',
});

globalStyle(`.light .${input} input`, {
  background: 'rgba(255, 255, 255, 0.95)',
  color: 'rgba(24, 31, 60, 0.92)',
  border: '1px solid rgba(159, 178, 255, 0.6)',
});

globalStyle(`.light .${input} input::placeholder`, {
  color: 'rgba(110, 126, 180, 0.6)',
});

globalStyle(`.light .${textarea} textarea`, {
  background: 'rgba(255, 255, 255, 0.95)',
  color: 'rgba(24, 31, 60, 0.92)',
  border: '1px solid rgba(159, 178, 255, 0.6)',
});

globalStyle(`.light .${textarea} textarea::placeholder`, {
  color: 'rgba(110, 126, 180, 0.6)',
});

globalStyle(`.light .${submitButton}`, {
  background: 'rgba(91, 114, 196, 0.88)',
  color: '#ffffff',
});

globalStyle(`.light .${submitButton}[data-disabled]`, {
  background: 'rgba(91, 114, 196, 0.4)',
  color: 'rgba(255, 255, 255, 0.7)',
});
