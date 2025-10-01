import React from 'react';
import { Header } from '@shared/ui/header/Header.tsx';
import { SideBar } from '@shared/ui/sidebar/SideBar.tsx';
import { Footer } from '@shared/ui/footer/Footer.tsx';
import { MainContainer } from '@shared/layout/MainContainer.tsx';
import { CardContainer } from '@src/components/card/cardContainer/CardContainer.tsx';

interface RouterProps {
  appearance: 'light' | 'dark';
  setAppearance: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
}

export const CardPage = ({ appearance, setAppearance }: RouterProps) => {
  return (
    <MainContainer
      sidebar={
        <SideBar appearance={appearance} setAppearance={setAppearance} />
      }
    >
      <Header />
      <CardContainer />
      <Footer />
    </MainContainer>
  );
};
