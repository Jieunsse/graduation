import { Header } from '@shared/ui/header/Header.tsx';
import { SideBar } from '@shared/ui/sidebar/SideBar.tsx';
import { MainContainer } from '@shared/layout/MainContainer.tsx';
import React from 'react';

interface NewsPageProps {
  appearance: 'light' | 'dark';
  setAppearance: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
}

export default function NewsPage({ appearance, setAppearance }: NewsPageProps) {
  return (
    <MainContainer
      sidebar={
        <SideBar appearance={appearance} setAppearance={setAppearance} />
      }
    >
      <Header />

      <div>F1관련해서 뉴스를 확인해보세요! 🗞️</div>
      <div>뉴스 제목</div>

      <div>
        <div>뉴스1</div>
        <div>뉴스2</div>
        <div>뉴스3</div>
        <div>뉴스4</div>
        <div>뉴스5</div>
        <div>뉴스6</div>
        <div>뉴스7</div>
        <div>뉴스8</div>
      </div>
    </MainContainer>
  );
}
