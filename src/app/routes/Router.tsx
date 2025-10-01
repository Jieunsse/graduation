import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import { BoardPage } from '@src/domain/board/pages/BoardPage.tsx';
import { Home } from '@app/home/Home.tsx';
import { LoginPage } from '@domain/user/pages/login/LoginPage.tsx';
import { GuideGlossaryPage } from '@src/domain/ruleBook/pages/ruleBook/GuideGlossaryPage.tsx';
import { GuideDetailPage } from '@src/domain/ruleBook/pages/ruleBookDetail/GuideDetailPage.tsx';

interface RouterProps {
  appearance: 'light' | 'dark';
  setAppearance: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
}

export const Router = ({ appearance, setAppearance }: RouterProps) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home appearance={appearance} setAppearance={setAppearance} />
          }
        />
        <Route
          path="/board"
          element={
            <BoardPage appearance={appearance} setAppearance={setAppearance} />
          }
        />
        <Route
          path="/guide"
          element={
            <GuideGlossaryPage
              appearance={appearance}
              setAppearance={setAppearance}
            />
          }
        />
        <Route
          path="/guide/:slug"
          element={
            <GuideDetailPage
              appearance={appearance}
              setAppearance={setAppearance}
            />
          }
        />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};
