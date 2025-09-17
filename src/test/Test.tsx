import { SideBar } from '@shared/ui/sidebar/SideBar.tsx';
import React from 'react';
import { Header } from '@shared/ui/header/Header.tsx';
import { Footer } from '@shared/ui/footer/Footer.tsx';
import { CardContainer } from '@shared/ui/cardContainer/CardContainer.tsx';

interface TestProps {
  appearance: 'light' | 'dark';
  setAppearance: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
}

export const Test = ({ appearance, setAppearance }: TestProps) => {
  return (
    <>
      <Header />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <SideBar appearance={appearance} setAppearance={setAppearance} />
        <CardContainer />
      </div>
      <Footer />
    </>
  );
};
