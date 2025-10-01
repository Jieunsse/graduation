import React from 'react';
import { SideBar } from '@shared/ui/sidebar/SideBar.tsx';
import { Header } from '@shared/ui/header/Header.tsx';
import { Footer } from '@shared/ui/footer/Footer.tsx';
import { MainContainer } from '@shared/layout/MainContainer.tsx';
import { CardContainer } from '@src/domain/ruleBook/components/card/cardContainer/CardContainer.tsx';

interface TestProps {
  appearance: 'light' | 'dark';
  setAppearance: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
}

export const Test = ({ appearance, setAppearance }: TestProps) => {
  return (
    <>
      <MainContainer
        sidebar={
          <SideBar appearance={appearance} setAppearance={setAppearance} />
        }
      >
        <Header />
        <CardContainer />
        <Footer />
      </MainContainer>
    </>
  );
};
