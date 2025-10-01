import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Main } from '@app/main/Main.tsx';
import '@shared/styles/reset.css.ts';
import '@shared/styles/global.css.ts';
import '@radix-ui/themes/styles.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Main />
  </StrictMode>
);
