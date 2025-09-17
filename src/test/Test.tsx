import { SideBar } from '@shared/ui/sidebar/SideBar.tsx';
import React from 'react';

interface TestProps {
  appearance: 'light' | 'dark';
  setAppearance: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
}

export const Test = ({ appearance, setAppearance }: TestProps) => {
  return <SideBar appearance={appearance} setAppearance={setAppearance} />;
};
