import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'normalize.css';
import { Router } from '@app/routes/Router.tsx';
import '@radix-ui/themes/styles.css';
import { Theme, ThemePanel } from '@radix-ui/themes';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme accentColor="iris">
      <Router />
      <ThemePanel />
    </Theme>
  </StrictMode>
);
