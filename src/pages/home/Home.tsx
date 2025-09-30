import React from 'react';
import { SideBar } from '@shared/ui/sidebar/SideBar.tsx';
import { Header } from '@shared/ui/header/Header.tsx';
import { Footer } from '@shared/ui/footer/Footer.tsx';
import { Hero } from '@src/components/hero/Hero.tsx';
import { MainContainer } from '@shared/layout/MainContainer.tsx';

interface HomeProps {
  appearance: 'light' | 'dark';
  setAppearance: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
}

export const Home = ({ appearance, setAppearance }: HomeProps) => {
  return (
    <MainContainer
      sidebar={<SideBar appearance={appearance} setAppearance={setAppearance} />}
    >
      <Header />
      <Hero />
      <Footer />
    </MainContainer>
  );
};
