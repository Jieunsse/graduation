import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Router } from '@app/routes/Router.tsx';
import { Theme } from '@radix-ui/themes';

export const Main = () => {
  const [appearance, setAppearance] = useState<'light' | 'dark'>('light');
  const [queryClient] = useState(() => new QueryClient());

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(appearance);
  }, [appearance]);

  return (
    <QueryClientProvider client={queryClient}>
      <Theme accentColor="iris" appearance={appearance}>
        <Router appearance={appearance} setAppearance={setAppearance} />
      </Theme>
    </QueryClientProvider>
  );
};
