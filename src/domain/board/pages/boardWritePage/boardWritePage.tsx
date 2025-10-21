import React from 'react';
import { MainContainer } from '@shared/layout/MainContainer.tsx';
import { SideBar } from '@shared/ui/sidebar/SideBar.tsx';
import { Header } from '@shared/ui/header/Header.tsx';
import { Footer } from '@shared/ui/footer/Footer.tsx';
import { BoardWrite } from '../../components/boardWrite/boardWrite.tsx';
import * as styles from '../../styles/boardWritePage.css.ts';

interface BoardWritePageProps {
  appearance: 'light' | 'dark';
  setAppearance: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
}

export const BoardWritePage = ({
  appearance,
  setAppearance,
}: BoardWritePageProps) => {
  return (
    <MainContainer
      sidebar={
        <SideBar appearance={appearance} setAppearance={setAppearance} />
      }
    >
      <Header />
      <div className={styles.page}>
        <h1 className={styles.title}>게시글 작성하기</h1>
        <BoardWrite />
      </div>
      <Footer />
    </MainContainer>
  );
};
