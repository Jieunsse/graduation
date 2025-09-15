import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'normalize.css';
import { Router } from '@app/routes/Router.tsx';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import '@shared/styles/global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme accentColor="iris" appearance="dark">
      <Router />
    </Theme>
  </StrictMode>
);
