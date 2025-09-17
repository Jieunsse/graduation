import { SideBar } from '@shared/ui/sidebar/SideBar.tsx';
import React from 'react';
import { Header } from '@shared/ui/header/Header.tsx';
import { Footer } from '@shared/ui/footer/Footer.tsx';
import { CardContainer } from '@shared/ui/cardContainer/CardContainer.tsx';
import styles from './Test.module.css';

interface TestProps {
  appearance: 'light' | 'dark';
  setAppearance: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
}

export const Test = ({ appearance, setAppearance }: TestProps) => {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <SideBar appearance={appearance} setAppearance={setAppearance} />
        <section className={styles.content}>
          <CardContainer />
        </section>
      </main>
      <Footer />
    </div>
  );
};
