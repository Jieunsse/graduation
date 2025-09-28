import { globalFontFace, globalStyle } from '@vanilla-extract/css';

globalFontFace('Teko', {
  src: "url('/src/shared/font/Teko-Regular.woff') format('woff')",
  fontWeight: 400,
  fontStyle: 'normal',
});

globalFontFace('Paperozi', {
  src: "url('https://cdn.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-1Thin.woff2') format('woff2')",
  fontWeight: 100,
  fontDisplay: 'swap',
});

globalFontFace('Paperozi', {
  src: "url('https://cdn.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-2ExtraLight.woff2') format('woff2')",
  fontWeight: 200,
  fontDisplay: 'swap',
});

globalFontFace('Paperozi', {
  src: "url('https://cdn.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-3Light.woff2') format('woff2')",
  fontWeight: 300,
  fontDisplay: 'swap',
});

globalFontFace('Paperozi', {
  src: "url('https://cdn.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-4Regular.woff2') format('woff2')",
  fontWeight: 400,
  fontDisplay: 'swap',
});

globalFontFace('Paperozi', {
  src: "url('https://cdn.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-5Medium.woff2') format('woff2')",
  fontWeight: 500,
  fontDisplay: 'swap',
});

globalFontFace('Paperozi', {
  src: "url('https://cdn.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-6SemiBold.woff2') format('woff2')",
  fontWeight: 600,
  fontDisplay: 'swap',
});

globalFontFace('Paperozi', {
  src: "url('https://cdn.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-7Bold.woff2') format('woff2')",
  fontWeight: 700,
  fontDisplay: 'swap',
});

globalFontFace('Paperozi', {
  src: "url('https://cdn.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-8ExtraBold.woff2') format('woff2')",
  fontWeight: 800,
  fontDisplay: 'swap',
});

globalFontFace('Paperozi', {
  src: "url('https://cdn.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-9Black.woff2') format('woff2')",
  fontWeight: 900,
  fontDisplay: 'swap',
});

globalStyle('html, body', {
  overflow: 'auto',
  scrollbarWidth: 'none', // Firefox
  msOverflowStyle: 'none', // IE/Edge
});

globalStyle('html::-webkit-scrollbar, body::-webkit-scrollbar', {
  display: 'none',
});
