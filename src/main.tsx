import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Main } from '@app/Main.tsx';
import 'normalize.css';
import '@radix-ui/themes/styles.css';
import '@shared/styles/global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Main />
  </StrictMode>
);
