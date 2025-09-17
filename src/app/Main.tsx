import { useState } from 'react';
import { Router } from '@app/routes/Router.tsx';
import { Theme } from '@radix-ui/themes';

export const Main = () => {
  const [appearance, setAppearance] = useState<'light' | 'dark'>('dark');

  return (
    <Theme accentColor="iris" appearance={appearance}>
      <Router appearance={appearance} setAppearance={setAppearance} />
    </Theme>
  );
};
